#!/usr/bin/env node
import { cli } from "cleye";
import pkg from "../package.json" with { type: "json" };

const argv = cli({
	name: "blankbuild",
	version: pkg.version,
});
