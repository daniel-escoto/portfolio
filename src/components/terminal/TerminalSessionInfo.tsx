interface TerminalSessionInfoProps {
  loginTimestamp: string;
}

export const TerminalSessionInfo = ({ loginTimestamp }: TerminalSessionInfoProps) => (
  <div className="space-y-1 text-xs text-slate-500 sm:text-sm">
    <p>Last login: {loginTimestamp} on ttys003</p>
    <p>[danielescoto@Daniels-MacBook-Air] $ session</p>
  </div>
);
