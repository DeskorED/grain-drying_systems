export const routes = {
    Main: "/grain-drying_systems",
    CurrentDryerPage(DryerName : string) {
        return `/grain-drying_systems/${DryerName}`
    }
}