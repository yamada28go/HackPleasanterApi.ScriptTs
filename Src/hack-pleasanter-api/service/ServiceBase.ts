import { PW_apiGet } from "../api/asyc-wrap";

/** プリザンターアクセス用のitemの基底クラス */
export abstract class HackPleasanterApi_ServiceBase<T> {
  /** 指定されたIDのitemを取得する */
  public async apiGet(id: number): Promise<T> {
    // API経由でデータ取得
    const ret = await PW_apiGet(id);
    const r = this.makeItemType(ret.Response.Data[0]);
    return r;
  }

  abstract makeItemType(_rawData: ResponseDataItems): T;
}
