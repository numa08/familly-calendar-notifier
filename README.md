# カレンダーの内容をlineで通知してくれるくん

## 開発環境作り

### [danthareja/node-google-apps-script](https://github.com/danthareja/node-google-apps-script) の設定

- google apps script を作る
- `gapps.confg.json`を用意する

```json
{
  "path": "build/generated/src",
  "fileId": "<apps script のファイルID>"
}
```

### 認証情報の作成

- `src/token.js` を用意する

```javascript
export function Token() {
  return {
    "line": "<line の API Token>"
  }
}
```
