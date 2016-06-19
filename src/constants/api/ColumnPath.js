import RootPath from './RootPath'
export default (generatorId, columnId) => `${RootPath}/api/v1/generators/${generatorId}/scenario/columns/${columnId}`
