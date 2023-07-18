import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "calvinlow",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName:
            stack.stage === "prod"
              ? "calvin-low.com"
              : `${stack.stage}.calvin-low.com`,
          domainAlias:
            stack.stage === "prod"
              ? "www.calvin-low.com"
              : `www.${stack.stage}.calvin-low.com`,
          hostedZone: "calvin-low.com",
        }
      });

      stack.addOutputs({
        url: site.url
      });
    });
  },
} satisfies SSTConfig;