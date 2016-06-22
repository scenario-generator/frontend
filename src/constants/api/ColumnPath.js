import RootPath from './RootPath'
export default (generatorId, columnId) => `${RootPath}/api/v1/generators/${generatorId}/generate/columns/${columnId}`
