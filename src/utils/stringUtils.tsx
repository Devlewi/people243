export const truncateTitle = (title: string, maxWords: number, replaceLastChars: boolean = false): string => {
    if (!title) return "";
  
    if (replaceLastChars && title.length > 3) {
      return title.slice(0, -3) + "...";
    }
  
    const words = title.split(" ");
    return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : title;
  };
  