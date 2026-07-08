export function isActiveNav(href: string, currentPath: string): boolean {
  if (href.startsWith('/#')) return false;
  if (href === '/') return currentPath === '/';
  return currentPath === href || currentPath.startsWith(`${href}/`);
}
