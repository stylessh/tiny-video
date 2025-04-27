# Tiny Video

The react video component you always wanted. Ultra lightweight, no dependencies, and fully customizable.

## Features

- No layout shift.
- Placeholder support.
- Minimal ui.
- Fully customizable.
- No dependencies.

## Installation

```sh
npm install @stylessh/tiny-video
```

## Usage

```tsx
<TinyVideo src="/demo.mp4" className="w-full aspect-video" />
```

`TinyVideo` is a React component that renders a video element. It is a wrapper around the native `<video>` element.

## TinyVideo Props

| Prop        | Type       | Default     | Description                                                                                             |
| ----------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `src`       | `string`   | `undefined` | The source of the video.                                                                                |
| `className` | `string`   | `undefined` | The class name of the video.                                                                            |
| `poster`    | `string`   | `undefined` | The poster of the video. If not provide, the first frame (blurred) of the video will be used as poster. |
| `autoPlay`  | `boolean`  | `false`     | Whether to autoplay the video.                                                                          |
| `muted`     | `boolean`  | `false`     | Whether to mute the video.                                                                              |
| `loop`      | `boolean`  | `false`     | Whether to loop the video.                                                                              |
| `controls`  | `boolean`  | `true`      | Whether to show the video controls.                                                                     |
| `onLoaded`  | `function` | `undefined` | The callback function when the video is loaded.                                                         |
| `onError`   | `function` | `undefined` | The callback function when the video is error.                                                          |

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

Created by [Alan](https://github.com/stylessh)
