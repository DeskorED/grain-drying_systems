export const routes = {
    Main: "/grain-drying_systems/",
    CurrentDryerPage(DryerName : string) {
        return `/${DryerName}`
    }
}