const authRoutes = require("../routes/authRoute");
const userRoutes = require("../routes/userRoutes");
const authMiddleware = require('../middlewares/auth'); 
const fournisseurRoutes = require('../routes/fournisseurRoutes'); 
const sourcesRoute = require('../routes/sourcesRoute'); 
const sourcesfieldsRoute = require('../routes/sourcesFieldsRoutes'); 
const fournisseurIpRoutes = require('../routes/fournisseur_ipsRoute'); 
const campagnRoutes = require('../routes/campagnsRoute')
const nixxisRoutes = require('../routes/nixxis/nixxisRoute')
const campagnFieldRoutes = require('../routes/campagnFieldRoute')
const callerRoutes = require('../routes/callerRoute')
const callersTypeRoute = require('../routes/callersTypeRoute')
const logRoutes = require('../routes/logRoutes')
const commandesRoute = require('../routes/commandesRoute')
const logsInjectionsRoutes = require('../routes/logsInjectionsRoutes')
const logsApiRoutes = require('../routes/logsApiRoutes')
const injectLeadApiRoutes = require('../routes/injectLeadApiRoutes')
const teamIdRoutes = require('../routes/teamIdRoutes')
const sourcesScheduleRoutes = require('../routes/sourcesScheduleRoutes')
const logsCronRoute = require('../routes/logsCronRoute')
const cronDownloadRoute = require('../routes/cronDownloadRoute')
const cronInjectRoute = require('../routes/cronInjectRoute')
const statsRoute= require('../routes/statsRoute')

const SourcesFilesDataRoutes = require('../routes/SourcesFilesDataRoutes')
const   sourcefileRoute= require('../routes/sourcefileRoute');
const   fileInjectRoute= require('../routes/fileInjectRoute');


const routesConfig = [
  { path: "/auth", router: authRoutes },
  // { path: "/users", middleware: authMiddleware, router: userRoutes, },
  { path: "/users", router: userRoutes },
  { path: "/fournisseur",  router: fournisseurRoutes },
  { path: "/sources", router: sourcesRoute },
  { path: "/fournisseurIp", router: fournisseurIpRoutes },
  { path: "/campagns", router: campagnRoutes },
  { path: "/nixxis", router: nixxisRoutes },
  { path: "/campagn_fields", router: campagnFieldRoutes },
  { path: "/callers", router: callerRoutes },
  { path: "/callers_type", router: callersTypeRoute },
  { path: "/logs", router: logRoutes },
  { path: "/commandes", router: commandesRoute },
  { path: "/sources_fields", router: sourcesfieldsRoute },
  { path: "/logsInjections", router: logsInjectionsRoutes },
  { path: "/logs_api", router: logsApiRoutes },
  { path: "/teamids", router: teamIdRoutes },
  { path: "/schedules", router: sourcesScheduleRoutes },
  { path: "/inject_lead", router: injectLeadApiRoutes },
  { path: "/logs_cron", router: logsCronRoute },
  { path: "/cron_download", router: cronDownloadRoute },
  { path: "/cron_inject", router: cronInjectRoute },
  { path: "/stats", router: statsRoute },
  
  { path: "/logs_files", router: SourcesFilesDataRoutes},
  { path: "/file", router: sourcefileRoute },
  { path: "/inject", router: fileInjectRoute },
 
  
];

module.exports = routesConfig;
