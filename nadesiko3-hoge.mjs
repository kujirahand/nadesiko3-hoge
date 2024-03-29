/**
 * なでしこ3 プラグイン (ESModules編)
 * nadesiko3-hoge
 * プラグインをテストするためのプラグイン
 */
export const PluginHoge = {
  '初期化': {
    type: 'func',
    josi: [],
    fn: function (sys) {
      // ここにプラグインの初期化処理
      sys.__varslist[0]['HOGEバージョン'] = '0.0.7'
    }
  },
  
  // @HOGE定数
  'HOGEバージョン': {type: 'const', value:'?'}, // @HOGEばーじょん
  
  // @HOGEテスト
  'HOGE足': { // @足し算を行う // @HOGEたす
    type: 'func',
    josi: [['と'], ['を']],
    fn: function (a, b) {
      return a + b
    }
  },

  'HOGE乱数': { // @乱数を返す // @HOGEたす
    type: 'func',
    josi: [['の']],
    fn: function (n) {
      return Math.floor(Math.random() * n)
    }
  }
}

export default PluginHoge
