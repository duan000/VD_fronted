export class FundInfo {
    index?: number;
    fundCd: string=""; // ファンドコード
    fundName: string=""; // ファンド名称
    itakuKaishaName: string="" // 委託会社名称
    kijunKakaku?: number; // 基準価格
    zenjituhi?: number; // 前日比
    zenjituhiRitu?: number; // 前日比率
    tesuryo?: number; // 手数料
    operation?: number;
}