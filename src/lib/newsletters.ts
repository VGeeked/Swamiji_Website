export type NewsletterIssue = {
  number: number;
  title: string;
  file: string;
};

// Issue numbers that have a PDF in public/newsletters/ (issue-{n}.pdf).
// Gaps are intentional — issues 15 and 26 are not yet available.
// To add an issue: drop issue-{n}.pdf in that folder and add its number here.
const ISSUE_NUMBERS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 27, 28, 29, 30,
];

// Latest issue first.
export const newsletterIssues: NewsletterIssue[] = [...ISSUE_NUMBERS]
  .sort((a, b) => b - a)
  .map((n) => ({
    number: n,
    title: `NEWSLETTER YOGTANTRA AGAMA | Issue ${n}`,
    file: `/newsletters/issue-${n}.pdf`,
  }));
