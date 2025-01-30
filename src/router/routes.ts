export const routes = {
    Main: "/",
    CurrentDryerPage(DryerName : string) {
        return `/${DryerName}`
    }
}