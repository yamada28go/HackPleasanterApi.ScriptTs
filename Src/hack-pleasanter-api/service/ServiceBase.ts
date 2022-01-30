import { PW_apiFind, PW_apiGet } from "../api/asyc-wrap";

/** プリザンターアクセス用のitemの基底クラス */
export abstract class HackPleasanterApi_ServiceBase<T> {
  /** 指定されたIDのitemを取得する */
  public async apiGet(id: number): Promise<T> {
    // API経由でデータ取得
    const ret = await PW_apiGet(id);
    const r = this.makeItemType(ret.Response.Data[0]);
    return r;
  }

  /** 指定されたIDのitemを取得する */
  public async findItem(view: dataOfGetRequest): Promise<Array<T>> {
    // API経由でデータ取得
    const ret = await PW_apiFind(this.getSiteId(), view);
    const r = ret.Response.Data.map((x) => this.makeItemType(x));
    return r;
  }

  // 対象としているサイトITを取得する
  abstract getSiteId(): number;

  // Itemの要素データを取得する
  abstract makeItemType(_rawData: ResponseDataItems): T;
}
