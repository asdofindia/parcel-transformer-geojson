const { Transformer } = require("@parcel/plugin");
const json5 = require("json5");

module.exports = new Transformer({
  async transform({ asset }) {
    asset.type = "js";
    asset.setCode(
      `module.exports = JSON.parse(${JSON.stringify(
        JSON.stringify(json5.parse(await asset.getCode()))
      )})`
    );
    return [asset];
  },
});
