
withConfig(configuration) {
    inline(phase: 'CONVERSION') { source, context, classNode ->
        classNode.putNodeMetaData('projectVersion', 'unspecified')
        classNode.putNodeMetaData('projectName', 'mod-domain')
        classNode.putNodeMetaData('isPlugin', 'true')
    }
}
