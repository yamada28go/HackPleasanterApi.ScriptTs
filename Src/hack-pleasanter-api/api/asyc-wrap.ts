/** プリザンター画面スクリプトにおける基本API の　Asyncラッピング  */

/** APIを実行してitemを1個だけ取得する */
export function PW_apiGet(id: number) {
  return new Promise<getResponseData>((resolve, reject) => {
    // このページのデータを取得
    $p.apiGet({
      async: true,
      data: null,
      id: id,
      done: (data) => {
        //alert("通信が成功しました。");

        // 入力データのエラーチェック
        if (data.StatusCode != 200) {
          reject("API実行結果が正常ではありません。");
        }

        resolve(data);
      },
      fail: function (data) {
        //alert("通信が失敗しました。");
        reject(data);
      },
      always: function (data) {
        //alert("通信が完了しました。");
      },
    });
  });
}

/** APIを実行してitemを複数個取得する */
export function PW_apiFind(id: number, view: dataOfGetRequest) {
  return new Promise<getResponseData>((resolve, reject) => {
    // このページのデータを取得
    $p.apiGet({
      async: true,
      data: view,
      id: id,
      done: (data) => {
        //alert("通信が成功しました。");

        // 入力データのエラーチェック
        if (data.StatusCode != 200) {
          reject("API実行結果が正常ではありません。");
        }

        resolve(data);
      },
      fail: function (data) {
        //alert("通信が失敗しました。");
        reject(data);
      },
      always: function (data) {
        //alert("通信が完了しました。");
      },
    });
  });
}
