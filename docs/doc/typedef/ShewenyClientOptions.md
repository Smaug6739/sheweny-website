# ShewenyClientOptions

Extends ClientOptions (discord.js type)

| Name                      | Type                                                                                                                                                                                   | Description                                        | Default     | Optional |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------- | -------- |
| admins                    | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | Ids of bot admins                                  | None        | ✓        |
| disableCooldownsForAdmins | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                          | If the cooldowns should be desactivates for admins | None        | ✓        |
| joinThreadsOnCreate       | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                          | If bot should join threads on create               | false       | ✓        |
| managers                  | [ClientManagersOptions](#clientmanagersoptions)                                                                                                                                        | The options for the managers                       |             | ✓        |
| mode                      | development or production                                                                                                                                                              | The mode for run application                       | development | ✓        |

## ClientManagersOptions

| Name        | Type                                                                     | Description                 |
| ----------- | ------------------------------------------------------------------------ | --------------------------- |
| buttons     | [BaseManagerOptions](./ManagerOptions.md#basemanageroptions)             | The options for the manager |
| commands    | [CommandManagerOptions](./ManagerOptions.md#commandsmanageroptions)      | The options for the manager |
| events      | [EventsManagerOptions](./ManagerOptions.md#eventsmanageroptions)         | The options for the manager |
| inhibitors  | [InhibitorsManagerOptions](./ManagerOptions.md#inhibitorsmanageroptions) | The options for the manager |
| selectMenus | [BaseManagerOptions](./ManagerOptions.md#basemanageroptions)             | The options for the manager |
