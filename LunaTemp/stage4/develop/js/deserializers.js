var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7436 = root || request.c( 'UnityEngine.JointSpring' )
  var i7437 = data
  i7436.spring = i7437[0]
  i7436.damper = i7437[1]
  i7436.targetPosition = i7437[2]
  return i7436
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7438 = root || request.c( 'UnityEngine.JointMotor' )
  var i7439 = data
  i7438.m_TargetVelocity = i7439[0]
  i7438.m_Force = i7439[1]
  i7438.m_FreeSpin = i7439[2]
  return i7438
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7440 = root || request.c( 'UnityEngine.JointLimits' )
  var i7441 = data
  i7440.m_Min = i7441[0]
  i7440.m_Max = i7441[1]
  i7440.m_Bounciness = i7441[2]
  i7440.m_BounceMinVelocity = i7441[3]
  i7440.m_ContactDistance = i7441[4]
  i7440.minBounce = i7441[5]
  i7440.maxBounce = i7441[6]
  return i7440
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7442 = root || request.c( 'UnityEngine.JointDrive' )
  var i7443 = data
  i7442.m_PositionSpring = i7443[0]
  i7442.m_PositionDamper = i7443[1]
  i7442.m_MaximumForce = i7443[2]
  i7442.m_UseAcceleration = i7443[3]
  return i7442
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7444 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7445 = data
  i7444.m_Spring = i7445[0]
  i7444.m_Damper = i7445[1]
  return i7444
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7446 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7447 = data
  i7446.m_Limit = i7447[0]
  i7446.m_Bounciness = i7447[1]
  i7446.m_ContactDistance = i7447[2]
  return i7446
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7448 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7449 = data
  i7448.m_ExtremumSlip = i7449[0]
  i7448.m_ExtremumValue = i7449[1]
  i7448.m_AsymptoteSlip = i7449[2]
  i7448.m_AsymptoteValue = i7449[3]
  i7448.m_Stiffness = i7449[4]
  return i7448
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7450 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7451 = data
  i7450.m_LowerAngle = i7451[0]
  i7450.m_UpperAngle = i7451[1]
  return i7450
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7452 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7453 = data
  i7452.m_MotorSpeed = i7453[0]
  i7452.m_MaximumMotorTorque = i7453[1]
  return i7452
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7454 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7455 = data
  i7454.m_DampingRatio = i7455[0]
  i7454.m_Frequency = i7455[1]
  i7454.m_Angle = i7455[2]
  return i7454
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7456 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7457 = data
  i7456.m_LowerTranslation = i7457[0]
  i7456.m_UpperTranslation = i7457[1]
  return i7456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7458 = root || new pc.UnityMaterial()
  var i7459 = data
  i7458.name = i7459[0]
  request.r(i7459[1], i7459[2], 0, i7458, 'shader')
  i7458.renderQueue = i7459[3]
  i7458.enableInstancing = !!i7459[4]
  var i7461 = i7459[5]
  var i7460 = []
  for(var i = 0; i < i7461.length; i += 1) {
    i7460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7461[i + 0]) );
  }
  i7458.floatParameters = i7460
  var i7463 = i7459[6]
  var i7462 = []
  for(var i = 0; i < i7463.length; i += 1) {
    i7462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7463[i + 0]) );
  }
  i7458.colorParameters = i7462
  var i7465 = i7459[7]
  var i7464 = []
  for(var i = 0; i < i7465.length; i += 1) {
    i7464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7465[i + 0]) );
  }
  i7458.vectorParameters = i7464
  var i7467 = i7459[8]
  var i7466 = []
  for(var i = 0; i < i7467.length; i += 1) {
    i7466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7467[i + 0]) );
  }
  i7458.textureParameters = i7466
  var i7469 = i7459[9]
  var i7468 = []
  for(var i = 0; i < i7469.length; i += 1) {
    i7468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7469[i + 0]) );
  }
  i7458.materialFlags = i7468
  return i7458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7473 = data
  i7472.name = i7473[0]
  i7472.value = i7473[1]
  return i7472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7477 = data
  i7476.name = i7477[0]
  i7476.value = new pc.Color(i7477[1], i7477[2], i7477[3], i7477[4])
  return i7476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7481 = data
  i7480.name = i7481[0]
  i7480.value = new pc.Vec4( i7481[1], i7481[2], i7481[3], i7481[4] )
  return i7480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7485 = data
  i7484.name = i7485[0]
  request.r(i7485[1], i7485[2], 0, i7484, 'value')
  return i7484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7489 = data
  i7488.name = i7489[0]
  i7488.enabled = !!i7489[1]
  return i7488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7491 = data
  i7490.name = i7491[0]
  i7490.width = i7491[1]
  i7490.height = i7491[2]
  i7490.mipmapCount = i7491[3]
  i7490.anisoLevel = i7491[4]
  i7490.filterMode = i7491[5]
  i7490.hdr = !!i7491[6]
  i7490.format = i7491[7]
  i7490.wrapMode = i7491[8]
  i7490.alphaIsTransparency = !!i7491[9]
  i7490.alphaSource = i7491[10]
  i7490.graphicsFormat = i7491[11]
  i7490.sRGBTexture = !!i7491[12]
  i7490.desiredColorSpace = i7491[13]
  i7490.wrapU = i7491[14]
  i7490.wrapV = i7491[15]
  return i7490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7493 = data
  i7492.position = new pc.Vec3( i7493[0], i7493[1], i7493[2] )
  i7492.scale = new pc.Vec3( i7493[3], i7493[4], i7493[5] )
  i7492.rotation = new pc.Quat(i7493[6], i7493[7], i7493[8], i7493[9])
  return i7492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7495 = data
  i7494.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7495[0], i7494.main)
  i7494.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7495[1], i7494.colorBySpeed)
  i7494.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7495[2], i7494.colorOverLifetime)
  i7494.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7495[3], i7494.emission)
  i7494.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7495[4], i7494.rotationBySpeed)
  i7494.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7495[5], i7494.rotationOverLifetime)
  i7494.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7495[6], i7494.shape)
  i7494.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7495[7], i7494.sizeBySpeed)
  i7494.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7495[8], i7494.sizeOverLifetime)
  i7494.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7495[9], i7494.textureSheetAnimation)
  i7494.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7495[10], i7494.velocityOverLifetime)
  i7494.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7495[11], i7494.noise)
  i7494.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7495[12], i7494.inheritVelocity)
  i7494.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7495[13], i7494.forceOverLifetime)
  i7494.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7495[14], i7494.limitVelocityOverLifetime)
  i7494.useAutoRandomSeed = !!i7495[15]
  i7494.randomSeed = i7495[16]
  return i7494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7496 = root || new pc.ParticleSystemMain()
  var i7497 = data
  i7496.duration = i7497[0]
  i7496.loop = !!i7497[1]
  i7496.prewarm = !!i7497[2]
  i7496.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[3], i7496.startDelay)
  i7496.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[4], i7496.startLifetime)
  i7496.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[5], i7496.startSpeed)
  i7496.startSize3D = !!i7497[6]
  i7496.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[7], i7496.startSizeX)
  i7496.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[8], i7496.startSizeY)
  i7496.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[9], i7496.startSizeZ)
  i7496.startRotation3D = !!i7497[10]
  i7496.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[11], i7496.startRotationX)
  i7496.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[12], i7496.startRotationY)
  i7496.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[13], i7496.startRotationZ)
  i7496.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7497[14], i7496.startColor)
  i7496.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7497[15], i7496.gravityModifier)
  i7496.simulationSpace = i7497[16]
  request.r(i7497[17], i7497[18], 0, i7496, 'customSimulationSpace')
  i7496.simulationSpeed = i7497[19]
  i7496.useUnscaledTime = !!i7497[20]
  i7496.scalingMode = i7497[21]
  i7496.playOnAwake = !!i7497[22]
  i7496.maxParticles = i7497[23]
  i7496.emitterVelocityMode = i7497[24]
  i7496.stopAction = i7497[25]
  return i7496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7498 = root || new pc.MinMaxCurve()
  var i7499 = data
  i7498.mode = i7499[0]
  i7498.curveMin = new pc.AnimationCurve( { keys_flow: i7499[1] } )
  i7498.curveMax = new pc.AnimationCurve( { keys_flow: i7499[2] } )
  i7498.curveMultiplier = i7499[3]
  i7498.constantMin = i7499[4]
  i7498.constantMax = i7499[5]
  return i7498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7500 = root || new pc.MinMaxGradient()
  var i7501 = data
  i7500.mode = i7501[0]
  i7500.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7501[1], i7500.gradientMin)
  i7500.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7501[2], i7500.gradientMax)
  i7500.colorMin = new pc.Color(i7501[3], i7501[4], i7501[5], i7501[6])
  i7500.colorMax = new pc.Color(i7501[7], i7501[8], i7501[9], i7501[10])
  return i7500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7503 = data
  i7502.mode = i7503[0]
  var i7505 = i7503[1]
  var i7504 = []
  for(var i = 0; i < i7505.length; i += 1) {
    i7504.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7505[i + 0]) );
  }
  i7502.colorKeys = i7504
  var i7507 = i7503[2]
  var i7506 = []
  for(var i = 0; i < i7507.length; i += 1) {
    i7506.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7507[i + 0]) );
  }
  i7502.alphaKeys = i7506
  return i7502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7508 = root || new pc.ParticleSystemColorBySpeed()
  var i7509 = data
  i7508.enabled = !!i7509[0]
  i7508.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7509[1], i7508.color)
  i7508.range = new pc.Vec2( i7509[2], i7509[3] )
  return i7508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7513 = data
  i7512.color = new pc.Color(i7513[0], i7513[1], i7513[2], i7513[3])
  i7512.time = i7513[4]
  return i7512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7517 = data
  i7516.alpha = i7517[0]
  i7516.time = i7517[1]
  return i7516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7518 = root || new pc.ParticleSystemColorOverLifetime()
  var i7519 = data
  i7518.enabled = !!i7519[0]
  i7518.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7519[1], i7518.color)
  return i7518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7520 = root || new pc.ParticleSystemEmitter()
  var i7521 = data
  i7520.enabled = !!i7521[0]
  i7520.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7521[1], i7520.rateOverTime)
  i7520.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7521[2], i7520.rateOverDistance)
  var i7523 = i7521[3]
  var i7522 = []
  for(var i = 0; i < i7523.length; i += 1) {
    i7522.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7523[i + 0]) );
  }
  i7520.bursts = i7522
  return i7520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7526 = root || new pc.ParticleSystemBurst()
  var i7527 = data
  i7526.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7527[0], i7526.count)
  i7526.cycleCount = i7527[1]
  i7526.minCount = i7527[2]
  i7526.maxCount = i7527[3]
  i7526.repeatInterval = i7527[4]
  i7526.time = i7527[5]
  return i7526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7528 = root || new pc.ParticleSystemRotationBySpeed()
  var i7529 = data
  i7528.enabled = !!i7529[0]
  i7528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7529[1], i7528.x)
  i7528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7529[2], i7528.y)
  i7528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7529[3], i7528.z)
  i7528.separateAxes = !!i7529[4]
  i7528.range = new pc.Vec2( i7529[5], i7529[6] )
  return i7528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7530 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7531 = data
  i7530.enabled = !!i7531[0]
  i7530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7531[1], i7530.x)
  i7530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7531[2], i7530.y)
  i7530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7531[3], i7530.z)
  i7530.separateAxes = !!i7531[4]
  return i7530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7532 = root || new pc.ParticleSystemShape()
  var i7533 = data
  i7532.enabled = !!i7533[0]
  i7532.shapeType = i7533[1]
  i7532.randomDirectionAmount = i7533[2]
  i7532.sphericalDirectionAmount = i7533[3]
  i7532.randomPositionAmount = i7533[4]
  i7532.alignToDirection = !!i7533[5]
  i7532.radius = i7533[6]
  i7532.radiusMode = i7533[7]
  i7532.radiusSpread = i7533[8]
  i7532.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7533[9], i7532.radiusSpeed)
  i7532.radiusThickness = i7533[10]
  i7532.angle = i7533[11]
  i7532.length = i7533[12]
  i7532.boxThickness = new pc.Vec3( i7533[13], i7533[14], i7533[15] )
  i7532.meshShapeType = i7533[16]
  request.r(i7533[17], i7533[18], 0, i7532, 'mesh')
  request.r(i7533[19], i7533[20], 0, i7532, 'meshRenderer')
  request.r(i7533[21], i7533[22], 0, i7532, 'skinnedMeshRenderer')
  i7532.useMeshMaterialIndex = !!i7533[23]
  i7532.meshMaterialIndex = i7533[24]
  i7532.useMeshColors = !!i7533[25]
  i7532.normalOffset = i7533[26]
  i7532.arc = i7533[27]
  i7532.arcMode = i7533[28]
  i7532.arcSpread = i7533[29]
  i7532.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7533[30], i7532.arcSpeed)
  i7532.donutRadius = i7533[31]
  i7532.position = new pc.Vec3( i7533[32], i7533[33], i7533[34] )
  i7532.rotation = new pc.Vec3( i7533[35], i7533[36], i7533[37] )
  i7532.scale = new pc.Vec3( i7533[38], i7533[39], i7533[40] )
  return i7532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7534 = root || new pc.ParticleSystemSizeBySpeed()
  var i7535 = data
  i7534.enabled = !!i7535[0]
  i7534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7535[1], i7534.x)
  i7534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7535[2], i7534.y)
  i7534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7535[3], i7534.z)
  i7534.separateAxes = !!i7535[4]
  i7534.range = new pc.Vec2( i7535[5], i7535[6] )
  return i7534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7536 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7537 = data
  i7536.enabled = !!i7537[0]
  i7536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7537[1], i7536.x)
  i7536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7537[2], i7536.y)
  i7536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7537[3], i7536.z)
  i7536.separateAxes = !!i7537[4]
  return i7536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7538 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7539 = data
  i7538.enabled = !!i7539[0]
  i7538.mode = i7539[1]
  i7538.animation = i7539[2]
  i7538.numTilesX = i7539[3]
  i7538.numTilesY = i7539[4]
  i7538.useRandomRow = !!i7539[5]
  i7538.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7539[6], i7538.frameOverTime)
  i7538.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7539[7], i7538.startFrame)
  i7538.cycleCount = i7539[8]
  i7538.rowIndex = i7539[9]
  i7538.flipU = i7539[10]
  i7538.flipV = i7539[11]
  i7538.spriteCount = i7539[12]
  var i7541 = i7539[13]
  var i7540 = []
  for(var i = 0; i < i7541.length; i += 2) {
  request.r(i7541[i + 0], i7541[i + 1], 2, i7540, '')
  }
  i7538.sprites = i7540
  return i7538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7544 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7545 = data
  i7544.enabled = !!i7545[0]
  i7544.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[1], i7544.x)
  i7544.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[2], i7544.y)
  i7544.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[3], i7544.z)
  i7544.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[4], i7544.radial)
  i7544.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[5], i7544.speedModifier)
  i7544.space = i7545[6]
  i7544.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[7], i7544.orbitalX)
  i7544.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[8], i7544.orbitalY)
  i7544.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[9], i7544.orbitalZ)
  i7544.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[10], i7544.orbitalOffsetX)
  i7544.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[11], i7544.orbitalOffsetY)
  i7544.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7545[12], i7544.orbitalOffsetZ)
  return i7544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7546 = root || new pc.ParticleSystemNoise()
  var i7547 = data
  i7546.enabled = !!i7547[0]
  i7546.separateAxes = !!i7547[1]
  i7546.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[2], i7546.strengthX)
  i7546.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[3], i7546.strengthY)
  i7546.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[4], i7546.strengthZ)
  i7546.frequency = i7547[5]
  i7546.damping = !!i7547[6]
  i7546.octaveCount = i7547[7]
  i7546.octaveMultiplier = i7547[8]
  i7546.octaveScale = i7547[9]
  i7546.quality = i7547[10]
  i7546.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[11], i7546.scrollSpeed)
  i7546.scrollSpeedMultiplier = i7547[12]
  i7546.remapEnabled = !!i7547[13]
  i7546.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[14], i7546.remapX)
  i7546.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[15], i7546.remapY)
  i7546.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[16], i7546.remapZ)
  i7546.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[17], i7546.positionAmount)
  i7546.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[18], i7546.rotationAmount)
  i7546.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7547[19], i7546.sizeAmount)
  return i7546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7548 = root || new pc.ParticleSystemInheritVelocity()
  var i7549 = data
  i7548.enabled = !!i7549[0]
  i7548.mode = i7549[1]
  i7548.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7549[2], i7548.curve)
  return i7548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7550 = root || new pc.ParticleSystemForceOverLifetime()
  var i7551 = data
  i7550.enabled = !!i7551[0]
  i7550.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7551[1], i7550.x)
  i7550.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7551[2], i7550.y)
  i7550.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7551[3], i7550.z)
  i7550.space = i7551[4]
  i7550.randomized = !!i7551[5]
  return i7550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7552 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7553 = data
  i7552.enabled = !!i7553[0]
  i7552.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7553[1], i7552.limit)
  i7552.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7553[2], i7552.limitX)
  i7552.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7553[3], i7552.limitY)
  i7552.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7553[4], i7552.limitZ)
  i7552.dampen = i7553[5]
  i7552.separateAxes = !!i7553[6]
  i7552.space = i7553[7]
  i7552.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7553[8], i7552.drag)
  i7552.multiplyDragByParticleSize = !!i7553[9]
  i7552.multiplyDragByParticleVelocity = !!i7553[10]
  return i7552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7555 = data
  request.r(i7555[0], i7555[1], 0, i7554, 'mesh')
  i7554.meshCount = i7555[2]
  i7554.activeVertexStreamsCount = i7555[3]
  i7554.alignment = i7555[4]
  i7554.renderMode = i7555[5]
  i7554.sortMode = i7555[6]
  i7554.lengthScale = i7555[7]
  i7554.velocityScale = i7555[8]
  i7554.cameraVelocityScale = i7555[9]
  i7554.normalDirection = i7555[10]
  i7554.sortingFudge = i7555[11]
  i7554.minParticleSize = i7555[12]
  i7554.maxParticleSize = i7555[13]
  i7554.pivot = new pc.Vec3( i7555[14], i7555[15], i7555[16] )
  request.r(i7555[17], i7555[18], 0, i7554, 'trailMaterial')
  i7554.applyActiveColorSpace = !!i7555[19]
  i7554.enabled = !!i7555[20]
  request.r(i7555[21], i7555[22], 0, i7554, 'sharedMaterial')
  var i7557 = i7555[23]
  var i7556 = []
  for(var i = 0; i < i7557.length; i += 2) {
  request.r(i7557[i + 0], i7557[i + 1], 2, i7556, '')
  }
  i7554.sharedMaterials = i7556
  i7554.receiveShadows = !!i7555[24]
  i7554.shadowCastingMode = i7555[25]
  i7554.sortingLayerID = i7555[26]
  i7554.sortingOrder = i7555[27]
  i7554.lightmapIndex = i7555[28]
  i7554.lightmapSceneIndex = i7555[29]
  i7554.lightmapScaleOffset = new pc.Vec4( i7555[30], i7555[31], i7555[32], i7555[33] )
  i7554.lightProbeUsage = i7555[34]
  i7554.reflectionProbeUsage = i7555[35]
  return i7554
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i7560 = root || request.c( 'MergeEffect' )
  var i7561 = data
  request.r(i7561[0], i7561[1], 0, i7560, 'tf')
  return i7560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7563 = data
  i7562.name = i7563[0]
  i7562.tagId = i7563[1]
  i7562.enabled = !!i7563[2]
  i7562.isStatic = !!i7563[3]
  i7562.layer = i7563[4]
  return i7562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7565 = data
  i7564.name = i7565[0]
  i7564.halfPrecision = !!i7565[1]
  i7564.useSimplification = !!i7565[2]
  i7564.useUInt32IndexFormat = !!i7565[3]
  i7564.vertexCount = i7565[4]
  i7564.aabb = i7565[5]
  var i7567 = i7565[6]
  var i7566 = []
  for(var i = 0; i < i7567.length; i += 1) {
    i7566.push( !!i7567[i + 0] );
  }
  i7564.streams = i7566
  i7564.vertices = i7565[7]
  var i7569 = i7565[8]
  var i7568 = []
  for(var i = 0; i < i7569.length; i += 1) {
    i7568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7569[i + 0]) );
  }
  i7564.subMeshes = i7568
  var i7571 = i7565[9]
  var i7570 = []
  for(var i = 0; i < i7571.length; i += 16) {
    i7570.push( new pc.Mat4().setData(i7571[i + 0], i7571[i + 1], i7571[i + 2], i7571[i + 3],  i7571[i + 4], i7571[i + 5], i7571[i + 6], i7571[i + 7],  i7571[i + 8], i7571[i + 9], i7571[i + 10], i7571[i + 11],  i7571[i + 12], i7571[i + 13], i7571[i + 14], i7571[i + 15]) );
  }
  i7564.bindposes = i7570
  var i7573 = i7565[10]
  var i7572 = []
  for(var i = 0; i < i7573.length; i += 1) {
    i7572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7573[i + 0]) );
  }
  i7564.blendShapes = i7572
  return i7564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7579 = data
  i7578.triangles = i7579[0]
  return i7578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7585 = data
  i7584.name = i7585[0]
  var i7587 = i7585[1]
  var i7586 = []
  for(var i = 0; i < i7587.length; i += 1) {
    i7586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7587[i + 0]) );
  }
  i7584.frames = i7586
  return i7584
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i7588 = root || request.c( 'BlinkEffect' )
  var i7589 = data
  request.r(i7589[0], i7589[1], 0, i7588, 'tf')
  return i7588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7591 = data
  i7590.name = i7591[0]
  i7590.index = i7591[1]
  i7590.startup = !!i7591[2]
  return i7590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7593 = data
  i7592.pivot = new pc.Vec2( i7593[0], i7593[1] )
  i7592.anchorMin = new pc.Vec2( i7593[2], i7593[3] )
  i7592.anchorMax = new pc.Vec2( i7593[4], i7593[5] )
  i7592.sizeDelta = new pc.Vec2( i7593[6], i7593[7] )
  i7592.anchoredPosition3D = new pc.Vec3( i7593[8], i7593[9], i7593[10] )
  i7592.rotation = new pc.Quat(i7593[11], i7593[12], i7593[13], i7593[14])
  i7592.scale = new pc.Vec3( i7593[15], i7593[16], i7593[17] )
  return i7592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7595 = data
  i7594.planeDistance = i7595[0]
  i7594.referencePixelsPerUnit = i7595[1]
  i7594.isFallbackOverlay = !!i7595[2]
  i7594.renderMode = i7595[3]
  i7594.renderOrder = i7595[4]
  i7594.sortingLayerName = i7595[5]
  i7594.sortingOrder = i7595[6]
  i7594.scaleFactor = i7595[7]
  request.r(i7595[8], i7595[9], 0, i7594, 'worldCamera')
  i7594.overrideSorting = !!i7595[10]
  i7594.pixelPerfect = !!i7595[11]
  i7594.targetDisplay = i7595[12]
  i7594.overridePixelPerfect = !!i7595[13]
  i7594.enabled = !!i7595[14]
  return i7594
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7596 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7597 = data
  i7596.m_UiScaleMode = i7597[0]
  i7596.m_ReferencePixelsPerUnit = i7597[1]
  i7596.m_ScaleFactor = i7597[2]
  i7596.m_ReferenceResolution = new pc.Vec2( i7597[3], i7597[4] )
  i7596.m_ScreenMatchMode = i7597[5]
  i7596.m_MatchWidthOrHeight = i7597[6]
  i7596.m_PhysicalUnit = i7597[7]
  i7596.m_FallbackScreenDPI = i7597[8]
  i7596.m_DefaultSpriteDPI = i7597[9]
  i7596.m_DynamicPixelsPerUnit = i7597[10]
  i7596.m_PresetInfoIsWorld = !!i7597[11]
  return i7596
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7598 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7599 = data
  i7598.m_IgnoreReversedGraphics = !!i7599[0]
  i7598.m_BlockingObjects = i7599[1]
  i7598.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7599[2] )
  return i7598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7601 = data
  request.r(i7601[0], i7601[1], 0, i7600, 'animatorController')
  request.r(i7601[2], i7601[3], 0, i7600, 'avatar')
  i7600.updateMode = i7601[4]
  i7600.hasTransformHierarchy = !!i7601[5]
  i7600.applyRootMotion = !!i7601[6]
  var i7603 = i7601[7]
  var i7602 = []
  for(var i = 0; i < i7603.length; i += 2) {
  request.r(i7603[i + 0], i7603[i + 1], 2, i7602, '')
  }
  i7600.humanBones = i7602
  i7600.enabled = !!i7601[8]
  return i7600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7607 = data
  i7606.cullTransparentMesh = !!i7607[0]
  return i7606
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7608 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7609 = data
  i7608.m_hasFontAssetChanged = !!i7609[0]
  request.r(i7609[1], i7609[2], 0, i7608, 'm_baseMaterial')
  i7608.m_maskOffset = new pc.Vec4( i7609[3], i7609[4], i7609[5], i7609[6] )
  i7608.m_text = i7609[7]
  i7608.m_isRightToLeft = !!i7609[8]
  request.r(i7609[9], i7609[10], 0, i7608, 'm_fontAsset')
  request.r(i7609[11], i7609[12], 0, i7608, 'm_sharedMaterial')
  var i7611 = i7609[13]
  var i7610 = []
  for(var i = 0; i < i7611.length; i += 2) {
  request.r(i7611[i + 0], i7611[i + 1], 2, i7610, '')
  }
  i7608.m_fontSharedMaterials = i7610
  request.r(i7609[14], i7609[15], 0, i7608, 'm_fontMaterial')
  var i7613 = i7609[16]
  var i7612 = []
  for(var i = 0; i < i7613.length; i += 2) {
  request.r(i7613[i + 0], i7613[i + 1], 2, i7612, '')
  }
  i7608.m_fontMaterials = i7612
  i7608.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7609[17], i7609[18], i7609[19], i7609[20])
  i7608.m_fontColor = new pc.Color(i7609[21], i7609[22], i7609[23], i7609[24])
  i7608.m_enableVertexGradient = !!i7609[25]
  i7608.m_colorMode = i7609[26]
  i7608.m_fontColorGradient = request.d('TMPro.VertexGradient', i7609[27], i7608.m_fontColorGradient)
  request.r(i7609[28], i7609[29], 0, i7608, 'm_fontColorGradientPreset')
  request.r(i7609[30], i7609[31], 0, i7608, 'm_spriteAsset')
  i7608.m_tintAllSprites = !!i7609[32]
  request.r(i7609[33], i7609[34], 0, i7608, 'm_StyleSheet')
  i7608.m_TextStyleHashCode = i7609[35]
  i7608.m_overrideHtmlColors = !!i7609[36]
  i7608.m_faceColor = UnityEngine.Color32.ConstructColor(i7609[37], i7609[38], i7609[39], i7609[40])
  i7608.m_fontSize = i7609[41]
  i7608.m_fontSizeBase = i7609[42]
  i7608.m_fontWeight = i7609[43]
  i7608.m_enableAutoSizing = !!i7609[44]
  i7608.m_fontSizeMin = i7609[45]
  i7608.m_fontSizeMax = i7609[46]
  i7608.m_fontStyle = i7609[47]
  i7608.m_HorizontalAlignment = i7609[48]
  i7608.m_VerticalAlignment = i7609[49]
  i7608.m_textAlignment = i7609[50]
  i7608.m_characterSpacing = i7609[51]
  i7608.m_wordSpacing = i7609[52]
  i7608.m_lineSpacing = i7609[53]
  i7608.m_lineSpacingMax = i7609[54]
  i7608.m_paragraphSpacing = i7609[55]
  i7608.m_charWidthMaxAdj = i7609[56]
  i7608.m_TextWrappingMode = i7609[57]
  i7608.m_wordWrappingRatios = i7609[58]
  i7608.m_overflowMode = i7609[59]
  request.r(i7609[60], i7609[61], 0, i7608, 'm_linkedTextComponent')
  request.r(i7609[62], i7609[63], 0, i7608, 'parentLinkedComponent')
  i7608.m_enableKerning = !!i7609[64]
  var i7615 = i7609[65]
  var i7614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7615.length; i += 1) {
    i7614.add(i7615[i + 0]);
  }
  i7608.m_ActiveFontFeatures = i7614
  i7608.m_enableExtraPadding = !!i7609[66]
  i7608.checkPaddingRequired = !!i7609[67]
  i7608.m_isRichText = !!i7609[68]
  i7608.m_parseCtrlCharacters = !!i7609[69]
  i7608.m_isOrthographic = !!i7609[70]
  i7608.m_isCullingEnabled = !!i7609[71]
  i7608.m_horizontalMapping = i7609[72]
  i7608.m_verticalMapping = i7609[73]
  i7608.m_uvLineOffset = i7609[74]
  i7608.m_geometrySortingOrder = i7609[75]
  i7608.m_IsTextObjectScaleStatic = !!i7609[76]
  i7608.m_VertexBufferAutoSizeReduction = !!i7609[77]
  i7608.m_useMaxVisibleDescender = !!i7609[78]
  i7608.m_pageToDisplay = i7609[79]
  i7608.m_margin = new pc.Vec4( i7609[80], i7609[81], i7609[82], i7609[83] )
  i7608.m_isUsingLegacyAnimationComponent = !!i7609[84]
  i7608.m_isVolumetricText = !!i7609[85]
  request.r(i7609[86], i7609[87], 0, i7608, 'm_Material')
  i7608.m_EmojiFallbackSupport = !!i7609[88]
  i7608.m_Maskable = !!i7609[89]
  i7608.m_Color = new pc.Color(i7609[90], i7609[91], i7609[92], i7609[93])
  i7608.m_RaycastTarget = !!i7609[94]
  i7608.m_RaycastPadding = new pc.Vec4( i7609[95], i7609[96], i7609[97], i7609[98] )
  return i7608
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7616 = root || request.c( 'TMPro.VertexGradient' )
  var i7617 = data
  i7616.topLeft = new pc.Color(i7617[0], i7617[1], i7617[2], i7617[3])
  i7616.topRight = new pc.Color(i7617[4], i7617[5], i7617[6], i7617[7])
  i7616.bottomLeft = new pc.Color(i7617[8], i7617[9], i7617[10], i7617[11])
  i7616.bottomRight = new pc.Color(i7617[12], i7617[13], i7617[14], i7617[15])
  return i7616
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i7620 = root || request.c( 'UnityEngine.UI.Slider' )
  var i7621 = data
  request.r(i7621[0], i7621[1], 0, i7620, 'm_FillRect')
  request.r(i7621[2], i7621[3], 0, i7620, 'm_HandleRect')
  i7620.m_Direction = i7621[4]
  i7620.m_MinValue = i7621[5]
  i7620.m_MaxValue = i7621[6]
  i7620.m_WholeNumbers = !!i7621[7]
  i7620.m_Value = i7621[8]
  i7620.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i7621[9], i7620.m_OnValueChanged)
  i7620.m_Navigation = request.d('UnityEngine.UI.Navigation', i7621[10], i7620.m_Navigation)
  i7620.m_Transition = i7621[11]
  i7620.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7621[12], i7620.m_Colors)
  i7620.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7621[13], i7620.m_SpriteState)
  i7620.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7621[14], i7620.m_AnimationTriggers)
  i7620.m_Interactable = !!i7621[15]
  request.r(i7621[16], i7621[17], 0, i7620, 'm_TargetGraphic')
  return i7620
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i7622 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i7623 = data
  i7622.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7623[0], i7622.m_PersistentCalls)
  return i7622
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7624 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7625 = data
  var i7627 = i7625[0]
  var i7626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7627.length; i += 1) {
    i7626.add(request.d('UnityEngine.Events.PersistentCall', i7627[i + 0]));
  }
  i7624.m_Calls = i7626
  return i7624
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7630 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7631 = data
  request.r(i7631[0], i7631[1], 0, i7630, 'm_Target')
  i7630.m_TargetAssemblyTypeName = i7631[2]
  i7630.m_MethodName = i7631[3]
  i7630.m_Mode = i7631[4]
  i7630.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7631[5], i7630.m_Arguments)
  i7630.m_CallState = i7631[6]
  return i7630
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7632 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7633 = data
  i7632.m_Mode = i7633[0]
  i7632.m_WrapAround = !!i7633[1]
  request.r(i7633[2], i7633[3], 0, i7632, 'm_SelectOnUp')
  request.r(i7633[4], i7633[5], 0, i7632, 'm_SelectOnDown')
  request.r(i7633[6], i7633[7], 0, i7632, 'm_SelectOnLeft')
  request.r(i7633[8], i7633[9], 0, i7632, 'm_SelectOnRight')
  return i7632
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7634 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7635 = data
  i7634.m_NormalColor = new pc.Color(i7635[0], i7635[1], i7635[2], i7635[3])
  i7634.m_HighlightedColor = new pc.Color(i7635[4], i7635[5], i7635[6], i7635[7])
  i7634.m_PressedColor = new pc.Color(i7635[8], i7635[9], i7635[10], i7635[11])
  i7634.m_SelectedColor = new pc.Color(i7635[12], i7635[13], i7635[14], i7635[15])
  i7634.m_DisabledColor = new pc.Color(i7635[16], i7635[17], i7635[18], i7635[19])
  i7634.m_ColorMultiplier = i7635[20]
  i7634.m_FadeDuration = i7635[21]
  return i7634
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7636 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7637 = data
  request.r(i7637[0], i7637[1], 0, i7636, 'm_HighlightedSprite')
  request.r(i7637[2], i7637[3], 0, i7636, 'm_PressedSprite')
  request.r(i7637[4], i7637[5], 0, i7636, 'm_SelectedSprite')
  request.r(i7637[6], i7637[7], 0, i7636, 'm_DisabledSprite')
  return i7636
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7638 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7639 = data
  i7638.m_NormalTrigger = i7639[0]
  i7638.m_HighlightedTrigger = i7639[1]
  i7638.m_PressedTrigger = i7639[2]
  i7638.m_SelectedTrigger = i7639[3]
  i7638.m_DisabledTrigger = i7639[4]
  return i7638
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7640 = root || request.c( 'UnityEngine.UI.Image' )
  var i7641 = data
  request.r(i7641[0], i7641[1], 0, i7640, 'm_Sprite')
  i7640.m_Type = i7641[2]
  i7640.m_PreserveAspect = !!i7641[3]
  i7640.m_FillCenter = !!i7641[4]
  i7640.m_FillMethod = i7641[5]
  i7640.m_FillAmount = i7641[6]
  i7640.m_FillClockwise = !!i7641[7]
  i7640.m_FillOrigin = i7641[8]
  i7640.m_UseSpriteMesh = !!i7641[9]
  i7640.m_PixelsPerUnitMultiplier = i7641[10]
  request.r(i7641[11], i7641[12], 0, i7640, 'm_Material')
  i7640.m_Maskable = !!i7641[13]
  i7640.m_Color = new pc.Color(i7641[14], i7641[15], i7641[16], i7641[17])
  i7640.m_RaycastTarget = !!i7641[18]
  i7640.m_RaycastPadding = new pc.Vec4( i7641[19], i7641[20], i7641[21], i7641[22] )
  return i7640
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7642 = root || request.c( 'UnityEngine.UI.Button' )
  var i7643 = data
  i7642.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7643[0], i7642.m_OnClick)
  i7642.m_Navigation = request.d('UnityEngine.UI.Navigation', i7643[1], i7642.m_Navigation)
  i7642.m_Transition = i7643[2]
  i7642.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7643[3], i7642.m_Colors)
  i7642.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7643[4], i7642.m_SpriteState)
  i7642.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7643[5], i7642.m_AnimationTriggers)
  i7642.m_Interactable = !!i7643[6]
  request.r(i7643[7], i7643[8], 0, i7642, 'm_TargetGraphic')
  return i7642
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7644 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7645 = data
  i7644.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7645[0], i7644.m_PersistentCalls)
  return i7644
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7646 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7647 = data
  request.r(i7647[0], i7647[1], 0, i7646, 'm_ObjectArgument')
  i7646.m_ObjectArgumentAssemblyTypeName = i7647[2]
  i7646.m_IntArgument = i7647[3]
  i7646.m_FloatArgument = i7647[4]
  i7646.m_StringArgument = i7647[5]
  i7646.m_BoolArgument = !!i7647[6]
  return i7646
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i7648 = root || request.c( 'Ply_Pool' )
  var i7649 = data
  var i7651 = i7649[0]
  var i7650 = []
  for(var i = 0; i < i7651.length; i += 1) {
    i7650.push( request.d('Ply_Pool+PoolAmount', i7651[i + 0]) );
  }
  i7648.poolAmounts = i7650
  request.r(i7649[1], i7649[2], 0, i7648, 'poolHolder')
  return i7648
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i7654 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i7655 = data
  i7654.type = i7655[0]
  i7654.amount = i7655[1]
  request.r(i7655[2], i7655[3], 0, i7654, 'gameUnit')
  return i7654
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i7656 = root || request.c( 'Ply_SoundManager' )
  var i7657 = data
  var i7659 = i7657[0]
  var i7658 = []
  for(var i = 0; i < i7659.length; i += 1) {
    i7658.push( request.d('Ply_SoundManager+FxAudio', i7659[i + 0]) );
  }
  i7656.fxAudios = i7658
  var i7661 = i7657[1]
  var i7660 = []
  for(var i = 0; i < i7661.length; i += 2) {
  request.r(i7661[i + 0], i7661[i + 1], 2, i7660, '')
  }
  i7656.audioClips = i7660
  request.r(i7657[2], i7657[3], 0, i7656, 'sound')
  return i7656
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i7664 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i7665 = data
  i7664.fxType = i7665[0]
  request.r(i7665[1], i7665[2], 0, i7664, 'audioClip')
  return i7664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7669 = data
  request.r(i7669[0], i7669[1], 0, i7668, 'clip')
  request.r(i7669[2], i7669[3], 0, i7668, 'outputAudioMixerGroup')
  i7668.playOnAwake = !!i7669[4]
  i7668.loop = !!i7669[5]
  i7668.time = i7669[6]
  i7668.volume = i7669[7]
  i7668.pitch = i7669[8]
  i7668.enabled = !!i7669[9]
  return i7668
}

Deserializers["GameManager"] = function (request, data, root) {
  var i7670 = root || request.c( 'GameManager' )
  var i7671 = data
  i7670.isPlaying = !!i7671[0]
  i7670.isTutorial = !!i7671[1]
  i7670.isGotoStore = !!i7671[2]
  i7670.isDraggingConveyor = !!i7671[3]
  i7670.countMove = i7671[4]
  i7670.maxMove = i7671[5]
  i7670.startLayer = i7671[6]
  i7670.currentLayer = i7671[7]
  request.r(i7671[8], i7671[9], 0, i7670, 'mainBox')
  request.r(i7671[10], i7671[11], 0, i7670, 'itemConveyor')
  i7670.useTimer = !!i7671[12]
  i7670.gameDuration = i7671[13]
  request.r(i7671[14], i7671[15], 0, i7670, 'handTutorial')
  i7670.tutorialDelay = i7671[16]
  i7670.maxTutorialPlacements = i7671[17]
  return i7670
}

Deserializers["UIManager"] = function (request, data, root) {
  var i7672 = root || request.c( 'UIManager' )
  var i7673 = data
  request.r(i7673[0], i7673[1], 0, i7672, 'winUI')
  request.r(i7673[2], i7673[3], 0, i7672, 'loseUI')
  request.r(i7673[4], i7673[5], 0, i7672, 'tutorial')
  request.r(i7673[6], i7673[7], 0, i7672, 'verticalUI')
  request.r(i7673[8], i7673[9], 0, i7672, 'horizontalUI')
  request.r(i7673[10], i7673[11], 0, i7672, 'downloadBtnVertical')
  request.r(i7673[12], i7673[13], 0, i7672, 'dowloadBtnHorizontal')
  request.r(i7673[14], i7673[15], 0, i7672, 'textAnim')
  i7672.isGoogleBuild = !!i7673[16]
  request.r(i7673[17], i7673[18], 0, i7672, 'progressSlider')
  request.r(i7673[19], i7673[20], 0, i7672, 'progressText')
  i7672.maxProgressItems = i7673[21]
  i7672.startProgressItems = i7673[22]
  i7672.screenWidth = i7673[23]
  i7672.screenHeight = i7673[24]
  i7672.scaleHeightOnWidth = i7673[25]
  i7672.isVertical = !!i7673[26]
  i7672.isScreenVertical = !!i7673[27]
  request.r(i7673[28], i7673[29], 0, i7672, 'cam')
  i7672.verticalUIHeightOnWidthRatio = i7673[30]
  i7672.screenVerticalHeightOnWidthRatio = i7673[31]
  i7672.introZoomOutMultiplier = i7673[32]
  i7672.cameraZoomDuration = i7673[33]
  i7672.useContinuousScaling = !!i7673[34]
  i7672.baseOrthographicSize = i7673[35]
  i7672.baseAspect = i7673[36]
  i7672.landscapeSize = i7673[37]
  i7672.defaultPortraitSize = i7673[38]
  var i7675 = i7673[39]
  var i7674 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i7675.length; i += 1) {
    i7674.add(request.d('ScreenScaleStep', i7675[i + 0]));
  }
  i7672.discreteScaleSteps = i7674
  i7672.usePerspectiveCamera = !!i7673[40]
  request.r(i7673[41], i7673[42], 0, i7672, 'perspectiveFocus')
  i7672.perspectiveFocusDistance = i7673[43]
  i7672.perspectivePadding = i7673[44]
  i7672.fitRendererBounds = !!i7673[45]
  request.r(i7673[46], i7673[47], 0, i7672, 'boundsRoot')
  var i7677 = i7673[48]
  var i7676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i7677.length; i += 2) {
  request.r(i7677[i + 0], i7677[i + 1], 1, i7676, '')
  }
  i7672.boundsRenderers = i7676
  return i7672
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i7680 = root || request.c( 'ScreenScaleStep' )
  var i7681 = data
  i7680.heightOnWidthRatio = i7681[0]
  i7680.orthographicSize = i7681[1]
  return i7680
}

Deserializers["InputManager"] = function (request, data, root) {
  var i7684 = root || request.c( 'InputManager' )
  var i7685 = data
  i7684.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i7685[0] )
  i7684.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i7685[1] )
  i7684.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i7685[2] )
  i7684.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i7685[3] )
  i7684.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i7685[4] )
  i7684.isDragging = !!i7685[5]
  request.r(i7685[6], i7685[7], 0, i7684, 'mainCamera')
  return i7684
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i7686 = root || request.c( 'ItemSetupTool' )
  var i7687 = data
  request.r(i7687[0], i7687[1], 0, i7686, 'spritesParent')
  request.r(i7687[2], i7687[3], 0, i7686, 'holdersParent')
  i7686.shadowSuffix = i7687[4]
  i7686.holderPrefix = i7687[5]
  i7686.holdersParentName = i7687[6]
  i7686.colliderDepth = i7687[7]
  i7686.colliderSizeMultiplier = i7687[8]
  i7686.minColliderSize = new pc.Vec2( i7687[9], i7687[10] )
  i7686.generatedShadowColor = new pc.Color(i7687[11], i7687[12], i7687[13], i7687[14])
  i7686.fadedBlackShadowColor = new pc.Color(i7687[15], i7687[16], i7687[17], i7687[18])
  i7686.generatedShadowLocalOffset = new pc.Vec3( i7687[19], i7687[20], i7687[21] )
  i7686.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i7687[22] )
  i7686.holderLayer = UnityEngine.LayerMask.FromIntegerValue( i7687[23] )
  return i7686
}

Deserializers["CameraController"] = function (request, data, root) {
  var i7688 = root || request.c( 'CameraController' )
  var i7689 = data
  request.r(i7689[0], i7689[1], 0, i7688, 'targetCamera')
  i7688.enableZoom = !!i7689[2]
  i7688.minZoomRatio = i7689[3]
  i7688.maxZoomRatio = i7689[4]
  i7688.mouseWheelZoomSpeed = i7689[5]
  i7688.pinchZoomSpeed = i7689[6]
  request.r(i7689[7], i7689[8], 0, i7688, 'conveyor')
  i7688.enableDrag = !!i7689[9]
  i7688.horizontalOnly = !!i7689[10]
  i7688.dragSensitivity = i7689[11]
  i7688.maxHorizontalOffset = i7689[12]
  i7688.maxVerticalOffset = i7689[13]
  return i7688
}

Deserializers["ItemSpawnManager"] = function (request, data, root) {
  var i7690 = root || request.c( 'ItemSpawnManager' )
  var i7691 = data
  i7690.spawnInRandomArea = !!i7691[0]
  i7690.spawnTargetMode = i7691[1]
  var i7693 = i7691[2]
  var i7692 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7693.length; i += 2) {
  request.r(i7693[i + 0], i7693[i + 1], 1, i7692, '')
  }
  i7690.dynamicItems = i7692
  var i7695 = i7691[3]
  var i7694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i7695.length; i += 2) {
  request.r(i7695[i + 0], i7695[i + 1], 1, i7694, '')
  }
  i7690.spawnTargets = i7694
  i7690.initialSpawnCount = i7691[4]
  i7690.revealDuration = i7691[5]
  i7690.showInitialBatchShadowsOnSpawn = !!i7691[6]
  i7690.spawnAreaSize = new pc.Vec2( i7691[7], i7691[8] )
  i7690.spawnAreaOffset = new pc.Vec3( i7691[9], i7691[10], i7691[11] )
  request.r(i7691[12], i7691[13], 0, i7690, 'randomSpawnParent')
  i7690.showShadowOnDragCount = i7691[14]
  return i7690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7701 = data
  i7700.aspect = i7701[0]
  i7700.orthographic = !!i7701[1]
  i7700.orthographicSize = i7701[2]
  i7700.backgroundColor = new pc.Color(i7701[3], i7701[4], i7701[5], i7701[6])
  i7700.nearClipPlane = i7701[7]
  i7700.farClipPlane = i7701[8]
  i7700.fieldOfView = i7701[9]
  i7700.depth = i7701[10]
  i7700.clearFlags = i7701[11]
  i7700.cullingMask = i7701[12]
  i7700.rect = i7701[13]
  request.r(i7701[14], i7701[15], 0, i7700, 'targetTexture')
  i7700.usePhysicalProperties = !!i7701[16]
  i7700.focalLength = i7701[17]
  i7700.sensorSize = new pc.Vec2( i7701[18], i7701[19] )
  i7700.lensShift = new pc.Vec2( i7701[20], i7701[21] )
  i7700.gateFit = i7701[22]
  i7700.commandBufferCount = i7701[23]
  i7700.cameraType = i7701[24]
  i7700.enabled = !!i7701[25]
  return i7700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i7702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i7703 = data
  i7702.type = i7703[0]
  i7702.color = new pc.Color(i7703[1], i7703[2], i7703[3], i7703[4])
  i7702.cullingMask = i7703[5]
  i7702.intensity = i7703[6]
  i7702.range = i7703[7]
  i7702.spotAngle = i7703[8]
  i7702.shadows = i7703[9]
  i7702.shadowNormalBias = i7703[10]
  i7702.shadowBias = i7703[11]
  i7702.shadowStrength = i7703[12]
  i7702.shadowResolution = i7703[13]
  i7702.lightmapBakeType = i7703[14]
  i7702.renderMode = i7703[15]
  request.r(i7703[16], i7703[17], 0, i7702, 'cookie')
  i7702.cookieSize = i7703[18]
  i7702.shadowNearPlane = i7703[19]
  i7702.occlusionMaskChannel = i7703[20]
  i7702.enabled = !!i7703[21]
  return i7702
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7704 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7705 = data
  request.r(i7705[0], i7705[1], 0, i7704, 'm_FirstSelected')
  i7704.m_sendNavigationEvents = !!i7705[2]
  i7704.m_DragThreshold = i7705[3]
  return i7704
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7706 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7707 = data
  i7706.m_HorizontalAxis = i7707[0]
  i7706.m_VerticalAxis = i7707[1]
  i7706.m_SubmitButton = i7707[2]
  i7706.m_CancelButton = i7707[3]
  i7706.m_InputActionsPerSecond = i7707[4]
  i7706.m_RepeatDelay = i7707[5]
  i7706.m_ForceModuleActive = !!i7707[6]
  i7706.m_SendPointerHoverToParent = !!i7707[7]
  return i7706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7709 = data
  i7708.color = new pc.Color(i7709[0], i7709[1], i7709[2], i7709[3])
  request.r(i7709[4], i7709[5], 0, i7708, 'sprite')
  i7708.flipX = !!i7709[6]
  i7708.flipY = !!i7709[7]
  i7708.drawMode = i7709[8]
  i7708.size = new pc.Vec2( i7709[9], i7709[10] )
  i7708.tileMode = i7709[11]
  i7708.adaptiveModeThreshold = i7709[12]
  i7708.maskInteraction = i7709[13]
  i7708.spriteSortPoint = i7709[14]
  i7708.enabled = !!i7709[15]
  request.r(i7709[16], i7709[17], 0, i7708, 'sharedMaterial')
  var i7711 = i7709[18]
  var i7710 = []
  for(var i = 0; i < i7711.length; i += 2) {
  request.r(i7711[i + 0], i7711[i + 1], 2, i7710, '')
  }
  i7708.sharedMaterials = i7710
  i7708.receiveShadows = !!i7709[19]
  i7708.shadowCastingMode = i7709[20]
  i7708.sortingLayerID = i7709[21]
  i7708.sortingOrder = i7709[22]
  i7708.lightmapIndex = i7709[23]
  i7708.lightmapSceneIndex = i7709[24]
  i7708.lightmapScaleOffset = new pc.Vec4( i7709[25], i7709[26], i7709[27], i7709[28] )
  i7708.lightProbeUsage = i7709[29]
  i7708.reflectionProbeUsage = i7709[30]
  return i7708
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i7712 = root || request.c( 'ItemHolder' )
  var i7713 = data
  i7712.id = i7713[0]
  return i7712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i7714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i7715 = data
  i7714.center = new pc.Vec3( i7715[0], i7715[1], i7715[2] )
  i7714.size = new pc.Vec3( i7715[3], i7715[4], i7715[5] )
  i7714.enabled = !!i7715[6]
  i7714.isTrigger = !!i7715[7]
  request.r(i7715[8], i7715[9], 0, i7714, 'material')
  return i7714
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i7716 = root || request.c( 'PSD_Tool' )
  var i7717 = data
  var i7719 = i7717[0]
  var i7718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i7719.length; i += 2) {
  request.r(i7719[i + 0], i7719[i + 1], 1, i7718, '')
  }
  i7716.sprites = i7718
  request.r(i7717[1], i7717[2], 0, i7716, 'holder')
  var i7721 = i7717[3]
  var i7720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7721.length; i += 2) {
  request.r(i7721[i + 0], i7721[i + 1], 1, i7720, '')
  }
  i7716.childGameObjects = i7720
  return i7716
}

Deserializers["Item"] = function (request, data, root) {
  var i7726 = root || request.c( 'Item' )
  var i7727 = data
  i7726.fxTypeOnPlace = i7727[0]
  i7726.id = i7727[1]
  i7726.currentState = i7727[2]
  i7726.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i7727[3] )
  request.r(i7727[4], i7727[5], 0, i7726, 'defaultShadow')
  i7726.returnToSlotOnMiss = !!i7727[6]
  i7726.hideShadowOnDrop = !!i7727[7]
  i7726.scaleOnSpawn = !!i7727[8]
  i7726.spawnScaleMultiplier = i7727[9]
  var i7729 = i7727[10]
  var i7728 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i7729.length; i += 2) {
  request.r(i7729[i + 0], i7729[i + 1], 1, i7728, '')
  }
  i7726.requiredItems = i7728
  request.r(i7727[11], i7727[12], 0, i7726, 'correctHolderTransform')
  request.r(i7727[13], i7727[14], 0, i7726, 'shadowOnHolder')
  i7726.canShowShadowHint = !!i7727[15]
  request.r(i7727[16], i7727[17], 0, i7726, 'homeSlot')
  i7726.waitingPosition = new pc.Vec3( i7727[18], i7727[19], i7727[20] )
  request.r(i7727[21], i7727[22], 0, i7726, 'spriteRenderer')
  return i7726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7731 = data
  i7730.ambientIntensity = i7731[0]
  i7730.reflectionIntensity = i7731[1]
  i7730.ambientMode = i7731[2]
  i7730.ambientLight = new pc.Color(i7731[3], i7731[4], i7731[5], i7731[6])
  i7730.ambientSkyColor = new pc.Color(i7731[7], i7731[8], i7731[9], i7731[10])
  i7730.ambientGroundColor = new pc.Color(i7731[11], i7731[12], i7731[13], i7731[14])
  i7730.ambientEquatorColor = new pc.Color(i7731[15], i7731[16], i7731[17], i7731[18])
  i7730.fogColor = new pc.Color(i7731[19], i7731[20], i7731[21], i7731[22])
  i7730.fogEndDistance = i7731[23]
  i7730.fogStartDistance = i7731[24]
  i7730.fogDensity = i7731[25]
  i7730.fog = !!i7731[26]
  request.r(i7731[27], i7731[28], 0, i7730, 'skybox')
  i7730.fogMode = i7731[29]
  var i7733 = i7731[30]
  var i7732 = []
  for(var i = 0; i < i7733.length; i += 1) {
    i7732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7733[i + 0]) );
  }
  i7730.lightmaps = i7732
  i7730.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7731[31], i7730.lightProbes)
  i7730.lightmapsMode = i7731[32]
  i7730.mixedBakeMode = i7731[33]
  i7730.environmentLightingMode = i7731[34]
  i7730.ambientProbe = new pc.SphericalHarmonicsL2(i7731[35])
  i7730.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7731[36])
  i7730.useReferenceAmbientProbe = !!i7731[37]
  request.r(i7731[38], i7731[39], 0, i7730, 'customReflection')
  request.r(i7731[40], i7731[41], 0, i7730, 'defaultReflection')
  i7730.defaultReflectionMode = i7731[42]
  i7730.defaultReflectionResolution = i7731[43]
  i7730.sunLightObjectId = i7731[44]
  i7730.pixelLightCount = i7731[45]
  i7730.defaultReflectionHDR = !!i7731[46]
  i7730.hasLightDataAsset = !!i7731[47]
  i7730.hasManualGenerate = !!i7731[48]
  return i7730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7737 = data
  request.r(i7737[0], i7737[1], 0, i7736, 'lightmapColor')
  request.r(i7737[2], i7737[3], 0, i7736, 'lightmapDirection')
  request.r(i7737[4], i7737[5], 0, i7736, 'shadowMask')
  return i7736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7738 = root || new UnityEngine.LightProbes()
  var i7739 = data
  return i7738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7747 = data
  var i7749 = i7747[0]
  var i7748 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7749.length; i += 1) {
    i7748.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7749[i + 0]));
  }
  i7746.ShaderCompilationErrors = i7748
  i7746.name = i7747[1]
  i7746.guid = i7747[2]
  var i7751 = i7747[3]
  var i7750 = []
  for(var i = 0; i < i7751.length; i += 1) {
    i7750.push( i7751[i + 0] );
  }
  i7746.shaderDefinedKeywords = i7750
  var i7753 = i7747[4]
  var i7752 = []
  for(var i = 0; i < i7753.length; i += 1) {
    i7752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7753[i + 0]) );
  }
  i7746.passes = i7752
  var i7755 = i7747[5]
  var i7754 = []
  for(var i = 0; i < i7755.length; i += 1) {
    i7754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7755[i + 0]) );
  }
  i7746.usePasses = i7754
  var i7757 = i7747[6]
  var i7756 = []
  for(var i = 0; i < i7757.length; i += 1) {
    i7756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7757[i + 0]) );
  }
  i7746.defaultParameterValues = i7756
  request.r(i7747[7], i7747[8], 0, i7746, 'unityFallbackShader')
  i7746.readDepth = !!i7747[9]
  i7746.hasDepthOnlyPass = !!i7747[10]
  i7746.isCreatedByShaderGraph = !!i7747[11]
  i7746.disableBatching = !!i7747[12]
  i7746.compiled = !!i7747[13]
  return i7746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7761 = data
  i7760.shaderName = i7761[0]
  i7760.errorMessage = i7761[1]
  return i7760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7766 = root || new pc.UnityShaderPass()
  var i7767 = data
  i7766.id = i7767[0]
  i7766.subShaderIndex = i7767[1]
  i7766.name = i7767[2]
  i7766.passType = i7767[3]
  i7766.grabPassTextureName = i7767[4]
  i7766.usePass = !!i7767[5]
  i7766.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[6], i7766.zTest)
  i7766.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[7], i7766.zWrite)
  i7766.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[8], i7766.culling)
  i7766.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7767[9], i7766.blending)
  i7766.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7767[10], i7766.alphaBlending)
  i7766.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[11], i7766.colorWriteMask)
  i7766.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[12], i7766.offsetUnits)
  i7766.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[13], i7766.offsetFactor)
  i7766.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[14], i7766.stencilRef)
  i7766.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[15], i7766.stencilReadMask)
  i7766.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7767[16], i7766.stencilWriteMask)
  i7766.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7767[17], i7766.stencilOp)
  i7766.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7767[18], i7766.stencilOpFront)
  i7766.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7767[19], i7766.stencilOpBack)
  var i7769 = i7767[20]
  var i7768 = []
  for(var i = 0; i < i7769.length; i += 1) {
    i7768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7769[i + 0]) );
  }
  i7766.tags = i7768
  var i7771 = i7767[21]
  var i7770 = []
  for(var i = 0; i < i7771.length; i += 1) {
    i7770.push( i7771[i + 0] );
  }
  i7766.passDefinedKeywords = i7770
  var i7773 = i7767[22]
  var i7772 = []
  for(var i = 0; i < i7773.length; i += 1) {
    i7772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7773[i + 0]) );
  }
  i7766.passDefinedKeywordGroups = i7772
  var i7775 = i7767[23]
  var i7774 = []
  for(var i = 0; i < i7775.length; i += 1) {
    i7774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7775[i + 0]) );
  }
  i7766.variants = i7774
  var i7777 = i7767[24]
  var i7776 = []
  for(var i = 0; i < i7777.length; i += 1) {
    i7776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7777[i + 0]) );
  }
  i7766.excludedVariants = i7776
  i7766.hasDepthReader = !!i7767[25]
  return i7766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7779 = data
  i7778.val = i7779[0]
  i7778.name = i7779[1]
  return i7778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7781 = data
  i7780.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7781[0], i7780.src)
  i7780.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7781[1], i7780.dst)
  i7780.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7781[2], i7780.op)
  return i7780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7783 = data
  i7782.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7783[0], i7782.pass)
  i7782.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7783[1], i7782.fail)
  i7782.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7783[2], i7782.zFail)
  i7782.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7783[3], i7782.comp)
  return i7782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7787 = data
  i7786.name = i7787[0]
  i7786.value = i7787[1]
  return i7786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7791 = data
  var i7793 = i7791[0]
  var i7792 = []
  for(var i = 0; i < i7793.length; i += 1) {
    i7792.push( i7793[i + 0] );
  }
  i7790.keywords = i7792
  i7790.hasDiscard = !!i7791[1]
  return i7790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7797 = data
  i7796.passId = i7797[0]
  i7796.subShaderIndex = i7797[1]
  var i7799 = i7797[2]
  var i7798 = []
  for(var i = 0; i < i7799.length; i += 1) {
    i7798.push( i7799[i + 0] );
  }
  i7796.keywords = i7798
  i7796.vertexProgram = i7797[3]
  i7796.fragmentProgram = i7797[4]
  i7796.exportedForWebGl2 = !!i7797[5]
  i7796.readDepth = !!i7797[6]
  return i7796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7803 = data
  request.r(i7803[0], i7803[1], 0, i7802, 'shader')
  i7802.pass = i7803[2]
  return i7802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7807 = data
  i7806.name = i7807[0]
  i7806.type = i7807[1]
  i7806.value = new pc.Vec4( i7807[2], i7807[3], i7807[4], i7807[5] )
  i7806.textureValue = i7807[6]
  i7806.shaderPropertyFlag = i7807[7]
  return i7806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7809 = data
  i7808.name = i7809[0]
  request.r(i7809[1], i7809[2], 0, i7808, 'texture')
  i7808.aabb = i7809[3]
  i7808.vertices = i7809[4]
  i7808.triangles = i7809[5]
  i7808.textureRect = UnityEngine.Rect.MinMaxRect(i7809[6], i7809[7], i7809[8], i7809[9])
  i7808.packedRect = UnityEngine.Rect.MinMaxRect(i7809[10], i7809[11], i7809[12], i7809[13])
  i7808.border = new pc.Vec4( i7809[14], i7809[15], i7809[16], i7809[17] )
  i7808.transparency = i7809[18]
  i7808.bounds = i7809[19]
  i7808.pixelsPerUnit = i7809[20]
  i7808.textureWidth = i7809[21]
  i7808.textureHeight = i7809[22]
  i7808.nativeSize = new pc.Vec2( i7809[23], i7809[24] )
  i7808.pivot = new pc.Vec2( i7809[25], i7809[26] )
  i7808.textureRectOffset = new pc.Vec2( i7809[27], i7809[28] )
  return i7808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7811 = data
  i7810.name = i7811[0]
  return i7810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7813 = data
  i7812.name = i7813[0]
  i7812.wrapMode = i7813[1]
  i7812.isLooping = !!i7813[2]
  i7812.length = i7813[3]
  var i7815 = i7813[4]
  var i7814 = []
  for(var i = 0; i < i7815.length; i += 1) {
    i7814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7815[i + 0]) );
  }
  i7812.curves = i7814
  var i7817 = i7813[5]
  var i7816 = []
  for(var i = 0; i < i7817.length; i += 1) {
    i7816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7817[i + 0]) );
  }
  i7812.events = i7816
  i7812.halfPrecision = !!i7813[6]
  i7812._frameRate = i7813[7]
  i7812.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i7813[8], i7812.localBounds)
  i7812.hasMuscleCurves = !!i7813[9]
  var i7819 = i7813[10]
  var i7818 = []
  for(var i = 0; i < i7819.length; i += 1) {
    i7818.push( i7819[i + 0] );
  }
  i7812.clipMuscleConstant = i7818
  i7812.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i7813[11], i7812.clipBindingConstant)
  return i7812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7823 = data
  i7822.path = i7823[0]
  i7822.hash = i7823[1]
  i7822.componentType = i7823[2]
  i7822.property = i7823[3]
  i7822.keys = i7823[4]
  var i7825 = i7823[5]
  var i7824 = []
  for(var i = 0; i < i7825.length; i += 1) {
    i7824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7825[i + 0]) );
  }
  i7822.objectReferenceKeys = i7824
  return i7822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7829 = data
  i7828.time = i7829[0]
  request.r(i7829[1], i7829[2], 0, i7828, 'value')
  return i7828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7833 = data
  i7832.functionName = i7833[0]
  i7832.floatParameter = i7833[1]
  i7832.intParameter = i7833[2]
  i7832.stringParameter = i7833[3]
  request.r(i7833[4], i7833[5], 0, i7832, 'objectReferenceParameter')
  i7832.time = i7833[6]
  return i7832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i7834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i7835 = data
  i7834.center = new pc.Vec3( i7835[0], i7835[1], i7835[2] )
  i7834.extends = new pc.Vec3( i7835[3], i7835[4], i7835[5] )
  return i7834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i7838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i7839 = data
  var i7841 = i7839[0]
  var i7840 = []
  for(var i = 0; i < i7841.length; i += 1) {
    i7840.push( i7841[i + 0] );
  }
  i7838.genericBindings = i7840
  var i7843 = i7839[1]
  var i7842 = []
  for(var i = 0; i < i7843.length; i += 1) {
    i7842.push( i7843[i + 0] );
  }
  i7838.pptrCurveMapping = i7842
  return i7838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7845 = data
  i7844.name = i7845[0]
  var i7847 = i7845[1]
  var i7846 = []
  for(var i = 0; i < i7847.length; i += 1) {
    i7846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7847[i + 0]) );
  }
  i7844.layers = i7846
  var i7849 = i7845[2]
  var i7848 = []
  for(var i = 0; i < i7849.length; i += 1) {
    i7848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7849[i + 0]) );
  }
  i7844.parameters = i7848
  i7844.animationClips = i7845[3]
  i7844.avatarUnsupported = i7845[4]
  return i7844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7853 = data
  i7852.name = i7853[0]
  i7852.defaultWeight = i7853[1]
  i7852.blendingMode = i7853[2]
  i7852.avatarMask = i7853[3]
  i7852.syncedLayerIndex = i7853[4]
  i7852.syncedLayerAffectsTiming = !!i7853[5]
  i7852.syncedLayers = i7853[6]
  i7852.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7853[7], i7852.stateMachine)
  return i7852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7855 = data
  i7854.id = i7855[0]
  i7854.name = i7855[1]
  i7854.path = i7855[2]
  var i7857 = i7855[3]
  var i7856 = []
  for(var i = 0; i < i7857.length; i += 1) {
    i7856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7857[i + 0]) );
  }
  i7854.states = i7856
  var i7859 = i7855[4]
  var i7858 = []
  for(var i = 0; i < i7859.length; i += 1) {
    i7858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7859[i + 0]) );
  }
  i7854.machines = i7858
  var i7861 = i7855[5]
  var i7860 = []
  for(var i = 0; i < i7861.length; i += 1) {
    i7860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7861[i + 0]) );
  }
  i7854.entryStateTransitions = i7860
  var i7863 = i7855[6]
  var i7862 = []
  for(var i = 0; i < i7863.length; i += 1) {
    i7862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7863[i + 0]) );
  }
  i7854.exitStateTransitions = i7862
  var i7865 = i7855[7]
  var i7864 = []
  for(var i = 0; i < i7865.length; i += 1) {
    i7864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7865[i + 0]) );
  }
  i7854.anyStateTransitions = i7864
  i7854.defaultStateId = i7855[8]
  return i7854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7869 = data
  i7868.id = i7869[0]
  i7868.name = i7869[1]
  i7868.cycleOffset = i7869[2]
  i7868.cycleOffsetParameter = i7869[3]
  i7868.cycleOffsetParameterActive = !!i7869[4]
  i7868.mirror = !!i7869[5]
  i7868.mirrorParameter = i7869[6]
  i7868.mirrorParameterActive = !!i7869[7]
  i7868.motionId = i7869[8]
  i7868.nameHash = i7869[9]
  i7868.fullPathHash = i7869[10]
  i7868.speed = i7869[11]
  i7868.speedParameter = i7869[12]
  i7868.speedParameterActive = !!i7869[13]
  i7868.tag = i7869[14]
  i7868.tagHash = i7869[15]
  i7868.writeDefaultValues = !!i7869[16]
  var i7871 = i7869[17]
  var i7870 = []
  for(var i = 0; i < i7871.length; i += 2) {
  request.r(i7871[i + 0], i7871[i + 1], 2, i7870, '')
  }
  i7868.behaviours = i7870
  var i7873 = i7869[18]
  var i7872 = []
  for(var i = 0; i < i7873.length; i += 1) {
    i7872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7873[i + 0]) );
  }
  i7868.transitions = i7872
  return i7868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7879 = data
  i7878.fullPath = i7879[0]
  i7878.canTransitionToSelf = !!i7879[1]
  i7878.duration = i7879[2]
  i7878.exitTime = i7879[3]
  i7878.hasExitTime = !!i7879[4]
  i7878.hasFixedDuration = !!i7879[5]
  i7878.interruptionSource = i7879[6]
  i7878.offset = i7879[7]
  i7878.orderedInterruption = !!i7879[8]
  i7878.destinationStateId = i7879[9]
  i7878.isExit = !!i7879[10]
  i7878.mute = !!i7879[11]
  i7878.solo = !!i7879[12]
  var i7881 = i7879[13]
  var i7880 = []
  for(var i = 0; i < i7881.length; i += 1) {
    i7880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7881[i + 0]) );
  }
  i7878.conditions = i7880
  return i7878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7887 = data
  i7886.destinationStateId = i7887[0]
  i7886.isExit = !!i7887[1]
  i7886.mute = !!i7887[2]
  i7886.solo = !!i7887[3]
  var i7889 = i7887[4]
  var i7888 = []
  for(var i = 0; i < i7889.length; i += 1) {
    i7888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7889[i + 0]) );
  }
  i7886.conditions = i7888
  return i7886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7893 = data
  i7892.defaultBool = !!i7893[0]
  i7892.defaultFloat = i7893[1]
  i7892.defaultInt = i7893[2]
  i7892.name = i7893[3]
  i7892.nameHash = i7893[4]
  i7892.type = i7893[5]
  return i7892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7895 = data
  i7894.name = i7895[0]
  i7894.bytes64 = i7895[1]
  i7894.data = i7895[2]
  return i7894
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i7896 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i7897 = data
  i7896.normalStyle = i7897[0]
  i7896.normalSpacingOffset = i7897[1]
  i7896.boldStyle = i7897[2]
  i7896.boldSpacing = i7897[3]
  i7896.italicStyle = i7897[4]
  i7896.tabSize = i7897[5]
  request.r(i7897[6], i7897[7], 0, i7896, 'atlas')
  i7896.m_SourceFontFileGUID = i7897[8]
  i7896.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i7897[9], i7896.m_CreationSettings)
  request.r(i7897[10], i7897[11], 0, i7896, 'm_SourceFontFile')
  i7896.m_SourceFontFilePath = i7897[12]
  i7896.m_AtlasPopulationMode = i7897[13]
  i7896.InternalDynamicOS = !!i7897[14]
  var i7899 = i7897[15]
  var i7898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i7899.length; i += 1) {
    i7898.add(request.d('UnityEngine.TextCore.Glyph', i7899[i + 0]));
  }
  i7896.m_GlyphTable = i7898
  var i7901 = i7897[16]
  var i7900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i7901.length; i += 1) {
    i7900.add(request.d('TMPro.TMP_Character', i7901[i + 0]));
  }
  i7896.m_CharacterTable = i7900
  var i7903 = i7897[17]
  var i7902 = []
  for(var i = 0; i < i7903.length; i += 2) {
  request.r(i7903[i + 0], i7903[i + 1], 2, i7902, '')
  }
  i7896.m_AtlasTextures = i7902
  i7896.m_AtlasTextureIndex = i7897[18]
  i7896.m_IsMultiAtlasTexturesEnabled = !!i7897[19]
  i7896.m_GetFontFeatures = !!i7897[20]
  i7896.m_ClearDynamicDataOnBuild = !!i7897[21]
  i7896.m_AtlasWidth = i7897[22]
  i7896.m_AtlasHeight = i7897[23]
  i7896.m_AtlasPadding = i7897[24]
  i7896.m_AtlasRenderMode = i7897[25]
  var i7905 = i7897[26]
  var i7904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7905.length; i += 1) {
    i7904.add(request.d('UnityEngine.TextCore.GlyphRect', i7905[i + 0]));
  }
  i7896.m_UsedGlyphRects = i7904
  var i7907 = i7897[27]
  var i7906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7907.length; i += 1) {
    i7906.add(request.d('UnityEngine.TextCore.GlyphRect', i7907[i + 0]));
  }
  i7896.m_FreeGlyphRects = i7906
  i7896.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i7897[28], i7896.m_FontFeatureTable)
  i7896.m_ShouldReimportFontFeatures = !!i7897[29]
  var i7909 = i7897[30]
  var i7908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7909.length; i += 2) {
  request.r(i7909[i + 0], i7909[i + 1], 1, i7908, '')
  }
  i7896.m_FallbackFontAssetTable = i7908
  var i7911 = i7897[31]
  var i7910 = []
  for(var i = 0; i < i7911.length; i += 1) {
    i7910.push( request.d('TMPro.TMP_FontWeightPair', i7911[i + 0]) );
  }
  i7896.m_FontWeightTable = i7910
  var i7913 = i7897[32]
  var i7912 = []
  for(var i = 0; i < i7913.length; i += 1) {
    i7912.push( request.d('TMPro.TMP_FontWeightPair', i7913[i + 0]) );
  }
  i7896.fontWeights = i7912
  i7896.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i7897[33], i7896.m_fontInfo)
  var i7915 = i7897[34]
  var i7914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i7915.length; i += 1) {
    i7914.add(request.d('TMPro.TMP_Glyph', i7915[i + 0]));
  }
  i7896.m_glyphInfoList = i7914
  i7896.m_KerningTable = request.d('TMPro.KerningTable', i7897[35], i7896.m_KerningTable)
  var i7917 = i7897[36]
  var i7916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7917.length; i += 2) {
  request.r(i7917[i + 0], i7917[i + 1], 1, i7916, '')
  }
  i7896.fallbackFontAssets = i7916
  i7896.m_Version = i7897[37]
  i7896.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7897[38], i7896.m_FaceInfo)
  request.r(i7897[39], i7897[40], 0, i7896, 'm_Material')
  return i7896
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i7918 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i7919 = data
  i7918.sourceFontFileName = i7919[0]
  i7918.sourceFontFileGUID = i7919[1]
  i7918.faceIndex = i7919[2]
  i7918.pointSizeSamplingMode = i7919[3]
  i7918.pointSize = i7919[4]
  i7918.padding = i7919[5]
  i7918.paddingMode = i7919[6]
  i7918.packingMode = i7919[7]
  i7918.atlasWidth = i7919[8]
  i7918.atlasHeight = i7919[9]
  i7918.characterSetSelectionMode = i7919[10]
  i7918.characterSequence = i7919[11]
  i7918.referencedFontAssetGUID = i7919[12]
  i7918.referencedTextAssetGUID = i7919[13]
  i7918.fontStyle = i7919[14]
  i7918.fontStyleModifier = i7919[15]
  i7918.renderMode = i7919[16]
  i7918.includeFontFeatures = !!i7919[17]
  return i7918
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i7922 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i7923 = data
  i7922.m_Index = i7923[0]
  i7922.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7923[1], i7922.m_Metrics)
  i7922.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7923[2], i7922.m_GlyphRect)
  i7922.m_Scale = i7923[3]
  i7922.m_AtlasIndex = i7923[4]
  i7922.m_ClassDefinitionType = i7923[5]
  return i7922
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7924 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7925 = data
  i7924.m_Width = i7925[0]
  i7924.m_Height = i7925[1]
  i7924.m_HorizontalBearingX = i7925[2]
  i7924.m_HorizontalBearingY = i7925[3]
  i7924.m_HorizontalAdvance = i7925[4]
  return i7924
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7926 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7927 = data
  i7926.m_X = i7927[0]
  i7926.m_Y = i7927[1]
  i7926.m_Width = i7927[2]
  i7926.m_Height = i7927[3]
  return i7926
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i7930 = root || request.c( 'TMPro.TMP_Character' )
  var i7931 = data
  i7930.m_ElementType = i7931[0]
  i7930.m_Unicode = i7931[1]
  i7930.m_GlyphIndex = i7931[2]
  i7930.m_Scale = i7931[3]
  return i7930
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i7936 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i7937 = data
  var i7939 = i7937[0]
  var i7938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i7939.length; i += 1) {
    i7938.add(request.d('TMPro.MultipleSubstitutionRecord', i7939[i + 0]));
  }
  i7936.m_MultipleSubstitutionRecords = i7938
  var i7941 = i7937[1]
  var i7940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i7941.length; i += 1) {
    i7940.add(request.d('TMPro.LigatureSubstitutionRecord', i7941[i + 0]));
  }
  i7936.m_LigatureSubstitutionRecords = i7940
  var i7943 = i7937[2]
  var i7942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i7943.length; i += 1) {
    i7942.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i7943[i + 0]));
  }
  i7936.m_GlyphPairAdjustmentRecords = i7942
  var i7945 = i7937[3]
  var i7944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i7945.length; i += 1) {
    i7944.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i7945[i + 0]));
  }
  i7936.m_MarkToBaseAdjustmentRecords = i7944
  var i7947 = i7937[4]
  var i7946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i7947.length; i += 1) {
    i7946.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i7947[i + 0]));
  }
  i7936.m_MarkToMarkAdjustmentRecords = i7946
  return i7936
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i7950 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i7951 = data
  i7950.m_TargetGlyphID = i7951[0]
  i7950.m_SubstituteGlyphIDs = i7951[1]
  return i7950
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i7954 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i7955 = data
  i7954.m_ComponentGlyphIDs = i7955[0]
  i7954.m_LigatureGlyphID = i7955[1]
  return i7954
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7958 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i7959 = data
  i7958.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7959[0], i7958.m_FirstAdjustmentRecord)
  i7958.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i7959[1], i7958.m_SecondAdjustmentRecord)
  i7958.m_FeatureLookupFlags = i7959[2]
  return i7958
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i7962 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i7963 = data
  i7962.m_BaseGlyphID = i7963[0]
  i7962.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7963[1], i7962.m_BaseGlyphAnchorPoint)
  i7962.m_MarkGlyphID = i7963[2]
  i7962.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7963[3], i7962.m_MarkPositionAdjustment)
  return i7962
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i7966 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i7967 = data
  i7966.m_BaseMarkGlyphID = i7967[0]
  i7966.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7967[1], i7966.m_BaseMarkGlyphAnchorPoint)
  i7966.m_CombiningMarkGlyphID = i7967[2]
  i7966.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7967[3], i7966.m_CombiningMarkPositionAdjustment)
  return i7966
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7972 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7973 = data
  request.r(i7973[0], i7973[1], 0, i7972, 'regularTypeface')
  request.r(i7973[2], i7973[3], 0, i7972, 'italicTypeface')
  return i7972
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7974 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7975 = data
  i7974.Name = i7975[0]
  i7974.PointSize = i7975[1]
  i7974.Scale = i7975[2]
  i7974.CharacterCount = i7975[3]
  i7974.LineHeight = i7975[4]
  i7974.Baseline = i7975[5]
  i7974.Ascender = i7975[6]
  i7974.CapHeight = i7975[7]
  i7974.Descender = i7975[8]
  i7974.CenterLine = i7975[9]
  i7974.SuperscriptOffset = i7975[10]
  i7974.SubscriptOffset = i7975[11]
  i7974.SubSize = i7975[12]
  i7974.Underline = i7975[13]
  i7974.UnderlineThickness = i7975[14]
  i7974.strikethrough = i7975[15]
  i7974.strikethroughThickness = i7975[16]
  i7974.TabWidth = i7975[17]
  i7974.Padding = i7975[18]
  i7974.AtlasWidth = i7975[19]
  i7974.AtlasHeight = i7975[20]
  return i7974
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7978 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7979 = data
  i7978.id = i7979[0]
  i7978.x = i7979[1]
  i7978.y = i7979[2]
  i7978.width = i7979[3]
  i7978.height = i7979[4]
  i7978.xOffset = i7979[5]
  i7978.yOffset = i7979[6]
  i7978.xAdvance = i7979[7]
  i7978.scale = i7979[8]
  return i7978
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7980 = root || request.c( 'TMPro.KerningTable' )
  var i7981 = data
  var i7983 = i7981[0]
  var i7982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7983.length; i += 1) {
    i7982.add(request.d('TMPro.KerningPair', i7983[i + 0]));
  }
  i7980.kerningPairs = i7982
  return i7980
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7986 = root || request.c( 'TMPro.KerningPair' )
  var i7987 = data
  i7986.xOffset = i7987[0]
  i7986.m_FirstGlyph = i7987[1]
  i7986.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7987[2], i7986.m_FirstGlyphAdjustments)
  i7986.m_SecondGlyph = i7987[3]
  i7986.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7987[4], i7986.m_SecondGlyphAdjustments)
  i7986.m_IgnoreSpacingAdjustments = !!i7987[5]
  return i7986
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7988 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7989 = data
  i7988.m_FaceIndex = i7989[0]
  i7988.m_FamilyName = i7989[1]
  i7988.m_StyleName = i7989[2]
  i7988.m_PointSize = i7989[3]
  i7988.m_Scale = i7989[4]
  i7988.m_UnitsPerEM = i7989[5]
  i7988.m_LineHeight = i7989[6]
  i7988.m_AscentLine = i7989[7]
  i7988.m_CapLine = i7989[8]
  i7988.m_MeanLine = i7989[9]
  i7988.m_Baseline = i7989[10]
  i7988.m_DescentLine = i7989[11]
  i7988.m_SuperscriptOffset = i7989[12]
  i7988.m_SuperscriptSize = i7989[13]
  i7988.m_SubscriptOffset = i7989[14]
  i7988.m_SubscriptSize = i7989[15]
  i7988.m_UnderlineOffset = i7989[16]
  i7988.m_UnderlineThickness = i7989[17]
  i7988.m_StrikethroughOffset = i7989[18]
  i7988.m_StrikethroughThickness = i7989[19]
  i7988.m_TabWidth = i7989[20]
  return i7988
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7990 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7991 = data
  i7990.useSafeMode = !!i7991[0]
  i7990.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7991[1], i7990.safeModeOptions)
  i7990.timeScale = i7991[2]
  i7990.unscaledTimeScale = i7991[3]
  i7990.useSmoothDeltaTime = !!i7991[4]
  i7990.maxSmoothUnscaledTime = i7991[5]
  i7990.rewindCallbackMode = i7991[6]
  i7990.showUnityEditorReport = !!i7991[7]
  i7990.logBehaviour = i7991[8]
  i7990.drawGizmos = !!i7991[9]
  i7990.defaultRecyclable = !!i7991[10]
  i7990.defaultAutoPlay = i7991[11]
  i7990.defaultUpdateType = i7991[12]
  i7990.defaultTimeScaleIndependent = !!i7991[13]
  i7990.defaultEaseType = i7991[14]
  i7990.defaultEaseOvershootOrAmplitude = i7991[15]
  i7990.defaultEasePeriod = i7991[16]
  i7990.defaultAutoKill = !!i7991[17]
  i7990.defaultLoopType = i7991[18]
  i7990.debugMode = !!i7991[19]
  i7990.debugStoreTargetId = !!i7991[20]
  i7990.showPreviewPanel = !!i7991[21]
  i7990.storeSettingsLocation = i7991[22]
  i7990.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7991[23], i7990.modules)
  i7990.createASMDEF = !!i7991[24]
  i7990.showPlayingTweens = !!i7991[25]
  i7990.showPausedTweens = !!i7991[26]
  return i7990
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7993 = data
  i7992.logBehaviour = i7993[0]
  i7992.nestedTweenFailureBehaviour = i7993[1]
  return i7992
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7994 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7995 = data
  i7994.showPanel = !!i7995[0]
  i7994.audioEnabled = !!i7995[1]
  i7994.physicsEnabled = !!i7995[2]
  i7994.physics2DEnabled = !!i7995[3]
  i7994.spriteEnabled = !!i7995[4]
  i7994.uiEnabled = !!i7995[5]
  i7994.uiToolkitEnabled = !!i7995[6]
  i7994.textMeshProEnabled = !!i7995[7]
  i7994.tk2DEnabled = !!i7995[8]
  i7994.deAudioEnabled = !!i7995[9]
  i7994.deUnityExtendedEnabled = !!i7995[10]
  i7994.epoOutlineEnabled = !!i7995[11]
  return i7994
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7996 = root || request.c( 'TMPro.TMP_Settings' )
  var i7997 = data
  i7996.assetVersion = i7997[0]
  i7996.m_TextWrappingMode = i7997[1]
  i7996.m_enableKerning = !!i7997[2]
  var i7999 = i7997[3]
  var i7998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7999.length; i += 1) {
    i7998.add(i7999[i + 0]);
  }
  i7996.m_ActiveFontFeatures = i7998
  i7996.m_enableExtraPadding = !!i7997[4]
  i7996.m_enableTintAllSprites = !!i7997[5]
  i7996.m_enableParseEscapeCharacters = !!i7997[6]
  i7996.m_EnableRaycastTarget = !!i7997[7]
  i7996.m_GetFontFeaturesAtRuntime = !!i7997[8]
  i7996.m_missingGlyphCharacter = i7997[9]
  i7996.m_ClearDynamicDataOnBuild = !!i7997[10]
  i7996.m_warningsDisabled = !!i7997[11]
  request.r(i7997[12], i7997[13], 0, i7996, 'm_defaultFontAsset')
  i7996.m_defaultFontAssetPath = i7997[14]
  i7996.m_defaultFontSize = i7997[15]
  i7996.m_defaultAutoSizeMinRatio = i7997[16]
  i7996.m_defaultAutoSizeMaxRatio = i7997[17]
  i7996.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7997[18], i7997[19] )
  i7996.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7997[20], i7997[21] )
  i7996.m_autoSizeTextContainer = !!i7997[22]
  i7996.m_IsTextObjectScaleStatic = !!i7997[23]
  var i8001 = i7997[24]
  var i8000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8001.length; i += 2) {
  request.r(i8001[i + 0], i8001[i + 1], 1, i8000, '')
  }
  i7996.m_fallbackFontAssets = i8000
  i7996.m_matchMaterialPreset = !!i7997[25]
  i7996.m_HideSubTextObjects = !!i7997[26]
  request.r(i7997[27], i7997[28], 0, i7996, 'm_defaultSpriteAsset')
  i7996.m_defaultSpriteAssetPath = i7997[29]
  i7996.m_enableEmojiSupport = !!i7997[30]
  i7996.m_MissingCharacterSpriteUnicode = i7997[31]
  var i8003 = i7997[32]
  var i8002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i8003.length; i += 2) {
  request.r(i8003[i + 0], i8003[i + 1], 1, i8002, '')
  }
  i7996.m_EmojiFallbackTextAssets = i8002
  i7996.m_defaultColorGradientPresetsPath = i7997[33]
  request.r(i7997[34], i7997[35], 0, i7996, 'm_defaultStyleSheet')
  i7996.m_StyleSheetsResourcePath = i7997[36]
  request.r(i7997[37], i7997[38], 0, i7996, 'm_leadingCharacters')
  request.r(i7997[39], i7997[40], 0, i7996, 'm_followingCharacters')
  i7996.m_UseModernHangulLineBreakingRules = !!i7997[41]
  return i7996
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i8006 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i8007 = data
  request.r(i8007[0], i8007[1], 0, i8006, 'spriteSheet')
  var i8009 = i8007[2]
  var i8008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i8009.length; i += 1) {
    i8008.add(request.d('TMPro.TMP_Sprite', i8009[i + 0]));
  }
  i8006.spriteInfoList = i8008
  var i8011 = i8007[3]
  var i8010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i8011.length; i += 2) {
  request.r(i8011[i + 0], i8011[i + 1], 1, i8010, '')
  }
  i8006.fallbackSpriteAssets = i8010
  var i8013 = i8007[4]
  var i8012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i8013.length; i += 1) {
    i8012.add(request.d('TMPro.TMP_SpriteCharacter', i8013[i + 0]));
  }
  i8006.m_SpriteCharacterTable = i8012
  var i8015 = i8007[5]
  var i8014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i8015.length; i += 1) {
    i8014.add(request.d('TMPro.TMP_SpriteGlyph', i8015[i + 0]));
  }
  i8006.m_GlyphTable = i8014
  i8006.m_Version = i8007[6]
  i8006.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8007[7], i8006.m_FaceInfo)
  request.r(i8007[8], i8007[9], 0, i8006, 'm_Material')
  return i8006
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i8018 = root || request.c( 'TMPro.TMP_Sprite' )
  var i8019 = data
  i8018.name = i8019[0]
  i8018.hashCode = i8019[1]
  i8018.unicode = i8019[2]
  i8018.pivot = new pc.Vec2( i8019[3], i8019[4] )
  request.r(i8019[5], i8019[6], 0, i8018, 'sprite')
  i8018.id = i8019[7]
  i8018.x = i8019[8]
  i8018.y = i8019[9]
  i8018.width = i8019[10]
  i8018.height = i8019[11]
  i8018.xOffset = i8019[12]
  i8018.yOffset = i8019[13]
  i8018.xAdvance = i8019[14]
  i8018.scale = i8019[15]
  return i8018
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8024 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8025 = data
  i8024.m_Name = i8025[0]
  i8024.m_ElementType = i8025[1]
  i8024.m_Unicode = i8025[2]
  i8024.m_GlyphIndex = i8025[3]
  i8024.m_Scale = i8025[4]
  return i8024
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8028 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8029 = data
  request.r(i8029[0], i8029[1], 0, i8028, 'sprite')
  i8028.m_Index = i8029[2]
  i8028.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8029[3], i8028.m_Metrics)
  i8028.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8029[4], i8028.m_GlyphRect)
  i8028.m_Scale = i8029[5]
  i8028.m_AtlasIndex = i8029[6]
  i8028.m_ClassDefinitionType = i8029[7]
  return i8028
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8030 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8031 = data
  var i8033 = i8031[0]
  var i8032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8033.length; i += 1) {
    i8032.add(request.d('TMPro.TMP_Style', i8033[i + 0]));
  }
  i8030.m_StyleList = i8032
  return i8030
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8036 = root || request.c( 'TMPro.TMP_Style' )
  var i8037 = data
  i8036.m_Name = i8037[0]
  i8036.m_HashCode = i8037[1]
  i8036.m_OpeningDefinition = i8037[2]
  i8036.m_ClosingDefinition = i8037[3]
  i8036.m_OpeningTagArray = i8037[4]
  i8036.m_ClosingTagArray = i8037[5]
  return i8036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8039 = data
  var i8041 = i8039[0]
  var i8040 = []
  for(var i = 0; i < i8041.length; i += 1) {
    i8040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8041[i + 0]) );
  }
  i8038.files = i8040
  i8038.componentToPrefabIds = i8039[1]
  return i8038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8045 = data
  i8044.path = i8045[0]
  request.r(i8045[1], i8045[2], 0, i8044, 'unityObject')
  return i8044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8047 = data
  var i8049 = i8047[0]
  var i8048 = []
  for(var i = 0; i < i8049.length; i += 1) {
    i8048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8049[i + 0]) );
  }
  i8046.scriptsExecutionOrder = i8048
  var i8051 = i8047[1]
  var i8050 = []
  for(var i = 0; i < i8051.length; i += 1) {
    i8050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8051[i + 0]) );
  }
  i8046.sortingLayers = i8050
  var i8053 = i8047[2]
  var i8052 = []
  for(var i = 0; i < i8053.length; i += 1) {
    i8052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8053[i + 0]) );
  }
  i8046.cullingLayers = i8052
  i8046.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8047[3], i8046.timeSettings)
  i8046.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8047[4], i8046.physicsSettings)
  i8046.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8047[5], i8046.physics2DSettings)
  i8046.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8047[6], i8046.qualitySettings)
  i8046.enableRealtimeShadows = !!i8047[7]
  i8046.enableAutoInstancing = !!i8047[8]
  i8046.enableStaticBatching = !!i8047[9]
  i8046.enableDynamicBatching = !!i8047[10]
  i8046.lightmapEncodingQuality = i8047[11]
  i8046.desiredColorSpace = i8047[12]
  var i8055 = i8047[13]
  var i8054 = []
  for(var i = 0; i < i8055.length; i += 1) {
    i8054.push( i8055[i + 0] );
  }
  i8046.allTags = i8054
  return i8046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8059 = data
  i8058.name = i8059[0]
  i8058.value = i8059[1]
  return i8058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8063 = data
  i8062.id = i8063[0]
  i8062.name = i8063[1]
  i8062.value = i8063[2]
  return i8062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8067 = data
  i8066.id = i8067[0]
  i8066.name = i8067[1]
  return i8066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8069 = data
  i8068.fixedDeltaTime = i8069[0]
  i8068.maximumDeltaTime = i8069[1]
  i8068.timeScale = i8069[2]
  i8068.maximumParticleTimestep = i8069[3]
  return i8068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8071 = data
  i8070.gravity = new pc.Vec3( i8071[0], i8071[1], i8071[2] )
  i8070.defaultSolverIterations = i8071[3]
  i8070.bounceThreshold = i8071[4]
  i8070.autoSyncTransforms = !!i8071[5]
  i8070.autoSimulation = !!i8071[6]
  var i8073 = i8071[7]
  var i8072 = []
  for(var i = 0; i < i8073.length; i += 1) {
    i8072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8073[i + 0]) );
  }
  i8070.collisionMatrix = i8072
  return i8070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8077 = data
  i8076.enabled = !!i8077[0]
  i8076.layerId = i8077[1]
  i8076.otherLayerId = i8077[2]
  return i8076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8079 = data
  request.r(i8079[0], i8079[1], 0, i8078, 'material')
  i8078.gravity = new pc.Vec2( i8079[2], i8079[3] )
  i8078.positionIterations = i8079[4]
  i8078.velocityIterations = i8079[5]
  i8078.velocityThreshold = i8079[6]
  i8078.maxLinearCorrection = i8079[7]
  i8078.maxAngularCorrection = i8079[8]
  i8078.maxTranslationSpeed = i8079[9]
  i8078.maxRotationSpeed = i8079[10]
  i8078.baumgarteScale = i8079[11]
  i8078.baumgarteTOIScale = i8079[12]
  i8078.timeToSleep = i8079[13]
  i8078.linearSleepTolerance = i8079[14]
  i8078.angularSleepTolerance = i8079[15]
  i8078.defaultContactOffset = i8079[16]
  i8078.autoSimulation = !!i8079[17]
  i8078.queriesHitTriggers = !!i8079[18]
  i8078.queriesStartInColliders = !!i8079[19]
  i8078.callbacksOnDisable = !!i8079[20]
  i8078.reuseCollisionCallbacks = !!i8079[21]
  i8078.autoSyncTransforms = !!i8079[22]
  var i8081 = i8079[23]
  var i8080 = []
  for(var i = 0; i < i8081.length; i += 1) {
    i8080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8081[i + 0]) );
  }
  i8078.collisionMatrix = i8080
  return i8078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8085 = data
  i8084.enabled = !!i8085[0]
  i8084.layerId = i8085[1]
  i8084.otherLayerId = i8085[2]
  return i8084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8087 = data
  var i8089 = i8087[0]
  var i8088 = []
  for(var i = 0; i < i8089.length; i += 1) {
    i8088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8089[i + 0]) );
  }
  i8086.qualityLevels = i8088
  var i8091 = i8087[1]
  var i8090 = []
  for(var i = 0; i < i8091.length; i += 1) {
    i8090.push( i8091[i + 0] );
  }
  i8086.names = i8090
  i8086.shadows = i8087[2]
  i8086.anisotropicFiltering = i8087[3]
  i8086.antiAliasing = i8087[4]
  i8086.lodBias = i8087[5]
  i8086.shadowCascades = i8087[6]
  i8086.shadowDistance = i8087[7]
  i8086.shadowmaskMode = i8087[8]
  i8086.shadowProjection = i8087[9]
  i8086.shadowResolution = i8087[10]
  i8086.softParticles = !!i8087[11]
  i8086.softVegetation = !!i8087[12]
  i8086.activeColorSpace = i8087[13]
  i8086.desiredColorSpace = i8087[14]
  i8086.masterTextureLimit = i8087[15]
  i8086.maxQueuedFrames = i8087[16]
  i8086.particleRaycastBudget = i8087[17]
  i8086.pixelLightCount = i8087[18]
  i8086.realtimeReflectionProbes = !!i8087[19]
  i8086.shadowCascade2Split = i8087[20]
  i8086.shadowCascade4Split = new pc.Vec3( i8087[21], i8087[22], i8087[23] )
  i8086.streamingMipmapsActive = !!i8087[24]
  i8086.vSyncCount = i8087[25]
  i8086.asyncUploadBufferSize = i8087[26]
  i8086.asyncUploadTimeSlice = i8087[27]
  i8086.billboardsFaceCameraPosition = !!i8087[28]
  i8086.shadowNearPlaneOffset = i8087[29]
  i8086.streamingMipmapsMemoryBudget = i8087[30]
  i8086.maximumLODLevel = i8087[31]
  i8086.streamingMipmapsAddAllCameras = !!i8087[32]
  i8086.streamingMipmapsMaxLevelReduction = i8087[33]
  i8086.streamingMipmapsRenderersPerFrame = i8087[34]
  i8086.resolutionScalingFixedDPIFactor = i8087[35]
  i8086.streamingMipmapsMaxFileIORequests = i8087[36]
  i8086.currentQualityLevel = i8087[37]
  return i8086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8097 = data
  i8096.weight = i8097[0]
  i8096.vertices = i8097[1]
  i8096.normals = i8097[2]
  i8096.tangents = i8097[3]
  return i8096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8101 = data
  i8100.mode = i8101[0]
  i8100.parameter = i8101[1]
  i8100.threshold = i8101[2]
  return i8100
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8102 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i8103 = data
  i8102.m_GlyphIndex = i8103[0]
  i8102.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i8103[1], i8102.m_GlyphValueRecord)
  return i8102
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i8104 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i8105 = data
  i8104.m_XCoordinate = i8105[0]
  i8104.m_YCoordinate = i8105[1]
  return i8104
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i8106 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i8107 = data
  i8106.m_XPositionAdjustment = i8107[0]
  i8106.m_YPositionAdjustment = i8107[1]
  return i8106
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8108 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8109 = data
  i8108.xPlacement = i8109[0]
  i8108.yPlacement = i8109[1]
  i8108.xAdvance = i8109[2]
  i8108.yAdvance = i8109[3]
  return i8108
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i8110 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i8111 = data
  i8110.m_XPlacement = i8111[0]
  i8110.m_YPlacement = i8111[1]
  i8110.m_XAdvance = i8111[2]
  i8110.m_YAdvance = i8111[3]
  return i8110
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[33],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[33],"83":[84],"85":[86],"87":[86],"11":[10],"88":[89],"90":[91],"92":[84,93],"94":[91],"95":[94],"96":[91],"97":[91],"98":[99],"100":[99],"101":[91],"102":[10],"103":[17,10],"104":[84],"105":[17,10],"106":[15,84],"91":[84],"107":[84,93],"108":[62],"109":[69],"110":[111],"112":[99],"113":[42],"114":[33],"115":[116],"117":[40],"118":[11],"119":[10],"120":[84,10],"18":[10,17],"121":[10],"122":[17,10],"123":[84],"124":[17,10],"125":[10],"126":[127],"128":[127],"129":[127],"130":[10],"131":[10],"14":[11],"21":[17,10],"132":[10],"13":[11],"133":[10],"134":[10],"135":[10],"136":[10],"137":[10],"138":[10],"139":[10],"140":[10],"141":[10],"142":[17,10],"143":[10],"144":[10],"145":[10],"20":[10],"146":[17,10],"147":[10],"148":[40],"149":[40],"41":[40],"150":[40],"151":[33],"152":[33]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","ItemSpawnManager","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","Item","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","ItemHolder","UnityEngine.BoxCollider","PSD_Tool","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "07/17/2026 09:46:11";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv26";

Deserializers.lunaAppID = "26861";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1848";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5181";

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

Deserializers.buildID = "39eddf87-b3e8-4043-b4ae-6a57a09f4763";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

