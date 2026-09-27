/* 審査ページの設定。
   endpoint が空のあいだは「接続前の確認版」になり、送信は事務局に届かない（このブラウザに保存するだけ）。
   GAS ウェブアプリをデプロイしたら、その URL（…/exec）を endpoint に貼る。 */
window.SHOKUIKU_CONFIG = {
  year: 2026,
  deadline: "2026年10月10日（土）",
  contact: "asaokuptashokuiku@gmail.com",
  endpoint: ""
};
