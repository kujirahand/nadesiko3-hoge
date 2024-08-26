/**
 * なでしこ3 プラグイン (ESModules編)
 * nadesiko3-hoge
 * プラグインのひな形
 */
export const PluginHoge = {
  'meta': {
    type: 'const',
    value: { // プラグインに関する情報を指定する
      pluginName: 'nadesiko3-hoge', // プラグインの名前
      description: 'プラグインのひな形', // プラグインの説明
      pluginVersion: '3.6.15', // プラグインのバージョン
      nakoRuntime: ['wnako', 'cnako'], // 対象ランタイム
      nakoVersion: '3.6.15' // 要求なでしこバージョン
    }
  },
  '初期化': {
    type: 'func',
    josi: [],
    fn: function (sys) {
      // ここにプラグインの初期化処理
      sys.__setSysVar('HOGEバージョン', '3.6.15')
      console.log('プラグイン「nadesiko3-hoge」を初期化しました')
    }
  },
  '!クリア': {
    type: 'func',
    josi: [],
    fn: function (sys) {
      // ここにプラグインのクリア処理
    }
  },
  // @HOGE定数
  'HOGEバージョン': {type: 'const', value:'?'}, // @HOGEばーじょん
  // @HOGEテスト
  'HOGE足': { // @足し算を行う // @HOGEたす
    type: 'func',
    josi: [['と'], ['を']],
    asyncFn: false,
    fn: function (a, b) {
      return a + b
    }
  },
  'HOGE表示': { // @Sを表示する // @HOGEひょうじ
    type: 'func',
    josi: [['を', 'の', 'と']],
    asyncFn: false,
    fn: function (s) {
      console.log(s)
    },
    return_none: true // 戻り値がない場合はtrueを指定する
  },
  'HOGE乱数': { // @乱数を返す // @HOGEたす
    type: 'func',
    josi: [['の']],
    asyncFn: false,
    fn: function (n) {
      return Math.floor(Math.random() * n)
    }
  },
  'HOGEエンコード': { // @JSONにエンコードして返す // @HOGEえんこーど
    type: 'func',
    josi: [['を', 'の']],
    asyncFn: false,
    fn: function (s) {
      return JSON.stringify(s)
    }
  },
  'HOGE待': { // @1秒だけ実行を待つ // @HOGEまつ
    type: 'func',
    josi: [],
    asyncFn: true, // 非同期関数であることを明示する
    fn: async function () { // asyncFn: trueのとき、async functionを指定する
      await timer_wait(1000)
    }
  },
  'HOGE待機': { // @1秒だけ実行を待つ // @HOGEたいき
    type: 'func',
    josi: [],
    asyncFn: true, // 非同期関数であることを明示する
    fn: function () { // asyncFn: trueのとき、Promiseを返すか、async functionを指定する
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  }
}

// 「HOGE待」関数で使う関数の定義
async function timer_wait (ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default PluginHoge
