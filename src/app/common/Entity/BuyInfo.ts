export class BuyInfo {
    // 注文区分
    chumonKbn: string = "";
    // 受付番号
    uketsukeCd: string = "";
    // 受付時刻
    uketsukeJikoku: string = "";
    // ファンドコード
    fundCd: string = "";
    // ファンド名称
    fundName: string = "";
    // 基準価格
    kijunKagaku?: number;
    // 前日比
    zenjituhi?: number;
    // 締切り時刻
    simekiriJikoku: string = "";
    // 出金口座-1
    syukinKouza_1: string = "";
    // 出金口座-2
    syukinKouza_2: string = "";
    // 出金口座-3
    syukinKouza_3: string = "";
    // 金額
    kingaku?: number;
    // 電話番号-1
    telNum1: string = "";
    // 電話番号-2
    telNum2?: string;
    // 電話番号-3
    telNum3: string = "";
    // 基準価格（概算）
    kijunKagakuGaisan?: number;
    // 約定口数
    yakujyoKutiSu?: number;
    // 精算金額
    seisanKingaku?: number;
    // 申込日
    mousikomibi: string = "";
    // 約定日
    yakujobi: string = "";
    // 受渡日
    ukewatasibi: string = "";
    // 取消日時
    torikesibi: string = "";
}