# parcel-transformer-geojson

This is a parcel v2 transformer plugin that ~tells parcel that geojson files are, in fact, json files~ transforms geojson files for use in scripts.

Edit: Earlier it was just converting geojson to json, but that proved too slow (or broken) for large files. Now it uses code from the [official json transformer](https://github.com/parcel-bundler/parcel/tree/v2/packages/transformers/json/) and replicates what it does.

It was created for private use, but parcel developers made an intelligent choice [here](https://github.com/parcel-bundler/parcel/issues/3397#issuecomment-521353931).

It probably is a good replacement for https://github.com/glukki/parcel-plugin-geojson

## When do you need it?

When you do 

```
import geojsonData from "./mydata.geojson"
```

and parcel says

```
🚨 Build failed.

@parcel/core: No transformers found for
.../mydata.geojson.
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