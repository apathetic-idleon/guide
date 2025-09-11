// List of files and directories to copy into dist-site-repo

export type FileEntry = string | { src: string; dest: string };

export const files: FileEntry[] = [
  ".gitignore",
  "CODE_OF_CONDUCT.md",
  "CONTENT-LICENSE",
  "NOAI-CONTENT-LICENSE",
  "NOTICE",
  { src: "README-SITE-REPO.md", dest: "README.md" },
];
