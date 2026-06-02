var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5066 = root || request.c( 'UnityEngine.JointSpring' )
  var i5067 = data
  i5066.spring = i5067[0]
  i5066.damper = i5067[1]
  i5066.targetPosition = i5067[2]
  return i5066
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5068 = root || request.c( 'UnityEngine.JointMotor' )
  var i5069 = data
  i5068.m_TargetVelocity = i5069[0]
  i5068.m_Force = i5069[1]
  i5068.m_FreeSpin = i5069[2]
  return i5068
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5070 = root || request.c( 'UnityEngine.JointLimits' )
  var i5071 = data
  i5070.m_Min = i5071[0]
  i5070.m_Max = i5071[1]
  i5070.m_Bounciness = i5071[2]
  i5070.m_BounceMinVelocity = i5071[3]
  i5070.m_ContactDistance = i5071[4]
  i5070.minBounce = i5071[5]
  i5070.maxBounce = i5071[6]
  return i5070
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5072 = root || request.c( 'UnityEngine.JointDrive' )
  var i5073 = data
  i5072.m_PositionSpring = i5073[0]
  i5072.m_PositionDamper = i5073[1]
  i5072.m_MaximumForce = i5073[2]
  i5072.m_UseAcceleration = i5073[3]
  return i5072
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5074 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5075 = data
  i5074.m_Spring = i5075[0]
  i5074.m_Damper = i5075[1]
  return i5074
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5076 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5077 = data
  i5076.m_Limit = i5077[0]
  i5076.m_Bounciness = i5077[1]
  i5076.m_ContactDistance = i5077[2]
  return i5076
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5078 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5079 = data
  i5078.m_ExtremumSlip = i5079[0]
  i5078.m_ExtremumValue = i5079[1]
  i5078.m_AsymptoteSlip = i5079[2]
  i5078.m_AsymptoteValue = i5079[3]
  i5078.m_Stiffness = i5079[4]
  return i5078
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5080 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5081 = data
  i5080.m_LowerAngle = i5081[0]
  i5080.m_UpperAngle = i5081[1]
  return i5080
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5082 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5083 = data
  i5082.m_MotorSpeed = i5083[0]
  i5082.m_MaximumMotorTorque = i5083[1]
  return i5082
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5084 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5085 = data
  i5084.m_DampingRatio = i5085[0]
  i5084.m_Frequency = i5085[1]
  i5084.m_Angle = i5085[2]
  return i5084
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5086 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5087 = data
  i5086.m_LowerTranslation = i5087[0]
  i5086.m_UpperTranslation = i5087[1]
  return i5086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5089 = data
  i5088.position = new pc.Vec3( i5089[0], i5089[1], i5089[2] )
  i5088.scale = new pc.Vec3( i5089[3], i5089[4], i5089[5] )
  i5088.rotation = new pc.Quat(i5089[6], i5089[7], i5089[8], i5089[9])
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5091 = data
  i5090.color = new pc.Color(i5091[0], i5091[1], i5091[2], i5091[3])
  request.r(i5091[4], i5091[5], 0, i5090, 'sprite')
  i5090.flipX = !!i5091[6]
  i5090.flipY = !!i5091[7]
  i5090.drawMode = i5091[8]
  i5090.size = new pc.Vec2( i5091[9], i5091[10] )
  i5090.tileMode = i5091[11]
  i5090.adaptiveModeThreshold = i5091[12]
  i5090.maskInteraction = i5091[13]
  i5090.spriteSortPoint = i5091[14]
  i5090.enabled = !!i5091[15]
  request.r(i5091[16], i5091[17], 0, i5090, 'sharedMaterial')
  var i5093 = i5091[18]
  var i5092 = []
  for(var i = 0; i < i5093.length; i += 2) {
  request.r(i5093[i + 0], i5093[i + 1], 2, i5092, '')
  }
  i5090.sharedMaterials = i5092
  i5090.receiveShadows = !!i5091[19]
  i5090.shadowCastingMode = i5091[20]
  i5090.sortingLayerID = i5091[21]
  i5090.sortingOrder = i5091[22]
  i5090.lightmapIndex = i5091[23]
  i5090.lightmapSceneIndex = i5091[24]
  i5090.lightmapScaleOffset = new pc.Vec4( i5091[25], i5091[26], i5091[27], i5091[28] )
  i5090.lightProbeUsage = i5091[29]
  i5090.reflectionProbeUsage = i5091[30]
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5097 = data
  i5096.name = i5097[0]
  i5096.tagId = i5097[1]
  i5096.enabled = !!i5097[2]
  i5096.isStatic = !!i5097[3]
  i5096.layer = i5097[4]
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5098 = root || new pc.UnityMaterial()
  var i5099 = data
  i5098.name = i5099[0]
  request.r(i5099[1], i5099[2], 0, i5098, 'shader')
  i5098.renderQueue = i5099[3]
  i5098.enableInstancing = !!i5099[4]
  var i5101 = i5099[5]
  var i5100 = []
  for(var i = 0; i < i5101.length; i += 1) {
    i5100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5101[i + 0]) );
  }
  i5098.floatParameters = i5100
  var i5103 = i5099[6]
  var i5102 = []
  for(var i = 0; i < i5103.length; i += 1) {
    i5102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5103[i + 0]) );
  }
  i5098.colorParameters = i5102
  var i5105 = i5099[7]
  var i5104 = []
  for(var i = 0; i < i5105.length; i += 1) {
    i5104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5105[i + 0]) );
  }
  i5098.vectorParameters = i5104
  var i5107 = i5099[8]
  var i5106 = []
  for(var i = 0; i < i5107.length; i += 1) {
    i5106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5107[i + 0]) );
  }
  i5098.textureParameters = i5106
  var i5109 = i5099[9]
  var i5108 = []
  for(var i = 0; i < i5109.length; i += 1) {
    i5108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5109[i + 0]) );
  }
  i5098.materialFlags = i5108
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5113 = data
  i5112.name = i5113[0]
  i5112.value = i5113[1]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5117 = data
  i5116.name = i5117[0]
  i5116.value = new pc.Color(i5117[1], i5117[2], i5117[3], i5117[4])
  return i5116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5121 = data
  i5120.name = i5121[0]
  i5120.value = new pc.Vec4( i5121[1], i5121[2], i5121[3], i5121[4] )
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5125 = data
  i5124.name = i5125[0]
  request.r(i5125[1], i5125[2], 0, i5124, 'value')
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5129 = data
  i5128.name = i5129[0]
  i5128.enabled = !!i5129[1]
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5131 = data
  i5130.name = i5131[0]
  i5130.width = i5131[1]
  i5130.height = i5131[2]
  i5130.mipmapCount = i5131[3]
  i5130.anisoLevel = i5131[4]
  i5130.filterMode = i5131[5]
  i5130.hdr = !!i5131[6]
  i5130.format = i5131[7]
  i5130.wrapMode = i5131[8]
  i5130.alphaIsTransparency = !!i5131[9]
  i5130.alphaSource = i5131[10]
  i5130.graphicsFormat = i5131[11]
  i5130.sRGBTexture = !!i5131[12]
  i5130.desiredColorSpace = i5131[13]
  i5130.wrapU = i5131[14]
  i5130.wrapV = i5131[15]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5133 = data
  i5132.name = i5133[0]
  i5132.index = i5133[1]
  i5132.startup = !!i5133[2]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5135 = data
  i5134.aspect = i5135[0]
  i5134.orthographic = !!i5135[1]
  i5134.orthographicSize = i5135[2]
  i5134.backgroundColor = new pc.Color(i5135[3], i5135[4], i5135[5], i5135[6])
  i5134.nearClipPlane = i5135[7]
  i5134.farClipPlane = i5135[8]
  i5134.fieldOfView = i5135[9]
  i5134.depth = i5135[10]
  i5134.clearFlags = i5135[11]
  i5134.cullingMask = i5135[12]
  i5134.rect = i5135[13]
  request.r(i5135[14], i5135[15], 0, i5134, 'targetTexture')
  i5134.usePhysicalProperties = !!i5135[16]
  i5134.focalLength = i5135[17]
  i5134.sensorSize = new pc.Vec2( i5135[18], i5135[19] )
  i5134.lensShift = new pc.Vec2( i5135[20], i5135[21] )
  i5134.gateFit = i5135[22]
  i5134.commandBufferCount = i5135[23]
  i5134.cameraType = i5135[24]
  i5134.enabled = !!i5135[25]
  return i5134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5137 = data
  i5136.ambientIntensity = i5137[0]
  i5136.reflectionIntensity = i5137[1]
  i5136.ambientMode = i5137[2]
  i5136.ambientLight = new pc.Color(i5137[3], i5137[4], i5137[5], i5137[6])
  i5136.ambientSkyColor = new pc.Color(i5137[7], i5137[8], i5137[9], i5137[10])
  i5136.ambientGroundColor = new pc.Color(i5137[11], i5137[12], i5137[13], i5137[14])
  i5136.ambientEquatorColor = new pc.Color(i5137[15], i5137[16], i5137[17], i5137[18])
  i5136.fogColor = new pc.Color(i5137[19], i5137[20], i5137[21], i5137[22])
  i5136.fogEndDistance = i5137[23]
  i5136.fogStartDistance = i5137[24]
  i5136.fogDensity = i5137[25]
  i5136.fog = !!i5137[26]
  request.r(i5137[27], i5137[28], 0, i5136, 'skybox')
  i5136.fogMode = i5137[29]
  var i5139 = i5137[30]
  var i5138 = []
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5139[i + 0]) );
  }
  i5136.lightmaps = i5138
  i5136.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5137[31], i5136.lightProbes)
  i5136.lightmapsMode = i5137[32]
  i5136.mixedBakeMode = i5137[33]
  i5136.environmentLightingMode = i5137[34]
  i5136.ambientProbe = new pc.SphericalHarmonicsL2(i5137[35])
  i5136.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5137[36])
  i5136.useReferenceAmbientProbe = !!i5137[37]
  request.r(i5137[38], i5137[39], 0, i5136, 'customReflection')
  request.r(i5137[40], i5137[41], 0, i5136, 'defaultReflection')
  i5136.defaultReflectionMode = i5137[42]
  i5136.defaultReflectionResolution = i5137[43]
  i5136.sunLightObjectId = i5137[44]
  i5136.pixelLightCount = i5137[45]
  i5136.defaultReflectionHDR = !!i5137[46]
  i5136.hasLightDataAsset = !!i5137[47]
  i5136.hasManualGenerate = !!i5137[48]
  return i5136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5143 = data
  request.r(i5143[0], i5143[1], 0, i5142, 'lightmapColor')
  request.r(i5143[2], i5143[3], 0, i5142, 'lightmapDirection')
  request.r(i5143[4], i5143[5], 0, i5142, 'shadowMask')
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5144 = root || new UnityEngine.LightProbes()
  var i5145 = data
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5153 = data
  var i5155 = i5153[0]
  var i5154 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5155.length; i += 1) {
    i5154.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5155[i + 0]));
  }
  i5152.ShaderCompilationErrors = i5154
  i5152.name = i5153[1]
  i5152.guid = i5153[2]
  var i5157 = i5153[3]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( i5157[i + 0] );
  }
  i5152.shaderDefinedKeywords = i5156
  var i5159 = i5153[4]
  var i5158 = []
  for(var i = 0; i < i5159.length; i += 1) {
    i5158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5159[i + 0]) );
  }
  i5152.passes = i5158
  var i5161 = i5153[5]
  var i5160 = []
  for(var i = 0; i < i5161.length; i += 1) {
    i5160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5161[i + 0]) );
  }
  i5152.usePasses = i5160
  var i5163 = i5153[6]
  var i5162 = []
  for(var i = 0; i < i5163.length; i += 1) {
    i5162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5163[i + 0]) );
  }
  i5152.defaultParameterValues = i5162
  request.r(i5153[7], i5153[8], 0, i5152, 'unityFallbackShader')
  i5152.readDepth = !!i5153[9]
  i5152.hasDepthOnlyPass = !!i5153[10]
  i5152.isCreatedByShaderGraph = !!i5153[11]
  i5152.disableBatching = !!i5153[12]
  i5152.compiled = !!i5153[13]
  return i5152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5167 = data
  i5166.shaderName = i5167[0]
  i5166.errorMessage = i5167[1]
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5172 = root || new pc.UnityShaderPass()
  var i5173 = data
  i5172.id = i5173[0]
  i5172.subShaderIndex = i5173[1]
  i5172.name = i5173[2]
  i5172.passType = i5173[3]
  i5172.grabPassTextureName = i5173[4]
  i5172.usePass = !!i5173[5]
  i5172.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[6], i5172.zTest)
  i5172.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[7], i5172.zWrite)
  i5172.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[8], i5172.culling)
  i5172.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5173[9], i5172.blending)
  i5172.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5173[10], i5172.alphaBlending)
  i5172.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[11], i5172.colorWriteMask)
  i5172.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[12], i5172.offsetUnits)
  i5172.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[13], i5172.offsetFactor)
  i5172.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[14], i5172.stencilRef)
  i5172.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[15], i5172.stencilReadMask)
  i5172.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5173[16], i5172.stencilWriteMask)
  i5172.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5173[17], i5172.stencilOp)
  i5172.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5173[18], i5172.stencilOpFront)
  i5172.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5173[19], i5172.stencilOpBack)
  var i5175 = i5173[20]
  var i5174 = []
  for(var i = 0; i < i5175.length; i += 1) {
    i5174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5175[i + 0]) );
  }
  i5172.tags = i5174
  var i5177 = i5173[21]
  var i5176 = []
  for(var i = 0; i < i5177.length; i += 1) {
    i5176.push( i5177[i + 0] );
  }
  i5172.passDefinedKeywords = i5176
  var i5179 = i5173[22]
  var i5178 = []
  for(var i = 0; i < i5179.length; i += 1) {
    i5178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5179[i + 0]) );
  }
  i5172.passDefinedKeywordGroups = i5178
  var i5181 = i5173[23]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5181[i + 0]) );
  }
  i5172.variants = i5180
  var i5183 = i5173[24]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5183[i + 0]) );
  }
  i5172.excludedVariants = i5182
  i5172.hasDepthReader = !!i5173[25]
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5185 = data
  i5184.val = i5185[0]
  i5184.name = i5185[1]
  return i5184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5187 = data
  i5186.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5187[0], i5186.src)
  i5186.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5187[1], i5186.dst)
  i5186.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5187[2], i5186.op)
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5189 = data
  i5188.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5189[0], i5188.pass)
  i5188.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5189[1], i5188.fail)
  i5188.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5189[2], i5188.zFail)
  i5188.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5189[3], i5188.comp)
  return i5188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5193 = data
  i5192.name = i5193[0]
  i5192.value = i5193[1]
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5197 = data
  var i5199 = i5197[0]
  var i5198 = []
  for(var i = 0; i < i5199.length; i += 1) {
    i5198.push( i5199[i + 0] );
  }
  i5196.keywords = i5198
  i5196.hasDiscard = !!i5197[1]
  return i5196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5203 = data
  i5202.passId = i5203[0]
  i5202.subShaderIndex = i5203[1]
  var i5205 = i5203[2]
  var i5204 = []
  for(var i = 0; i < i5205.length; i += 1) {
    i5204.push( i5205[i + 0] );
  }
  i5202.keywords = i5204
  i5202.vertexProgram = i5203[3]
  i5202.fragmentProgram = i5203[4]
  i5202.exportedForWebGl2 = !!i5203[5]
  i5202.readDepth = !!i5203[6]
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5209 = data
  request.r(i5209[0], i5209[1], 0, i5208, 'shader')
  i5208.pass = i5209[2]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5213 = data
  i5212.name = i5213[0]
  i5212.type = i5213[1]
  i5212.value = new pc.Vec4( i5213[2], i5213[3], i5213[4], i5213[5] )
  i5212.textureValue = i5213[6]
  i5212.shaderPropertyFlag = i5213[7]
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5215 = data
  i5214.name = i5215[0]
  request.r(i5215[1], i5215[2], 0, i5214, 'texture')
  i5214.aabb = i5215[3]
  i5214.vertices = i5215[4]
  i5214.triangles = i5215[5]
  i5214.textureRect = UnityEngine.Rect.MinMaxRect(i5215[6], i5215[7], i5215[8], i5215[9])
  i5214.packedRect = UnityEngine.Rect.MinMaxRect(i5215[10], i5215[11], i5215[12], i5215[13])
  i5214.border = new pc.Vec4( i5215[14], i5215[15], i5215[16], i5215[17] )
  i5214.transparency = i5215[18]
  i5214.bounds = i5215[19]
  i5214.pixelsPerUnit = i5215[20]
  i5214.textureWidth = i5215[21]
  i5214.textureHeight = i5215[22]
  i5214.nativeSize = new pc.Vec2( i5215[23], i5215[24] )
  i5214.pivot = new pc.Vec2( i5215[25], i5215[26] )
  i5214.textureRectOffset = new pc.Vec2( i5215[27], i5215[28] )
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5217 = data
  i5216.name = i5217[0]
  i5216.bytes64 = i5217[1]
  i5216.data = i5217[2]
  return i5216
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5218 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5219 = data
  i5218.useSafeMode = !!i5219[0]
  i5218.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5219[1], i5218.safeModeOptions)
  i5218.timeScale = i5219[2]
  i5218.unscaledTimeScale = i5219[3]
  i5218.useSmoothDeltaTime = !!i5219[4]
  i5218.maxSmoothUnscaledTime = i5219[5]
  i5218.rewindCallbackMode = i5219[6]
  i5218.showUnityEditorReport = !!i5219[7]
  i5218.logBehaviour = i5219[8]
  i5218.drawGizmos = !!i5219[9]
  i5218.defaultRecyclable = !!i5219[10]
  i5218.defaultAutoPlay = i5219[11]
  i5218.defaultUpdateType = i5219[12]
  i5218.defaultTimeScaleIndependent = !!i5219[13]
  i5218.defaultEaseType = i5219[14]
  i5218.defaultEaseOvershootOrAmplitude = i5219[15]
  i5218.defaultEasePeriod = i5219[16]
  i5218.defaultAutoKill = !!i5219[17]
  i5218.defaultLoopType = i5219[18]
  i5218.debugMode = !!i5219[19]
  i5218.debugStoreTargetId = !!i5219[20]
  i5218.showPreviewPanel = !!i5219[21]
  i5218.storeSettingsLocation = i5219[22]
  i5218.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5219[23], i5218.modules)
  i5218.createASMDEF = !!i5219[24]
  i5218.showPlayingTweens = !!i5219[25]
  i5218.showPausedTweens = !!i5219[26]
  return i5218
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5220 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5221 = data
  i5220.logBehaviour = i5221[0]
  i5220.nestedTweenFailureBehaviour = i5221[1]
  return i5220
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5222 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5223 = data
  i5222.showPanel = !!i5223[0]
  i5222.audioEnabled = !!i5223[1]
  i5222.physicsEnabled = !!i5223[2]
  i5222.physics2DEnabled = !!i5223[3]
  i5222.spriteEnabled = !!i5223[4]
  i5222.uiEnabled = !!i5223[5]
  i5222.uiToolkitEnabled = !!i5223[6]
  i5222.textMeshProEnabled = !!i5223[7]
  i5222.tk2DEnabled = !!i5223[8]
  i5222.deAudioEnabled = !!i5223[9]
  i5222.deUnityExtendedEnabled = !!i5223[10]
  i5222.epoOutlineEnabled = !!i5223[11]
  return i5222
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5224 = root || request.c( 'TMPro.TMP_Settings' )
  var i5225 = data
  i5224.assetVersion = i5225[0]
  i5224.m_TextWrappingMode = i5225[1]
  i5224.m_enableKerning = !!i5225[2]
  var i5227 = i5225[3]
  var i5226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5227.length; i += 1) {
    i5226.add(i5227[i + 0]);
  }
  i5224.m_ActiveFontFeatures = i5226
  i5224.m_enableExtraPadding = !!i5225[4]
  i5224.m_enableTintAllSprites = !!i5225[5]
  i5224.m_enableParseEscapeCharacters = !!i5225[6]
  i5224.m_EnableRaycastTarget = !!i5225[7]
  i5224.m_GetFontFeaturesAtRuntime = !!i5225[8]
  i5224.m_missingGlyphCharacter = i5225[9]
  i5224.m_ClearDynamicDataOnBuild = !!i5225[10]
  i5224.m_warningsDisabled = !!i5225[11]
  request.r(i5225[12], i5225[13], 0, i5224, 'm_defaultFontAsset')
  i5224.m_defaultFontAssetPath = i5225[14]
  i5224.m_defaultFontSize = i5225[15]
  i5224.m_defaultAutoSizeMinRatio = i5225[16]
  i5224.m_defaultAutoSizeMaxRatio = i5225[17]
  i5224.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5225[18], i5225[19] )
  i5224.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5225[20], i5225[21] )
  i5224.m_autoSizeTextContainer = !!i5225[22]
  i5224.m_IsTextObjectScaleStatic = !!i5225[23]
  var i5229 = i5225[24]
  var i5228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5229.length; i += 2) {
  request.r(i5229[i + 0], i5229[i + 1], 1, i5228, '')
  }
  i5224.m_fallbackFontAssets = i5228
  i5224.m_matchMaterialPreset = !!i5225[25]
  i5224.m_HideSubTextObjects = !!i5225[26]
  request.r(i5225[27], i5225[28], 0, i5224, 'm_defaultSpriteAsset')
  i5224.m_defaultSpriteAssetPath = i5225[29]
  i5224.m_enableEmojiSupport = !!i5225[30]
  i5224.m_MissingCharacterSpriteUnicode = i5225[31]
  var i5231 = i5225[32]
  var i5230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5231.length; i += 2) {
  request.r(i5231[i + 0], i5231[i + 1], 1, i5230, '')
  }
  i5224.m_EmojiFallbackTextAssets = i5230
  i5224.m_defaultColorGradientPresetsPath = i5225[33]
  request.r(i5225[34], i5225[35], 0, i5224, 'm_defaultStyleSheet')
  i5224.m_StyleSheetsResourcePath = i5225[36]
  request.r(i5225[37], i5225[38], 0, i5224, 'm_leadingCharacters')
  request.r(i5225[39], i5225[40], 0, i5224, 'm_followingCharacters')
  i5224.m_UseModernHangulLineBreakingRules = !!i5225[41]
  return i5224
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5238 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5239 = data
  request.r(i5239[0], i5239[1], 0, i5238, 'spriteSheet')
  var i5241 = i5239[2]
  var i5240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5241.length; i += 1) {
    i5240.add(request.d('TMPro.TMP_Sprite', i5241[i + 0]));
  }
  i5238.spriteInfoList = i5240
  var i5243 = i5239[3]
  var i5242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5243.length; i += 2) {
  request.r(i5243[i + 0], i5243[i + 1], 1, i5242, '')
  }
  i5238.fallbackSpriteAssets = i5242
  var i5245 = i5239[4]
  var i5244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5245.length; i += 1) {
    i5244.add(request.d('TMPro.TMP_SpriteCharacter', i5245[i + 0]));
  }
  i5238.m_SpriteCharacterTable = i5244
  var i5247 = i5239[5]
  var i5246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5247.length; i += 1) {
    i5246.add(request.d('TMPro.TMP_SpriteGlyph', i5247[i + 0]));
  }
  i5238.m_GlyphTable = i5246
  i5238.m_Version = i5239[6]
  i5238.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5239[7], i5238.m_FaceInfo)
  request.r(i5239[8], i5239[9], 0, i5238, 'm_Material')
  return i5238
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5250 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5251 = data
  i5250.name = i5251[0]
  i5250.hashCode = i5251[1]
  i5250.unicode = i5251[2]
  i5250.pivot = new pc.Vec2( i5251[3], i5251[4] )
  request.r(i5251[5], i5251[6], 0, i5250, 'sprite')
  i5250.id = i5251[7]
  i5250.x = i5251[8]
  i5250.y = i5251[9]
  i5250.width = i5251[10]
  i5250.height = i5251[11]
  i5250.xOffset = i5251[12]
  i5250.yOffset = i5251[13]
  i5250.xAdvance = i5251[14]
  i5250.scale = i5251[15]
  return i5250
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5256 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5257 = data
  i5256.m_Name = i5257[0]
  i5256.m_ElementType = i5257[1]
  i5256.m_Unicode = i5257[2]
  i5256.m_GlyphIndex = i5257[3]
  i5256.m_Scale = i5257[4]
  return i5256
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5260 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5261 = data
  request.r(i5261[0], i5261[1], 0, i5260, 'sprite')
  i5260.m_Index = i5261[2]
  i5260.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5261[3], i5260.m_Metrics)
  i5260.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5261[4], i5260.m_GlyphRect)
  i5260.m_Scale = i5261[5]
  i5260.m_AtlasIndex = i5261[6]
  i5260.m_ClassDefinitionType = i5261[7]
  return i5260
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5262 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5263 = data
  i5262.m_Width = i5263[0]
  i5262.m_Height = i5263[1]
  i5262.m_HorizontalBearingX = i5263[2]
  i5262.m_HorizontalBearingY = i5263[3]
  i5262.m_HorizontalAdvance = i5263[4]
  return i5262
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5264 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5265 = data
  i5264.m_X = i5265[0]
  i5264.m_Y = i5265[1]
  i5264.m_Width = i5265[2]
  i5264.m_Height = i5265[3]
  return i5264
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5266 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5267 = data
  i5266.m_FaceIndex = i5267[0]
  i5266.m_FamilyName = i5267[1]
  i5266.m_StyleName = i5267[2]
  i5266.m_PointSize = i5267[3]
  i5266.m_Scale = i5267[4]
  i5266.m_UnitsPerEM = i5267[5]
  i5266.m_LineHeight = i5267[6]
  i5266.m_AscentLine = i5267[7]
  i5266.m_CapLine = i5267[8]
  i5266.m_MeanLine = i5267[9]
  i5266.m_Baseline = i5267[10]
  i5266.m_DescentLine = i5267[11]
  i5266.m_SuperscriptOffset = i5267[12]
  i5266.m_SuperscriptSize = i5267[13]
  i5266.m_SubscriptOffset = i5267[14]
  i5266.m_SubscriptSize = i5267[15]
  i5266.m_UnderlineOffset = i5267[16]
  i5266.m_UnderlineThickness = i5267[17]
  i5266.m_StrikethroughOffset = i5267[18]
  i5266.m_StrikethroughThickness = i5267[19]
  i5266.m_TabWidth = i5267[20]
  return i5266
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5268 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5269 = data
  var i5271 = i5269[0]
  var i5270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5271.length; i += 1) {
    i5270.add(request.d('TMPro.TMP_Style', i5271[i + 0]));
  }
  i5268.m_StyleList = i5270
  return i5268
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5274 = root || request.c( 'TMPro.TMP_Style' )
  var i5275 = data
  i5274.m_Name = i5275[0]
  i5274.m_HashCode = i5275[1]
  i5274.m_OpeningDefinition = i5275[2]
  i5274.m_ClosingDefinition = i5275[3]
  i5274.m_OpeningTagArray = i5275[4]
  i5274.m_ClosingTagArray = i5275[5]
  return i5274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5277 = data
  var i5279 = i5277[0]
  var i5278 = []
  for(var i = 0; i < i5279.length; i += 1) {
    i5278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5279[i + 0]) );
  }
  i5276.files = i5278
  i5276.componentToPrefabIds = i5277[1]
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5283 = data
  i5282.path = i5283[0]
  request.r(i5283[1], i5283[2], 0, i5282, 'unityObject')
  return i5282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5285 = data
  var i5287 = i5285[0]
  var i5286 = []
  for(var i = 0; i < i5287.length; i += 1) {
    i5286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5287[i + 0]) );
  }
  i5284.scriptsExecutionOrder = i5286
  var i5289 = i5285[1]
  var i5288 = []
  for(var i = 0; i < i5289.length; i += 1) {
    i5288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5289[i + 0]) );
  }
  i5284.sortingLayers = i5288
  var i5291 = i5285[2]
  var i5290 = []
  for(var i = 0; i < i5291.length; i += 1) {
    i5290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5291[i + 0]) );
  }
  i5284.cullingLayers = i5290
  i5284.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5285[3], i5284.timeSettings)
  i5284.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5285[4], i5284.physicsSettings)
  i5284.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5285[5], i5284.physics2DSettings)
  i5284.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5285[6], i5284.qualitySettings)
  i5284.enableRealtimeShadows = !!i5285[7]
  i5284.enableAutoInstancing = !!i5285[8]
  i5284.enableStaticBatching = !!i5285[9]
  i5284.enableDynamicBatching = !!i5285[10]
  i5284.lightmapEncodingQuality = i5285[11]
  i5284.desiredColorSpace = i5285[12]
  var i5293 = i5285[13]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 1) {
    i5292.push( i5293[i + 0] );
  }
  i5284.allTags = i5292
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5297 = data
  i5296.name = i5297[0]
  i5296.value = i5297[1]
  return i5296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5301 = data
  i5300.id = i5301[0]
  i5300.name = i5301[1]
  i5300.value = i5301[2]
  return i5300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5305 = data
  i5304.id = i5305[0]
  i5304.name = i5305[1]
  return i5304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5307 = data
  i5306.fixedDeltaTime = i5307[0]
  i5306.maximumDeltaTime = i5307[1]
  i5306.timeScale = i5307[2]
  i5306.maximumParticleTimestep = i5307[3]
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5309 = data
  i5308.gravity = new pc.Vec3( i5309[0], i5309[1], i5309[2] )
  i5308.defaultSolverIterations = i5309[3]
  i5308.bounceThreshold = i5309[4]
  i5308.autoSyncTransforms = !!i5309[5]
  i5308.autoSimulation = !!i5309[6]
  var i5311 = i5309[7]
  var i5310 = []
  for(var i = 0; i < i5311.length; i += 1) {
    i5310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5311[i + 0]) );
  }
  i5308.collisionMatrix = i5310
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5315 = data
  i5314.enabled = !!i5315[0]
  i5314.layerId = i5315[1]
  i5314.otherLayerId = i5315[2]
  return i5314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5317 = data
  request.r(i5317[0], i5317[1], 0, i5316, 'material')
  i5316.gravity = new pc.Vec2( i5317[2], i5317[3] )
  i5316.positionIterations = i5317[4]
  i5316.velocityIterations = i5317[5]
  i5316.velocityThreshold = i5317[6]
  i5316.maxLinearCorrection = i5317[7]
  i5316.maxAngularCorrection = i5317[8]
  i5316.maxTranslationSpeed = i5317[9]
  i5316.maxRotationSpeed = i5317[10]
  i5316.baumgarteScale = i5317[11]
  i5316.baumgarteTOIScale = i5317[12]
  i5316.timeToSleep = i5317[13]
  i5316.linearSleepTolerance = i5317[14]
  i5316.angularSleepTolerance = i5317[15]
  i5316.defaultContactOffset = i5317[16]
  i5316.autoSimulation = !!i5317[17]
  i5316.queriesHitTriggers = !!i5317[18]
  i5316.queriesStartInColliders = !!i5317[19]
  i5316.callbacksOnDisable = !!i5317[20]
  i5316.reuseCollisionCallbacks = !!i5317[21]
  i5316.autoSyncTransforms = !!i5317[22]
  var i5319 = i5317[23]
  var i5318 = []
  for(var i = 0; i < i5319.length; i += 1) {
    i5318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5319[i + 0]) );
  }
  i5316.collisionMatrix = i5318
  return i5316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5323 = data
  i5322.enabled = !!i5323[0]
  i5322.layerId = i5323[1]
  i5322.otherLayerId = i5323[2]
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5325 = data
  var i5327 = i5325[0]
  var i5326 = []
  for(var i = 0; i < i5327.length; i += 1) {
    i5326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5327[i + 0]) );
  }
  i5324.qualityLevels = i5326
  var i5329 = i5325[1]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( i5329[i + 0] );
  }
  i5324.names = i5328
  i5324.shadows = i5325[2]
  i5324.anisotropicFiltering = i5325[3]
  i5324.antiAliasing = i5325[4]
  i5324.lodBias = i5325[5]
  i5324.shadowCascades = i5325[6]
  i5324.shadowDistance = i5325[7]
  i5324.shadowmaskMode = i5325[8]
  i5324.shadowProjection = i5325[9]
  i5324.shadowResolution = i5325[10]
  i5324.softParticles = !!i5325[11]
  i5324.softVegetation = !!i5325[12]
  i5324.activeColorSpace = i5325[13]
  i5324.desiredColorSpace = i5325[14]
  i5324.masterTextureLimit = i5325[15]
  i5324.maxQueuedFrames = i5325[16]
  i5324.particleRaycastBudget = i5325[17]
  i5324.pixelLightCount = i5325[18]
  i5324.realtimeReflectionProbes = !!i5325[19]
  i5324.shadowCascade2Split = i5325[20]
  i5324.shadowCascade4Split = new pc.Vec3( i5325[21], i5325[22], i5325[23] )
  i5324.streamingMipmapsActive = !!i5325[24]
  i5324.vSyncCount = i5325[25]
  i5324.asyncUploadBufferSize = i5325[26]
  i5324.asyncUploadTimeSlice = i5325[27]
  i5324.billboardsFaceCameraPosition = !!i5325[28]
  i5324.shadowNearPlaneOffset = i5325[29]
  i5324.streamingMipmapsMemoryBudget = i5325[30]
  i5324.maximumLODLevel = i5325[31]
  i5324.streamingMipmapsAddAllCameras = !!i5325[32]
  i5324.streamingMipmapsMaxLevelReduction = i5325[33]
  i5324.streamingMipmapsRenderersPerFrame = i5325[34]
  i5324.resolutionScalingFixedDPIFactor = i5325[35]
  i5324.streamingMipmapsMaxFileIORequests = i5325[36]
  i5324.currentQualityLevel = i5325[37]
  return i5324
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"14":[15],"16":[15],"17":[15],"18":[15],"19":[15],"20":[15],"21":[22],"23":[5],"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[32],"39":[32],"40":[32],"41":[32],"42":[32],"43":[32],"44":[32],"45":[5],"46":[47],"48":[49],"50":[49],"51":[52],"53":[54],"55":[56],"57":[47,58],"59":[56],"60":[59],"61":[56],"62":[56],"63":[64],"65":[64],"66":[56],"67":[52],"68":[69,52],"70":[47],"71":[69,52],"72":[73,47],"56":[47],"74":[47,58],"75":[25],"76":[32],"77":[78],"79":[64],"80":[1],"81":[5],"82":[83],"84":[85],"86":[51],"87":[52],"88":[47,52],"89":[52,69],"90":[52],"91":[69,52],"92":[47],"93":[69,52],"94":[52],"95":[96],"97":[96],"98":[96],"99":[52],"100":[52],"101":[51],"102":[69,52],"103":[52],"104":[51],"105":[52],"106":[52],"107":[52],"108":[52],"109":[52],"110":[52],"111":[52],"112":[52],"113":[52],"114":[69,52],"115":[52],"116":[52],"117":[52],"118":[52],"119":[69,52],"120":[52],"121":[85],"122":[85],"123":[85],"124":[85],"125":[5],"126":[5]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","UnityEngine.CanvasRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_120526_Hieu_Lv197_V1";

Deserializers.lunaAppID = "27329";

Deserializers.projectId = "54ab6df5d24ca13458b7b8f24e7d8130";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1865";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4942";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "2b284d47-999b-4aa2-984c-c602cfb085e5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

