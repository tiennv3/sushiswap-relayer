import Log from "./Log";

// tslint:disable-next-line:max-func-body-length
const main = async () => {
    Log.d("fetching pairs...");

    Log.d("fetching orders...");

};

main().catch(e => {
    Log.e(e);
    process.exit(1);
});
