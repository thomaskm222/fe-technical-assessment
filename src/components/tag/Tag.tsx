const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-fit flex-row gap-2 items-center border border-gray-200 rounded-full px-2 py-1">
      {children}
    </div>
  );
};

export const Tag = ({ tags }: { tags: { name: string; color: string }[] }) => {
  if (tags.length === 0) {
    return (
      <Pill>
        <button className="inline-flex items-center text-xs text-gray-500 hover:text-gray-700">
          + Add Tag
        </button>
      </Pill>
    );
  }

  if (tags.length === 1) {
    return (
      <Pill>
        <div
          className="size-2 rounded-sm"
          style={{ backgroundColor: tags[0].color }}
        />
        <span className="text-xs font-semibold capitalize">{tags[0].name}</span>
      </Pill>
    );
  }

  return (
    <Pill>
      <div className="flex flex-row gap-1">
        {tags.slice(0, 2).map((tag, index) => (
          <div
            key={index}
            className="size-2 rounded-sm"
            style={{ backgroundColor: tag.color }}
          />
        ))}
      </div>
      <span className="text-xs font-semibold">{tags.length} tags</span>
    </Pill>
  );
};
