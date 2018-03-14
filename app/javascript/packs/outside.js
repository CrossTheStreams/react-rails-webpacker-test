// import othercomps from '../otherComps'
// export default othercomps

var componentRequireContext = require.context('otherComps', true)
var ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
