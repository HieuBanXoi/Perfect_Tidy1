var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6462 = root || request.c( 'UnityEngine.JointSpring' )
  var i6463 = data
  i6462.spring = i6463[0]
  i6462.damper = i6463[1]
  i6462.targetPosition = i6463[2]
  return i6462
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6464 = root || request.c( 'UnityEngine.JointMotor' )
  var i6465 = data
  i6464.m_TargetVelocity = i6465[0]
  i6464.m_Force = i6465[1]
  i6464.m_FreeSpin = i6465[2]
  return i6464
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6466 = root || request.c( 'UnityEngine.JointLimits' )
  var i6467 = data
  i6466.m_Min = i6467[0]
  i6466.m_Max = i6467[1]
  i6466.m_Bounciness = i6467[2]
  i6466.m_BounceMinVelocity = i6467[3]
  i6466.m_ContactDistance = i6467[4]
  i6466.minBounce = i6467[5]
  i6466.maxBounce = i6467[6]
  return i6466
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6468 = root || request.c( 'UnityEngine.JointDrive' )
  var i6469 = data
  i6468.m_PositionSpring = i6469[0]
  i6468.m_PositionDamper = i6469[1]
  i6468.m_MaximumForce = i6469[2]
  i6468.m_UseAcceleration = i6469[3]
  return i6468
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6470 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6471 = data
  i6470.m_Spring = i6471[0]
  i6470.m_Damper = i6471[1]
  return i6470
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6472 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6473 = data
  i6472.m_Limit = i6473[0]
  i6472.m_Bounciness = i6473[1]
  i6472.m_ContactDistance = i6473[2]
  return i6472
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6474 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6475 = data
  i6474.m_ExtremumSlip = i6475[0]
  i6474.m_ExtremumValue = i6475[1]
  i6474.m_AsymptoteSlip = i6475[2]
  i6474.m_AsymptoteValue = i6475[3]
  i6474.m_Stiffness = i6475[4]
  return i6474
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6476 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6477 = data
  i6476.m_LowerAngle = i6477[0]
  i6476.m_UpperAngle = i6477[1]
  return i6476
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6478 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6479 = data
  i6478.m_MotorSpeed = i6479[0]
  i6478.m_MaximumMotorTorque = i6479[1]
  return i6478
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6480 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6481 = data
  i6480.m_DampingRatio = i6481[0]
  i6480.m_Frequency = i6481[1]
  i6480.m_Angle = i6481[2]
  return i6480
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6482 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6483 = data
  i6482.m_LowerTranslation = i6483[0]
  i6482.m_UpperTranslation = i6483[1]
  return i6482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6484 = root || new pc.UnityMaterial()
  var i6485 = data
  i6484.name = i6485[0]
  request.r(i6485[1], i6485[2], 0, i6484, 'shader')
  i6484.renderQueue = i6485[3]
  i6484.enableInstancing = !!i6485[4]
  var i6487 = i6485[5]
  var i6486 = []
  for(var i = 0; i < i6487.length; i += 1) {
    i6486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6487[i + 0]) );
  }
  i6484.floatParameters = i6486
  var i6489 = i6485[6]
  var i6488 = []
  for(var i = 0; i < i6489.length; i += 1) {
    i6488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6489[i + 0]) );
  }
  i6484.colorParameters = i6488
  var i6491 = i6485[7]
  var i6490 = []
  for(var i = 0; i < i6491.length; i += 1) {
    i6490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6491[i + 0]) );
  }
  i6484.vectorParameters = i6490
  var i6493 = i6485[8]
  var i6492 = []
  for(var i = 0; i < i6493.length; i += 1) {
    i6492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6493[i + 0]) );
  }
  i6484.textureParameters = i6492
  var i6495 = i6485[9]
  var i6494 = []
  for(var i = 0; i < i6495.length; i += 1) {
    i6494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6495[i + 0]) );
  }
  i6484.materialFlags = i6494
  return i6484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6499 = data
  i6498.name = i6499[0]
  i6498.value = i6499[1]
  return i6498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6503 = data
  i6502.name = i6503[0]
  i6502.value = new pc.Color(i6503[1], i6503[2], i6503[3], i6503[4])
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6507 = data
  i6506.name = i6507[0]
  i6506.value = new pc.Vec4( i6507[1], i6507[2], i6507[3], i6507[4] )
  return i6506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6511 = data
  i6510.name = i6511[0]
  request.r(i6511[1], i6511[2], 0, i6510, 'value')
  return i6510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6515 = data
  i6514.name = i6515[0]
  i6514.enabled = !!i6515[1]
  return i6514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6517 = data
  i6516.name = i6517[0]
  i6516.width = i6517[1]
  i6516.height = i6517[2]
  i6516.mipmapCount = i6517[3]
  i6516.anisoLevel = i6517[4]
  i6516.filterMode = i6517[5]
  i6516.hdr = !!i6517[6]
  i6516.format = i6517[7]
  i6516.wrapMode = i6517[8]
  i6516.alphaIsTransparency = !!i6517[9]
  i6516.alphaSource = i6517[10]
  i6516.graphicsFormat = i6517[11]
  i6516.sRGBTexture = !!i6517[12]
  i6516.desiredColorSpace = i6517[13]
  i6516.wrapU = i6517[14]
  i6516.wrapV = i6517[15]
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6519 = data
  i6518.position = new pc.Vec3( i6519[0], i6519[1], i6519[2] )
  i6518.scale = new pc.Vec3( i6519[3], i6519[4], i6519[5] )
  i6518.rotation = new pc.Quat(i6519[6], i6519[7], i6519[8], i6519[9])
  return i6518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6521 = data
  i6520.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6521[0], i6520.main)
  i6520.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6521[1], i6520.colorBySpeed)
  i6520.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6521[2], i6520.colorOverLifetime)
  i6520.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6521[3], i6520.emission)
  i6520.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6521[4], i6520.rotationBySpeed)
  i6520.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6521[5], i6520.rotationOverLifetime)
  i6520.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6521[6], i6520.shape)
  i6520.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6521[7], i6520.sizeBySpeed)
  i6520.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6521[8], i6520.sizeOverLifetime)
  i6520.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6521[9], i6520.textureSheetAnimation)
  i6520.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6521[10], i6520.velocityOverLifetime)
  i6520.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6521[11], i6520.noise)
  i6520.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6521[12], i6520.inheritVelocity)
  i6520.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6521[13], i6520.forceOverLifetime)
  i6520.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6521[14], i6520.limitVelocityOverLifetime)
  i6520.useAutoRandomSeed = !!i6521[15]
  i6520.randomSeed = i6521[16]
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6522 = root || new pc.ParticleSystemMain()
  var i6523 = data
  i6522.duration = i6523[0]
  i6522.loop = !!i6523[1]
  i6522.prewarm = !!i6523[2]
  i6522.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[3], i6522.startDelay)
  i6522.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[4], i6522.startLifetime)
  i6522.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[5], i6522.startSpeed)
  i6522.startSize3D = !!i6523[6]
  i6522.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[7], i6522.startSizeX)
  i6522.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[8], i6522.startSizeY)
  i6522.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[9], i6522.startSizeZ)
  i6522.startRotation3D = !!i6523[10]
  i6522.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[11], i6522.startRotationX)
  i6522.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[12], i6522.startRotationY)
  i6522.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[13], i6522.startRotationZ)
  i6522.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6523[14], i6522.startColor)
  i6522.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[15], i6522.gravityModifier)
  i6522.simulationSpace = i6523[16]
  request.r(i6523[17], i6523[18], 0, i6522, 'customSimulationSpace')
  i6522.simulationSpeed = i6523[19]
  i6522.useUnscaledTime = !!i6523[20]
  i6522.scalingMode = i6523[21]
  i6522.playOnAwake = !!i6523[22]
  i6522.maxParticles = i6523[23]
  i6522.emitterVelocityMode = i6523[24]
  i6522.stopAction = i6523[25]
  return i6522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6524 = root || new pc.MinMaxCurve()
  var i6525 = data
  i6524.mode = i6525[0]
  i6524.curveMin = new pc.AnimationCurve( { keys_flow: i6525[1] } )
  i6524.curveMax = new pc.AnimationCurve( { keys_flow: i6525[2] } )
  i6524.curveMultiplier = i6525[3]
  i6524.constantMin = i6525[4]
  i6524.constantMax = i6525[5]
  return i6524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6526 = root || new pc.MinMaxGradient()
  var i6527 = data
  i6526.mode = i6527[0]
  i6526.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6527[1], i6526.gradientMin)
  i6526.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6527[2], i6526.gradientMax)
  i6526.colorMin = new pc.Color(i6527[3], i6527[4], i6527[5], i6527[6])
  i6526.colorMax = new pc.Color(i6527[7], i6527[8], i6527[9], i6527[10])
  return i6526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6529 = data
  i6528.mode = i6529[0]
  var i6531 = i6529[1]
  var i6530 = []
  for(var i = 0; i < i6531.length; i += 1) {
    i6530.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6531[i + 0]) );
  }
  i6528.colorKeys = i6530
  var i6533 = i6529[2]
  var i6532 = []
  for(var i = 0; i < i6533.length; i += 1) {
    i6532.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6533[i + 0]) );
  }
  i6528.alphaKeys = i6532
  return i6528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6534 = root || new pc.ParticleSystemColorBySpeed()
  var i6535 = data
  i6534.enabled = !!i6535[0]
  i6534.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6535[1], i6534.color)
  i6534.range = new pc.Vec2( i6535[2], i6535[3] )
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6539 = data
  i6538.color = new pc.Color(i6539[0], i6539[1], i6539[2], i6539[3])
  i6538.time = i6539[4]
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6543 = data
  i6542.alpha = i6543[0]
  i6542.time = i6543[1]
  return i6542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6544 = root || new pc.ParticleSystemColorOverLifetime()
  var i6545 = data
  i6544.enabled = !!i6545[0]
  i6544.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6545[1], i6544.color)
  return i6544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6546 = root || new pc.ParticleSystemEmitter()
  var i6547 = data
  i6546.enabled = !!i6547[0]
  i6546.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[1], i6546.rateOverTime)
  i6546.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6547[2], i6546.rateOverDistance)
  var i6549 = i6547[3]
  var i6548 = []
  for(var i = 0; i < i6549.length; i += 1) {
    i6548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6549[i + 0]) );
  }
  i6546.bursts = i6548
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6552 = root || new pc.ParticleSystemBurst()
  var i6553 = data
  i6552.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6553[0], i6552.count)
  i6552.cycleCount = i6553[1]
  i6552.minCount = i6553[2]
  i6552.maxCount = i6553[3]
  i6552.repeatInterval = i6553[4]
  i6552.time = i6553[5]
  return i6552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6554 = root || new pc.ParticleSystemRotationBySpeed()
  var i6555 = data
  i6554.enabled = !!i6555[0]
  i6554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[1], i6554.x)
  i6554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[2], i6554.y)
  i6554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6555[3], i6554.z)
  i6554.separateAxes = !!i6555[4]
  i6554.range = new pc.Vec2( i6555[5], i6555[6] )
  return i6554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6556 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6557 = data
  i6556.enabled = !!i6557[0]
  i6556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6557[1], i6556.x)
  i6556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6557[2], i6556.y)
  i6556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6557[3], i6556.z)
  i6556.separateAxes = !!i6557[4]
  return i6556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6558 = root || new pc.ParticleSystemShape()
  var i6559 = data
  i6558.enabled = !!i6559[0]
  i6558.shapeType = i6559[1]
  i6558.randomDirectionAmount = i6559[2]
  i6558.sphericalDirectionAmount = i6559[3]
  i6558.randomPositionAmount = i6559[4]
  i6558.alignToDirection = !!i6559[5]
  i6558.radius = i6559[6]
  i6558.radiusMode = i6559[7]
  i6558.radiusSpread = i6559[8]
  i6558.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6559[9], i6558.radiusSpeed)
  i6558.radiusThickness = i6559[10]
  i6558.angle = i6559[11]
  i6558.length = i6559[12]
  i6558.boxThickness = new pc.Vec3( i6559[13], i6559[14], i6559[15] )
  i6558.meshShapeType = i6559[16]
  request.r(i6559[17], i6559[18], 0, i6558, 'mesh')
  request.r(i6559[19], i6559[20], 0, i6558, 'meshRenderer')
  request.r(i6559[21], i6559[22], 0, i6558, 'skinnedMeshRenderer')
  i6558.useMeshMaterialIndex = !!i6559[23]
  i6558.meshMaterialIndex = i6559[24]
  i6558.useMeshColors = !!i6559[25]
  i6558.normalOffset = i6559[26]
  i6558.arc = i6559[27]
  i6558.arcMode = i6559[28]
  i6558.arcSpread = i6559[29]
  i6558.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6559[30], i6558.arcSpeed)
  i6558.donutRadius = i6559[31]
  i6558.position = new pc.Vec3( i6559[32], i6559[33], i6559[34] )
  i6558.rotation = new pc.Vec3( i6559[35], i6559[36], i6559[37] )
  i6558.scale = new pc.Vec3( i6559[38], i6559[39], i6559[40] )
  return i6558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6560 = root || new pc.ParticleSystemSizeBySpeed()
  var i6561 = data
  i6560.enabled = !!i6561[0]
  i6560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6561[1], i6560.x)
  i6560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6561[2], i6560.y)
  i6560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6561[3], i6560.z)
  i6560.separateAxes = !!i6561[4]
  i6560.range = new pc.Vec2( i6561[5], i6561[6] )
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6562 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6563 = data
  i6562.enabled = !!i6563[0]
  i6562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6563[1], i6562.x)
  i6562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6563[2], i6562.y)
  i6562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6563[3], i6562.z)
  i6562.separateAxes = !!i6563[4]
  return i6562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6564 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6565 = data
  i6564.enabled = !!i6565[0]
  i6564.mode = i6565[1]
  i6564.animation = i6565[2]
  i6564.numTilesX = i6565[3]
  i6564.numTilesY = i6565[4]
  i6564.useRandomRow = !!i6565[5]
  i6564.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6565[6], i6564.frameOverTime)
  i6564.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6565[7], i6564.startFrame)
  i6564.cycleCount = i6565[8]
  i6564.rowIndex = i6565[9]
  i6564.flipU = i6565[10]
  i6564.flipV = i6565[11]
  i6564.spriteCount = i6565[12]
  var i6567 = i6565[13]
  var i6566 = []
  for(var i = 0; i < i6567.length; i += 2) {
  request.r(i6567[i + 0], i6567[i + 1], 2, i6566, '')
  }
  i6564.sprites = i6566
  return i6564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6570 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6571 = data
  i6570.enabled = !!i6571[0]
  i6570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[1], i6570.x)
  i6570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[2], i6570.y)
  i6570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[3], i6570.z)
  i6570.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[4], i6570.radial)
  i6570.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[5], i6570.speedModifier)
  i6570.space = i6571[6]
  i6570.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[7], i6570.orbitalX)
  i6570.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[8], i6570.orbitalY)
  i6570.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[9], i6570.orbitalZ)
  i6570.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[10], i6570.orbitalOffsetX)
  i6570.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[11], i6570.orbitalOffsetY)
  i6570.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6571[12], i6570.orbitalOffsetZ)
  return i6570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6572 = root || new pc.ParticleSystemNoise()
  var i6573 = data
  i6572.enabled = !!i6573[0]
  i6572.separateAxes = !!i6573[1]
  i6572.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[2], i6572.strengthX)
  i6572.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[3], i6572.strengthY)
  i6572.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[4], i6572.strengthZ)
  i6572.frequency = i6573[5]
  i6572.damping = !!i6573[6]
  i6572.octaveCount = i6573[7]
  i6572.octaveMultiplier = i6573[8]
  i6572.octaveScale = i6573[9]
  i6572.quality = i6573[10]
  i6572.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[11], i6572.scrollSpeed)
  i6572.scrollSpeedMultiplier = i6573[12]
  i6572.remapEnabled = !!i6573[13]
  i6572.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[14], i6572.remapX)
  i6572.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[15], i6572.remapY)
  i6572.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[16], i6572.remapZ)
  i6572.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[17], i6572.positionAmount)
  i6572.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[18], i6572.rotationAmount)
  i6572.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6573[19], i6572.sizeAmount)
  return i6572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6574 = root || new pc.ParticleSystemInheritVelocity()
  var i6575 = data
  i6574.enabled = !!i6575[0]
  i6574.mode = i6575[1]
  i6574.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6575[2], i6574.curve)
  return i6574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6576 = root || new pc.ParticleSystemForceOverLifetime()
  var i6577 = data
  i6576.enabled = !!i6577[0]
  i6576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6577[1], i6576.x)
  i6576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6577[2], i6576.y)
  i6576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6577[3], i6576.z)
  i6576.space = i6577[4]
  i6576.randomized = !!i6577[5]
  return i6576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6578 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6579 = data
  i6578.enabled = !!i6579[0]
  i6578.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[1], i6578.limit)
  i6578.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[2], i6578.limitX)
  i6578.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[3], i6578.limitY)
  i6578.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[4], i6578.limitZ)
  i6578.dampen = i6579[5]
  i6578.separateAxes = !!i6579[6]
  i6578.space = i6579[7]
  i6578.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6579[8], i6578.drag)
  i6578.multiplyDragByParticleSize = !!i6579[9]
  i6578.multiplyDragByParticleVelocity = !!i6579[10]
  return i6578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6581 = data
  request.r(i6581[0], i6581[1], 0, i6580, 'mesh')
  i6580.meshCount = i6581[2]
  i6580.activeVertexStreamsCount = i6581[3]
  i6580.alignment = i6581[4]
  i6580.renderMode = i6581[5]
  i6580.sortMode = i6581[6]
  i6580.lengthScale = i6581[7]
  i6580.velocityScale = i6581[8]
  i6580.cameraVelocityScale = i6581[9]
  i6580.normalDirection = i6581[10]
  i6580.sortingFudge = i6581[11]
  i6580.minParticleSize = i6581[12]
  i6580.maxParticleSize = i6581[13]
  i6580.pivot = new pc.Vec3( i6581[14], i6581[15], i6581[16] )
  request.r(i6581[17], i6581[18], 0, i6580, 'trailMaterial')
  i6580.applyActiveColorSpace = !!i6581[19]
  i6580.enabled = !!i6581[20]
  request.r(i6581[21], i6581[22], 0, i6580, 'sharedMaterial')
  var i6583 = i6581[23]
  var i6582 = []
  for(var i = 0; i < i6583.length; i += 2) {
  request.r(i6583[i + 0], i6583[i + 1], 2, i6582, '')
  }
  i6580.sharedMaterials = i6582
  i6580.receiveShadows = !!i6581[24]
  i6580.shadowCastingMode = i6581[25]
  i6580.sortingLayerID = i6581[26]
  i6580.sortingOrder = i6581[27]
  i6580.lightmapIndex = i6581[28]
  i6580.lightmapSceneIndex = i6581[29]
  i6580.lightmapScaleOffset = new pc.Vec4( i6581[30], i6581[31], i6581[32], i6581[33] )
  i6580.lightProbeUsage = i6581[34]
  i6580.reflectionProbeUsage = i6581[35]
  return i6580
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i6586 = root || request.c( 'MergeEffect' )
  var i6587 = data
  request.r(i6587[0], i6587[1], 0, i6586, 'tf')
  return i6586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6589 = data
  i6588.name = i6589[0]
  i6588.tagId = i6589[1]
  i6588.enabled = !!i6589[2]
  i6588.isStatic = !!i6589[3]
  i6588.layer = i6589[4]
  return i6588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6591 = data
  i6590.name = i6591[0]
  i6590.halfPrecision = !!i6591[1]
  i6590.useSimplification = !!i6591[2]
  i6590.useUInt32IndexFormat = !!i6591[3]
  i6590.vertexCount = i6591[4]
  i6590.aabb = i6591[5]
  var i6593 = i6591[6]
  var i6592 = []
  for(var i = 0; i < i6593.length; i += 1) {
    i6592.push( !!i6593[i + 0] );
  }
  i6590.streams = i6592
  i6590.vertices = i6591[7]
  var i6595 = i6591[8]
  var i6594 = []
  for(var i = 0; i < i6595.length; i += 1) {
    i6594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6595[i + 0]) );
  }
  i6590.subMeshes = i6594
  var i6597 = i6591[9]
  var i6596 = []
  for(var i = 0; i < i6597.length; i += 16) {
    i6596.push( new pc.Mat4().setData(i6597[i + 0], i6597[i + 1], i6597[i + 2], i6597[i + 3],  i6597[i + 4], i6597[i + 5], i6597[i + 6], i6597[i + 7],  i6597[i + 8], i6597[i + 9], i6597[i + 10], i6597[i + 11],  i6597[i + 12], i6597[i + 13], i6597[i + 14], i6597[i + 15]) );
  }
  i6590.bindposes = i6596
  var i6599 = i6591[10]
  var i6598 = []
  for(var i = 0; i < i6599.length; i += 1) {
    i6598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6599[i + 0]) );
  }
  i6590.blendShapes = i6598
  return i6590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6605 = data
  i6604.triangles = i6605[0]
  return i6604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6611 = data
  i6610.name = i6611[0]
  var i6613 = i6611[1]
  var i6612 = []
  for(var i = 0; i < i6613.length; i += 1) {
    i6612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6613[i + 0]) );
  }
  i6610.frames = i6612
  return i6610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6615 = data
  i6614.name = i6615[0]
  i6614.index = i6615[1]
  i6614.startup = !!i6615[2]
  return i6614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6617 = data
  i6616.pivot = new pc.Vec2( i6617[0], i6617[1] )
  i6616.anchorMin = new pc.Vec2( i6617[2], i6617[3] )
  i6616.anchorMax = new pc.Vec2( i6617[4], i6617[5] )
  i6616.sizeDelta = new pc.Vec2( i6617[6], i6617[7] )
  i6616.anchoredPosition3D = new pc.Vec3( i6617[8], i6617[9], i6617[10] )
  i6616.rotation = new pc.Quat(i6617[11], i6617[12], i6617[13], i6617[14])
  i6616.scale = new pc.Vec3( i6617[15], i6617[16], i6617[17] )
  return i6616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6619 = data
  i6618.planeDistance = i6619[0]
  i6618.referencePixelsPerUnit = i6619[1]
  i6618.isFallbackOverlay = !!i6619[2]
  i6618.renderMode = i6619[3]
  i6618.renderOrder = i6619[4]
  i6618.sortingLayerName = i6619[5]
  i6618.sortingOrder = i6619[6]
  i6618.scaleFactor = i6619[7]
  request.r(i6619[8], i6619[9], 0, i6618, 'worldCamera')
  i6618.overrideSorting = !!i6619[10]
  i6618.pixelPerfect = !!i6619[11]
  i6618.targetDisplay = i6619[12]
  i6618.overridePixelPerfect = !!i6619[13]
  i6618.enabled = !!i6619[14]
  return i6618
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6620 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6621 = data
  i6620.m_UiScaleMode = i6621[0]
  i6620.m_ReferencePixelsPerUnit = i6621[1]
  i6620.m_ScaleFactor = i6621[2]
  i6620.m_ReferenceResolution = new pc.Vec2( i6621[3], i6621[4] )
  i6620.m_ScreenMatchMode = i6621[5]
  i6620.m_MatchWidthOrHeight = i6621[6]
  i6620.m_PhysicalUnit = i6621[7]
  i6620.m_FallbackScreenDPI = i6621[8]
  i6620.m_DefaultSpriteDPI = i6621[9]
  i6620.m_DynamicPixelsPerUnit = i6621[10]
  i6620.m_PresetInfoIsWorld = !!i6621[11]
  return i6620
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6622 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6623 = data
  i6622.m_IgnoreReversedGraphics = !!i6623[0]
  i6622.m_BlockingObjects = i6623[1]
  i6622.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6623[2] )
  return i6622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6625 = data
  request.r(i6625[0], i6625[1], 0, i6624, 'animatorController')
  request.r(i6625[2], i6625[3], 0, i6624, 'avatar')
  i6624.updateMode = i6625[4]
  i6624.hasTransformHierarchy = !!i6625[5]
  i6624.applyRootMotion = !!i6625[6]
  var i6627 = i6625[7]
  var i6626 = []
  for(var i = 0; i < i6627.length; i += 2) {
  request.r(i6627[i + 0], i6627[i + 1], 2, i6626, '')
  }
  i6624.humanBones = i6626
  i6624.enabled = !!i6625[8]
  return i6624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6631 = data
  i6630.cullTransparentMesh = !!i6631[0]
  return i6630
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6632 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6633 = data
  i6632.m_hasFontAssetChanged = !!i6633[0]
  request.r(i6633[1], i6633[2], 0, i6632, 'm_baseMaterial')
  i6632.m_maskOffset = new pc.Vec4( i6633[3], i6633[4], i6633[5], i6633[6] )
  i6632.m_text = i6633[7]
  i6632.m_isRightToLeft = !!i6633[8]
  request.r(i6633[9], i6633[10], 0, i6632, 'm_fontAsset')
  request.r(i6633[11], i6633[12], 0, i6632, 'm_sharedMaterial')
  var i6635 = i6633[13]
  var i6634 = []
  for(var i = 0; i < i6635.length; i += 2) {
  request.r(i6635[i + 0], i6635[i + 1], 2, i6634, '')
  }
  i6632.m_fontSharedMaterials = i6634
  request.r(i6633[14], i6633[15], 0, i6632, 'm_fontMaterial')
  var i6637 = i6633[16]
  var i6636 = []
  for(var i = 0; i < i6637.length; i += 2) {
  request.r(i6637[i + 0], i6637[i + 1], 2, i6636, '')
  }
  i6632.m_fontMaterials = i6636
  i6632.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6633[17], i6633[18], i6633[19], i6633[20])
  i6632.m_fontColor = new pc.Color(i6633[21], i6633[22], i6633[23], i6633[24])
  i6632.m_enableVertexGradient = !!i6633[25]
  i6632.m_colorMode = i6633[26]
  i6632.m_fontColorGradient = request.d('TMPro.VertexGradient', i6633[27], i6632.m_fontColorGradient)
  request.r(i6633[28], i6633[29], 0, i6632, 'm_fontColorGradientPreset')
  request.r(i6633[30], i6633[31], 0, i6632, 'm_spriteAsset')
  i6632.m_tintAllSprites = !!i6633[32]
  request.r(i6633[33], i6633[34], 0, i6632, 'm_StyleSheet')
  i6632.m_TextStyleHashCode = i6633[35]
  i6632.m_overrideHtmlColors = !!i6633[36]
  i6632.m_faceColor = UnityEngine.Color32.ConstructColor(i6633[37], i6633[38], i6633[39], i6633[40])
  i6632.m_fontSize = i6633[41]
  i6632.m_fontSizeBase = i6633[42]
  i6632.m_fontWeight = i6633[43]
  i6632.m_enableAutoSizing = !!i6633[44]
  i6632.m_fontSizeMin = i6633[45]
  i6632.m_fontSizeMax = i6633[46]
  i6632.m_fontStyle = i6633[47]
  i6632.m_HorizontalAlignment = i6633[48]
  i6632.m_VerticalAlignment = i6633[49]
  i6632.m_textAlignment = i6633[50]
  i6632.m_characterSpacing = i6633[51]
  i6632.m_wordSpacing = i6633[52]
  i6632.m_lineSpacing = i6633[53]
  i6632.m_lineSpacingMax = i6633[54]
  i6632.m_paragraphSpacing = i6633[55]
  i6632.m_charWidthMaxAdj = i6633[56]
  i6632.m_TextWrappingMode = i6633[57]
  i6632.m_wordWrappingRatios = i6633[58]
  i6632.m_overflowMode = i6633[59]
  request.r(i6633[60], i6633[61], 0, i6632, 'm_linkedTextComponent')
  request.r(i6633[62], i6633[63], 0, i6632, 'parentLinkedComponent')
  i6632.m_enableKerning = !!i6633[64]
  var i6639 = i6633[65]
  var i6638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i6639.length; i += 1) {
    i6638.add(i6639[i + 0]);
  }
  i6632.m_ActiveFontFeatures = i6638
  i6632.m_enableExtraPadding = !!i6633[66]
  i6632.checkPaddingRequired = !!i6633[67]
  i6632.m_isRichText = !!i6633[68]
  i6632.m_parseCtrlCharacters = !!i6633[69]
  i6632.m_isOrthographic = !!i6633[70]
  i6632.m_isCullingEnabled = !!i6633[71]
  i6632.m_horizontalMapping = i6633[72]
  i6632.m_verticalMapping = i6633[73]
  i6632.m_uvLineOffset = i6633[74]
  i6632.m_geometrySortingOrder = i6633[75]
  i6632.m_IsTextObjectScaleStatic = !!i6633[76]
  i6632.m_VertexBufferAutoSizeReduction = !!i6633[77]
  i6632.m_useMaxVisibleDescender = !!i6633[78]
  i6632.m_pageToDisplay = i6633[79]
  i6632.m_margin = new pc.Vec4( i6633[80], i6633[81], i6633[82], i6633[83] )
  i6632.m_isUsingLegacyAnimationComponent = !!i6633[84]
  i6632.m_isVolumetricText = !!i6633[85]
  request.r(i6633[86], i6633[87], 0, i6632, 'm_Material')
  i6632.m_EmojiFallbackSupport = !!i6633[88]
  i6632.m_Maskable = !!i6633[89]
  i6632.m_Color = new pc.Color(i6633[90], i6633[91], i6633[92], i6633[93])
  i6632.m_RaycastTarget = !!i6633[94]
  i6632.m_RaycastPadding = new pc.Vec4( i6633[95], i6633[96], i6633[97], i6633[98] )
  return i6632
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6640 = root || request.c( 'TMPro.VertexGradient' )
  var i6641 = data
  i6640.topLeft = new pc.Color(i6641[0], i6641[1], i6641[2], i6641[3])
  i6640.topRight = new pc.Color(i6641[4], i6641[5], i6641[6], i6641[7])
  i6640.bottomLeft = new pc.Color(i6641[8], i6641[9], i6641[10], i6641[11])
  i6640.bottomRight = new pc.Color(i6641[12], i6641[13], i6641[14], i6641[15])
  return i6640
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6644 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6645 = data
  request.r(i6645[0], i6645[1], 0, i6644, 'm_FillRect')
  request.r(i6645[2], i6645[3], 0, i6644, 'm_HandleRect')
  i6644.m_Direction = i6645[4]
  i6644.m_MinValue = i6645[5]
  i6644.m_MaxValue = i6645[6]
  i6644.m_WholeNumbers = !!i6645[7]
  i6644.m_Value = i6645[8]
  i6644.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6645[9], i6644.m_OnValueChanged)
  i6644.m_Navigation = request.d('UnityEngine.UI.Navigation', i6645[10], i6644.m_Navigation)
  i6644.m_Transition = i6645[11]
  i6644.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6645[12], i6644.m_Colors)
  i6644.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6645[13], i6644.m_SpriteState)
  i6644.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6645[14], i6644.m_AnimationTriggers)
  i6644.m_Interactable = !!i6645[15]
  request.r(i6645[16], i6645[17], 0, i6644, 'm_TargetGraphic')
  return i6644
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6646 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6647 = data
  i6646.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6647[0], i6646.m_PersistentCalls)
  return i6646
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6648 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6649 = data
  var i6651 = i6649[0]
  var i6650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6651.length; i += 1) {
    i6650.add(request.d('UnityEngine.Events.PersistentCall', i6651[i + 0]));
  }
  i6648.m_Calls = i6650
  return i6648
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6654 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6655 = data
  request.r(i6655[0], i6655[1], 0, i6654, 'm_Target')
  i6654.m_TargetAssemblyTypeName = i6655[2]
  i6654.m_MethodName = i6655[3]
  i6654.m_Mode = i6655[4]
  i6654.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6655[5], i6654.m_Arguments)
  i6654.m_CallState = i6655[6]
  return i6654
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6656 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6657 = data
  i6656.m_Mode = i6657[0]
  i6656.m_WrapAround = !!i6657[1]
  request.r(i6657[2], i6657[3], 0, i6656, 'm_SelectOnUp')
  request.r(i6657[4], i6657[5], 0, i6656, 'm_SelectOnDown')
  request.r(i6657[6], i6657[7], 0, i6656, 'm_SelectOnLeft')
  request.r(i6657[8], i6657[9], 0, i6656, 'm_SelectOnRight')
  return i6656
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6658 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6659 = data
  i6658.m_NormalColor = new pc.Color(i6659[0], i6659[1], i6659[2], i6659[3])
  i6658.m_HighlightedColor = new pc.Color(i6659[4], i6659[5], i6659[6], i6659[7])
  i6658.m_PressedColor = new pc.Color(i6659[8], i6659[9], i6659[10], i6659[11])
  i6658.m_SelectedColor = new pc.Color(i6659[12], i6659[13], i6659[14], i6659[15])
  i6658.m_DisabledColor = new pc.Color(i6659[16], i6659[17], i6659[18], i6659[19])
  i6658.m_ColorMultiplier = i6659[20]
  i6658.m_FadeDuration = i6659[21]
  return i6658
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6660 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6661 = data
  request.r(i6661[0], i6661[1], 0, i6660, 'm_HighlightedSprite')
  request.r(i6661[2], i6661[3], 0, i6660, 'm_PressedSprite')
  request.r(i6661[4], i6661[5], 0, i6660, 'm_SelectedSprite')
  request.r(i6661[6], i6661[7], 0, i6660, 'm_DisabledSprite')
  return i6660
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6662 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6663 = data
  i6662.m_NormalTrigger = i6663[0]
  i6662.m_HighlightedTrigger = i6663[1]
  i6662.m_PressedTrigger = i6663[2]
  i6662.m_SelectedTrigger = i6663[3]
  i6662.m_DisabledTrigger = i6663[4]
  return i6662
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6664 = root || request.c( 'UnityEngine.UI.Image' )
  var i6665 = data
  request.r(i6665[0], i6665[1], 0, i6664, 'm_Sprite')
  i6664.m_Type = i6665[2]
  i6664.m_PreserveAspect = !!i6665[3]
  i6664.m_FillCenter = !!i6665[4]
  i6664.m_FillMethod = i6665[5]
  i6664.m_FillAmount = i6665[6]
  i6664.m_FillClockwise = !!i6665[7]
  i6664.m_FillOrigin = i6665[8]
  i6664.m_UseSpriteMesh = !!i6665[9]
  i6664.m_PixelsPerUnitMultiplier = i6665[10]
  request.r(i6665[11], i6665[12], 0, i6664, 'm_Material')
  i6664.m_Maskable = !!i6665[13]
  i6664.m_Color = new pc.Color(i6665[14], i6665[15], i6665[16], i6665[17])
  i6664.m_RaycastTarget = !!i6665[18]
  i6664.m_RaycastPadding = new pc.Vec4( i6665[19], i6665[20], i6665[21], i6665[22] )
  return i6664
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6666 = root || request.c( 'UnityEngine.UI.Button' )
  var i6667 = data
  i6666.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6667[0], i6666.m_OnClick)
  i6666.m_Navigation = request.d('UnityEngine.UI.Navigation', i6667[1], i6666.m_Navigation)
  i6666.m_Transition = i6667[2]
  i6666.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6667[3], i6666.m_Colors)
  i6666.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6667[4], i6666.m_SpriteState)
  i6666.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6667[5], i6666.m_AnimationTriggers)
  i6666.m_Interactable = !!i6667[6]
  request.r(i6667[7], i6667[8], 0, i6666, 'm_TargetGraphic')
  return i6666
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6668 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6669 = data
  i6668.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6669[0], i6668.m_PersistentCalls)
  return i6668
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6670 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6671 = data
  request.r(i6671[0], i6671[1], 0, i6670, 'm_ObjectArgument')
  i6670.m_ObjectArgumentAssemblyTypeName = i6671[2]
  i6670.m_IntArgument = i6671[3]
  i6670.m_FloatArgument = i6671[4]
  i6670.m_StringArgument = i6671[5]
  i6670.m_BoolArgument = !!i6671[6]
  return i6670
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i6672 = root || request.c( 'Ply_Pool' )
  var i6673 = data
  var i6675 = i6673[0]
  var i6674 = []
  for(var i = 0; i < i6675.length; i += 1) {
    i6674.push( request.d('Ply_Pool+PoolAmount', i6675[i + 0]) );
  }
  i6672.poolAmounts = i6674
  request.r(i6673[1], i6673[2], 0, i6672, 'poolHolder')
  return i6672
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i6678 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i6679 = data
  i6678.type = i6679[0]
  i6678.amount = i6679[1]
  request.r(i6679[2], i6679[3], 0, i6678, 'gameUnit')
  return i6678
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i6680 = root || request.c( 'Ply_SoundManager' )
  var i6681 = data
  var i6683 = i6681[0]
  var i6682 = []
  for(var i = 0; i < i6683.length; i += 2) {
  request.r(i6683[i + 0], i6683[i + 1], 2, i6682, '')
  }
  i6680.audioClips = i6682
  request.r(i6681[1], i6681[2], 0, i6680, 'sound')
  return i6680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6687 = data
  request.r(i6687[0], i6687[1], 0, i6686, 'clip')
  request.r(i6687[2], i6687[3], 0, i6686, 'outputAudioMixerGroup')
  i6686.playOnAwake = !!i6687[4]
  i6686.loop = !!i6687[5]
  i6686.time = i6687[6]
  i6686.volume = i6687[7]
  i6686.pitch = i6687[8]
  i6686.enabled = !!i6687[9]
  return i6686
}

Deserializers["GameManager"] = function (request, data, root) {
  var i6688 = root || request.c( 'GameManager' )
  var i6689 = data
  i6688.isPlaying = !!i6689[0]
  i6688.isTutorial = !!i6689[1]
  i6688.isGotoStore = !!i6689[2]
  i6688.countMove = i6689[3]
  i6688.maxMove = i6689[4]
  i6688.startLayer = i6689[5]
  i6688.currentLayer = i6689[6]
  request.r(i6689[7], i6689[8], 0, i6688, 'mainBox')
  request.r(i6689[9], i6689[10], 0, i6688, 'handTutorial')
  i6688.tutorialDelay = i6689[11]
  return i6688
}

Deserializers["UIManager"] = function (request, data, root) {
  var i6690 = root || request.c( 'UIManager' )
  var i6691 = data
  request.r(i6691[0], i6691[1], 0, i6690, 'winUI')
  request.r(i6691[2], i6691[3], 0, i6690, 'loseUI')
  request.r(i6691[4], i6691[5], 0, i6690, 'tutorial')
  request.r(i6691[6], i6691[7], 0, i6690, 'verticalUI')
  request.r(i6691[8], i6691[9], 0, i6690, 'horizontalUI')
  request.r(i6691[10], i6691[11], 0, i6690, 'downloadBtnVertical')
  request.r(i6691[12], i6691[13], 0, i6690, 'dowloadBtnHorizontal')
  request.r(i6691[14], i6691[15], 0, i6690, 'progressSlider')
  request.r(i6691[16], i6691[17], 0, i6690, 'progressText')
  i6690.maxProgressItems = i6691[18]
  i6690.startProgressItems = i6691[19]
  i6690.screenWidth = i6691[20]
  i6690.screenHeight = i6691[21]
  i6690.scaleHeightOnWidth = i6691[22]
  i6690.isVertical = !!i6691[23]
  request.r(i6691[24], i6691[25], 0, i6690, 'cam')
  i6690.introZoomOutMultiplier = i6691[26]
  i6690.cameraZoomDuration = i6691[27]
  i6690.useContinuousScaling = !!i6691[28]
  i6690.baseOrthographicSize = i6691[29]
  i6690.baseAspect = i6691[30]
  i6690.landscapeSize = i6691[31]
  i6690.defaultPortraitSize = i6691[32]
  var i6693 = i6691[33]
  var i6692 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i6693.length; i += 1) {
    i6692.add(request.d('ScreenScaleStep', i6693[i + 0]));
  }
  i6690.discreteScaleSteps = i6692
  i6690.usePerspectiveCamera = !!i6691[34]
  request.r(i6691[35], i6691[36], 0, i6690, 'perspectiveFocus')
  i6690.perspectiveFocusDistance = i6691[37]
  i6690.perspectivePadding = i6691[38]
  i6690.fitRendererBounds = !!i6691[39]
  request.r(i6691[40], i6691[41], 0, i6690, 'boundsRoot')
  var i6695 = i6691[42]
  var i6694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i6695.length; i += 2) {
  request.r(i6695[i + 0], i6695[i + 1], 1, i6694, '')
  }
  i6690.boundsRenderers = i6694
  return i6690
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i6698 = root || request.c( 'ScreenScaleStep' )
  var i6699 = data
  i6698.heightOnWidthRatio = i6699[0]
  i6698.orthographicSize = i6699[1]
  return i6698
}

Deserializers["InputManager"] = function (request, data, root) {
  var i6702 = root || request.c( 'InputManager' )
  var i6703 = data
  i6702.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i6703[0] )
  i6702.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i6703[1] )
  i6702.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i6703[2] )
  i6702.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i6703[3] )
  i6702.isDragging = !!i6703[4]
  request.r(i6703[5], i6703[6], 0, i6702, 'mainCamera')
  return i6702
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i6704 = root || request.c( 'ItemSetupTool' )
  var i6705 = data
  request.r(i6705[0], i6705[1], 0, i6704, 'spritesParent')
  request.r(i6705[2], i6705[3], 0, i6704, 'holdersParent')
  i6704.shadowSuffix = i6705[4]
  i6704.holderPrefix = i6705[5]
  i6704.holdersParentName = i6705[6]
  i6704.colliderDepth = i6705[7]
  i6704.colliderSizeMultiplier = i6705[8]
  i6704.generatedShadowColor = new pc.Color(i6705[9], i6705[10], i6705[11], i6705[12])
  i6704.fadedBlackShadowColor = new pc.Color(i6705[13], i6705[14], i6705[15], i6705[16])
  i6704.generatedShadowLocalOffset = new pc.Vec3( i6705[17], i6705[18], i6705[19] )
  i6704.itemLayerName = i6705[20]
  i6704.holderLayerName = i6705[21]
  return i6704
}

Deserializers["CameraController"] = function (request, data, root) {
  var i6706 = root || request.c( 'CameraController' )
  var i6707 = data
  request.r(i6707[0], i6707[1], 0, i6706, 'targetCamera')
  i6706.enableZoom = !!i6707[2]
  i6706.minZoomRatio = i6707[3]
  i6706.maxZoomRatio = i6707[4]
  i6706.mouseWheelZoomSpeed = i6707[5]
  i6706.pinchZoomSpeed = i6707[6]
  i6706.enableDrag = !!i6707[7]
  i6706.horizontalOnly = !!i6707[8]
  i6706.dragSensitivity = i6707[9]
  i6706.maxHorizontalOffset = i6707[10]
  i6706.maxVerticalOffset = i6707[11]
  return i6706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6709 = data
  i6708.aspect = i6709[0]
  i6708.orthographic = !!i6709[1]
  i6708.orthographicSize = i6709[2]
  i6708.backgroundColor = new pc.Color(i6709[3], i6709[4], i6709[5], i6709[6])
  i6708.nearClipPlane = i6709[7]
  i6708.farClipPlane = i6709[8]
  i6708.fieldOfView = i6709[9]
  i6708.depth = i6709[10]
  i6708.clearFlags = i6709[11]
  i6708.cullingMask = i6709[12]
  i6708.rect = i6709[13]
  request.r(i6709[14], i6709[15], 0, i6708, 'targetTexture')
  i6708.usePhysicalProperties = !!i6709[16]
  i6708.focalLength = i6709[17]
  i6708.sensorSize = new pc.Vec2( i6709[18], i6709[19] )
  i6708.lensShift = new pc.Vec2( i6709[20], i6709[21] )
  i6708.gateFit = i6709[22]
  i6708.commandBufferCount = i6709[23]
  i6708.cameraType = i6709[24]
  i6708.enabled = !!i6709[25]
  return i6708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i6710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i6711 = data
  i6710.type = i6711[0]
  i6710.color = new pc.Color(i6711[1], i6711[2], i6711[3], i6711[4])
  i6710.cullingMask = i6711[5]
  i6710.intensity = i6711[6]
  i6710.range = i6711[7]
  i6710.spotAngle = i6711[8]
  i6710.shadows = i6711[9]
  i6710.shadowNormalBias = i6711[10]
  i6710.shadowBias = i6711[11]
  i6710.shadowStrength = i6711[12]
  i6710.shadowResolution = i6711[13]
  i6710.lightmapBakeType = i6711[14]
  i6710.renderMode = i6711[15]
  request.r(i6711[16], i6711[17], 0, i6710, 'cookie')
  i6710.cookieSize = i6711[18]
  i6710.shadowNearPlane = i6711[19]
  i6710.occlusionMaskChannel = i6711[20]
  i6710.enabled = !!i6711[21]
  return i6710
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6712 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6713 = data
  request.r(i6713[0], i6713[1], 0, i6712, 'm_FirstSelected')
  i6712.m_sendNavigationEvents = !!i6713[2]
  i6712.m_DragThreshold = i6713[3]
  return i6712
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6714 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6715 = data
  i6714.m_HorizontalAxis = i6715[0]
  i6714.m_VerticalAxis = i6715[1]
  i6714.m_SubmitButton = i6715[2]
  i6714.m_CancelButton = i6715[3]
  i6714.m_InputActionsPerSecond = i6715[4]
  i6714.m_RepeatDelay = i6715[5]
  i6714.m_ForceModuleActive = !!i6715[6]
  i6714.m_SendPointerHoverToParent = !!i6715[7]
  return i6714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6717 = data
  i6716.color = new pc.Color(i6717[0], i6717[1], i6717[2], i6717[3])
  request.r(i6717[4], i6717[5], 0, i6716, 'sprite')
  i6716.flipX = !!i6717[6]
  i6716.flipY = !!i6717[7]
  i6716.drawMode = i6717[8]
  i6716.size = new pc.Vec2( i6717[9], i6717[10] )
  i6716.tileMode = i6717[11]
  i6716.adaptiveModeThreshold = i6717[12]
  i6716.maskInteraction = i6717[13]
  i6716.spriteSortPoint = i6717[14]
  i6716.enabled = !!i6717[15]
  request.r(i6717[16], i6717[17], 0, i6716, 'sharedMaterial')
  var i6719 = i6717[18]
  var i6718 = []
  for(var i = 0; i < i6719.length; i += 2) {
  request.r(i6719[i + 0], i6719[i + 1], 2, i6718, '')
  }
  i6716.sharedMaterials = i6718
  i6716.receiveShadows = !!i6717[19]
  i6716.shadowCastingMode = i6717[20]
  i6716.sortingLayerID = i6717[21]
  i6716.sortingOrder = i6717[22]
  i6716.lightmapIndex = i6717[23]
  i6716.lightmapSceneIndex = i6717[24]
  i6716.lightmapScaleOffset = new pc.Vec4( i6717[25], i6717[26], i6717[27], i6717[28] )
  i6716.lightProbeUsage = i6717[29]
  i6716.reflectionProbeUsage = i6717[30]
  return i6716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i6720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i6721 = data
  i6720.center = new pc.Vec3( i6721[0], i6721[1], i6721[2] )
  i6720.radius = i6721[3]
  i6720.enabled = !!i6721[4]
  i6720.isTrigger = !!i6721[5]
  request.r(i6721[6], i6721[7], 0, i6720, 'material')
  return i6720
}

Deserializers["Box"] = function (request, data, root) {
  var i6722 = root || request.c( 'Box' )
  var i6723 = data
  i6722.useBox = !!i6723[0]
  i6722.spawnMode = i6723[1]
  var i6725 = i6723[2]
  var i6724 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i6725.length; i += 2) {
  request.r(i6725[i + 0], i6725[i + 1], 1, i6724, '')
  }
  i6722.dynamicItems = i6724
  var i6727 = i6723[3]
  var i6726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6727.length; i += 2) {
  request.r(i6727[i + 0], i6727[i + 1], 1, i6726, '')
  }
  i6722.spawnTargets = i6726
  i6722.initialSpawnCount = i6723[4]
  i6722.revealDuration = i6723[5]
  i6722.showInitialBatchShadowsOnSpawn = !!i6723[6]
  request.r(i6723[7], i6723[8], 0, i6722, 'graphicController')
  return i6722
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i6732 = root || request.c( 'BoxGraphicController' )
  var i6733 = data
  request.r(i6733[0], i6733[1], 0, i6732, 'skeletonAnimation')
  return i6732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6735 = data
  request.r(i6735[0], i6735[1], 0, i6734, 'sharedMesh')
  return i6734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6737 = data
  request.r(i6737[0], i6737[1], 0, i6736, 'additionalVertexStreams')
  i6736.enabled = !!i6737[2]
  request.r(i6737[3], i6737[4], 0, i6736, 'sharedMaterial')
  var i6739 = i6737[5]
  var i6738 = []
  for(var i = 0; i < i6739.length; i += 2) {
  request.r(i6739[i + 0], i6739[i + 1], 2, i6738, '')
  }
  i6736.sharedMaterials = i6738
  i6736.receiveShadows = !!i6737[6]
  i6736.shadowCastingMode = i6737[7]
  i6736.sortingLayerID = i6737[8]
  i6736.sortingOrder = i6737[9]
  i6736.lightmapIndex = i6737[10]
  i6736.lightmapSceneIndex = i6737[11]
  i6736.lightmapScaleOffset = new pc.Vec4( i6737[12], i6737[13], i6737[14], i6737[15] )
  i6736.lightProbeUsage = i6737[16]
  i6736.reflectionProbeUsage = i6737[17]
  return i6736
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i6740 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i6741 = data
  i6740.loop = !!i6741[0]
  i6740.timeScale = i6741[1]
  request.r(i6741[2], i6741[3], 0, i6740, 'skeletonDataAsset')
  i6740.initialSkinName = i6741[4]
  i6740.fixPrefabOverrideViaMeshFilter = i6741[5]
  i6740.initialFlipX = !!i6741[6]
  i6740.initialFlipY = !!i6741[7]
  i6740.updateWhenInvisible = i6741[8]
  i6740.zSpacing = i6741[9]
  i6740.useClipping = !!i6741[10]
  i6740.immutableTriangles = !!i6741[11]
  i6740.pmaVertexColors = !!i6741[12]
  i6740.clearStateOnDisable = !!i6741[13]
  i6740.tintBlack = !!i6741[14]
  i6740.singleSubmesh = !!i6741[15]
  i6740.fixDrawOrder = !!i6741[16]
  i6740.addNormals = !!i6741[17]
  i6740.calculateTangents = !!i6741[18]
  i6740.maskInteraction = i6741[19]
  i6740.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i6741[20], i6740.maskMaterials)
  i6740.disableRenderingOnOverride = !!i6741[21]
  i6740._animationName = i6741[22]
  var i6743 = i6741[23]
  var i6742 = []
  for(var i = 0; i < i6743.length; i += 1) {
    i6742.push( i6743[i + 0] );
  }
  i6740.separatorSlotNames = i6742
  return i6740
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i6744 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i6745 = data
  var i6747 = i6745[0]
  var i6746 = []
  for(var i = 0; i < i6747.length; i += 2) {
  request.r(i6747[i + 0], i6747[i + 1], 2, i6746, '')
  }
  i6744.materialsMaskDisabled = i6746
  var i6749 = i6745[1]
  var i6748 = []
  for(var i = 0; i < i6749.length; i += 2) {
  request.r(i6749[i + 0], i6749[i + 1], 2, i6748, '')
  }
  i6744.materialsInsideMask = i6748
  var i6751 = i6745[2]
  var i6750 = []
  for(var i = 0; i < i6751.length; i += 2) {
  request.r(i6751[i + 0], i6751[i + 1], 2, i6750, '')
  }
  i6744.materialsOutsideMask = i6750
  return i6744
}

Deserializers["Item"] = function (request, data, root) {
  var i6754 = root || request.c( 'Item' )
  var i6755 = data
  i6754.placeSoundType = i6755[0]
  i6754.id = i6755[1]
  i6754.currentState = i6755[2]
  i6754.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i6755[3] )
  i6754.scaleOnSpawn = !!i6755[4]
  i6754.spawnScaleMultiplier = i6755[5]
  request.r(i6755[6], i6755[7], 0, i6754, 'correctHolderTransform')
  request.r(i6755[8], i6755[9], 0, i6754, 'shadowOnHolder')
  i6754.canShowShadowHint = !!i6755[10]
  i6754.waitingPosition = new pc.Vec3( i6755[11], i6755[12], i6755[13] )
  request.r(i6755[14], i6755[15], 0, i6754, 'spriteRenderer')
  return i6754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i6756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i6757 = data
  i6756.center = new pc.Vec3( i6757[0], i6757[1], i6757[2] )
  i6756.size = new pc.Vec3( i6757[3], i6757[4], i6757[5] )
  i6756.enabled = !!i6757[6]
  i6756.isTrigger = !!i6757[7]
  request.r(i6757[8], i6757[9], 0, i6756, 'material')
  return i6756
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i6758 = root || request.c( 'PSD_Tool' )
  var i6759 = data
  var i6761 = i6759[0]
  var i6760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i6761.length; i += 2) {
  request.r(i6761[i + 0], i6761[i + 1], 1, i6760, '')
  }
  i6758.sprites = i6760
  request.r(i6759[1], i6759[2], 0, i6758, 'holder')
  var i6763 = i6759[3]
  var i6762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6763.length; i += 2) {
  request.r(i6763[i + 0], i6763[i + 1], 1, i6762, '')
  }
  i6758.childGameObjects = i6762
  return i6758
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i6768 = root || request.c( 'ItemHolder' )
  var i6769 = data
  i6768.id = i6769[0]
  return i6768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6771 = data
  i6770.ambientIntensity = i6771[0]
  i6770.reflectionIntensity = i6771[1]
  i6770.ambientMode = i6771[2]
  i6770.ambientLight = new pc.Color(i6771[3], i6771[4], i6771[5], i6771[6])
  i6770.ambientSkyColor = new pc.Color(i6771[7], i6771[8], i6771[9], i6771[10])
  i6770.ambientGroundColor = new pc.Color(i6771[11], i6771[12], i6771[13], i6771[14])
  i6770.ambientEquatorColor = new pc.Color(i6771[15], i6771[16], i6771[17], i6771[18])
  i6770.fogColor = new pc.Color(i6771[19], i6771[20], i6771[21], i6771[22])
  i6770.fogEndDistance = i6771[23]
  i6770.fogStartDistance = i6771[24]
  i6770.fogDensity = i6771[25]
  i6770.fog = !!i6771[26]
  request.r(i6771[27], i6771[28], 0, i6770, 'skybox')
  i6770.fogMode = i6771[29]
  var i6773 = i6771[30]
  var i6772 = []
  for(var i = 0; i < i6773.length; i += 1) {
    i6772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6773[i + 0]) );
  }
  i6770.lightmaps = i6772
  i6770.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6771[31], i6770.lightProbes)
  i6770.lightmapsMode = i6771[32]
  i6770.mixedBakeMode = i6771[33]
  i6770.environmentLightingMode = i6771[34]
  i6770.ambientProbe = new pc.SphericalHarmonicsL2(i6771[35])
  i6770.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6771[36])
  i6770.useReferenceAmbientProbe = !!i6771[37]
  request.r(i6771[38], i6771[39], 0, i6770, 'customReflection')
  request.r(i6771[40], i6771[41], 0, i6770, 'defaultReflection')
  i6770.defaultReflectionMode = i6771[42]
  i6770.defaultReflectionResolution = i6771[43]
  i6770.sunLightObjectId = i6771[44]
  i6770.pixelLightCount = i6771[45]
  i6770.defaultReflectionHDR = !!i6771[46]
  i6770.hasLightDataAsset = !!i6771[47]
  i6770.hasManualGenerate = !!i6771[48]
  return i6770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6777 = data
  request.r(i6777[0], i6777[1], 0, i6776, 'lightmapColor')
  request.r(i6777[2], i6777[3], 0, i6776, 'lightmapDirection')
  request.r(i6777[4], i6777[5], 0, i6776, 'shadowMask')
  return i6776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6778 = root || new UnityEngine.LightProbes()
  var i6779 = data
  return i6778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6787 = data
  var i6789 = i6787[0]
  var i6788 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6789.length; i += 1) {
    i6788.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6789[i + 0]));
  }
  i6786.ShaderCompilationErrors = i6788
  i6786.name = i6787[1]
  i6786.guid = i6787[2]
  var i6791 = i6787[3]
  var i6790 = []
  for(var i = 0; i < i6791.length; i += 1) {
    i6790.push( i6791[i + 0] );
  }
  i6786.shaderDefinedKeywords = i6790
  var i6793 = i6787[4]
  var i6792 = []
  for(var i = 0; i < i6793.length; i += 1) {
    i6792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6793[i + 0]) );
  }
  i6786.passes = i6792
  var i6795 = i6787[5]
  var i6794 = []
  for(var i = 0; i < i6795.length; i += 1) {
    i6794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6795[i + 0]) );
  }
  i6786.usePasses = i6794
  var i6797 = i6787[6]
  var i6796 = []
  for(var i = 0; i < i6797.length; i += 1) {
    i6796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6797[i + 0]) );
  }
  i6786.defaultParameterValues = i6796
  request.r(i6787[7], i6787[8], 0, i6786, 'unityFallbackShader')
  i6786.readDepth = !!i6787[9]
  i6786.hasDepthOnlyPass = !!i6787[10]
  i6786.isCreatedByShaderGraph = !!i6787[11]
  i6786.disableBatching = !!i6787[12]
  i6786.compiled = !!i6787[13]
  return i6786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6801 = data
  i6800.shaderName = i6801[0]
  i6800.errorMessage = i6801[1]
  return i6800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6804 = root || new pc.UnityShaderPass()
  var i6805 = data
  i6804.id = i6805[0]
  i6804.subShaderIndex = i6805[1]
  i6804.name = i6805[2]
  i6804.passType = i6805[3]
  i6804.grabPassTextureName = i6805[4]
  i6804.usePass = !!i6805[5]
  i6804.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[6], i6804.zTest)
  i6804.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[7], i6804.zWrite)
  i6804.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[8], i6804.culling)
  i6804.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6805[9], i6804.blending)
  i6804.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6805[10], i6804.alphaBlending)
  i6804.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[11], i6804.colorWriteMask)
  i6804.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[12], i6804.offsetUnits)
  i6804.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[13], i6804.offsetFactor)
  i6804.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[14], i6804.stencilRef)
  i6804.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[15], i6804.stencilReadMask)
  i6804.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6805[16], i6804.stencilWriteMask)
  i6804.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6805[17], i6804.stencilOp)
  i6804.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6805[18], i6804.stencilOpFront)
  i6804.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6805[19], i6804.stencilOpBack)
  var i6807 = i6805[20]
  var i6806 = []
  for(var i = 0; i < i6807.length; i += 1) {
    i6806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6807[i + 0]) );
  }
  i6804.tags = i6806
  var i6809 = i6805[21]
  var i6808 = []
  for(var i = 0; i < i6809.length; i += 1) {
    i6808.push( i6809[i + 0] );
  }
  i6804.passDefinedKeywords = i6808
  var i6811 = i6805[22]
  var i6810 = []
  for(var i = 0; i < i6811.length; i += 1) {
    i6810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6811[i + 0]) );
  }
  i6804.passDefinedKeywordGroups = i6810
  var i6813 = i6805[23]
  var i6812 = []
  for(var i = 0; i < i6813.length; i += 1) {
    i6812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6813[i + 0]) );
  }
  i6804.variants = i6812
  var i6815 = i6805[24]
  var i6814 = []
  for(var i = 0; i < i6815.length; i += 1) {
    i6814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6815[i + 0]) );
  }
  i6804.excludedVariants = i6814
  i6804.hasDepthReader = !!i6805[25]
  return i6804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6817 = data
  i6816.val = i6817[0]
  i6816.name = i6817[1]
  return i6816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6819 = data
  i6818.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[0], i6818.src)
  i6818.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[1], i6818.dst)
  i6818.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6819[2], i6818.op)
  return i6818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6821 = data
  i6820.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6821[0], i6820.pass)
  i6820.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6821[1], i6820.fail)
  i6820.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6821[2], i6820.zFail)
  i6820.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6821[3], i6820.comp)
  return i6820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6825 = data
  i6824.name = i6825[0]
  i6824.value = i6825[1]
  return i6824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6829 = data
  var i6831 = i6829[0]
  var i6830 = []
  for(var i = 0; i < i6831.length; i += 1) {
    i6830.push( i6831[i + 0] );
  }
  i6828.keywords = i6830
  i6828.hasDiscard = !!i6829[1]
  return i6828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6835 = data
  i6834.passId = i6835[0]
  i6834.subShaderIndex = i6835[1]
  var i6837 = i6835[2]
  var i6836 = []
  for(var i = 0; i < i6837.length; i += 1) {
    i6836.push( i6837[i + 0] );
  }
  i6834.keywords = i6836
  i6834.vertexProgram = i6835[3]
  i6834.fragmentProgram = i6835[4]
  i6834.exportedForWebGl2 = !!i6835[5]
  i6834.readDepth = !!i6835[6]
  return i6834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6841 = data
  request.r(i6841[0], i6841[1], 0, i6840, 'shader')
  i6840.pass = i6841[2]
  return i6840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6845 = data
  i6844.name = i6845[0]
  i6844.type = i6845[1]
  i6844.value = new pc.Vec4( i6845[2], i6845[3], i6845[4], i6845[5] )
  i6844.textureValue = i6845[6]
  i6844.shaderPropertyFlag = i6845[7]
  return i6844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6847 = data
  i6846.name = i6847[0]
  request.r(i6847[1], i6847[2], 0, i6846, 'texture')
  i6846.aabb = i6847[3]
  i6846.vertices = i6847[4]
  i6846.triangles = i6847[5]
  i6846.textureRect = UnityEngine.Rect.MinMaxRect(i6847[6], i6847[7], i6847[8], i6847[9])
  i6846.packedRect = UnityEngine.Rect.MinMaxRect(i6847[10], i6847[11], i6847[12], i6847[13])
  i6846.border = new pc.Vec4( i6847[14], i6847[15], i6847[16], i6847[17] )
  i6846.transparency = i6847[18]
  i6846.bounds = i6847[19]
  i6846.pixelsPerUnit = i6847[20]
  i6846.textureWidth = i6847[21]
  i6846.textureHeight = i6847[22]
  i6846.nativeSize = new pc.Vec2( i6847[23], i6847[24] )
  i6846.pivot = new pc.Vec2( i6847[25], i6847[26] )
  i6846.textureRectOffset = new pc.Vec2( i6847[27], i6847[28] )
  return i6846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6849 = data
  i6848.name = i6849[0]
  return i6848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6851 = data
  i6850.name = i6851[0]
  i6850.wrapMode = i6851[1]
  i6850.isLooping = !!i6851[2]
  i6850.length = i6851[3]
  var i6853 = i6851[4]
  var i6852 = []
  for(var i = 0; i < i6853.length; i += 1) {
    i6852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6853[i + 0]) );
  }
  i6850.curves = i6852
  var i6855 = i6851[5]
  var i6854 = []
  for(var i = 0; i < i6855.length; i += 1) {
    i6854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6855[i + 0]) );
  }
  i6850.events = i6854
  i6850.halfPrecision = !!i6851[6]
  i6850._frameRate = i6851[7]
  i6850.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6851[8], i6850.localBounds)
  i6850.hasMuscleCurves = !!i6851[9]
  var i6857 = i6851[10]
  var i6856 = []
  for(var i = 0; i < i6857.length; i += 1) {
    i6856.push( i6857[i + 0] );
  }
  i6850.clipMuscleConstant = i6856
  i6850.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6851[11], i6850.clipBindingConstant)
  return i6850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6861 = data
  i6860.path = i6861[0]
  i6860.hash = i6861[1]
  i6860.componentType = i6861[2]
  i6860.property = i6861[3]
  i6860.keys = i6861[4]
  var i6863 = i6861[5]
  var i6862 = []
  for(var i = 0; i < i6863.length; i += 1) {
    i6862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6863[i + 0]) );
  }
  i6860.objectReferenceKeys = i6862
  return i6860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6867 = data
  i6866.time = i6867[0]
  request.r(i6867[1], i6867[2], 0, i6866, 'value')
  return i6866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6871 = data
  i6870.functionName = i6871[0]
  i6870.floatParameter = i6871[1]
  i6870.intParameter = i6871[2]
  i6870.stringParameter = i6871[3]
  request.r(i6871[4], i6871[5], 0, i6870, 'objectReferenceParameter')
  i6870.time = i6871[6]
  return i6870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6873 = data
  i6872.center = new pc.Vec3( i6873[0], i6873[1], i6873[2] )
  i6872.extends = new pc.Vec3( i6873[3], i6873[4], i6873[5] )
  return i6872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6877 = data
  var i6879 = i6877[0]
  var i6878 = []
  for(var i = 0; i < i6879.length; i += 1) {
    i6878.push( i6879[i + 0] );
  }
  i6876.genericBindings = i6878
  var i6881 = i6877[1]
  var i6880 = []
  for(var i = 0; i < i6881.length; i += 1) {
    i6880.push( i6881[i + 0] );
  }
  i6876.pptrCurveMapping = i6880
  return i6876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6883 = data
  i6882.name = i6883[0]
  var i6885 = i6883[1]
  var i6884 = []
  for(var i = 0; i < i6885.length; i += 1) {
    i6884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6885[i + 0]) );
  }
  i6882.layers = i6884
  var i6887 = i6883[2]
  var i6886 = []
  for(var i = 0; i < i6887.length; i += 1) {
    i6886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6887[i + 0]) );
  }
  i6882.parameters = i6886
  i6882.animationClips = i6883[3]
  i6882.avatarUnsupported = i6883[4]
  return i6882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6891 = data
  i6890.name = i6891[0]
  i6890.defaultWeight = i6891[1]
  i6890.blendingMode = i6891[2]
  i6890.avatarMask = i6891[3]
  i6890.syncedLayerIndex = i6891[4]
  i6890.syncedLayerAffectsTiming = !!i6891[5]
  i6890.syncedLayers = i6891[6]
  i6890.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6891[7], i6890.stateMachine)
  return i6890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6893 = data
  i6892.id = i6893[0]
  i6892.name = i6893[1]
  i6892.path = i6893[2]
  var i6895 = i6893[3]
  var i6894 = []
  for(var i = 0; i < i6895.length; i += 1) {
    i6894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6895[i + 0]) );
  }
  i6892.states = i6894
  var i6897 = i6893[4]
  var i6896 = []
  for(var i = 0; i < i6897.length; i += 1) {
    i6896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6897[i + 0]) );
  }
  i6892.machines = i6896
  var i6899 = i6893[5]
  var i6898 = []
  for(var i = 0; i < i6899.length; i += 1) {
    i6898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6899[i + 0]) );
  }
  i6892.entryStateTransitions = i6898
  var i6901 = i6893[6]
  var i6900 = []
  for(var i = 0; i < i6901.length; i += 1) {
    i6900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6901[i + 0]) );
  }
  i6892.exitStateTransitions = i6900
  var i6903 = i6893[7]
  var i6902 = []
  for(var i = 0; i < i6903.length; i += 1) {
    i6902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6903[i + 0]) );
  }
  i6892.anyStateTransitions = i6902
  i6892.defaultStateId = i6893[8]
  return i6892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6907 = data
  i6906.id = i6907[0]
  i6906.name = i6907[1]
  i6906.cycleOffset = i6907[2]
  i6906.cycleOffsetParameter = i6907[3]
  i6906.cycleOffsetParameterActive = !!i6907[4]
  i6906.mirror = !!i6907[5]
  i6906.mirrorParameter = i6907[6]
  i6906.mirrorParameterActive = !!i6907[7]
  i6906.motionId = i6907[8]
  i6906.nameHash = i6907[9]
  i6906.fullPathHash = i6907[10]
  i6906.speed = i6907[11]
  i6906.speedParameter = i6907[12]
  i6906.speedParameterActive = !!i6907[13]
  i6906.tag = i6907[14]
  i6906.tagHash = i6907[15]
  i6906.writeDefaultValues = !!i6907[16]
  var i6909 = i6907[17]
  var i6908 = []
  for(var i = 0; i < i6909.length; i += 2) {
  request.r(i6909[i + 0], i6909[i + 1], 2, i6908, '')
  }
  i6906.behaviours = i6908
  var i6911 = i6907[18]
  var i6910 = []
  for(var i = 0; i < i6911.length; i += 1) {
    i6910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6911[i + 0]) );
  }
  i6906.transitions = i6910
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6917 = data
  i6916.fullPath = i6917[0]
  i6916.canTransitionToSelf = !!i6917[1]
  i6916.duration = i6917[2]
  i6916.exitTime = i6917[3]
  i6916.hasExitTime = !!i6917[4]
  i6916.hasFixedDuration = !!i6917[5]
  i6916.interruptionSource = i6917[6]
  i6916.offset = i6917[7]
  i6916.orderedInterruption = !!i6917[8]
  i6916.destinationStateId = i6917[9]
  i6916.isExit = !!i6917[10]
  i6916.mute = !!i6917[11]
  i6916.solo = !!i6917[12]
  var i6919 = i6917[13]
  var i6918 = []
  for(var i = 0; i < i6919.length; i += 1) {
    i6918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6919[i + 0]) );
  }
  i6916.conditions = i6918
  return i6916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6925 = data
  i6924.destinationStateId = i6925[0]
  i6924.isExit = !!i6925[1]
  i6924.mute = !!i6925[2]
  i6924.solo = !!i6925[3]
  var i6927 = i6925[4]
  var i6926 = []
  for(var i = 0; i < i6927.length; i += 1) {
    i6926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6927[i + 0]) );
  }
  i6924.conditions = i6926
  return i6924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6931 = data
  i6930.defaultBool = !!i6931[0]
  i6930.defaultFloat = i6931[1]
  i6930.defaultInt = i6931[2]
  i6930.name = i6931[3]
  i6930.nameHash = i6931[4]
  i6930.type = i6931[5]
  return i6930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6933 = data
  i6932.name = i6933[0]
  i6932.bytes64 = i6933[1]
  i6932.data = i6933[2]
  return i6932
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6934 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6935 = data
  i6934.normalStyle = i6935[0]
  i6934.normalSpacingOffset = i6935[1]
  i6934.boldStyle = i6935[2]
  i6934.boldSpacing = i6935[3]
  i6934.italicStyle = i6935[4]
  i6934.tabSize = i6935[5]
  request.r(i6935[6], i6935[7], 0, i6934, 'atlas')
  i6934.m_SourceFontFileGUID = i6935[8]
  i6934.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6935[9], i6934.m_CreationSettings)
  request.r(i6935[10], i6935[11], 0, i6934, 'm_SourceFontFile')
  i6934.m_SourceFontFilePath = i6935[12]
  i6934.m_AtlasPopulationMode = i6935[13]
  i6934.InternalDynamicOS = !!i6935[14]
  var i6937 = i6935[15]
  var i6936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6937.length; i += 1) {
    i6936.add(request.d('UnityEngine.TextCore.Glyph', i6937[i + 0]));
  }
  i6934.m_GlyphTable = i6936
  var i6939 = i6935[16]
  var i6938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6939.length; i += 1) {
    i6938.add(request.d('TMPro.TMP_Character', i6939[i + 0]));
  }
  i6934.m_CharacterTable = i6938
  var i6941 = i6935[17]
  var i6940 = []
  for(var i = 0; i < i6941.length; i += 2) {
  request.r(i6941[i + 0], i6941[i + 1], 2, i6940, '')
  }
  i6934.m_AtlasTextures = i6940
  i6934.m_AtlasTextureIndex = i6935[18]
  i6934.m_IsMultiAtlasTexturesEnabled = !!i6935[19]
  i6934.m_GetFontFeatures = !!i6935[20]
  i6934.m_ClearDynamicDataOnBuild = !!i6935[21]
  i6934.m_AtlasWidth = i6935[22]
  i6934.m_AtlasHeight = i6935[23]
  i6934.m_AtlasPadding = i6935[24]
  i6934.m_AtlasRenderMode = i6935[25]
  var i6943 = i6935[26]
  var i6942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6943.length; i += 1) {
    i6942.add(request.d('UnityEngine.TextCore.GlyphRect', i6943[i + 0]));
  }
  i6934.m_UsedGlyphRects = i6942
  var i6945 = i6935[27]
  var i6944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6945.length; i += 1) {
    i6944.add(request.d('UnityEngine.TextCore.GlyphRect', i6945[i + 0]));
  }
  i6934.m_FreeGlyphRects = i6944
  i6934.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6935[28], i6934.m_FontFeatureTable)
  i6934.m_ShouldReimportFontFeatures = !!i6935[29]
  var i6947 = i6935[30]
  var i6946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6947.length; i += 2) {
  request.r(i6947[i + 0], i6947[i + 1], 1, i6946, '')
  }
  i6934.m_FallbackFontAssetTable = i6946
  var i6949 = i6935[31]
  var i6948 = []
  for(var i = 0; i < i6949.length; i += 1) {
    i6948.push( request.d('TMPro.TMP_FontWeightPair', i6949[i + 0]) );
  }
  i6934.m_FontWeightTable = i6948
  var i6951 = i6935[32]
  var i6950 = []
  for(var i = 0; i < i6951.length; i += 1) {
    i6950.push( request.d('TMPro.TMP_FontWeightPair', i6951[i + 0]) );
  }
  i6934.fontWeights = i6950
  i6934.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6935[33], i6934.m_fontInfo)
  var i6953 = i6935[34]
  var i6952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6953.length; i += 1) {
    i6952.add(request.d('TMPro.TMP_Glyph', i6953[i + 0]));
  }
  i6934.m_glyphInfoList = i6952
  i6934.m_KerningTable = request.d('TMPro.KerningTable', i6935[35], i6934.m_KerningTable)
  var i6955 = i6935[36]
  var i6954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6955.length; i += 2) {
  request.r(i6955[i + 0], i6955[i + 1], 1, i6954, '')
  }
  i6934.fallbackFontAssets = i6954
  i6934.m_Version = i6935[37]
  i6934.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6935[38], i6934.m_FaceInfo)
  request.r(i6935[39], i6935[40], 0, i6934, 'm_Material')
  return i6934
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6956 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6957 = data
  i6956.sourceFontFileName = i6957[0]
  i6956.sourceFontFileGUID = i6957[1]
  i6956.faceIndex = i6957[2]
  i6956.pointSizeSamplingMode = i6957[3]
  i6956.pointSize = i6957[4]
  i6956.padding = i6957[5]
  i6956.paddingMode = i6957[6]
  i6956.packingMode = i6957[7]
  i6956.atlasWidth = i6957[8]
  i6956.atlasHeight = i6957[9]
  i6956.characterSetSelectionMode = i6957[10]
  i6956.characterSequence = i6957[11]
  i6956.referencedFontAssetGUID = i6957[12]
  i6956.referencedTextAssetGUID = i6957[13]
  i6956.fontStyle = i6957[14]
  i6956.fontStyleModifier = i6957[15]
  i6956.renderMode = i6957[16]
  i6956.includeFontFeatures = !!i6957[17]
  return i6956
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6960 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6961 = data
  i6960.m_Index = i6961[0]
  i6960.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6961[1], i6960.m_Metrics)
  i6960.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6961[2], i6960.m_GlyphRect)
  i6960.m_Scale = i6961[3]
  i6960.m_AtlasIndex = i6961[4]
  i6960.m_ClassDefinitionType = i6961[5]
  return i6960
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6962 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6963 = data
  i6962.m_Width = i6963[0]
  i6962.m_Height = i6963[1]
  i6962.m_HorizontalBearingX = i6963[2]
  i6962.m_HorizontalBearingY = i6963[3]
  i6962.m_HorizontalAdvance = i6963[4]
  return i6962
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6964 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6965 = data
  i6964.m_X = i6965[0]
  i6964.m_Y = i6965[1]
  i6964.m_Width = i6965[2]
  i6964.m_Height = i6965[3]
  return i6964
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6968 = root || request.c( 'TMPro.TMP_Character' )
  var i6969 = data
  i6968.m_ElementType = i6969[0]
  i6968.m_Unicode = i6969[1]
  i6968.m_GlyphIndex = i6969[2]
  i6968.m_Scale = i6969[3]
  return i6968
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6974 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6975 = data
  var i6977 = i6975[0]
  var i6976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i6977.length; i += 1) {
    i6976.add(request.d('TMPro.MultipleSubstitutionRecord', i6977[i + 0]));
  }
  i6974.m_MultipleSubstitutionRecords = i6976
  var i6979 = i6975[1]
  var i6978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i6979.length; i += 1) {
    i6978.add(request.d('TMPro.LigatureSubstitutionRecord', i6979[i + 0]));
  }
  i6974.m_LigatureSubstitutionRecords = i6978
  var i6981 = i6975[2]
  var i6980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6981.length; i += 1) {
    i6980.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i6981[i + 0]));
  }
  i6974.m_GlyphPairAdjustmentRecords = i6980
  var i6983 = i6975[3]
  var i6982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i6983.length; i += 1) {
    i6982.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i6983[i + 0]));
  }
  i6974.m_MarkToBaseAdjustmentRecords = i6982
  var i6985 = i6975[4]
  var i6984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i6985.length; i += 1) {
    i6984.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i6985[i + 0]));
  }
  i6974.m_MarkToMarkAdjustmentRecords = i6984
  return i6974
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i6988 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i6989 = data
  i6988.m_TargetGlyphID = i6989[0]
  i6988.m_SubstituteGlyphIDs = i6989[1]
  return i6988
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i6992 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i6993 = data
  i6992.m_ComponentGlyphIDs = i6993[0]
  i6992.m_LigatureGlyphID = i6993[1]
  return i6992
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6996 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i6997 = data
  i6996.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6997[0], i6996.m_FirstAdjustmentRecord)
  i6996.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i6997[1], i6996.m_SecondAdjustmentRecord)
  i6996.m_FeatureLookupFlags = i6997[2]
  return i6996
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i7000 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i7001 = data
  i7000.m_BaseGlyphID = i7001[0]
  i7000.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7001[1], i7000.m_BaseGlyphAnchorPoint)
  i7000.m_MarkGlyphID = i7001[2]
  i7000.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7001[3], i7000.m_MarkPositionAdjustment)
  return i7000
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i7004 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i7005 = data
  i7004.m_BaseMarkGlyphID = i7005[0]
  i7004.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i7005[1], i7004.m_BaseMarkGlyphAnchorPoint)
  i7004.m_CombiningMarkGlyphID = i7005[2]
  i7004.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i7005[3], i7004.m_CombiningMarkPositionAdjustment)
  return i7004
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7010 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7011 = data
  request.r(i7011[0], i7011[1], 0, i7010, 'regularTypeface')
  request.r(i7011[2], i7011[3], 0, i7010, 'italicTypeface')
  return i7010
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7012 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7013 = data
  i7012.Name = i7013[0]
  i7012.PointSize = i7013[1]
  i7012.Scale = i7013[2]
  i7012.CharacterCount = i7013[3]
  i7012.LineHeight = i7013[4]
  i7012.Baseline = i7013[5]
  i7012.Ascender = i7013[6]
  i7012.CapHeight = i7013[7]
  i7012.Descender = i7013[8]
  i7012.CenterLine = i7013[9]
  i7012.SuperscriptOffset = i7013[10]
  i7012.SubscriptOffset = i7013[11]
  i7012.SubSize = i7013[12]
  i7012.Underline = i7013[13]
  i7012.UnderlineThickness = i7013[14]
  i7012.strikethrough = i7013[15]
  i7012.strikethroughThickness = i7013[16]
  i7012.TabWidth = i7013[17]
  i7012.Padding = i7013[18]
  i7012.AtlasWidth = i7013[19]
  i7012.AtlasHeight = i7013[20]
  return i7012
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7016 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7017 = data
  i7016.id = i7017[0]
  i7016.x = i7017[1]
  i7016.y = i7017[2]
  i7016.width = i7017[3]
  i7016.height = i7017[4]
  i7016.xOffset = i7017[5]
  i7016.yOffset = i7017[6]
  i7016.xAdvance = i7017[7]
  i7016.scale = i7017[8]
  return i7016
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7018 = root || request.c( 'TMPro.KerningTable' )
  var i7019 = data
  var i7021 = i7019[0]
  var i7020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7021.length; i += 1) {
    i7020.add(request.d('TMPro.KerningPair', i7021[i + 0]));
  }
  i7018.kerningPairs = i7020
  return i7018
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7024 = root || request.c( 'TMPro.KerningPair' )
  var i7025 = data
  i7024.xOffset = i7025[0]
  i7024.m_FirstGlyph = i7025[1]
  i7024.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7025[2], i7024.m_FirstGlyphAdjustments)
  i7024.m_SecondGlyph = i7025[3]
  i7024.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7025[4], i7024.m_SecondGlyphAdjustments)
  i7024.m_IgnoreSpacingAdjustments = !!i7025[5]
  return i7024
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7026 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7027 = data
  i7026.m_FaceIndex = i7027[0]
  i7026.m_FamilyName = i7027[1]
  i7026.m_StyleName = i7027[2]
  i7026.m_PointSize = i7027[3]
  i7026.m_Scale = i7027[4]
  i7026.m_UnitsPerEM = i7027[5]
  i7026.m_LineHeight = i7027[6]
  i7026.m_AscentLine = i7027[7]
  i7026.m_CapLine = i7027[8]
  i7026.m_MeanLine = i7027[9]
  i7026.m_Baseline = i7027[10]
  i7026.m_DescentLine = i7027[11]
  i7026.m_SuperscriptOffset = i7027[12]
  i7026.m_SuperscriptSize = i7027[13]
  i7026.m_SubscriptOffset = i7027[14]
  i7026.m_SubscriptSize = i7027[15]
  i7026.m_UnderlineOffset = i7027[16]
  i7026.m_UnderlineThickness = i7027[17]
  i7026.m_StrikethroughOffset = i7027[18]
  i7026.m_StrikethroughThickness = i7027[19]
  i7026.m_TabWidth = i7027[20]
  return i7026
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i7028 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i7029 = data
  var i7031 = i7029[0]
  var i7030 = []
  for(var i = 0; i < i7031.length; i += 2) {
  request.r(i7031[i + 0], i7031[i + 1], 2, i7030, '')
  }
  i7028.atlasAssets = i7030
  i7028.scale = i7029[1]
  request.r(i7029[2], i7029[3], 0, i7028, 'skeletonJSON')
  i7028.isUpgradingBlendModeMaterials = !!i7029[4]
  i7028.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i7029[5], i7028.blendModeMaterials)
  var i7033 = i7029[6]
  var i7032 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i7033.length; i += 2) {
  request.r(i7033[i + 0], i7033[i + 1], 1, i7032, '')
  }
  i7028.skeletonDataModifiers = i7032
  var i7035 = i7029[7]
  var i7034 = []
  for(var i = 0; i < i7035.length; i += 1) {
    i7034.push( i7035[i + 0] );
  }
  i7028.fromAnimation = i7034
  var i7037 = i7029[8]
  var i7036 = []
  for(var i = 0; i < i7037.length; i += 1) {
    i7036.push( i7037[i + 0] );
  }
  i7028.toAnimation = i7036
  i7028.duration = i7029[9]
  i7028.defaultMix = i7029[10]
  request.r(i7029[11], i7029[12], 0, i7028, 'controller')
  return i7028
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i7040 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i7041 = data
  i7040.applyAdditiveMaterial = !!i7041[0]
  var i7043 = i7041[1]
  var i7042 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7043.length; i += 1) {
    i7042.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7043[i + 0]));
  }
  i7040.additiveMaterials = i7042
  var i7045 = i7041[2]
  var i7044 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7045.length; i += 1) {
    i7044.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7045[i + 0]));
  }
  i7040.multiplyMaterials = i7044
  var i7047 = i7041[3]
  var i7046 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i7047.length; i += 1) {
    i7046.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i7047[i + 0]));
  }
  i7040.screenMaterials = i7046
  i7040.requiresBlendModeMaterials = !!i7041[4]
  return i7040
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i7050 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i7051 = data
  i7050.pageName = i7051[0]
  request.r(i7051[1], i7051[2], 0, i7050, 'material')
  return i7050
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i7054 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i7055 = data
  request.r(i7055[0], i7055[1], 0, i7054, 'atlasFile')
  var i7057 = i7055[2]
  var i7056 = []
  for(var i = 0; i < i7057.length; i += 2) {
  request.r(i7057[i + 0], i7057[i + 1], 2, i7056, '')
  }
  i7054.materials = i7056
  return i7054
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7058 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7059 = data
  i7058.useSafeMode = !!i7059[0]
  i7058.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7059[1], i7058.safeModeOptions)
  i7058.timeScale = i7059[2]
  i7058.unscaledTimeScale = i7059[3]
  i7058.useSmoothDeltaTime = !!i7059[4]
  i7058.maxSmoothUnscaledTime = i7059[5]
  i7058.rewindCallbackMode = i7059[6]
  i7058.showUnityEditorReport = !!i7059[7]
  i7058.logBehaviour = i7059[8]
  i7058.drawGizmos = !!i7059[9]
  i7058.defaultRecyclable = !!i7059[10]
  i7058.defaultAutoPlay = i7059[11]
  i7058.defaultUpdateType = i7059[12]
  i7058.defaultTimeScaleIndependent = !!i7059[13]
  i7058.defaultEaseType = i7059[14]
  i7058.defaultEaseOvershootOrAmplitude = i7059[15]
  i7058.defaultEasePeriod = i7059[16]
  i7058.defaultAutoKill = !!i7059[17]
  i7058.defaultLoopType = i7059[18]
  i7058.debugMode = !!i7059[19]
  i7058.debugStoreTargetId = !!i7059[20]
  i7058.showPreviewPanel = !!i7059[21]
  i7058.storeSettingsLocation = i7059[22]
  i7058.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7059[23], i7058.modules)
  i7058.createASMDEF = !!i7059[24]
  i7058.showPlayingTweens = !!i7059[25]
  i7058.showPausedTweens = !!i7059[26]
  return i7058
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7060 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7061 = data
  i7060.logBehaviour = i7061[0]
  i7060.nestedTweenFailureBehaviour = i7061[1]
  return i7060
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7062 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7063 = data
  i7062.showPanel = !!i7063[0]
  i7062.audioEnabled = !!i7063[1]
  i7062.physicsEnabled = !!i7063[2]
  i7062.physics2DEnabled = !!i7063[3]
  i7062.spriteEnabled = !!i7063[4]
  i7062.uiEnabled = !!i7063[5]
  i7062.uiToolkitEnabled = !!i7063[6]
  i7062.textMeshProEnabled = !!i7063[7]
  i7062.tk2DEnabled = !!i7063[8]
  i7062.deAudioEnabled = !!i7063[9]
  i7062.deUnityExtendedEnabled = !!i7063[10]
  i7062.epoOutlineEnabled = !!i7063[11]
  return i7062
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7064 = root || request.c( 'TMPro.TMP_Settings' )
  var i7065 = data
  i7064.assetVersion = i7065[0]
  i7064.m_TextWrappingMode = i7065[1]
  i7064.m_enableKerning = !!i7065[2]
  var i7067 = i7065[3]
  var i7066 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i7067.length; i += 1) {
    i7066.add(i7067[i + 0]);
  }
  i7064.m_ActiveFontFeatures = i7066
  i7064.m_enableExtraPadding = !!i7065[4]
  i7064.m_enableTintAllSprites = !!i7065[5]
  i7064.m_enableParseEscapeCharacters = !!i7065[6]
  i7064.m_EnableRaycastTarget = !!i7065[7]
  i7064.m_GetFontFeaturesAtRuntime = !!i7065[8]
  i7064.m_missingGlyphCharacter = i7065[9]
  i7064.m_ClearDynamicDataOnBuild = !!i7065[10]
  i7064.m_warningsDisabled = !!i7065[11]
  request.r(i7065[12], i7065[13], 0, i7064, 'm_defaultFontAsset')
  i7064.m_defaultFontAssetPath = i7065[14]
  i7064.m_defaultFontSize = i7065[15]
  i7064.m_defaultAutoSizeMinRatio = i7065[16]
  i7064.m_defaultAutoSizeMaxRatio = i7065[17]
  i7064.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7065[18], i7065[19] )
  i7064.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7065[20], i7065[21] )
  i7064.m_autoSizeTextContainer = !!i7065[22]
  i7064.m_IsTextObjectScaleStatic = !!i7065[23]
  var i7069 = i7065[24]
  var i7068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7069.length; i += 2) {
  request.r(i7069[i + 0], i7069[i + 1], 1, i7068, '')
  }
  i7064.m_fallbackFontAssets = i7068
  i7064.m_matchMaterialPreset = !!i7065[25]
  i7064.m_HideSubTextObjects = !!i7065[26]
  request.r(i7065[27], i7065[28], 0, i7064, 'm_defaultSpriteAsset')
  i7064.m_defaultSpriteAssetPath = i7065[29]
  i7064.m_enableEmojiSupport = !!i7065[30]
  i7064.m_MissingCharacterSpriteUnicode = i7065[31]
  var i7071 = i7065[32]
  var i7070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i7071.length; i += 2) {
  request.r(i7071[i + 0], i7071[i + 1], 1, i7070, '')
  }
  i7064.m_EmojiFallbackTextAssets = i7070
  i7064.m_defaultColorGradientPresetsPath = i7065[33]
  request.r(i7065[34], i7065[35], 0, i7064, 'm_defaultStyleSheet')
  i7064.m_StyleSheetsResourcePath = i7065[36]
  request.r(i7065[37], i7065[38], 0, i7064, 'm_leadingCharacters')
  request.r(i7065[39], i7065[40], 0, i7064, 'm_followingCharacters')
  i7064.m_UseModernHangulLineBreakingRules = !!i7065[41]
  return i7064
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7074 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7075 = data
  request.r(i7075[0], i7075[1], 0, i7074, 'spriteSheet')
  var i7077 = i7075[2]
  var i7076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7077.length; i += 1) {
    i7076.add(request.d('TMPro.TMP_Sprite', i7077[i + 0]));
  }
  i7074.spriteInfoList = i7076
  var i7079 = i7075[3]
  var i7078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7079.length; i += 2) {
  request.r(i7079[i + 0], i7079[i + 1], 1, i7078, '')
  }
  i7074.fallbackSpriteAssets = i7078
  var i7081 = i7075[4]
  var i7080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7081.length; i += 1) {
    i7080.add(request.d('TMPro.TMP_SpriteCharacter', i7081[i + 0]));
  }
  i7074.m_SpriteCharacterTable = i7080
  var i7083 = i7075[5]
  var i7082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7083.length; i += 1) {
    i7082.add(request.d('TMPro.TMP_SpriteGlyph', i7083[i + 0]));
  }
  i7074.m_GlyphTable = i7082
  i7074.m_Version = i7075[6]
  i7074.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7075[7], i7074.m_FaceInfo)
  request.r(i7075[8], i7075[9], 0, i7074, 'm_Material')
  return i7074
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7086 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7087 = data
  i7086.name = i7087[0]
  i7086.hashCode = i7087[1]
  i7086.unicode = i7087[2]
  i7086.pivot = new pc.Vec2( i7087[3], i7087[4] )
  request.r(i7087[5], i7087[6], 0, i7086, 'sprite')
  i7086.id = i7087[7]
  i7086.x = i7087[8]
  i7086.y = i7087[9]
  i7086.width = i7087[10]
  i7086.height = i7087[11]
  i7086.xOffset = i7087[12]
  i7086.yOffset = i7087[13]
  i7086.xAdvance = i7087[14]
  i7086.scale = i7087[15]
  return i7086
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7092 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7093 = data
  i7092.m_Name = i7093[0]
  i7092.m_ElementType = i7093[1]
  i7092.m_Unicode = i7093[2]
  i7092.m_GlyphIndex = i7093[3]
  i7092.m_Scale = i7093[4]
  return i7092
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7096 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7097 = data
  request.r(i7097[0], i7097[1], 0, i7096, 'sprite')
  i7096.m_Index = i7097[2]
  i7096.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7097[3], i7096.m_Metrics)
  i7096.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7097[4], i7096.m_GlyphRect)
  i7096.m_Scale = i7097[5]
  i7096.m_AtlasIndex = i7097[6]
  i7096.m_ClassDefinitionType = i7097[7]
  return i7096
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7098 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7099 = data
  var i7101 = i7099[0]
  var i7100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7101.length; i += 1) {
    i7100.add(request.d('TMPro.TMP_Style', i7101[i + 0]));
  }
  i7098.m_StyleList = i7100
  return i7098
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7104 = root || request.c( 'TMPro.TMP_Style' )
  var i7105 = data
  i7104.m_Name = i7105[0]
  i7104.m_HashCode = i7105[1]
  i7104.m_OpeningDefinition = i7105[2]
  i7104.m_ClosingDefinition = i7105[3]
  i7104.m_OpeningTagArray = i7105[4]
  i7104.m_ClosingTagArray = i7105[5]
  return i7104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7107 = data
  var i7109 = i7107[0]
  var i7108 = []
  for(var i = 0; i < i7109.length; i += 1) {
    i7108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7109[i + 0]) );
  }
  i7106.files = i7108
  i7106.componentToPrefabIds = i7107[1]
  return i7106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7113 = data
  i7112.path = i7113[0]
  request.r(i7113[1], i7113[2], 0, i7112, 'unityObject')
  return i7112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7115 = data
  var i7117 = i7115[0]
  var i7116 = []
  for(var i = 0; i < i7117.length; i += 1) {
    i7116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7117[i + 0]) );
  }
  i7114.scriptsExecutionOrder = i7116
  var i7119 = i7115[1]
  var i7118 = []
  for(var i = 0; i < i7119.length; i += 1) {
    i7118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7119[i + 0]) );
  }
  i7114.sortingLayers = i7118
  var i7121 = i7115[2]
  var i7120 = []
  for(var i = 0; i < i7121.length; i += 1) {
    i7120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7121[i + 0]) );
  }
  i7114.cullingLayers = i7120
  i7114.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7115[3], i7114.timeSettings)
  i7114.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7115[4], i7114.physicsSettings)
  i7114.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7115[5], i7114.physics2DSettings)
  i7114.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7115[6], i7114.qualitySettings)
  i7114.enableRealtimeShadows = !!i7115[7]
  i7114.enableAutoInstancing = !!i7115[8]
  i7114.enableStaticBatching = !!i7115[9]
  i7114.enableDynamicBatching = !!i7115[10]
  i7114.lightmapEncodingQuality = i7115[11]
  i7114.desiredColorSpace = i7115[12]
  var i7123 = i7115[13]
  var i7122 = []
  for(var i = 0; i < i7123.length; i += 1) {
    i7122.push( i7123[i + 0] );
  }
  i7114.allTags = i7122
  return i7114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7127 = data
  i7126.name = i7127[0]
  i7126.value = i7127[1]
  return i7126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7131 = data
  i7130.id = i7131[0]
  i7130.name = i7131[1]
  i7130.value = i7131[2]
  return i7130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7135 = data
  i7134.id = i7135[0]
  i7134.name = i7135[1]
  return i7134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7137 = data
  i7136.fixedDeltaTime = i7137[0]
  i7136.maximumDeltaTime = i7137[1]
  i7136.timeScale = i7137[2]
  i7136.maximumParticleTimestep = i7137[3]
  return i7136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7139 = data
  i7138.gravity = new pc.Vec3( i7139[0], i7139[1], i7139[2] )
  i7138.defaultSolverIterations = i7139[3]
  i7138.bounceThreshold = i7139[4]
  i7138.autoSyncTransforms = !!i7139[5]
  i7138.autoSimulation = !!i7139[6]
  var i7141 = i7139[7]
  var i7140 = []
  for(var i = 0; i < i7141.length; i += 1) {
    i7140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7141[i + 0]) );
  }
  i7138.collisionMatrix = i7140
  return i7138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7145 = data
  i7144.enabled = !!i7145[0]
  i7144.layerId = i7145[1]
  i7144.otherLayerId = i7145[2]
  return i7144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7147 = data
  request.r(i7147[0], i7147[1], 0, i7146, 'material')
  i7146.gravity = new pc.Vec2( i7147[2], i7147[3] )
  i7146.positionIterations = i7147[4]
  i7146.velocityIterations = i7147[5]
  i7146.velocityThreshold = i7147[6]
  i7146.maxLinearCorrection = i7147[7]
  i7146.maxAngularCorrection = i7147[8]
  i7146.maxTranslationSpeed = i7147[9]
  i7146.maxRotationSpeed = i7147[10]
  i7146.baumgarteScale = i7147[11]
  i7146.baumgarteTOIScale = i7147[12]
  i7146.timeToSleep = i7147[13]
  i7146.linearSleepTolerance = i7147[14]
  i7146.angularSleepTolerance = i7147[15]
  i7146.defaultContactOffset = i7147[16]
  i7146.autoSimulation = !!i7147[17]
  i7146.queriesHitTriggers = !!i7147[18]
  i7146.queriesStartInColliders = !!i7147[19]
  i7146.callbacksOnDisable = !!i7147[20]
  i7146.reuseCollisionCallbacks = !!i7147[21]
  i7146.autoSyncTransforms = !!i7147[22]
  var i7149 = i7147[23]
  var i7148 = []
  for(var i = 0; i < i7149.length; i += 1) {
    i7148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7149[i + 0]) );
  }
  i7146.collisionMatrix = i7148
  return i7146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7153 = data
  i7152.enabled = !!i7153[0]
  i7152.layerId = i7153[1]
  i7152.otherLayerId = i7153[2]
  return i7152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7155 = data
  var i7157 = i7155[0]
  var i7156 = []
  for(var i = 0; i < i7157.length; i += 1) {
    i7156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7157[i + 0]) );
  }
  i7154.qualityLevels = i7156
  var i7159 = i7155[1]
  var i7158 = []
  for(var i = 0; i < i7159.length; i += 1) {
    i7158.push( i7159[i + 0] );
  }
  i7154.names = i7158
  i7154.shadows = i7155[2]
  i7154.anisotropicFiltering = i7155[3]
  i7154.antiAliasing = i7155[4]
  i7154.lodBias = i7155[5]
  i7154.shadowCascades = i7155[6]
  i7154.shadowDistance = i7155[7]
  i7154.shadowmaskMode = i7155[8]
  i7154.shadowProjection = i7155[9]
  i7154.shadowResolution = i7155[10]
  i7154.softParticles = !!i7155[11]
  i7154.softVegetation = !!i7155[12]
  i7154.activeColorSpace = i7155[13]
  i7154.desiredColorSpace = i7155[14]
  i7154.masterTextureLimit = i7155[15]
  i7154.maxQueuedFrames = i7155[16]
  i7154.particleRaycastBudget = i7155[17]
  i7154.pixelLightCount = i7155[18]
  i7154.realtimeReflectionProbes = !!i7155[19]
  i7154.shadowCascade2Split = i7155[20]
  i7154.shadowCascade4Split = new pc.Vec3( i7155[21], i7155[22], i7155[23] )
  i7154.streamingMipmapsActive = !!i7155[24]
  i7154.vSyncCount = i7155[25]
  i7154.asyncUploadBufferSize = i7155[26]
  i7154.asyncUploadTimeSlice = i7155[27]
  i7154.billboardsFaceCameraPosition = !!i7155[28]
  i7154.shadowNearPlaneOffset = i7155[29]
  i7154.streamingMipmapsMemoryBudget = i7155[30]
  i7154.maximumLODLevel = i7155[31]
  i7154.streamingMipmapsAddAllCameras = !!i7155[32]
  i7154.streamingMipmapsMaxLevelReduction = i7155[33]
  i7154.streamingMipmapsRenderersPerFrame = i7155[34]
  i7154.resolutionScalingFixedDPIFactor = i7155[35]
  i7154.streamingMipmapsMaxFileIORequests = i7155[36]
  i7154.currentQualityLevel = i7155[37]
  return i7154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7165 = data
  i7164.weight = i7165[0]
  i7164.vertices = i7165[1]
  i7164.normals = i7165[2]
  i7164.tangents = i7165[3]
  return i7164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7169 = data
  i7168.mode = i7169[0]
  i7168.parameter = i7169[1]
  i7168.threshold = i7169[2]
  return i7168
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7170 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i7171 = data
  i7170.m_GlyphIndex = i7171[0]
  i7170.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i7171[1], i7170.m_GlyphValueRecord)
  return i7170
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i7172 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i7173 = data
  i7172.m_XCoordinate = i7173[0]
  i7172.m_YCoordinate = i7173[1]
  return i7172
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i7174 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i7175 = data
  i7174.m_XPositionAdjustment = i7175[0]
  i7174.m_YPositionAdjustment = i7175[1]
  return i7174
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7176 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7177 = data
  i7176.xPlacement = i7177[0]
  i7176.yPlacement = i7177[1]
  i7176.xAdvance = i7177[2]
  i7176.yAdvance = i7177[3]
  return i7176
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i7178 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i7179 = data
  i7178.m_XPlacement = i7179[0]
  i7178.m_YPlacement = i7179[1]
  i7178.m_XAdvance = i7179[2]
  i7178.m_YAdvance = i7179[3]
  return i7178
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[32],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[32],"89":[46],"90":[91],"92":[91],"10":[9],"93":[94],"95":[96],"97":[46,45],"98":[96],"99":[98],"100":[96],"101":[96],"102":[103],"104":[103],"105":[96],"106":[9],"107":[16,9],"44":[46],"108":[16,9],"109":[14,46],"96":[46],"110":[46,45],"111":[68],"112":[75],"113":[114],"115":[103],"116":[40],"117":[32],"118":[119],"120":[38],"121":[10],"122":[9],"123":[46,9],"17":[9,16],"124":[9],"125":[16,9],"126":[46],"127":[16,9],"128":[9],"129":[130],"131":[130],"132":[130],"133":[9],"134":[9],"13":[10],"20":[16,9],"135":[9],"12":[10],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[9],"145":[16,9],"146":[9],"147":[9],"148":[9],"19":[9],"149":[16,9],"150":[9],"151":[38],"152":[38],"39":[38],"153":[38],"154":[32],"155":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider","PSD_Tool","ItemHolder","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "2.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv491_V2";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4948";

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

Deserializers.buildID = "3d5b35e3-96f8-43b6-b522-872fb9f2e889";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

