import React, { useMemo, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type SeatType = 12 | 22 | 23;

type SeatBusProps = {
  type: SeatType;
  totalSeat: number;
  disabledSeats?: number[];
  onChange?: (selected: number[]) => void;
};

export const SeatBus: React.FC<SeatBusProps> = ({
  type,
  totalSeat,
  disabledSeats = [],
  onChange,
}) => {
  const [selected, setSelected] = useState<number[]>([]);

  const layout = {
    12: { left: 1, right: 2, size: 44 },
    22: { left: 2, right: 2, size: 44 },
    23: { left: 2, right: 3, size: 44 },
  }[type];

  const colsPerRow = layout.left + layout.right;

  /* FIXED: sequential seat numbers */
  const seats = useMemo(
    () => Array.from({ length: totalSeat }, (_, i) => i + 1),
    [totalSeat]
  );

  const toggleSeat = (seat: number) => {
    if (disabledSeats.includes(seat)) return;

    const updated = selected.includes(seat)
      ? selected.filter((s) => s !== seat)
      : [...selected, seat];

    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <View>
      {chunk(seats, colsPerRow).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {/* LEFT SIDE */}
          {row.slice(0, layout.left).map((seat) =>
            renderSeat(seat, layout.size, selected, disabledSeats, toggleSeat)
          )}

          {/* AISLE */}
          <View style={styles.aisle} />

          {/* RIGHT SIDE */}
          {row.slice(layout.left).map((seat) =>
            renderSeat(seat, layout.size, selected, disabledSeats, toggleSeat)
          )}
        </View>
      ))}
    </View>
  );
};

/* ---------------- helpers ---------------- */

function renderSeat(
  seat: number,
  size: number,
  selected: number[],
  disabled: number[],
  onPress: (s: number) => void
) {
  const isSelected = selected.includes(seat);
  const isDisabled = disabled.includes(seat);

  return (
    <Pressable
      className="bg-cyan-600"
      key={seat}
      onPress={() => onPress(seat)}
      style={[
        styles.seat,
        {
          width: size,
          height: size,
          backgroundColor: isDisabled
            ? "#c9c9c9"
            : isSelected
            ? "#a5f3fc"
            : "#ffffff",
          borderWidth: (!isSelected || isDisabled) ? 1 : 2,
          borderColor: (!isSelected || isDisabled)  ? "#c9c9c9" : "#0891b2" 
        },
      ]}
    >
      <Text style={[
        styles.label,
        {
         color: (!isSelected || isDisabled) ? "" : "#0e7490",
         fontWeight: (!isSelected || isDisabled) ? 400 : 900,
        }
      ]}>{seat}</Text>
    </Pressable>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

/* ---------------- styles ---------------- */

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  aisle: {
    width: 24,
  },
  seat: {
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
  },
});
