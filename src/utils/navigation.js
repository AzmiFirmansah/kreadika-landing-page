export function handleNavClick(e, path, onNavigate) {
  if (!onNavigate || !path) return;

  if (path.startsWith("/")) {
    e.preventDefault();
    onNavigate(path);
    return;
  }

  if (path.includes("kreadika.vercel.app")) {
    const localPath = path.replace(/https?:\/\/kreadika\.vercel\.app/, "");
    if (localPath.startsWith("/") || localPath === "") {
      e.preventDefault();
      onNavigate(localPath || "/");
    }
  }
}
