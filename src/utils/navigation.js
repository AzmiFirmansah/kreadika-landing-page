export function handleNavClick(e, path, onNavigate) {
  if (!onNavigate || !path) return;

  if (path.startsWith("/")) {
    e.preventDefault();
    onNavigate(path);
    return;
  }

  if (path.includes("kreadika.id")) {
    const localPath = path.replace(/https?:\/\/(www\.)?kreadika\.id/, "");
    if (localPath.startsWith("/")) {
      e.preventDefault();
      onNavigate(localPath);
    }
  }
}
