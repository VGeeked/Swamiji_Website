export type NewsletterIssue = {
  number: number;
  title: string;
  file: string;
};

// PDFs live in public/newsletters/ (issue-1.pdf ... issue-N.pdf).
// To add a new issue: drop issue-{N}.pdf in that folder, bump ISSUE_COUNT, push.
export const ISSUE_COUNT = 10;

// Latest issue first.
export const newsletterIssues: NewsletterIssue[] = Array.from(
  { length: ISSUE_COUNT },
  (_, i) => ISSUE_COUNT - i
).map((n) => ({
  number: n,
  title: `NEWSLETTER YOGTANTRA AGAMA | Issue ${n}`,
  file: `/newsletters/issue-${n}.pdf`,
}));
