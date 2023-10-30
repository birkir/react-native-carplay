# Android Auto

![Animated Demo](https://media.giphy.com/media/jAml2yehNwQ1mjFnxK/giphy.gif)

**The good**: We got a lot of stuff working. Lots of the templates crosses over from CarPlay. AA has nice things like "Toasts".

**The bad**: HMR does not work. Messaging between Host and App yet to figure out. Memory concerns?

## Templates

### What works

- [x] ListTemplate
- [x] GridTemplate

### In progress

- [ ] MapTemplate

### Scheduled for future

- [ ] LongMessageTemplate
- [ ] MessageTemplate
- [ ] PaneTemplate
- [ ] TabTemplate
- [ ] SearchTemplate
- [ ] PlaceListMapTemplate
- [ ] SignInTemplate
- [ ] MapWithContentTemplate
- [ ] NavigationTemplate
- [ ] PlaceListNavigationTemplate
- [ ] RoutePreviewNavigationTemplate

## Model Parsers

- [x] Action
- [ ] Alert
- [x] ActionStrip
- [x] CarIcon
- [ ] CarIconSpan
- [x] CarLocation
- [-] CarColor (static only)
- [-] CarText (not tested)
- [x] Row
- [x] GridItem
- [x] Place (not tested)
- [x] Metadata (not tested)
- [ ] Header
- [ ] Pane
- [x] Place
- [-] PlaceMarker (partial)
- [x] SectionedItemList
- [ ] Tab
- [ ] TabContents
- [ ] Toggle
- [ ] InputSignInMethod

And tons of Navigation related models

## Other things to consider

- Allow optional `ParkedOnly` event listeners on grid/list items.
- `CarAppApiLevel` guards. They go absolutely insane with the amount of api levels, went from 1 to 7 in ~2 years.
