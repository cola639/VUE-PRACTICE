# vuedemo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
1.注意一次业务可以多次调用开始和停止  VCOM_RE2WEB.startRecord,  VCOM_RE2WEB.stopRecord, 但只能调用一次上传接口 VCOM_RE2WEB.saveBizData

2.调用一次开始录制接口 VCOM_RE2WEB.startRecord, 必须调用一次停止录制接口 VCOM_RE2WEB.stopRecord ,最后再调用上传接口 VCOM_RE2WEB.saveBizData
```
