# Angular4 Photo Input

An Angular 4 component for inputing photos, previwing and uploading via client (converting to base 64)

### Install

`npm install angular4-photo-input`

### Usage

You just need to import `PhotoInputModule` on `app.module.ts`...

`import { PhotoInputModule } from "angular4-photo-input";`

... and add to `imports` using `@NgModule` decorator:

````typescript
@NgModule({
    imports: [
        ...,
        PhotoInputModule.forRoot(),
        ...
    ]
})
````

And then you may use the `photo-input` tag anywhere on yout html.

````html
<photo-input></photo-input>
````

### Configuration

There are some parameters which you may use to configure your input:

- imageData: initial image to load on input
- imageChangeStarted: function called when the user selected an image
- imageChangeEnded: function callend when the component finished converting the image to base64. Returns a base64 string.
- disabled: a boolean to disables or not the input (default: false)