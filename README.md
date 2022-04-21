# parcel-transformer-geojson

This is a parcel v2 transformer plugin that tells parcel that geojson files are, in fact, json files.

It was created for private use, but parcel developers made an intelligent choice [here](https://github.com/parcel-bundler/parcel/issues/3397#issuecomment-521353931).

It probably is a good replacement for https://github.com/glukki/parcel-plugin-geojson

## When do you need it?

When you do 

```
import geojsonData from "./mydata.geojson"
```

and parcel says

```
@parcel/resolver-default: Cannot load file "./mydata.geojson' in ...
```

because parcel does not know that geojson is json.

## Installation

```
npm install --save-dev parcel-transformer-geojson
```

## Sample `.parcelrc`

```
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.geojson": ["parcel-transformer-geojson"]
  }
}
```