const { Transformer } = require("@parcel/plugin");

module.exports = new Transformer({
  async transform({ asset }) {
    asset.type = "json";
    return [asset];
  },
});
