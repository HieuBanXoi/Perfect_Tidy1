var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5006 = root || request.c( 'UnityEngine.JointSpring' )
  var i5007 = data
  i5006.spring = i5007[0]
  i5006.damper = i5007[1]
  i5006.targetPosition = i5007[2]
  return i5006
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5008 = root || request.c( 'UnityEngine.JointMotor' )
  var i5009 = data
  i5008.m_TargetVelocity = i5009[0]
  i5008.m_Force = i5009[1]
  i5008.m_FreeSpin = i5009[2]
  return i5008
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.JointLimits' )
  var i5011 = data
  i5010.m_Min = i5011[0]
  i5010.m_Max = i5011[1]
  i5010.m_Bounciness = i5011[2]
  i5010.m_BounceMinVelocity = i5011[3]
  i5010.m_ContactDistance = i5011[4]
  i5010.minBounce = i5011[5]
  i5010.maxBounce = i5011[6]
  return i5010
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.JointDrive' )
  var i5013 = data
  i5012.m_PositionSpring = i5013[0]
  i5012.m_PositionDamper = i5013[1]
  i5012.m_MaximumForce = i5013[2]
  i5012.m_UseAcceleration = i5013[3]
  return i5012
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5014 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5015 = data
  i5014.m_Spring = i5015[0]
  i5014.m_Damper = i5015[1]
  return i5014
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5016 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5017 = data
  i5016.m_Limit = i5017[0]
  i5016.m_Bounciness = i5017[1]
  i5016.m_ContactDistance = i5017[2]
  return i5016
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5018 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5019 = data
  i5018.m_ExtremumSlip = i5019[0]
  i5018.m_ExtremumValue = i5019[1]
  i5018.m_AsymptoteSlip = i5019[2]
  i5018.m_AsymptoteValue = i5019[3]
  i5018.m_Stiffness = i5019[4]
  return i5018
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5020 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5021 = data
  i5020.m_LowerAngle = i5021[0]
  i5020.m_UpperAngle = i5021[1]
  return i5020
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5022 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5023 = data
  i5022.m_MotorSpeed = i5023[0]
  i5022.m_MaximumMotorTorque = i5023[1]
  return i5022
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5024 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5025 = data
  i5024.m_DampingRatio = i5025[0]
  i5024.m_Frequency = i5025[1]
  i5024.m_Angle = i5025[2]
  return i5024
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5026 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5027 = data
  i5026.m_LowerTranslation = i5027[0]
  i5026.m_UpperTranslation = i5027[1]
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5028 = root || new pc.UnityMaterial()
  var i5029 = data
  i5028.name = i5029[0]
  request.r(i5029[1], i5029[2], 0, i5028, 'shader')
  i5028.renderQueue = i5029[3]
  i5028.enableInstancing = !!i5029[4]
  var i5031 = i5029[5]
  var i5030 = []
  for(var i = 0; i < i5031.length; i += 1) {
    i5030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5031[i + 0]) );
  }
  i5028.floatParameters = i5030
  var i5033 = i5029[6]
  var i5032 = []
  for(var i = 0; i < i5033.length; i += 1) {
    i5032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5033[i + 0]) );
  }
  i5028.colorParameters = i5032
  var i5035 = i5029[7]
  var i5034 = []
  for(var i = 0; i < i5035.length; i += 1) {
    i5034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5035[i + 0]) );
  }
  i5028.vectorParameters = i5034
  var i5037 = i5029[8]
  var i5036 = []
  for(var i = 0; i < i5037.length; i += 1) {
    i5036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5037[i + 0]) );
  }
  i5028.textureParameters = i5036
  var i5039 = i5029[9]
  var i5038 = []
  for(var i = 0; i < i5039.length; i += 1) {
    i5038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5039[i + 0]) );
  }
  i5028.materialFlags = i5038
  return i5028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5043 = data
  i5042.name = i5043[0]
  i5042.value = i5043[1]
  return i5042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5047 = data
  i5046.name = i5047[0]
  i5046.value = new pc.Color(i5047[1], i5047[2], i5047[3], i5047[4])
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5051 = data
  i5050.name = i5051[0]
  i5050.value = new pc.Vec4( i5051[1], i5051[2], i5051[3], i5051[4] )
  return i5050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5055 = data
  i5054.name = i5055[0]
  request.r(i5055[1], i5055[2], 0, i5054, 'value')
  return i5054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5059 = data
  i5058.name = i5059[0]
  i5058.enabled = !!i5059[1]
  return i5058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5061 = data
  i5060.name = i5061[0]
  i5060.width = i5061[1]
  i5060.height = i5061[2]
  i5060.mipmapCount = i5061[3]
  i5060.anisoLevel = i5061[4]
  i5060.filterMode = i5061[5]
  i5060.hdr = !!i5061[6]
  i5060.format = i5061[7]
  i5060.wrapMode = i5061[8]
  i5060.alphaIsTransparency = !!i5061[9]
  i5060.alphaSource = i5061[10]
  i5060.graphicsFormat = i5061[11]
  i5060.sRGBTexture = !!i5061[12]
  i5060.desiredColorSpace = i5061[13]
  i5060.wrapU = i5061[14]
  i5060.wrapV = i5061[15]
  return i5060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5063 = data
  i5062.position = new pc.Vec3( i5063[0], i5063[1], i5063[2] )
  i5062.scale = new pc.Vec3( i5063[3], i5063[4], i5063[5] )
  i5062.rotation = new pc.Quat(i5063[6], i5063[7], i5063[8], i5063[9])
  return i5062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5065 = data
  i5064.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5065[0], i5064.main)
  i5064.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5065[1], i5064.colorBySpeed)
  i5064.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5065[2], i5064.colorOverLifetime)
  i5064.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5065[3], i5064.emission)
  i5064.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5065[4], i5064.rotationBySpeed)
  i5064.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5065[5], i5064.rotationOverLifetime)
  i5064.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5065[6], i5064.shape)
  i5064.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5065[7], i5064.sizeBySpeed)
  i5064.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5065[8], i5064.sizeOverLifetime)
  i5064.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5065[9], i5064.textureSheetAnimation)
  i5064.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5065[10], i5064.velocityOverLifetime)
  i5064.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5065[11], i5064.noise)
  i5064.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5065[12], i5064.inheritVelocity)
  i5064.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5065[13], i5064.forceOverLifetime)
  i5064.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5065[14], i5064.limitVelocityOverLifetime)
  i5064.useAutoRandomSeed = !!i5065[15]
  i5064.randomSeed = i5065[16]
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5066 = root || new pc.ParticleSystemMain()
  var i5067 = data
  i5066.duration = i5067[0]
  i5066.loop = !!i5067[1]
  i5066.prewarm = !!i5067[2]
  i5066.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[3], i5066.startDelay)
  i5066.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[4], i5066.startLifetime)
  i5066.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[5], i5066.startSpeed)
  i5066.startSize3D = !!i5067[6]
  i5066.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[7], i5066.startSizeX)
  i5066.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[8], i5066.startSizeY)
  i5066.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[9], i5066.startSizeZ)
  i5066.startRotation3D = !!i5067[10]
  i5066.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[11], i5066.startRotationX)
  i5066.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[12], i5066.startRotationY)
  i5066.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[13], i5066.startRotationZ)
  i5066.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5067[14], i5066.startColor)
  i5066.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5067[15], i5066.gravityModifier)
  i5066.simulationSpace = i5067[16]
  request.r(i5067[17], i5067[18], 0, i5066, 'customSimulationSpace')
  i5066.simulationSpeed = i5067[19]
  i5066.useUnscaledTime = !!i5067[20]
  i5066.scalingMode = i5067[21]
  i5066.playOnAwake = !!i5067[22]
  i5066.maxParticles = i5067[23]
  i5066.emitterVelocityMode = i5067[24]
  i5066.stopAction = i5067[25]
  return i5066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5068 = root || new pc.MinMaxCurve()
  var i5069 = data
  i5068.mode = i5069[0]
  i5068.curveMin = new pc.AnimationCurve( { keys_flow: i5069[1] } )
  i5068.curveMax = new pc.AnimationCurve( { keys_flow: i5069[2] } )
  i5068.curveMultiplier = i5069[3]
  i5068.constantMin = i5069[4]
  i5068.constantMax = i5069[5]
  return i5068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5070 = root || new pc.MinMaxGradient()
  var i5071 = data
  i5070.mode = i5071[0]
  i5070.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5071[1], i5070.gradientMin)
  i5070.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5071[2], i5070.gradientMax)
  i5070.colorMin = new pc.Color(i5071[3], i5071[4], i5071[5], i5071[6])
  i5070.colorMax = new pc.Color(i5071[7], i5071[8], i5071[9], i5071[10])
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5073 = data
  i5072.mode = i5073[0]
  var i5075 = i5073[1]
  var i5074 = []
  for(var i = 0; i < i5075.length; i += 1) {
    i5074.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5075[i + 0]) );
  }
  i5072.colorKeys = i5074
  var i5077 = i5073[2]
  var i5076 = []
  for(var i = 0; i < i5077.length; i += 1) {
    i5076.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5077[i + 0]) );
  }
  i5072.alphaKeys = i5076
  return i5072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5078 = root || new pc.ParticleSystemColorBySpeed()
  var i5079 = data
  i5078.enabled = !!i5079[0]
  i5078.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5079[1], i5078.color)
  i5078.range = new pc.Vec2( i5079[2], i5079[3] )
  return i5078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5083 = data
  i5082.color = new pc.Color(i5083[0], i5083[1], i5083[2], i5083[3])
  i5082.time = i5083[4]
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5087 = data
  i5086.alpha = i5087[0]
  i5086.time = i5087[1]
  return i5086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5088 = root || new pc.ParticleSystemColorOverLifetime()
  var i5089 = data
  i5088.enabled = !!i5089[0]
  i5088.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5089[1], i5088.color)
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5090 = root || new pc.ParticleSystemEmitter()
  var i5091 = data
  i5090.enabled = !!i5091[0]
  i5090.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[1], i5090.rateOverTime)
  i5090.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5091[2], i5090.rateOverDistance)
  var i5093 = i5091[3]
  var i5092 = []
  for(var i = 0; i < i5093.length; i += 1) {
    i5092.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5093[i + 0]) );
  }
  i5090.bursts = i5092
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5096 = root || new pc.ParticleSystemBurst()
  var i5097 = data
  i5096.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5097[0], i5096.count)
  i5096.cycleCount = i5097[1]
  i5096.minCount = i5097[2]
  i5096.maxCount = i5097[3]
  i5096.repeatInterval = i5097[4]
  i5096.time = i5097[5]
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5098 = root || new pc.ParticleSystemRotationBySpeed()
  var i5099 = data
  i5098.enabled = !!i5099[0]
  i5098.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5099[1], i5098.x)
  i5098.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5099[2], i5098.y)
  i5098.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5099[3], i5098.z)
  i5098.separateAxes = !!i5099[4]
  i5098.range = new pc.Vec2( i5099[5], i5099[6] )
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5100 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5101 = data
  i5100.enabled = !!i5101[0]
  i5100.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5101[1], i5100.x)
  i5100.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5101[2], i5100.y)
  i5100.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5101[3], i5100.z)
  i5100.separateAxes = !!i5101[4]
  return i5100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5102 = root || new pc.ParticleSystemShape()
  var i5103 = data
  i5102.enabled = !!i5103[0]
  i5102.shapeType = i5103[1]
  i5102.randomDirectionAmount = i5103[2]
  i5102.sphericalDirectionAmount = i5103[3]
  i5102.randomPositionAmount = i5103[4]
  i5102.alignToDirection = !!i5103[5]
  i5102.radius = i5103[6]
  i5102.radiusMode = i5103[7]
  i5102.radiusSpread = i5103[8]
  i5102.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[9], i5102.radiusSpeed)
  i5102.radiusThickness = i5103[10]
  i5102.angle = i5103[11]
  i5102.length = i5103[12]
  i5102.boxThickness = new pc.Vec3( i5103[13], i5103[14], i5103[15] )
  i5102.meshShapeType = i5103[16]
  request.r(i5103[17], i5103[18], 0, i5102, 'mesh')
  request.r(i5103[19], i5103[20], 0, i5102, 'meshRenderer')
  request.r(i5103[21], i5103[22], 0, i5102, 'skinnedMeshRenderer')
  i5102.useMeshMaterialIndex = !!i5103[23]
  i5102.meshMaterialIndex = i5103[24]
  i5102.useMeshColors = !!i5103[25]
  i5102.normalOffset = i5103[26]
  i5102.arc = i5103[27]
  i5102.arcMode = i5103[28]
  i5102.arcSpread = i5103[29]
  i5102.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[30], i5102.arcSpeed)
  i5102.donutRadius = i5103[31]
  i5102.position = new pc.Vec3( i5103[32], i5103[33], i5103[34] )
  i5102.rotation = new pc.Vec3( i5103[35], i5103[36], i5103[37] )
  i5102.scale = new pc.Vec3( i5103[38], i5103[39], i5103[40] )
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5104 = root || new pc.ParticleSystemSizeBySpeed()
  var i5105 = data
  i5104.enabled = !!i5105[0]
  i5104.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5105[1], i5104.x)
  i5104.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5105[2], i5104.y)
  i5104.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5105[3], i5104.z)
  i5104.separateAxes = !!i5105[4]
  i5104.range = new pc.Vec2( i5105[5], i5105[6] )
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5106 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5107 = data
  i5106.enabled = !!i5107[0]
  i5106.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5107[1], i5106.x)
  i5106.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5107[2], i5106.y)
  i5106.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5107[3], i5106.z)
  i5106.separateAxes = !!i5107[4]
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5108 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5109 = data
  i5108.enabled = !!i5109[0]
  i5108.mode = i5109[1]
  i5108.animation = i5109[2]
  i5108.numTilesX = i5109[3]
  i5108.numTilesY = i5109[4]
  i5108.useRandomRow = !!i5109[5]
  i5108.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[6], i5108.frameOverTime)
  i5108.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[7], i5108.startFrame)
  i5108.cycleCount = i5109[8]
  i5108.rowIndex = i5109[9]
  i5108.flipU = i5109[10]
  i5108.flipV = i5109[11]
  i5108.spriteCount = i5109[12]
  var i5111 = i5109[13]
  var i5110 = []
  for(var i = 0; i < i5111.length; i += 2) {
  request.r(i5111[i + 0], i5111[i + 1], 2, i5110, '')
  }
  i5108.sprites = i5110
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5114 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5115 = data
  i5114.enabled = !!i5115[0]
  i5114.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[1], i5114.x)
  i5114.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[2], i5114.y)
  i5114.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[3], i5114.z)
  i5114.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[4], i5114.radial)
  i5114.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[5], i5114.speedModifier)
  i5114.space = i5115[6]
  i5114.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[7], i5114.orbitalX)
  i5114.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[8], i5114.orbitalY)
  i5114.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[9], i5114.orbitalZ)
  i5114.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[10], i5114.orbitalOffsetX)
  i5114.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[11], i5114.orbitalOffsetY)
  i5114.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5115[12], i5114.orbitalOffsetZ)
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5116 = root || new pc.ParticleSystemNoise()
  var i5117 = data
  i5116.enabled = !!i5117[0]
  i5116.separateAxes = !!i5117[1]
  i5116.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[2], i5116.strengthX)
  i5116.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[3], i5116.strengthY)
  i5116.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[4], i5116.strengthZ)
  i5116.frequency = i5117[5]
  i5116.damping = !!i5117[6]
  i5116.octaveCount = i5117[7]
  i5116.octaveMultiplier = i5117[8]
  i5116.octaveScale = i5117[9]
  i5116.quality = i5117[10]
  i5116.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[11], i5116.scrollSpeed)
  i5116.scrollSpeedMultiplier = i5117[12]
  i5116.remapEnabled = !!i5117[13]
  i5116.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[14], i5116.remapX)
  i5116.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[15], i5116.remapY)
  i5116.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[16], i5116.remapZ)
  i5116.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[17], i5116.positionAmount)
  i5116.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[18], i5116.rotationAmount)
  i5116.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5117[19], i5116.sizeAmount)
  return i5116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5118 = root || new pc.ParticleSystemInheritVelocity()
  var i5119 = data
  i5118.enabled = !!i5119[0]
  i5118.mode = i5119[1]
  i5118.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5119[2], i5118.curve)
  return i5118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5120 = root || new pc.ParticleSystemForceOverLifetime()
  var i5121 = data
  i5120.enabled = !!i5121[0]
  i5120.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5121[1], i5120.x)
  i5120.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5121[2], i5120.y)
  i5120.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5121[3], i5120.z)
  i5120.space = i5121[4]
  i5120.randomized = !!i5121[5]
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5122 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5123 = data
  i5122.enabled = !!i5123[0]
  i5122.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5123[1], i5122.limit)
  i5122.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5123[2], i5122.limitX)
  i5122.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5123[3], i5122.limitY)
  i5122.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5123[4], i5122.limitZ)
  i5122.dampen = i5123[5]
  i5122.separateAxes = !!i5123[6]
  i5122.space = i5123[7]
  i5122.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5123[8], i5122.drag)
  i5122.multiplyDragByParticleSize = !!i5123[9]
  i5122.multiplyDragByParticleVelocity = !!i5123[10]
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5125 = data
  request.r(i5125[0], i5125[1], 0, i5124, 'mesh')
  i5124.meshCount = i5125[2]
  i5124.activeVertexStreamsCount = i5125[3]
  i5124.alignment = i5125[4]
  i5124.renderMode = i5125[5]
  i5124.sortMode = i5125[6]
  i5124.lengthScale = i5125[7]
  i5124.velocityScale = i5125[8]
  i5124.cameraVelocityScale = i5125[9]
  i5124.normalDirection = i5125[10]
  i5124.sortingFudge = i5125[11]
  i5124.minParticleSize = i5125[12]
  i5124.maxParticleSize = i5125[13]
  i5124.pivot = new pc.Vec3( i5125[14], i5125[15], i5125[16] )
  request.r(i5125[17], i5125[18], 0, i5124, 'trailMaterial')
  i5124.applyActiveColorSpace = !!i5125[19]
  i5124.enabled = !!i5125[20]
  request.r(i5125[21], i5125[22], 0, i5124, 'sharedMaterial')
  var i5127 = i5125[23]
  var i5126 = []
  for(var i = 0; i < i5127.length; i += 2) {
  request.r(i5127[i + 0], i5127[i + 1], 2, i5126, '')
  }
  i5124.sharedMaterials = i5126
  i5124.receiveShadows = !!i5125[24]
  i5124.shadowCastingMode = i5125[25]
  i5124.sortingLayerID = i5125[26]
  i5124.sortingOrder = i5125[27]
  i5124.lightmapIndex = i5125[28]
  i5124.lightmapSceneIndex = i5125[29]
  i5124.lightmapScaleOffset = new pc.Vec4( i5125[30], i5125[31], i5125[32], i5125[33] )
  i5124.lightProbeUsage = i5125[34]
  i5124.reflectionProbeUsage = i5125[35]
  return i5124
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i5130 = root || request.c( 'MergeEffect' )
  var i5131 = data
  request.r(i5131[0], i5131[1], 0, i5130, 'tf')
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5133 = data
  i5132.name = i5133[0]
  i5132.tagId = i5133[1]
  i5132.enabled = !!i5133[2]
  i5132.isStatic = !!i5133[3]
  i5132.layer = i5133[4]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5135 = data
  i5134.name = i5135[0]
  i5134.halfPrecision = !!i5135[1]
  i5134.useSimplification = !!i5135[2]
  i5134.useUInt32IndexFormat = !!i5135[3]
  i5134.vertexCount = i5135[4]
  i5134.aabb = i5135[5]
  var i5137 = i5135[6]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 1) {
    i5136.push( !!i5137[i + 0] );
  }
  i5134.streams = i5136
  i5134.vertices = i5135[7]
  var i5139 = i5135[8]
  var i5138 = []
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5139[i + 0]) );
  }
  i5134.subMeshes = i5138
  var i5141 = i5135[9]
  var i5140 = []
  for(var i = 0; i < i5141.length; i += 16) {
    i5140.push( new pc.Mat4().setData(i5141[i + 0], i5141[i + 1], i5141[i + 2], i5141[i + 3],  i5141[i + 4], i5141[i + 5], i5141[i + 6], i5141[i + 7],  i5141[i + 8], i5141[i + 9], i5141[i + 10], i5141[i + 11],  i5141[i + 12], i5141[i + 13], i5141[i + 14], i5141[i + 15]) );
  }
  i5134.bindposes = i5140
  var i5143 = i5135[10]
  var i5142 = []
  for(var i = 0; i < i5143.length; i += 1) {
    i5142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5143[i + 0]) );
  }
  i5134.blendShapes = i5142
  return i5134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5149 = data
  i5148.triangles = i5149[0]
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5155 = data
  i5154.name = i5155[0]
  var i5157 = i5155[1]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5157[i + 0]) );
  }
  i5154.frames = i5156
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5159 = data
  i5158.name = i5159[0]
  i5158.index = i5159[1]
  i5158.startup = !!i5159[2]
  return i5158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5161 = data
  i5160.pivot = new pc.Vec2( i5161[0], i5161[1] )
  i5160.anchorMin = new pc.Vec2( i5161[2], i5161[3] )
  i5160.anchorMax = new pc.Vec2( i5161[4], i5161[5] )
  i5160.sizeDelta = new pc.Vec2( i5161[6], i5161[7] )
  i5160.anchoredPosition3D = new pc.Vec3( i5161[8], i5161[9], i5161[10] )
  i5160.rotation = new pc.Quat(i5161[11], i5161[12], i5161[13], i5161[14])
  i5160.scale = new pc.Vec3( i5161[15], i5161[16], i5161[17] )
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5163 = data
  i5162.planeDistance = i5163[0]
  i5162.referencePixelsPerUnit = i5163[1]
  i5162.isFallbackOverlay = !!i5163[2]
  i5162.renderMode = i5163[3]
  i5162.renderOrder = i5163[4]
  i5162.sortingLayerName = i5163[5]
  i5162.sortingOrder = i5163[6]
  i5162.scaleFactor = i5163[7]
  request.r(i5163[8], i5163[9], 0, i5162, 'worldCamera')
  i5162.overrideSorting = !!i5163[10]
  i5162.pixelPerfect = !!i5163[11]
  i5162.targetDisplay = i5163[12]
  i5162.overridePixelPerfect = !!i5163[13]
  i5162.enabled = !!i5163[14]
  return i5162
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5164 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5165 = data
  i5164.m_UiScaleMode = i5165[0]
  i5164.m_ReferencePixelsPerUnit = i5165[1]
  i5164.m_ScaleFactor = i5165[2]
  i5164.m_ReferenceResolution = new pc.Vec2( i5165[3], i5165[4] )
  i5164.m_ScreenMatchMode = i5165[5]
  i5164.m_MatchWidthOrHeight = i5165[6]
  i5164.m_PhysicalUnit = i5165[7]
  i5164.m_FallbackScreenDPI = i5165[8]
  i5164.m_DefaultSpriteDPI = i5165[9]
  i5164.m_DynamicPixelsPerUnit = i5165[10]
  i5164.m_PresetInfoIsWorld = !!i5165[11]
  return i5164
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5166 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5167 = data
  i5166.m_IgnoreReversedGraphics = !!i5167[0]
  i5166.m_BlockingObjects = i5167[1]
  i5166.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5167[2] )
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5169 = data
  request.r(i5169[0], i5169[1], 0, i5168, 'animatorController')
  request.r(i5169[2], i5169[3], 0, i5168, 'avatar')
  i5168.updateMode = i5169[4]
  i5168.hasTransformHierarchy = !!i5169[5]
  i5168.applyRootMotion = !!i5169[6]
  var i5171 = i5169[7]
  var i5170 = []
  for(var i = 0; i < i5171.length; i += 2) {
  request.r(i5171[i + 0], i5171[i + 1], 2, i5170, '')
  }
  i5168.humanBones = i5170
  i5168.enabled = !!i5169[8]
  return i5168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5175 = data
  i5174.cullTransparentMesh = !!i5175[0]
  return i5174
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5176 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5177 = data
  i5176.m_hasFontAssetChanged = !!i5177[0]
  request.r(i5177[1], i5177[2], 0, i5176, 'm_baseMaterial')
  i5176.m_maskOffset = new pc.Vec4( i5177[3], i5177[4], i5177[5], i5177[6] )
  i5176.m_text = i5177[7]
  i5176.m_isRightToLeft = !!i5177[8]
  request.r(i5177[9], i5177[10], 0, i5176, 'm_fontAsset')
  request.r(i5177[11], i5177[12], 0, i5176, 'm_sharedMaterial')
  var i5179 = i5177[13]
  var i5178 = []
  for(var i = 0; i < i5179.length; i += 2) {
  request.r(i5179[i + 0], i5179[i + 1], 2, i5178, '')
  }
  i5176.m_fontSharedMaterials = i5178
  request.r(i5177[14], i5177[15], 0, i5176, 'm_fontMaterial')
  var i5181 = i5177[16]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 2) {
  request.r(i5181[i + 0], i5181[i + 1], 2, i5180, '')
  }
  i5176.m_fontMaterials = i5180
  i5176.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5177[17], i5177[18], i5177[19], i5177[20])
  i5176.m_fontColor = new pc.Color(i5177[21], i5177[22], i5177[23], i5177[24])
  i5176.m_enableVertexGradient = !!i5177[25]
  i5176.m_colorMode = i5177[26]
  i5176.m_fontColorGradient = request.d('TMPro.VertexGradient', i5177[27], i5176.m_fontColorGradient)
  request.r(i5177[28], i5177[29], 0, i5176, 'm_fontColorGradientPreset')
  request.r(i5177[30], i5177[31], 0, i5176, 'm_spriteAsset')
  i5176.m_tintAllSprites = !!i5177[32]
  request.r(i5177[33], i5177[34], 0, i5176, 'm_StyleSheet')
  i5176.m_TextStyleHashCode = i5177[35]
  i5176.m_overrideHtmlColors = !!i5177[36]
  i5176.m_faceColor = UnityEngine.Color32.ConstructColor(i5177[37], i5177[38], i5177[39], i5177[40])
  i5176.m_fontSize = i5177[41]
  i5176.m_fontSizeBase = i5177[42]
  i5176.m_fontWeight = i5177[43]
  i5176.m_enableAutoSizing = !!i5177[44]
  i5176.m_fontSizeMin = i5177[45]
  i5176.m_fontSizeMax = i5177[46]
  i5176.m_fontStyle = i5177[47]
  i5176.m_HorizontalAlignment = i5177[48]
  i5176.m_VerticalAlignment = i5177[49]
  i5176.m_textAlignment = i5177[50]
  i5176.m_characterSpacing = i5177[51]
  i5176.m_wordSpacing = i5177[52]
  i5176.m_lineSpacing = i5177[53]
  i5176.m_lineSpacingMax = i5177[54]
  i5176.m_paragraphSpacing = i5177[55]
  i5176.m_charWidthMaxAdj = i5177[56]
  i5176.m_TextWrappingMode = i5177[57]
  i5176.m_wordWrappingRatios = i5177[58]
  i5176.m_overflowMode = i5177[59]
  request.r(i5177[60], i5177[61], 0, i5176, 'm_linkedTextComponent')
  request.r(i5177[62], i5177[63], 0, i5176, 'parentLinkedComponent')
  i5176.m_enableKerning = !!i5177[64]
  var i5183 = i5177[65]
  var i5182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.add(i5183[i + 0]);
  }
  i5176.m_ActiveFontFeatures = i5182
  i5176.m_enableExtraPadding = !!i5177[66]
  i5176.checkPaddingRequired = !!i5177[67]
  i5176.m_isRichText = !!i5177[68]
  i5176.m_parseCtrlCharacters = !!i5177[69]
  i5176.m_isOrthographic = !!i5177[70]
  i5176.m_isCullingEnabled = !!i5177[71]
  i5176.m_horizontalMapping = i5177[72]
  i5176.m_verticalMapping = i5177[73]
  i5176.m_uvLineOffset = i5177[74]
  i5176.m_geometrySortingOrder = i5177[75]
  i5176.m_IsTextObjectScaleStatic = !!i5177[76]
  i5176.m_VertexBufferAutoSizeReduction = !!i5177[77]
  i5176.m_useMaxVisibleDescender = !!i5177[78]
  i5176.m_pageToDisplay = i5177[79]
  i5176.m_margin = new pc.Vec4( i5177[80], i5177[81], i5177[82], i5177[83] )
  i5176.m_isUsingLegacyAnimationComponent = !!i5177[84]
  i5176.m_isVolumetricText = !!i5177[85]
  request.r(i5177[86], i5177[87], 0, i5176, 'm_Material')
  i5176.m_EmojiFallbackSupport = !!i5177[88]
  i5176.m_Maskable = !!i5177[89]
  i5176.m_Color = new pc.Color(i5177[90], i5177[91], i5177[92], i5177[93])
  i5176.m_RaycastTarget = !!i5177[94]
  i5176.m_RaycastPadding = new pc.Vec4( i5177[95], i5177[96], i5177[97], i5177[98] )
  return i5176
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5184 = root || request.c( 'TMPro.VertexGradient' )
  var i5185 = data
  i5184.topLeft = new pc.Color(i5185[0], i5185[1], i5185[2], i5185[3])
  i5184.topRight = new pc.Color(i5185[4], i5185[5], i5185[6], i5185[7])
  i5184.bottomLeft = new pc.Color(i5185[8], i5185[9], i5185[10], i5185[11])
  i5184.bottomRight = new pc.Color(i5185[12], i5185[13], i5185[14], i5185[15])
  return i5184
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i5188 = root || request.c( 'UnityEngine.UI.Slider' )
  var i5189 = data
  request.r(i5189[0], i5189[1], 0, i5188, 'm_FillRect')
  request.r(i5189[2], i5189[3], 0, i5188, 'm_HandleRect')
  i5188.m_Direction = i5189[4]
  i5188.m_MinValue = i5189[5]
  i5188.m_MaxValue = i5189[6]
  i5188.m_WholeNumbers = !!i5189[7]
  i5188.m_Value = i5189[8]
  i5188.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i5189[9], i5188.m_OnValueChanged)
  i5188.m_Navigation = request.d('UnityEngine.UI.Navigation', i5189[10], i5188.m_Navigation)
  i5188.m_Transition = i5189[11]
  i5188.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5189[12], i5188.m_Colors)
  i5188.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5189[13], i5188.m_SpriteState)
  i5188.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5189[14], i5188.m_AnimationTriggers)
  i5188.m_Interactable = !!i5189[15]
  request.r(i5189[16], i5189[17], 0, i5188, 'm_TargetGraphic')
  return i5188
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i5190 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i5191 = data
  i5190.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5191[0], i5190.m_PersistentCalls)
  return i5190
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5192 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5193 = data
  var i5195 = i5193[0]
  var i5194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5195.length; i += 1) {
    i5194.add(request.d('UnityEngine.Events.PersistentCall', i5195[i + 0]));
  }
  i5192.m_Calls = i5194
  return i5192
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5198 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5199 = data
  request.r(i5199[0], i5199[1], 0, i5198, 'm_Target')
  i5198.m_TargetAssemblyTypeName = i5199[2]
  i5198.m_MethodName = i5199[3]
  i5198.m_Mode = i5199[4]
  i5198.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5199[5], i5198.m_Arguments)
  i5198.m_CallState = i5199[6]
  return i5198
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5200 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5201 = data
  i5200.m_Mode = i5201[0]
  i5200.m_WrapAround = !!i5201[1]
  request.r(i5201[2], i5201[3], 0, i5200, 'm_SelectOnUp')
  request.r(i5201[4], i5201[5], 0, i5200, 'm_SelectOnDown')
  request.r(i5201[6], i5201[7], 0, i5200, 'm_SelectOnLeft')
  request.r(i5201[8], i5201[9], 0, i5200, 'm_SelectOnRight')
  return i5200
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5202 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5203 = data
  i5202.m_NormalColor = new pc.Color(i5203[0], i5203[1], i5203[2], i5203[3])
  i5202.m_HighlightedColor = new pc.Color(i5203[4], i5203[5], i5203[6], i5203[7])
  i5202.m_PressedColor = new pc.Color(i5203[8], i5203[9], i5203[10], i5203[11])
  i5202.m_SelectedColor = new pc.Color(i5203[12], i5203[13], i5203[14], i5203[15])
  i5202.m_DisabledColor = new pc.Color(i5203[16], i5203[17], i5203[18], i5203[19])
  i5202.m_ColorMultiplier = i5203[20]
  i5202.m_FadeDuration = i5203[21]
  return i5202
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5204 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5205 = data
  request.r(i5205[0], i5205[1], 0, i5204, 'm_HighlightedSprite')
  request.r(i5205[2], i5205[3], 0, i5204, 'm_PressedSprite')
  request.r(i5205[4], i5205[5], 0, i5204, 'm_SelectedSprite')
  request.r(i5205[6], i5205[7], 0, i5204, 'm_DisabledSprite')
  return i5204
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5206 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5207 = data
  i5206.m_NormalTrigger = i5207[0]
  i5206.m_HighlightedTrigger = i5207[1]
  i5206.m_PressedTrigger = i5207[2]
  i5206.m_SelectedTrigger = i5207[3]
  i5206.m_DisabledTrigger = i5207[4]
  return i5206
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5208 = root || request.c( 'UnityEngine.UI.Image' )
  var i5209 = data
  request.r(i5209[0], i5209[1], 0, i5208, 'm_Sprite')
  i5208.m_Type = i5209[2]
  i5208.m_PreserveAspect = !!i5209[3]
  i5208.m_FillCenter = !!i5209[4]
  i5208.m_FillMethod = i5209[5]
  i5208.m_FillAmount = i5209[6]
  i5208.m_FillClockwise = !!i5209[7]
  i5208.m_FillOrigin = i5209[8]
  i5208.m_UseSpriteMesh = !!i5209[9]
  i5208.m_PixelsPerUnitMultiplier = i5209[10]
  request.r(i5209[11], i5209[12], 0, i5208, 'm_Material')
  i5208.m_Maskable = !!i5209[13]
  i5208.m_Color = new pc.Color(i5209[14], i5209[15], i5209[16], i5209[17])
  i5208.m_RaycastTarget = !!i5209[18]
  i5208.m_RaycastPadding = new pc.Vec4( i5209[19], i5209[20], i5209[21], i5209[22] )
  return i5208
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5210 = root || request.c( 'UnityEngine.UI.Button' )
  var i5211 = data
  i5210.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5211[0], i5210.m_OnClick)
  i5210.m_Navigation = request.d('UnityEngine.UI.Navigation', i5211[1], i5210.m_Navigation)
  i5210.m_Transition = i5211[2]
  i5210.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5211[3], i5210.m_Colors)
  i5210.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5211[4], i5210.m_SpriteState)
  i5210.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5211[5], i5210.m_AnimationTriggers)
  i5210.m_Interactable = !!i5211[6]
  request.r(i5211[7], i5211[8], 0, i5210, 'm_TargetGraphic')
  return i5210
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5212 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5213 = data
  i5212.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5213[0], i5212.m_PersistentCalls)
  return i5212
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5214 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5215 = data
  request.r(i5215[0], i5215[1], 0, i5214, 'm_ObjectArgument')
  i5214.m_ObjectArgumentAssemblyTypeName = i5215[2]
  i5214.m_IntArgument = i5215[3]
  i5214.m_FloatArgument = i5215[4]
  i5214.m_StringArgument = i5215[5]
  i5214.m_BoolArgument = !!i5215[6]
  return i5214
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i5216 = root || request.c( 'Ply_Pool' )
  var i5217 = data
  var i5219 = i5217[0]
  var i5218 = []
  for(var i = 0; i < i5219.length; i += 1) {
    i5218.push( request.d('Ply_Pool+PoolAmount', i5219[i + 0]) );
  }
  i5216.poolAmounts = i5218
  request.r(i5217[1], i5217[2], 0, i5216, 'poolHolder')
  return i5216
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i5222 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i5223 = data
  i5222.type = i5223[0]
  i5222.amount = i5223[1]
  request.r(i5223[2], i5223[3], 0, i5222, 'gameUnit')
  return i5222
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5224 = root || request.c( 'Ply_SoundManager' )
  var i5225 = data
  var i5227 = i5225[0]
  var i5226 = []
  for(var i = 0; i < i5227.length; i += 2) {
  request.r(i5227[i + 0], i5227[i + 1], 2, i5226, '')
  }
  i5224.audioClips = i5226
  request.r(i5225[1], i5225[2], 0, i5224, 'sound')
  return i5224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5231 = data
  request.r(i5231[0], i5231[1], 0, i5230, 'clip')
  request.r(i5231[2], i5231[3], 0, i5230, 'outputAudioMixerGroup')
  i5230.playOnAwake = !!i5231[4]
  i5230.loop = !!i5231[5]
  i5230.time = i5231[6]
  i5230.volume = i5231[7]
  i5230.pitch = i5231[8]
  i5230.enabled = !!i5231[9]
  return i5230
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5232 = root || request.c( 'GameManager' )
  var i5233 = data
  i5232.isPlaying = !!i5233[0]
  i5232.isTutorial = !!i5233[1]
  i5232.isGotoStore = !!i5233[2]
  i5232.countMove = i5233[3]
  i5232.maxMove = i5233[4]
  i5232.startLayer = i5233[5]
  i5232.currentLayer = i5233[6]
  request.r(i5233[7], i5233[8], 0, i5232, 'mainBox')
  request.r(i5233[9], i5233[10], 0, i5232, 'handTutorial')
  i5232.tutorialDelay = i5233[11]
  return i5232
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5234 = root || request.c( 'UIManager' )
  var i5235 = data
  request.r(i5235[0], i5235[1], 0, i5234, 'winUI')
  request.r(i5235[2], i5235[3], 0, i5234, 'loseUI')
  request.r(i5235[4], i5235[5], 0, i5234, 'tutorial')
  request.r(i5235[6], i5235[7], 0, i5234, 'verticalUI')
  request.r(i5235[8], i5235[9], 0, i5234, 'horizontalUI')
  request.r(i5235[10], i5235[11], 0, i5234, 'downloadBtnVertical')
  request.r(i5235[12], i5235[13], 0, i5234, 'dowloadBtnHorizontal')
  request.r(i5235[14], i5235[15], 0, i5234, 'progressSlider')
  request.r(i5235[16], i5235[17], 0, i5234, 'progressText')
  i5234.maxProgressItems = i5235[18]
  i5234.startProgressItems = i5235[19]
  i5234.screenWidth = i5235[20]
  i5234.screenHeight = i5235[21]
  i5234.scaleHeightOnWidth = i5235[22]
  i5234.isVertical = !!i5235[23]
  request.r(i5235[24], i5235[25], 0, i5234, 'cam')
  i5234.introZoomOutMultiplier = i5235[26]
  i5234.cameraZoomDuration = i5235[27]
  i5234.useContinuousScaling = !!i5235[28]
  i5234.baseOrthographicSize = i5235[29]
  i5234.baseAspect = i5235[30]
  i5234.landscapeSize = i5235[31]
  i5234.defaultPortraitSize = i5235[32]
  var i5237 = i5235[33]
  var i5236 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.add(request.d('ScreenScaleStep', i5237[i + 0]));
  }
  i5234.discreteScaleSteps = i5236
  i5234.usePerspectiveCamera = !!i5235[34]
  request.r(i5235[35], i5235[36], 0, i5234, 'perspectiveFocus')
  i5234.perspectiveFocusDistance = i5235[37]
  i5234.perspectivePadding = i5235[38]
  i5234.fitRendererBounds = !!i5235[39]
  request.r(i5235[40], i5235[41], 0, i5234, 'boundsRoot')
  var i5239 = i5235[42]
  var i5238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i5239.length; i += 2) {
  request.r(i5239[i + 0], i5239[i + 1], 1, i5238, '')
  }
  i5234.boundsRenderers = i5238
  return i5234
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i5242 = root || request.c( 'ScreenScaleStep' )
  var i5243 = data
  i5242.heightOnWidthRatio = i5243[0]
  i5242.orthographicSize = i5243[1]
  return i5242
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5246 = root || request.c( 'InputManager' )
  var i5247 = data
  i5246.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i5247[0] )
  i5246.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i5247[1] )
  i5246.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i5247[2] )
  i5246.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i5247[3] )
  i5246.isDragging = !!i5247[4]
  request.r(i5247[5], i5247[6], 0, i5246, 'mainCamera')
  return i5246
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i5248 = root || request.c( 'ItemSetupTool' )
  var i5249 = data
  request.r(i5249[0], i5249[1], 0, i5248, 'spritesParent')
  request.r(i5249[2], i5249[3], 0, i5248, 'holdersParent')
  i5248.shadowSuffix = i5249[4]
  i5248.holderPrefix = i5249[5]
  i5248.holdersParentName = i5249[6]
  i5248.colliderDepth = i5249[7]
  i5248.colliderSizeMultiplier = i5249[8]
  i5248.generatedShadowColor = new pc.Color(i5249[9], i5249[10], i5249[11], i5249[12])
  i5248.fadedBlackShadowColor = new pc.Color(i5249[13], i5249[14], i5249[15], i5249[16])
  i5248.generatedShadowLocalOffset = new pc.Vec3( i5249[17], i5249[18], i5249[19] )
  i5248.itemLayerName = i5249[20]
  i5248.holderLayerName = i5249[21]
  return i5248
}

Deserializers["CameraController"] = function (request, data, root) {
  var i5250 = root || request.c( 'CameraController' )
  var i5251 = data
  request.r(i5251[0], i5251[1], 0, i5250, 'targetCamera')
  i5250.enableZoom = !!i5251[2]
  i5250.minZoomRatio = i5251[3]
  i5250.maxZoomRatio = i5251[4]
  i5250.mouseWheelZoomSpeed = i5251[5]
  i5250.pinchZoomSpeed = i5251[6]
  i5250.enableDrag = !!i5251[7]
  i5250.horizontalOnly = !!i5251[8]
  i5250.dragSensitivity = i5251[9]
  i5250.maxHorizontalOffset = i5251[10]
  i5250.maxVerticalOffset = i5251[11]
  return i5250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5253 = data
  i5252.aspect = i5253[0]
  i5252.orthographic = !!i5253[1]
  i5252.orthographicSize = i5253[2]
  i5252.backgroundColor = new pc.Color(i5253[3], i5253[4], i5253[5], i5253[6])
  i5252.nearClipPlane = i5253[7]
  i5252.farClipPlane = i5253[8]
  i5252.fieldOfView = i5253[9]
  i5252.depth = i5253[10]
  i5252.clearFlags = i5253[11]
  i5252.cullingMask = i5253[12]
  i5252.rect = i5253[13]
  request.r(i5253[14], i5253[15], 0, i5252, 'targetTexture')
  i5252.usePhysicalProperties = !!i5253[16]
  i5252.focalLength = i5253[17]
  i5252.sensorSize = new pc.Vec2( i5253[18], i5253[19] )
  i5252.lensShift = new pc.Vec2( i5253[20], i5253[21] )
  i5252.gateFit = i5253[22]
  i5252.commandBufferCount = i5253[23]
  i5252.cameraType = i5253[24]
  i5252.enabled = !!i5253[25]
  return i5252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5255 = data
  i5254.type = i5255[0]
  i5254.color = new pc.Color(i5255[1], i5255[2], i5255[3], i5255[4])
  i5254.cullingMask = i5255[5]
  i5254.intensity = i5255[6]
  i5254.range = i5255[7]
  i5254.spotAngle = i5255[8]
  i5254.shadows = i5255[9]
  i5254.shadowNormalBias = i5255[10]
  i5254.shadowBias = i5255[11]
  i5254.shadowStrength = i5255[12]
  i5254.shadowResolution = i5255[13]
  i5254.lightmapBakeType = i5255[14]
  i5254.renderMode = i5255[15]
  request.r(i5255[16], i5255[17], 0, i5254, 'cookie')
  i5254.cookieSize = i5255[18]
  i5254.shadowNearPlane = i5255[19]
  i5254.occlusionMaskChannel = i5255[20]
  i5254.enabled = !!i5255[21]
  return i5254
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5256 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5257 = data
  request.r(i5257[0], i5257[1], 0, i5256, 'm_FirstSelected')
  i5256.m_sendNavigationEvents = !!i5257[2]
  i5256.m_DragThreshold = i5257[3]
  return i5256
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5258 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5259 = data
  i5258.m_HorizontalAxis = i5259[0]
  i5258.m_VerticalAxis = i5259[1]
  i5258.m_SubmitButton = i5259[2]
  i5258.m_CancelButton = i5259[3]
  i5258.m_InputActionsPerSecond = i5259[4]
  i5258.m_RepeatDelay = i5259[5]
  i5258.m_ForceModuleActive = !!i5259[6]
  i5258.m_SendPointerHoverToParent = !!i5259[7]
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5261 = data
  i5260.color = new pc.Color(i5261[0], i5261[1], i5261[2], i5261[3])
  request.r(i5261[4], i5261[5], 0, i5260, 'sprite')
  i5260.flipX = !!i5261[6]
  i5260.flipY = !!i5261[7]
  i5260.drawMode = i5261[8]
  i5260.size = new pc.Vec2( i5261[9], i5261[10] )
  i5260.tileMode = i5261[11]
  i5260.adaptiveModeThreshold = i5261[12]
  i5260.maskInteraction = i5261[13]
  i5260.spriteSortPoint = i5261[14]
  i5260.enabled = !!i5261[15]
  request.r(i5261[16], i5261[17], 0, i5260, 'sharedMaterial')
  var i5263 = i5261[18]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 2) {
  request.r(i5263[i + 0], i5263[i + 1], 2, i5262, '')
  }
  i5260.sharedMaterials = i5262
  i5260.receiveShadows = !!i5261[19]
  i5260.shadowCastingMode = i5261[20]
  i5260.sortingLayerID = i5261[21]
  i5260.sortingOrder = i5261[22]
  i5260.lightmapIndex = i5261[23]
  i5260.lightmapSceneIndex = i5261[24]
  i5260.lightmapScaleOffset = new pc.Vec4( i5261[25], i5261[26], i5261[27], i5261[28] )
  i5260.lightProbeUsage = i5261[29]
  i5260.reflectionProbeUsage = i5261[30]
  return i5260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5265 = data
  i5264.center = new pc.Vec3( i5265[0], i5265[1], i5265[2] )
  i5264.radius = i5265[3]
  i5264.enabled = !!i5265[4]
  i5264.isTrigger = !!i5265[5]
  request.r(i5265[6], i5265[7], 0, i5264, 'material')
  return i5264
}

Deserializers["Box"] = function (request, data, root) {
  var i5266 = root || request.c( 'Box' )
  var i5267 = data
  i5266.useBox = !!i5267[0]
  i5266.spawnMode = i5267[1]
  var i5269 = i5267[2]
  var i5268 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5269.length; i += 2) {
  request.r(i5269[i + 0], i5269[i + 1], 1, i5268, '')
  }
  i5266.dynamicItems = i5268
  var i5271 = i5267[3]
  var i5270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5271.length; i += 2) {
  request.r(i5271[i + 0], i5271[i + 1], 1, i5270, '')
  }
  i5266.spawnTargets = i5270
  i5266.initialSpawnCount = i5267[4]
  i5266.revealDuration = i5267[5]
  i5266.showInitialBatchShadowsOnSpawn = !!i5267[6]
  request.r(i5267[7], i5267[8], 0, i5266, 'graphicController')
  return i5266
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i5276 = root || request.c( 'BoxGraphicController' )
  var i5277 = data
  request.r(i5277[0], i5277[1], 0, i5276, 'skeletonAnimation')
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5279 = data
  request.r(i5279[0], i5279[1], 0, i5278, 'sharedMesh')
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5281 = data
  request.r(i5281[0], i5281[1], 0, i5280, 'additionalVertexStreams')
  i5280.enabled = !!i5281[2]
  request.r(i5281[3], i5281[4], 0, i5280, 'sharedMaterial')
  var i5283 = i5281[5]
  var i5282 = []
  for(var i = 0; i < i5283.length; i += 2) {
  request.r(i5283[i + 0], i5283[i + 1], 2, i5282, '')
  }
  i5280.sharedMaterials = i5282
  i5280.receiveShadows = !!i5281[6]
  i5280.shadowCastingMode = i5281[7]
  i5280.sortingLayerID = i5281[8]
  i5280.sortingOrder = i5281[9]
  i5280.lightmapIndex = i5281[10]
  i5280.lightmapSceneIndex = i5281[11]
  i5280.lightmapScaleOffset = new pc.Vec4( i5281[12], i5281[13], i5281[14], i5281[15] )
  i5280.lightProbeUsage = i5281[16]
  i5280.reflectionProbeUsage = i5281[17]
  return i5280
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i5284 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i5285 = data
  i5284.loop = !!i5285[0]
  i5284.timeScale = i5285[1]
  request.r(i5285[2], i5285[3], 0, i5284, 'skeletonDataAsset')
  i5284.initialSkinName = i5285[4]
  i5284.fixPrefabOverrideViaMeshFilter = i5285[5]
  i5284.initialFlipX = !!i5285[6]
  i5284.initialFlipY = !!i5285[7]
  i5284.updateWhenInvisible = i5285[8]
  i5284.zSpacing = i5285[9]
  i5284.useClipping = !!i5285[10]
  i5284.immutableTriangles = !!i5285[11]
  i5284.pmaVertexColors = !!i5285[12]
  i5284.clearStateOnDisable = !!i5285[13]
  i5284.tintBlack = !!i5285[14]
  i5284.singleSubmesh = !!i5285[15]
  i5284.fixDrawOrder = !!i5285[16]
  i5284.addNormals = !!i5285[17]
  i5284.calculateTangents = !!i5285[18]
  i5284.maskInteraction = i5285[19]
  i5284.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i5285[20], i5284.maskMaterials)
  i5284.disableRenderingOnOverride = !!i5285[21]
  i5284._animationName = i5285[22]
  var i5287 = i5285[23]
  var i5286 = []
  for(var i = 0; i < i5287.length; i += 1) {
    i5286.push( i5287[i + 0] );
  }
  i5284.separatorSlotNames = i5286
  return i5284
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i5288 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i5289 = data
  var i5291 = i5289[0]
  var i5290 = []
  for(var i = 0; i < i5291.length; i += 2) {
  request.r(i5291[i + 0], i5291[i + 1], 2, i5290, '')
  }
  i5288.materialsMaskDisabled = i5290
  var i5293 = i5289[1]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 2) {
  request.r(i5293[i + 0], i5293[i + 1], 2, i5292, '')
  }
  i5288.materialsInsideMask = i5292
  var i5295 = i5289[2]
  var i5294 = []
  for(var i = 0; i < i5295.length; i += 2) {
  request.r(i5295[i + 0], i5295[i + 1], 2, i5294, '')
  }
  i5288.materialsOutsideMask = i5294
  return i5288
}

Deserializers["Item"] = function (request, data, root) {
  var i5298 = root || request.c( 'Item' )
  var i5299 = data
  i5298.placeSoundType = i5299[0]
  i5298.id = i5299[1]
  i5298.currentState = i5299[2]
  i5298.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i5299[3] )
  i5298.scaleOnSpawn = !!i5299[4]
  i5298.spawnScaleMultiplier = i5299[5]
  request.r(i5299[6], i5299[7], 0, i5298, 'correctHolderTransform')
  request.r(i5299[8], i5299[9], 0, i5298, 'shadowOnHolder')
  i5298.canShowShadowHint = !!i5299[10]
  i5298.waitingPosition = new pc.Vec3( i5299[11], i5299[12], i5299[13] )
  request.r(i5299[14], i5299[15], 0, i5298, 'spriteRenderer')
  return i5298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5301 = data
  i5300.center = new pc.Vec3( i5301[0], i5301[1], i5301[2] )
  i5300.size = new pc.Vec3( i5301[3], i5301[4], i5301[5] )
  i5300.enabled = !!i5301[6]
  i5300.isTrigger = !!i5301[7]
  request.r(i5301[8], i5301[9], 0, i5300, 'material')
  return i5300
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i5302 = root || request.c( 'PSD_Tool' )
  var i5303 = data
  var i5305 = i5303[0]
  var i5304 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5305.length; i += 2) {
  request.r(i5305[i + 0], i5305[i + 1], 1, i5304, '')
  }
  i5302.sprites = i5304
  request.r(i5303[1], i5303[2], 0, i5302, 'holder')
  var i5307 = i5303[3]
  var i5306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5307.length; i += 2) {
  request.r(i5307[i + 0], i5307[i + 1], 1, i5306, '')
  }
  i5302.childGameObjects = i5306
  return i5302
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i5312 = root || request.c( 'ItemHolder' )
  var i5313 = data
  i5312.id = i5313[0]
  return i5312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5315 = data
  i5314.ambientIntensity = i5315[0]
  i5314.reflectionIntensity = i5315[1]
  i5314.ambientMode = i5315[2]
  i5314.ambientLight = new pc.Color(i5315[3], i5315[4], i5315[5], i5315[6])
  i5314.ambientSkyColor = new pc.Color(i5315[7], i5315[8], i5315[9], i5315[10])
  i5314.ambientGroundColor = new pc.Color(i5315[11], i5315[12], i5315[13], i5315[14])
  i5314.ambientEquatorColor = new pc.Color(i5315[15], i5315[16], i5315[17], i5315[18])
  i5314.fogColor = new pc.Color(i5315[19], i5315[20], i5315[21], i5315[22])
  i5314.fogEndDistance = i5315[23]
  i5314.fogStartDistance = i5315[24]
  i5314.fogDensity = i5315[25]
  i5314.fog = !!i5315[26]
  request.r(i5315[27], i5315[28], 0, i5314, 'skybox')
  i5314.fogMode = i5315[29]
  var i5317 = i5315[30]
  var i5316 = []
  for(var i = 0; i < i5317.length; i += 1) {
    i5316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5317[i + 0]) );
  }
  i5314.lightmaps = i5316
  i5314.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5315[31], i5314.lightProbes)
  i5314.lightmapsMode = i5315[32]
  i5314.mixedBakeMode = i5315[33]
  i5314.environmentLightingMode = i5315[34]
  i5314.ambientProbe = new pc.SphericalHarmonicsL2(i5315[35])
  i5314.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5315[36])
  i5314.useReferenceAmbientProbe = !!i5315[37]
  request.r(i5315[38], i5315[39], 0, i5314, 'customReflection')
  request.r(i5315[40], i5315[41], 0, i5314, 'defaultReflection')
  i5314.defaultReflectionMode = i5315[42]
  i5314.defaultReflectionResolution = i5315[43]
  i5314.sunLightObjectId = i5315[44]
  i5314.pixelLightCount = i5315[45]
  i5314.defaultReflectionHDR = !!i5315[46]
  i5314.hasLightDataAsset = !!i5315[47]
  i5314.hasManualGenerate = !!i5315[48]
  return i5314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5321 = data
  request.r(i5321[0], i5321[1], 0, i5320, 'lightmapColor')
  request.r(i5321[2], i5321[3], 0, i5320, 'lightmapDirection')
  request.r(i5321[4], i5321[5], 0, i5320, 'shadowMask')
  return i5320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5322 = root || new UnityEngine.LightProbes()
  var i5323 = data
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5331 = data
  var i5333 = i5331[0]
  var i5332 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5333.length; i += 1) {
    i5332.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5333[i + 0]));
  }
  i5330.ShaderCompilationErrors = i5332
  i5330.name = i5331[1]
  i5330.guid = i5331[2]
  var i5335 = i5331[3]
  var i5334 = []
  for(var i = 0; i < i5335.length; i += 1) {
    i5334.push( i5335[i + 0] );
  }
  i5330.shaderDefinedKeywords = i5334
  var i5337 = i5331[4]
  var i5336 = []
  for(var i = 0; i < i5337.length; i += 1) {
    i5336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5337[i + 0]) );
  }
  i5330.passes = i5336
  var i5339 = i5331[5]
  var i5338 = []
  for(var i = 0; i < i5339.length; i += 1) {
    i5338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5339[i + 0]) );
  }
  i5330.usePasses = i5338
  var i5341 = i5331[6]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 1) {
    i5340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5341[i + 0]) );
  }
  i5330.defaultParameterValues = i5340
  request.r(i5331[7], i5331[8], 0, i5330, 'unityFallbackShader')
  i5330.readDepth = !!i5331[9]
  i5330.hasDepthOnlyPass = !!i5331[10]
  i5330.isCreatedByShaderGraph = !!i5331[11]
  i5330.disableBatching = !!i5331[12]
  i5330.compiled = !!i5331[13]
  return i5330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5345 = data
  i5344.shaderName = i5345[0]
  i5344.errorMessage = i5345[1]
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5348 = root || new pc.UnityShaderPass()
  var i5349 = data
  i5348.id = i5349[0]
  i5348.subShaderIndex = i5349[1]
  i5348.name = i5349[2]
  i5348.passType = i5349[3]
  i5348.grabPassTextureName = i5349[4]
  i5348.usePass = !!i5349[5]
  i5348.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[6], i5348.zTest)
  i5348.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[7], i5348.zWrite)
  i5348.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[8], i5348.culling)
  i5348.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5349[9], i5348.blending)
  i5348.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5349[10], i5348.alphaBlending)
  i5348.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[11], i5348.colorWriteMask)
  i5348.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[12], i5348.offsetUnits)
  i5348.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[13], i5348.offsetFactor)
  i5348.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[14], i5348.stencilRef)
  i5348.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[15], i5348.stencilReadMask)
  i5348.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5349[16], i5348.stencilWriteMask)
  i5348.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5349[17], i5348.stencilOp)
  i5348.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5349[18], i5348.stencilOpFront)
  i5348.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5349[19], i5348.stencilOpBack)
  var i5351 = i5349[20]
  var i5350 = []
  for(var i = 0; i < i5351.length; i += 1) {
    i5350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5351[i + 0]) );
  }
  i5348.tags = i5350
  var i5353 = i5349[21]
  var i5352 = []
  for(var i = 0; i < i5353.length; i += 1) {
    i5352.push( i5353[i + 0] );
  }
  i5348.passDefinedKeywords = i5352
  var i5355 = i5349[22]
  var i5354 = []
  for(var i = 0; i < i5355.length; i += 1) {
    i5354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5355[i + 0]) );
  }
  i5348.passDefinedKeywordGroups = i5354
  var i5357 = i5349[23]
  var i5356 = []
  for(var i = 0; i < i5357.length; i += 1) {
    i5356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5357[i + 0]) );
  }
  i5348.variants = i5356
  var i5359 = i5349[24]
  var i5358 = []
  for(var i = 0; i < i5359.length; i += 1) {
    i5358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5359[i + 0]) );
  }
  i5348.excludedVariants = i5358
  i5348.hasDepthReader = !!i5349[25]
  return i5348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5361 = data
  i5360.val = i5361[0]
  i5360.name = i5361[1]
  return i5360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5363 = data
  i5362.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5363[0], i5362.src)
  i5362.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5363[1], i5362.dst)
  i5362.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5363[2], i5362.op)
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5365 = data
  i5364.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5365[0], i5364.pass)
  i5364.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5365[1], i5364.fail)
  i5364.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5365[2], i5364.zFail)
  i5364.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5365[3], i5364.comp)
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5369 = data
  i5368.name = i5369[0]
  i5368.value = i5369[1]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5373 = data
  var i5375 = i5373[0]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( i5375[i + 0] );
  }
  i5372.keywords = i5374
  i5372.hasDiscard = !!i5373[1]
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5379 = data
  i5378.passId = i5379[0]
  i5378.subShaderIndex = i5379[1]
  var i5381 = i5379[2]
  var i5380 = []
  for(var i = 0; i < i5381.length; i += 1) {
    i5380.push( i5381[i + 0] );
  }
  i5378.keywords = i5380
  i5378.vertexProgram = i5379[3]
  i5378.fragmentProgram = i5379[4]
  i5378.exportedForWebGl2 = !!i5379[5]
  i5378.readDepth = !!i5379[6]
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5385 = data
  request.r(i5385[0], i5385[1], 0, i5384, 'shader')
  i5384.pass = i5385[2]
  return i5384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5389 = data
  i5388.name = i5389[0]
  i5388.type = i5389[1]
  i5388.value = new pc.Vec4( i5389[2], i5389[3], i5389[4], i5389[5] )
  i5388.textureValue = i5389[6]
  i5388.shaderPropertyFlag = i5389[7]
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5391 = data
  i5390.name = i5391[0]
  request.r(i5391[1], i5391[2], 0, i5390, 'texture')
  i5390.aabb = i5391[3]
  i5390.vertices = i5391[4]
  i5390.triangles = i5391[5]
  i5390.textureRect = UnityEngine.Rect.MinMaxRect(i5391[6], i5391[7], i5391[8], i5391[9])
  i5390.packedRect = UnityEngine.Rect.MinMaxRect(i5391[10], i5391[11], i5391[12], i5391[13])
  i5390.border = new pc.Vec4( i5391[14], i5391[15], i5391[16], i5391[17] )
  i5390.transparency = i5391[18]
  i5390.bounds = i5391[19]
  i5390.pixelsPerUnit = i5391[20]
  i5390.textureWidth = i5391[21]
  i5390.textureHeight = i5391[22]
  i5390.nativeSize = new pc.Vec2( i5391[23], i5391[24] )
  i5390.pivot = new pc.Vec2( i5391[25], i5391[26] )
  i5390.textureRectOffset = new pc.Vec2( i5391[27], i5391[28] )
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5393 = data
  i5392.name = i5393[0]
  return i5392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5395 = data
  i5394.name = i5395[0]
  i5394.wrapMode = i5395[1]
  i5394.isLooping = !!i5395[2]
  i5394.length = i5395[3]
  var i5397 = i5395[4]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 1) {
    i5396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5397[i + 0]) );
  }
  i5394.curves = i5396
  var i5399 = i5395[5]
  var i5398 = []
  for(var i = 0; i < i5399.length; i += 1) {
    i5398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5399[i + 0]) );
  }
  i5394.events = i5398
  i5394.halfPrecision = !!i5395[6]
  i5394._frameRate = i5395[7]
  i5394.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5395[8], i5394.localBounds)
  i5394.hasMuscleCurves = !!i5395[9]
  var i5401 = i5395[10]
  var i5400 = []
  for(var i = 0; i < i5401.length; i += 1) {
    i5400.push( i5401[i + 0] );
  }
  i5394.clipMuscleConstant = i5400
  i5394.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5395[11], i5394.clipBindingConstant)
  return i5394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5405 = data
  i5404.path = i5405[0]
  i5404.hash = i5405[1]
  i5404.componentType = i5405[2]
  i5404.property = i5405[3]
  i5404.keys = i5405[4]
  var i5407 = i5405[5]
  var i5406 = []
  for(var i = 0; i < i5407.length; i += 1) {
    i5406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5407[i + 0]) );
  }
  i5404.objectReferenceKeys = i5406
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5411 = data
  i5410.time = i5411[0]
  request.r(i5411[1], i5411[2], 0, i5410, 'value')
  return i5410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5415 = data
  i5414.functionName = i5415[0]
  i5414.floatParameter = i5415[1]
  i5414.intParameter = i5415[2]
  i5414.stringParameter = i5415[3]
  request.r(i5415[4], i5415[5], 0, i5414, 'objectReferenceParameter')
  i5414.time = i5415[6]
  return i5414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5417 = data
  i5416.center = new pc.Vec3( i5417[0], i5417[1], i5417[2] )
  i5416.extends = new pc.Vec3( i5417[3], i5417[4], i5417[5] )
  return i5416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5421 = data
  var i5423 = i5421[0]
  var i5422 = []
  for(var i = 0; i < i5423.length; i += 1) {
    i5422.push( i5423[i + 0] );
  }
  i5420.genericBindings = i5422
  var i5425 = i5421[1]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 1) {
    i5424.push( i5425[i + 0] );
  }
  i5420.pptrCurveMapping = i5424
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5427 = data
  i5426.name = i5427[0]
  var i5429 = i5427[1]
  var i5428 = []
  for(var i = 0; i < i5429.length; i += 1) {
    i5428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5429[i + 0]) );
  }
  i5426.layers = i5428
  var i5431 = i5427[2]
  var i5430 = []
  for(var i = 0; i < i5431.length; i += 1) {
    i5430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5431[i + 0]) );
  }
  i5426.parameters = i5430
  i5426.animationClips = i5427[3]
  i5426.avatarUnsupported = i5427[4]
  return i5426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5435 = data
  i5434.name = i5435[0]
  i5434.defaultWeight = i5435[1]
  i5434.blendingMode = i5435[2]
  i5434.avatarMask = i5435[3]
  i5434.syncedLayerIndex = i5435[4]
  i5434.syncedLayerAffectsTiming = !!i5435[5]
  i5434.syncedLayers = i5435[6]
  i5434.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5435[7], i5434.stateMachine)
  return i5434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5437 = data
  i5436.id = i5437[0]
  i5436.name = i5437[1]
  i5436.path = i5437[2]
  var i5439 = i5437[3]
  var i5438 = []
  for(var i = 0; i < i5439.length; i += 1) {
    i5438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5439[i + 0]) );
  }
  i5436.states = i5438
  var i5441 = i5437[4]
  var i5440 = []
  for(var i = 0; i < i5441.length; i += 1) {
    i5440.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5441[i + 0]) );
  }
  i5436.machines = i5440
  var i5443 = i5437[5]
  var i5442 = []
  for(var i = 0; i < i5443.length; i += 1) {
    i5442.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5443[i + 0]) );
  }
  i5436.entryStateTransitions = i5442
  var i5445 = i5437[6]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 1) {
    i5444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5445[i + 0]) );
  }
  i5436.exitStateTransitions = i5444
  var i5447 = i5437[7]
  var i5446 = []
  for(var i = 0; i < i5447.length; i += 1) {
    i5446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5447[i + 0]) );
  }
  i5436.anyStateTransitions = i5446
  i5436.defaultStateId = i5437[8]
  return i5436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5451 = data
  i5450.id = i5451[0]
  i5450.name = i5451[1]
  i5450.cycleOffset = i5451[2]
  i5450.cycleOffsetParameter = i5451[3]
  i5450.cycleOffsetParameterActive = !!i5451[4]
  i5450.mirror = !!i5451[5]
  i5450.mirrorParameter = i5451[6]
  i5450.mirrorParameterActive = !!i5451[7]
  i5450.motionId = i5451[8]
  i5450.nameHash = i5451[9]
  i5450.fullPathHash = i5451[10]
  i5450.speed = i5451[11]
  i5450.speedParameter = i5451[12]
  i5450.speedParameterActive = !!i5451[13]
  i5450.tag = i5451[14]
  i5450.tagHash = i5451[15]
  i5450.writeDefaultValues = !!i5451[16]
  var i5453 = i5451[17]
  var i5452 = []
  for(var i = 0; i < i5453.length; i += 2) {
  request.r(i5453[i + 0], i5453[i + 1], 2, i5452, '')
  }
  i5450.behaviours = i5452
  var i5455 = i5451[18]
  var i5454 = []
  for(var i = 0; i < i5455.length; i += 1) {
    i5454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5455[i + 0]) );
  }
  i5450.transitions = i5454
  return i5450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5461 = data
  i5460.fullPath = i5461[0]
  i5460.canTransitionToSelf = !!i5461[1]
  i5460.duration = i5461[2]
  i5460.exitTime = i5461[3]
  i5460.hasExitTime = !!i5461[4]
  i5460.hasFixedDuration = !!i5461[5]
  i5460.interruptionSource = i5461[6]
  i5460.offset = i5461[7]
  i5460.orderedInterruption = !!i5461[8]
  i5460.destinationStateId = i5461[9]
  i5460.isExit = !!i5461[10]
  i5460.mute = !!i5461[11]
  i5460.solo = !!i5461[12]
  var i5463 = i5461[13]
  var i5462 = []
  for(var i = 0; i < i5463.length; i += 1) {
    i5462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5463[i + 0]) );
  }
  i5460.conditions = i5462
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5469 = data
  i5468.destinationStateId = i5469[0]
  i5468.isExit = !!i5469[1]
  i5468.mute = !!i5469[2]
  i5468.solo = !!i5469[3]
  var i5471 = i5469[4]
  var i5470 = []
  for(var i = 0; i < i5471.length; i += 1) {
    i5470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5471[i + 0]) );
  }
  i5468.conditions = i5470
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5475 = data
  i5474.defaultBool = !!i5475[0]
  i5474.defaultFloat = i5475[1]
  i5474.defaultInt = i5475[2]
  i5474.name = i5475[3]
  i5474.nameHash = i5475[4]
  i5474.type = i5475[5]
  return i5474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5477 = data
  i5476.name = i5477[0]
  i5476.bytes64 = i5477[1]
  i5476.data = i5477[2]
  return i5476
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5478 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5479 = data
  i5478.normalStyle = i5479[0]
  i5478.normalSpacingOffset = i5479[1]
  i5478.boldStyle = i5479[2]
  i5478.boldSpacing = i5479[3]
  i5478.italicStyle = i5479[4]
  i5478.tabSize = i5479[5]
  request.r(i5479[6], i5479[7], 0, i5478, 'atlas')
  i5478.m_SourceFontFileGUID = i5479[8]
  i5478.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5479[9], i5478.m_CreationSettings)
  request.r(i5479[10], i5479[11], 0, i5478, 'm_SourceFontFile')
  i5478.m_SourceFontFilePath = i5479[12]
  i5478.m_AtlasPopulationMode = i5479[13]
  i5478.InternalDynamicOS = !!i5479[14]
  var i5481 = i5479[15]
  var i5480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5481.length; i += 1) {
    i5480.add(request.d('UnityEngine.TextCore.Glyph', i5481[i + 0]));
  }
  i5478.m_GlyphTable = i5480
  var i5483 = i5479[16]
  var i5482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5483.length; i += 1) {
    i5482.add(request.d('TMPro.TMP_Character', i5483[i + 0]));
  }
  i5478.m_CharacterTable = i5482
  var i5485 = i5479[17]
  var i5484 = []
  for(var i = 0; i < i5485.length; i += 2) {
  request.r(i5485[i + 0], i5485[i + 1], 2, i5484, '')
  }
  i5478.m_AtlasTextures = i5484
  i5478.m_AtlasTextureIndex = i5479[18]
  i5478.m_IsMultiAtlasTexturesEnabled = !!i5479[19]
  i5478.m_GetFontFeatures = !!i5479[20]
  i5478.m_ClearDynamicDataOnBuild = !!i5479[21]
  i5478.m_AtlasWidth = i5479[22]
  i5478.m_AtlasHeight = i5479[23]
  i5478.m_AtlasPadding = i5479[24]
  i5478.m_AtlasRenderMode = i5479[25]
  var i5487 = i5479[26]
  var i5486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5487.length; i += 1) {
    i5486.add(request.d('UnityEngine.TextCore.GlyphRect', i5487[i + 0]));
  }
  i5478.m_UsedGlyphRects = i5486
  var i5489 = i5479[27]
  var i5488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5489.length; i += 1) {
    i5488.add(request.d('UnityEngine.TextCore.GlyphRect', i5489[i + 0]));
  }
  i5478.m_FreeGlyphRects = i5488
  i5478.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5479[28], i5478.m_FontFeatureTable)
  i5478.m_ShouldReimportFontFeatures = !!i5479[29]
  var i5491 = i5479[30]
  var i5490 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5491.length; i += 2) {
  request.r(i5491[i + 0], i5491[i + 1], 1, i5490, '')
  }
  i5478.m_FallbackFontAssetTable = i5490
  var i5493 = i5479[31]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.push( request.d('TMPro.TMP_FontWeightPair', i5493[i + 0]) );
  }
  i5478.m_FontWeightTable = i5492
  var i5495 = i5479[32]
  var i5494 = []
  for(var i = 0; i < i5495.length; i += 1) {
    i5494.push( request.d('TMPro.TMP_FontWeightPair', i5495[i + 0]) );
  }
  i5478.fontWeights = i5494
  i5478.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5479[33], i5478.m_fontInfo)
  var i5497 = i5479[34]
  var i5496 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5497.length; i += 1) {
    i5496.add(request.d('TMPro.TMP_Glyph', i5497[i + 0]));
  }
  i5478.m_glyphInfoList = i5496
  i5478.m_KerningTable = request.d('TMPro.KerningTable', i5479[35], i5478.m_KerningTable)
  var i5499 = i5479[36]
  var i5498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5499.length; i += 2) {
  request.r(i5499[i + 0], i5499[i + 1], 1, i5498, '')
  }
  i5478.fallbackFontAssets = i5498
  i5478.m_Version = i5479[37]
  i5478.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5479[38], i5478.m_FaceInfo)
  request.r(i5479[39], i5479[40], 0, i5478, 'm_Material')
  return i5478
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5500 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5501 = data
  i5500.sourceFontFileName = i5501[0]
  i5500.sourceFontFileGUID = i5501[1]
  i5500.faceIndex = i5501[2]
  i5500.pointSizeSamplingMode = i5501[3]
  i5500.pointSize = i5501[4]
  i5500.padding = i5501[5]
  i5500.paddingMode = i5501[6]
  i5500.packingMode = i5501[7]
  i5500.atlasWidth = i5501[8]
  i5500.atlasHeight = i5501[9]
  i5500.characterSetSelectionMode = i5501[10]
  i5500.characterSequence = i5501[11]
  i5500.referencedFontAssetGUID = i5501[12]
  i5500.referencedTextAssetGUID = i5501[13]
  i5500.fontStyle = i5501[14]
  i5500.fontStyleModifier = i5501[15]
  i5500.renderMode = i5501[16]
  i5500.includeFontFeatures = !!i5501[17]
  return i5500
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5504 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5505 = data
  i5504.m_Index = i5505[0]
  i5504.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5505[1], i5504.m_Metrics)
  i5504.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5505[2], i5504.m_GlyphRect)
  i5504.m_Scale = i5505[3]
  i5504.m_AtlasIndex = i5505[4]
  i5504.m_ClassDefinitionType = i5505[5]
  return i5504
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5506 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5507 = data
  i5506.m_Width = i5507[0]
  i5506.m_Height = i5507[1]
  i5506.m_HorizontalBearingX = i5507[2]
  i5506.m_HorizontalBearingY = i5507[3]
  i5506.m_HorizontalAdvance = i5507[4]
  return i5506
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5508 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5509 = data
  i5508.m_X = i5509[0]
  i5508.m_Y = i5509[1]
  i5508.m_Width = i5509[2]
  i5508.m_Height = i5509[3]
  return i5508
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5512 = root || request.c( 'TMPro.TMP_Character' )
  var i5513 = data
  i5512.m_ElementType = i5513[0]
  i5512.m_Unicode = i5513[1]
  i5512.m_GlyphIndex = i5513[2]
  i5512.m_Scale = i5513[3]
  return i5512
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5518 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5519 = data
  var i5521 = i5519[0]
  var i5520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5521.length; i += 1) {
    i5520.add(request.d('TMPro.MultipleSubstitutionRecord', i5521[i + 0]));
  }
  i5518.m_MultipleSubstitutionRecords = i5520
  var i5523 = i5519[1]
  var i5522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5523.length; i += 1) {
    i5522.add(request.d('TMPro.LigatureSubstitutionRecord', i5523[i + 0]));
  }
  i5518.m_LigatureSubstitutionRecords = i5522
  var i5525 = i5519[2]
  var i5524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5525.length; i += 1) {
    i5524.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5525[i + 0]));
  }
  i5518.m_GlyphPairAdjustmentRecords = i5524
  var i5527 = i5519[3]
  var i5526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5527.length; i += 1) {
    i5526.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5527[i + 0]));
  }
  i5518.m_MarkToBaseAdjustmentRecords = i5526
  var i5529 = i5519[4]
  var i5528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5529.length; i += 1) {
    i5528.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5529[i + 0]));
  }
  i5518.m_MarkToMarkAdjustmentRecords = i5528
  return i5518
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5532 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5533 = data
  i5532.m_TargetGlyphID = i5533[0]
  i5532.m_SubstituteGlyphIDs = i5533[1]
  return i5532
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5536 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5537 = data
  i5536.m_ComponentGlyphIDs = i5537[0]
  i5536.m_LigatureGlyphID = i5537[1]
  return i5536
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5540 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5541 = data
  i5540.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5541[0], i5540.m_FirstAdjustmentRecord)
  i5540.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5541[1], i5540.m_SecondAdjustmentRecord)
  i5540.m_FeatureLookupFlags = i5541[2]
  return i5540
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5544 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5545 = data
  i5544.m_BaseGlyphID = i5545[0]
  i5544.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5545[1], i5544.m_BaseGlyphAnchorPoint)
  i5544.m_MarkGlyphID = i5545[2]
  i5544.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5545[3], i5544.m_MarkPositionAdjustment)
  return i5544
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5548 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5549 = data
  i5548.m_BaseMarkGlyphID = i5549[0]
  i5548.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5549[1], i5548.m_BaseMarkGlyphAnchorPoint)
  i5548.m_CombiningMarkGlyphID = i5549[2]
  i5548.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5549[3], i5548.m_CombiningMarkPositionAdjustment)
  return i5548
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5554 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5555 = data
  request.r(i5555[0], i5555[1], 0, i5554, 'regularTypeface')
  request.r(i5555[2], i5555[3], 0, i5554, 'italicTypeface')
  return i5554
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5556 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5557 = data
  i5556.Name = i5557[0]
  i5556.PointSize = i5557[1]
  i5556.Scale = i5557[2]
  i5556.CharacterCount = i5557[3]
  i5556.LineHeight = i5557[4]
  i5556.Baseline = i5557[5]
  i5556.Ascender = i5557[6]
  i5556.CapHeight = i5557[7]
  i5556.Descender = i5557[8]
  i5556.CenterLine = i5557[9]
  i5556.SuperscriptOffset = i5557[10]
  i5556.SubscriptOffset = i5557[11]
  i5556.SubSize = i5557[12]
  i5556.Underline = i5557[13]
  i5556.UnderlineThickness = i5557[14]
  i5556.strikethrough = i5557[15]
  i5556.strikethroughThickness = i5557[16]
  i5556.TabWidth = i5557[17]
  i5556.Padding = i5557[18]
  i5556.AtlasWidth = i5557[19]
  i5556.AtlasHeight = i5557[20]
  return i5556
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5560 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5561 = data
  i5560.id = i5561[0]
  i5560.x = i5561[1]
  i5560.y = i5561[2]
  i5560.width = i5561[3]
  i5560.height = i5561[4]
  i5560.xOffset = i5561[5]
  i5560.yOffset = i5561[6]
  i5560.xAdvance = i5561[7]
  i5560.scale = i5561[8]
  return i5560
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5562 = root || request.c( 'TMPro.KerningTable' )
  var i5563 = data
  var i5565 = i5563[0]
  var i5564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5565.length; i += 1) {
    i5564.add(request.d('TMPro.KerningPair', i5565[i + 0]));
  }
  i5562.kerningPairs = i5564
  return i5562
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5568 = root || request.c( 'TMPro.KerningPair' )
  var i5569 = data
  i5568.xOffset = i5569[0]
  i5568.m_FirstGlyph = i5569[1]
  i5568.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5569[2], i5568.m_FirstGlyphAdjustments)
  i5568.m_SecondGlyph = i5569[3]
  i5568.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5569[4], i5568.m_SecondGlyphAdjustments)
  i5568.m_IgnoreSpacingAdjustments = !!i5569[5]
  return i5568
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5570 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5571 = data
  i5570.m_FaceIndex = i5571[0]
  i5570.m_FamilyName = i5571[1]
  i5570.m_StyleName = i5571[2]
  i5570.m_PointSize = i5571[3]
  i5570.m_Scale = i5571[4]
  i5570.m_UnitsPerEM = i5571[5]
  i5570.m_LineHeight = i5571[6]
  i5570.m_AscentLine = i5571[7]
  i5570.m_CapLine = i5571[8]
  i5570.m_MeanLine = i5571[9]
  i5570.m_Baseline = i5571[10]
  i5570.m_DescentLine = i5571[11]
  i5570.m_SuperscriptOffset = i5571[12]
  i5570.m_SuperscriptSize = i5571[13]
  i5570.m_SubscriptOffset = i5571[14]
  i5570.m_SubscriptSize = i5571[15]
  i5570.m_UnderlineOffset = i5571[16]
  i5570.m_UnderlineThickness = i5571[17]
  i5570.m_StrikethroughOffset = i5571[18]
  i5570.m_StrikethroughThickness = i5571[19]
  i5570.m_TabWidth = i5571[20]
  return i5570
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i5572 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i5573 = data
  var i5575 = i5573[0]
  var i5574 = []
  for(var i = 0; i < i5575.length; i += 2) {
  request.r(i5575[i + 0], i5575[i + 1], 2, i5574, '')
  }
  i5572.atlasAssets = i5574
  i5572.scale = i5573[1]
  request.r(i5573[2], i5573[3], 0, i5572, 'skeletonJSON')
  i5572.isUpgradingBlendModeMaterials = !!i5573[4]
  i5572.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i5573[5], i5572.blendModeMaterials)
  var i5577 = i5573[6]
  var i5576 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i5577.length; i += 2) {
  request.r(i5577[i + 0], i5577[i + 1], 1, i5576, '')
  }
  i5572.skeletonDataModifiers = i5576
  var i5579 = i5573[7]
  var i5578 = []
  for(var i = 0; i < i5579.length; i += 1) {
    i5578.push( i5579[i + 0] );
  }
  i5572.fromAnimation = i5578
  var i5581 = i5573[8]
  var i5580 = []
  for(var i = 0; i < i5581.length; i += 1) {
    i5580.push( i5581[i + 0] );
  }
  i5572.toAnimation = i5580
  i5572.duration = i5573[9]
  i5572.defaultMix = i5573[10]
  request.r(i5573[11], i5573[12], 0, i5572, 'controller')
  return i5572
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i5584 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i5585 = data
  i5584.applyAdditiveMaterial = !!i5585[0]
  var i5587 = i5585[1]
  var i5586 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5587.length; i += 1) {
    i5586.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5587[i + 0]));
  }
  i5584.additiveMaterials = i5586
  var i5589 = i5585[2]
  var i5588 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5589.length; i += 1) {
    i5588.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5589[i + 0]));
  }
  i5584.multiplyMaterials = i5588
  var i5591 = i5585[3]
  var i5590 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i5591.length; i += 1) {
    i5590.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i5591[i + 0]));
  }
  i5584.screenMaterials = i5590
  i5584.requiresBlendModeMaterials = !!i5585[4]
  return i5584
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i5594 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i5595 = data
  i5594.pageName = i5595[0]
  request.r(i5595[1], i5595[2], 0, i5594, 'material')
  return i5594
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i5598 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i5599 = data
  request.r(i5599[0], i5599[1], 0, i5598, 'atlasFile')
  var i5601 = i5599[2]
  var i5600 = []
  for(var i = 0; i < i5601.length; i += 2) {
  request.r(i5601[i + 0], i5601[i + 1], 2, i5600, '')
  }
  i5598.materials = i5600
  return i5598
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5602 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5603 = data
  i5602.useSafeMode = !!i5603[0]
  i5602.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5603[1], i5602.safeModeOptions)
  i5602.timeScale = i5603[2]
  i5602.unscaledTimeScale = i5603[3]
  i5602.useSmoothDeltaTime = !!i5603[4]
  i5602.maxSmoothUnscaledTime = i5603[5]
  i5602.rewindCallbackMode = i5603[6]
  i5602.showUnityEditorReport = !!i5603[7]
  i5602.logBehaviour = i5603[8]
  i5602.drawGizmos = !!i5603[9]
  i5602.defaultRecyclable = !!i5603[10]
  i5602.defaultAutoPlay = i5603[11]
  i5602.defaultUpdateType = i5603[12]
  i5602.defaultTimeScaleIndependent = !!i5603[13]
  i5602.defaultEaseType = i5603[14]
  i5602.defaultEaseOvershootOrAmplitude = i5603[15]
  i5602.defaultEasePeriod = i5603[16]
  i5602.defaultAutoKill = !!i5603[17]
  i5602.defaultLoopType = i5603[18]
  i5602.debugMode = !!i5603[19]
  i5602.debugStoreTargetId = !!i5603[20]
  i5602.showPreviewPanel = !!i5603[21]
  i5602.storeSettingsLocation = i5603[22]
  i5602.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5603[23], i5602.modules)
  i5602.createASMDEF = !!i5603[24]
  i5602.showPlayingTweens = !!i5603[25]
  i5602.showPausedTweens = !!i5603[26]
  return i5602
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5604 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5605 = data
  i5604.logBehaviour = i5605[0]
  i5604.nestedTweenFailureBehaviour = i5605[1]
  return i5604
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5606 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5607 = data
  i5606.showPanel = !!i5607[0]
  i5606.audioEnabled = !!i5607[1]
  i5606.physicsEnabled = !!i5607[2]
  i5606.physics2DEnabled = !!i5607[3]
  i5606.spriteEnabled = !!i5607[4]
  i5606.uiEnabled = !!i5607[5]
  i5606.uiToolkitEnabled = !!i5607[6]
  i5606.textMeshProEnabled = !!i5607[7]
  i5606.tk2DEnabled = !!i5607[8]
  i5606.deAudioEnabled = !!i5607[9]
  i5606.deUnityExtendedEnabled = !!i5607[10]
  i5606.epoOutlineEnabled = !!i5607[11]
  return i5606
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5608 = root || request.c( 'TMPro.TMP_Settings' )
  var i5609 = data
  i5608.assetVersion = i5609[0]
  i5608.m_TextWrappingMode = i5609[1]
  i5608.m_enableKerning = !!i5609[2]
  var i5611 = i5609[3]
  var i5610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5611.length; i += 1) {
    i5610.add(i5611[i + 0]);
  }
  i5608.m_ActiveFontFeatures = i5610
  i5608.m_enableExtraPadding = !!i5609[4]
  i5608.m_enableTintAllSprites = !!i5609[5]
  i5608.m_enableParseEscapeCharacters = !!i5609[6]
  i5608.m_EnableRaycastTarget = !!i5609[7]
  i5608.m_GetFontFeaturesAtRuntime = !!i5609[8]
  i5608.m_missingGlyphCharacter = i5609[9]
  i5608.m_ClearDynamicDataOnBuild = !!i5609[10]
  i5608.m_warningsDisabled = !!i5609[11]
  request.r(i5609[12], i5609[13], 0, i5608, 'm_defaultFontAsset')
  i5608.m_defaultFontAssetPath = i5609[14]
  i5608.m_defaultFontSize = i5609[15]
  i5608.m_defaultAutoSizeMinRatio = i5609[16]
  i5608.m_defaultAutoSizeMaxRatio = i5609[17]
  i5608.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5609[18], i5609[19] )
  i5608.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5609[20], i5609[21] )
  i5608.m_autoSizeTextContainer = !!i5609[22]
  i5608.m_IsTextObjectScaleStatic = !!i5609[23]
  var i5613 = i5609[24]
  var i5612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5613.length; i += 2) {
  request.r(i5613[i + 0], i5613[i + 1], 1, i5612, '')
  }
  i5608.m_fallbackFontAssets = i5612
  i5608.m_matchMaterialPreset = !!i5609[25]
  i5608.m_HideSubTextObjects = !!i5609[26]
  request.r(i5609[27], i5609[28], 0, i5608, 'm_defaultSpriteAsset')
  i5608.m_defaultSpriteAssetPath = i5609[29]
  i5608.m_enableEmojiSupport = !!i5609[30]
  i5608.m_MissingCharacterSpriteUnicode = i5609[31]
  var i5615 = i5609[32]
  var i5614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5615.length; i += 2) {
  request.r(i5615[i + 0], i5615[i + 1], 1, i5614, '')
  }
  i5608.m_EmojiFallbackTextAssets = i5614
  i5608.m_defaultColorGradientPresetsPath = i5609[33]
  request.r(i5609[34], i5609[35], 0, i5608, 'm_defaultStyleSheet')
  i5608.m_StyleSheetsResourcePath = i5609[36]
  request.r(i5609[37], i5609[38], 0, i5608, 'm_leadingCharacters')
  request.r(i5609[39], i5609[40], 0, i5608, 'm_followingCharacters')
  i5608.m_UseModernHangulLineBreakingRules = !!i5609[41]
  return i5608
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5618 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5619 = data
  request.r(i5619[0], i5619[1], 0, i5618, 'spriteSheet')
  var i5621 = i5619[2]
  var i5620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5621.length; i += 1) {
    i5620.add(request.d('TMPro.TMP_Sprite', i5621[i + 0]));
  }
  i5618.spriteInfoList = i5620
  var i5623 = i5619[3]
  var i5622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5623.length; i += 2) {
  request.r(i5623[i + 0], i5623[i + 1], 1, i5622, '')
  }
  i5618.fallbackSpriteAssets = i5622
  var i5625 = i5619[4]
  var i5624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5625.length; i += 1) {
    i5624.add(request.d('TMPro.TMP_SpriteCharacter', i5625[i + 0]));
  }
  i5618.m_SpriteCharacterTable = i5624
  var i5627 = i5619[5]
  var i5626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5627.length; i += 1) {
    i5626.add(request.d('TMPro.TMP_SpriteGlyph', i5627[i + 0]));
  }
  i5618.m_GlyphTable = i5626
  i5618.m_Version = i5619[6]
  i5618.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5619[7], i5618.m_FaceInfo)
  request.r(i5619[8], i5619[9], 0, i5618, 'm_Material')
  return i5618
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5630 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5631 = data
  i5630.name = i5631[0]
  i5630.hashCode = i5631[1]
  i5630.unicode = i5631[2]
  i5630.pivot = new pc.Vec2( i5631[3], i5631[4] )
  request.r(i5631[5], i5631[6], 0, i5630, 'sprite')
  i5630.id = i5631[7]
  i5630.x = i5631[8]
  i5630.y = i5631[9]
  i5630.width = i5631[10]
  i5630.height = i5631[11]
  i5630.xOffset = i5631[12]
  i5630.yOffset = i5631[13]
  i5630.xAdvance = i5631[14]
  i5630.scale = i5631[15]
  return i5630
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5636 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5637 = data
  i5636.m_Name = i5637[0]
  i5636.m_ElementType = i5637[1]
  i5636.m_Unicode = i5637[2]
  i5636.m_GlyphIndex = i5637[3]
  i5636.m_Scale = i5637[4]
  return i5636
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5640 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5641 = data
  request.r(i5641[0], i5641[1], 0, i5640, 'sprite')
  i5640.m_Index = i5641[2]
  i5640.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5641[3], i5640.m_Metrics)
  i5640.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5641[4], i5640.m_GlyphRect)
  i5640.m_Scale = i5641[5]
  i5640.m_AtlasIndex = i5641[6]
  i5640.m_ClassDefinitionType = i5641[7]
  return i5640
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5642 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5643 = data
  var i5645 = i5643[0]
  var i5644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5645.length; i += 1) {
    i5644.add(request.d('TMPro.TMP_Style', i5645[i + 0]));
  }
  i5642.m_StyleList = i5644
  return i5642
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5648 = root || request.c( 'TMPro.TMP_Style' )
  var i5649 = data
  i5648.m_Name = i5649[0]
  i5648.m_HashCode = i5649[1]
  i5648.m_OpeningDefinition = i5649[2]
  i5648.m_ClosingDefinition = i5649[3]
  i5648.m_OpeningTagArray = i5649[4]
  i5648.m_ClosingTagArray = i5649[5]
  return i5648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5651 = data
  var i5653 = i5651[0]
  var i5652 = []
  for(var i = 0; i < i5653.length; i += 1) {
    i5652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5653[i + 0]) );
  }
  i5650.files = i5652
  i5650.componentToPrefabIds = i5651[1]
  return i5650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5657 = data
  i5656.path = i5657[0]
  request.r(i5657[1], i5657[2], 0, i5656, 'unityObject')
  return i5656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5659 = data
  var i5661 = i5659[0]
  var i5660 = []
  for(var i = 0; i < i5661.length; i += 1) {
    i5660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5661[i + 0]) );
  }
  i5658.scriptsExecutionOrder = i5660
  var i5663 = i5659[1]
  var i5662 = []
  for(var i = 0; i < i5663.length; i += 1) {
    i5662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5663[i + 0]) );
  }
  i5658.sortingLayers = i5662
  var i5665 = i5659[2]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5665[i + 0]) );
  }
  i5658.cullingLayers = i5664
  i5658.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5659[3], i5658.timeSettings)
  i5658.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5659[4], i5658.physicsSettings)
  i5658.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5659[5], i5658.physics2DSettings)
  i5658.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5659[6], i5658.qualitySettings)
  i5658.enableRealtimeShadows = !!i5659[7]
  i5658.enableAutoInstancing = !!i5659[8]
  i5658.enableStaticBatching = !!i5659[9]
  i5658.enableDynamicBatching = !!i5659[10]
  i5658.lightmapEncodingQuality = i5659[11]
  i5658.desiredColorSpace = i5659[12]
  var i5667 = i5659[13]
  var i5666 = []
  for(var i = 0; i < i5667.length; i += 1) {
    i5666.push( i5667[i + 0] );
  }
  i5658.allTags = i5666
  return i5658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5671 = data
  i5670.name = i5671[0]
  i5670.value = i5671[1]
  return i5670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5675 = data
  i5674.id = i5675[0]
  i5674.name = i5675[1]
  i5674.value = i5675[2]
  return i5674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5679 = data
  i5678.id = i5679[0]
  i5678.name = i5679[1]
  return i5678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5681 = data
  i5680.fixedDeltaTime = i5681[0]
  i5680.maximumDeltaTime = i5681[1]
  i5680.timeScale = i5681[2]
  i5680.maximumParticleTimestep = i5681[3]
  return i5680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5683 = data
  i5682.gravity = new pc.Vec3( i5683[0], i5683[1], i5683[2] )
  i5682.defaultSolverIterations = i5683[3]
  i5682.bounceThreshold = i5683[4]
  i5682.autoSyncTransforms = !!i5683[5]
  i5682.autoSimulation = !!i5683[6]
  var i5685 = i5683[7]
  var i5684 = []
  for(var i = 0; i < i5685.length; i += 1) {
    i5684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5685[i + 0]) );
  }
  i5682.collisionMatrix = i5684
  return i5682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5689 = data
  i5688.enabled = !!i5689[0]
  i5688.layerId = i5689[1]
  i5688.otherLayerId = i5689[2]
  return i5688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5691 = data
  request.r(i5691[0], i5691[1], 0, i5690, 'material')
  i5690.gravity = new pc.Vec2( i5691[2], i5691[3] )
  i5690.positionIterations = i5691[4]
  i5690.velocityIterations = i5691[5]
  i5690.velocityThreshold = i5691[6]
  i5690.maxLinearCorrection = i5691[7]
  i5690.maxAngularCorrection = i5691[8]
  i5690.maxTranslationSpeed = i5691[9]
  i5690.maxRotationSpeed = i5691[10]
  i5690.baumgarteScale = i5691[11]
  i5690.baumgarteTOIScale = i5691[12]
  i5690.timeToSleep = i5691[13]
  i5690.linearSleepTolerance = i5691[14]
  i5690.angularSleepTolerance = i5691[15]
  i5690.defaultContactOffset = i5691[16]
  i5690.autoSimulation = !!i5691[17]
  i5690.queriesHitTriggers = !!i5691[18]
  i5690.queriesStartInColliders = !!i5691[19]
  i5690.callbacksOnDisable = !!i5691[20]
  i5690.reuseCollisionCallbacks = !!i5691[21]
  i5690.autoSyncTransforms = !!i5691[22]
  var i5693 = i5691[23]
  var i5692 = []
  for(var i = 0; i < i5693.length; i += 1) {
    i5692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5693[i + 0]) );
  }
  i5690.collisionMatrix = i5692
  return i5690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5697 = data
  i5696.enabled = !!i5697[0]
  i5696.layerId = i5697[1]
  i5696.otherLayerId = i5697[2]
  return i5696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5699 = data
  var i5701 = i5699[0]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5701[i + 0]) );
  }
  i5698.qualityLevels = i5700
  var i5703 = i5699[1]
  var i5702 = []
  for(var i = 0; i < i5703.length; i += 1) {
    i5702.push( i5703[i + 0] );
  }
  i5698.names = i5702
  i5698.shadows = i5699[2]
  i5698.anisotropicFiltering = i5699[3]
  i5698.antiAliasing = i5699[4]
  i5698.lodBias = i5699[5]
  i5698.shadowCascades = i5699[6]
  i5698.shadowDistance = i5699[7]
  i5698.shadowmaskMode = i5699[8]
  i5698.shadowProjection = i5699[9]
  i5698.shadowResolution = i5699[10]
  i5698.softParticles = !!i5699[11]
  i5698.softVegetation = !!i5699[12]
  i5698.activeColorSpace = i5699[13]
  i5698.desiredColorSpace = i5699[14]
  i5698.masterTextureLimit = i5699[15]
  i5698.maxQueuedFrames = i5699[16]
  i5698.particleRaycastBudget = i5699[17]
  i5698.pixelLightCount = i5699[18]
  i5698.realtimeReflectionProbes = !!i5699[19]
  i5698.shadowCascade2Split = i5699[20]
  i5698.shadowCascade4Split = new pc.Vec3( i5699[21], i5699[22], i5699[23] )
  i5698.streamingMipmapsActive = !!i5699[24]
  i5698.vSyncCount = i5699[25]
  i5698.asyncUploadBufferSize = i5699[26]
  i5698.asyncUploadTimeSlice = i5699[27]
  i5698.billboardsFaceCameraPosition = !!i5699[28]
  i5698.shadowNearPlaneOffset = i5699[29]
  i5698.streamingMipmapsMemoryBudget = i5699[30]
  i5698.maximumLODLevel = i5699[31]
  i5698.streamingMipmapsAddAllCameras = !!i5699[32]
  i5698.streamingMipmapsMaxLevelReduction = i5699[33]
  i5698.streamingMipmapsRenderersPerFrame = i5699[34]
  i5698.resolutionScalingFixedDPIFactor = i5699[35]
  i5698.streamingMipmapsMaxFileIORequests = i5699[36]
  i5698.currentQualityLevel = i5699[37]
  return i5698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5709 = data
  i5708.weight = i5709[0]
  i5708.vertices = i5709[1]
  i5708.normals = i5709[2]
  i5708.tangents = i5709[3]
  return i5708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5713 = data
  i5712.mode = i5713[0]
  i5712.parameter = i5713[1]
  i5712.threshold = i5713[2]
  return i5712
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5714 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5715 = data
  i5714.m_GlyphIndex = i5715[0]
  i5714.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5715[1], i5714.m_GlyphValueRecord)
  return i5714
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5716 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5717 = data
  i5716.m_XCoordinate = i5717[0]
  i5716.m_YCoordinate = i5717[1]
  return i5716
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5718 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5719 = data
  i5718.m_XPositionAdjustment = i5719[0]
  i5718.m_YPositionAdjustment = i5719[1]
  return i5718
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5720 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5721 = data
  i5720.xPlacement = i5721[0]
  i5720.yPlacement = i5721[1]
  i5720.xAdvance = i5721[2]
  i5720.yAdvance = i5721[3]
  return i5720
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5722 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5723 = data
  i5722.m_XPlacement = i5723[0]
  i5722.m_YPlacement = i5723[1]
  i5722.m_XAdvance = i5723[2]
  i5722.m_YAdvance = i5723[3]
  return i5722
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[32],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[32],"89":[46],"90":[91],"92":[91],"10":[9],"93":[94],"95":[96],"97":[46,45],"98":[96],"99":[98],"100":[96],"101":[96],"102":[103],"104":[103],"105":[96],"106":[9],"107":[16,9],"44":[46],"108":[16,9],"109":[14,46],"96":[46],"110":[46,45],"111":[68],"112":[75],"113":[114],"115":[103],"116":[40],"117":[32],"118":[119],"120":[38],"121":[10],"122":[9],"123":[46,9],"17":[9,16],"124":[9],"125":[16,9],"126":[46],"127":[16,9],"128":[9],"129":[130],"131":[130],"132":[130],"133":[9],"134":[9],"13":[10],"20":[16,9],"135":[9],"12":[10],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[9],"145":[16,9],"146":[9],"147":[9],"148":[9],"19":[9],"149":[16,9],"150":[9],"151":[38],"152":[38],"39":[38],"153":[38],"154":[32],"155":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider","PSD_Tool","ItemHolder","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "1.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv711_GG";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1860";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4944";

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

Deserializers.buildID = "fffce10e-9c23-4ab3-8d5e-35fcfde57701";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

