type SkeletonProps = {
  length: number;
  columns: number;
};

export const Skeleton = ({ length, columns }: SkeletonProps) => (
  <tbody>
    {Array.from({ length }, (_, rowIndex) => (
      <tr key={rowIndex}>
        {Array.from({ length: columns }, (_, colIndex) => (
          <td key={colIndex} className="border-t border-gray-300 px-4 py-3">
            <div className="h-4 animate-pulse rounded bg-gray-200" />
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
