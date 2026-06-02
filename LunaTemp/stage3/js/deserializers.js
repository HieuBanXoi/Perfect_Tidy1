var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3530 = root || request.c( 'UnityEngine.JointSpring' )
  var i3531 = data
  i3530.spring = i3531[0]
  i3530.damper = i3531[1]
  i3530.targetPosition = i3531[2]
  return i3530
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3532 = root || request.c( 'UnityEngine.JointMotor' )
  var i3533 = data
  i3532.m_TargetVelocity = i3533[0]
  i3532.m_Force = i3533[1]
  i3532.m_FreeSpin = i3533[2]
  return i3532
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3534 = root || request.c( 'UnityEngine.JointLimits' )
  var i3535 = data
  i3534.m_Min = i3535[0]
  i3534.m_Max = i3535[1]
  i3534.m_Bounciness = i3535[2]
  i3534.m_BounceMinVelocity = i3535[3]
  i3534.m_ContactDistance = i3535[4]
  i3534.minBounce = i3535[5]
  i3534.maxBounce = i3535[6]
  return i3534
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3536 = root || request.c( 'UnityEngine.JointDrive' )
  var i3537 = data
  i3536.m_PositionSpring = i3537[0]
  i3536.m_PositionDamper = i3537[1]
  i3536.m_MaximumForce = i3537[2]
  i3536.m_UseAcceleration = i3537[3]
  return i3536
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3538 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3539 = data
  i3538.m_Spring = i3539[0]
  i3538.m_Damper = i3539[1]
  return i3538
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3540 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3541 = data
  i3540.m_Limit = i3541[0]
  i3540.m_Bounciness = i3541[1]
  i3540.m_ContactDistance = i3541[2]
  return i3540
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3542 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3543 = data
  i3542.m_ExtremumSlip = i3543[0]
  i3542.m_ExtremumValue = i3543[1]
  i3542.m_AsymptoteSlip = i3543[2]
  i3542.m_AsymptoteValue = i3543[3]
  i3542.m_Stiffness = i3543[4]
  return i3542
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3544 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3545 = data
  i3544.m_LowerAngle = i3545[0]
  i3544.m_UpperAngle = i3545[1]
  return i3544
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3546 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3547 = data
  i3546.m_MotorSpeed = i3547[0]
  i3546.m_MaximumMotorTorque = i3547[1]
  return i3546
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3548 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3549 = data
  i3548.m_DampingRatio = i3549[0]
  i3548.m_Frequency = i3549[1]
  i3548.m_Angle = i3549[2]
  return i3548
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3550 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3551 = data
  i3550.m_LowerTranslation = i3551[0]
  i3550.m_UpperTranslation = i3551[1]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3552 = root || new pc.UnityMaterial()
  var i3553 = data
  i3552.name = i3553[0]
  request.r(i3553[1], i3553[2], 0, i3552, 'shader')
  i3552.renderQueue = i3553[3]
  i3552.enableInstancing = !!i3553[4]
  var i3555 = i3553[5]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3555[i + 0]) );
  }
  i3552.floatParameters = i3554
  var i3557 = i3553[6]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3557[i + 0]) );
  }
  i3552.colorParameters = i3556
  var i3559 = i3553[7]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 1) {
    i3558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3559[i + 0]) );
  }
  i3552.vectorParameters = i3558
  var i3561 = i3553[8]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 1) {
    i3560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3561[i + 0]) );
  }
  i3552.textureParameters = i3560
  var i3563 = i3553[9]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3563[i + 0]) );
  }
  i3552.materialFlags = i3562
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3567 = data
  i3566.name = i3567[0]
  i3566.value = i3567[1]
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3571 = data
  i3570.name = i3571[0]
  i3570.value = new pc.Color(i3571[1], i3571[2], i3571[3], i3571[4])
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3575 = data
  i3574.name = i3575[0]
  i3574.value = new pc.Vec4( i3575[1], i3575[2], i3575[3], i3575[4] )
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3579 = data
  i3578.name = i3579[0]
  request.r(i3579[1], i3579[2], 0, i3578, 'value')
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3583 = data
  i3582.name = i3583[0]
  i3582.enabled = !!i3583[1]
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3585 = data
  i3584.name = i3585[0]
  i3584.width = i3585[1]
  i3584.height = i3585[2]
  i3584.mipmapCount = i3585[3]
  i3584.anisoLevel = i3585[4]
  i3584.filterMode = i3585[5]
  i3584.hdr = !!i3585[6]
  i3584.format = i3585[7]
  i3584.wrapMode = i3585[8]
  i3584.alphaIsTransparency = !!i3585[9]
  i3584.alphaSource = i3585[10]
  i3584.graphicsFormat = i3585[11]
  i3584.sRGBTexture = !!i3585[12]
  i3584.desiredColorSpace = i3585[13]
  i3584.wrapU = i3585[14]
  i3584.wrapV = i3585[15]
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3587 = data
  i3586.position = new pc.Vec3( i3587[0], i3587[1], i3587[2] )
  i3586.scale = new pc.Vec3( i3587[3], i3587[4], i3587[5] )
  i3586.rotation = new pc.Quat(i3587[6], i3587[7], i3587[8], i3587[9])
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3589 = data
  i3588.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3589[0], i3588.main)
  i3588.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3589[1], i3588.colorBySpeed)
  i3588.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3589[2], i3588.colorOverLifetime)
  i3588.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3589[3], i3588.emission)
  i3588.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3589[4], i3588.rotationBySpeed)
  i3588.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3589[5], i3588.rotationOverLifetime)
  i3588.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3589[6], i3588.shape)
  i3588.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3589[7], i3588.sizeBySpeed)
  i3588.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3589[8], i3588.sizeOverLifetime)
  i3588.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3589[9], i3588.textureSheetAnimation)
  i3588.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3589[10], i3588.velocityOverLifetime)
  i3588.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3589[11], i3588.noise)
  i3588.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3589[12], i3588.inheritVelocity)
  i3588.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3589[13], i3588.forceOverLifetime)
  i3588.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3589[14], i3588.limitVelocityOverLifetime)
  i3588.useAutoRandomSeed = !!i3589[15]
  i3588.randomSeed = i3589[16]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3590 = root || new pc.ParticleSystemMain()
  var i3591 = data
  i3590.duration = i3591[0]
  i3590.loop = !!i3591[1]
  i3590.prewarm = !!i3591[2]
  i3590.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[3], i3590.startDelay)
  i3590.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[4], i3590.startLifetime)
  i3590.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[5], i3590.startSpeed)
  i3590.startSize3D = !!i3591[6]
  i3590.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[7], i3590.startSizeX)
  i3590.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[8], i3590.startSizeY)
  i3590.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[9], i3590.startSizeZ)
  i3590.startRotation3D = !!i3591[10]
  i3590.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[11], i3590.startRotationX)
  i3590.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[12], i3590.startRotationY)
  i3590.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[13], i3590.startRotationZ)
  i3590.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3591[14], i3590.startColor)
  i3590.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3591[15], i3590.gravityModifier)
  i3590.simulationSpace = i3591[16]
  request.r(i3591[17], i3591[18], 0, i3590, 'customSimulationSpace')
  i3590.simulationSpeed = i3591[19]
  i3590.useUnscaledTime = !!i3591[20]
  i3590.scalingMode = i3591[21]
  i3590.playOnAwake = !!i3591[22]
  i3590.maxParticles = i3591[23]
  i3590.emitterVelocityMode = i3591[24]
  i3590.stopAction = i3591[25]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3592 = root || new pc.MinMaxCurve()
  var i3593 = data
  i3592.mode = i3593[0]
  i3592.curveMin = new pc.AnimationCurve( { keys_flow: i3593[1] } )
  i3592.curveMax = new pc.AnimationCurve( { keys_flow: i3593[2] } )
  i3592.curveMultiplier = i3593[3]
  i3592.constantMin = i3593[4]
  i3592.constantMax = i3593[5]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3594 = root || new pc.MinMaxGradient()
  var i3595 = data
  i3594.mode = i3595[0]
  i3594.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3595[1], i3594.gradientMin)
  i3594.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3595[2], i3594.gradientMax)
  i3594.colorMin = new pc.Color(i3595[3], i3595[4], i3595[5], i3595[6])
  i3594.colorMax = new pc.Color(i3595[7], i3595[8], i3595[9], i3595[10])
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3597 = data
  i3596.mode = i3597[0]
  var i3599 = i3597[1]
  var i3598 = []
  for(var i = 0; i < i3599.length; i += 1) {
    i3598.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3599[i + 0]) );
  }
  i3596.colorKeys = i3598
  var i3601 = i3597[2]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3601[i + 0]) );
  }
  i3596.alphaKeys = i3600
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3602 = root || new pc.ParticleSystemColorBySpeed()
  var i3603 = data
  i3602.enabled = !!i3603[0]
  i3602.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3603[1], i3602.color)
  i3602.range = new pc.Vec2( i3603[2], i3603[3] )
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3607 = data
  i3606.color = new pc.Color(i3607[0], i3607[1], i3607[2], i3607[3])
  i3606.time = i3607[4]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3611 = data
  i3610.alpha = i3611[0]
  i3610.time = i3611[1]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3612 = root || new pc.ParticleSystemColorOverLifetime()
  var i3613 = data
  i3612.enabled = !!i3613[0]
  i3612.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3613[1], i3612.color)
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3614 = root || new pc.ParticleSystemEmitter()
  var i3615 = data
  i3614.enabled = !!i3615[0]
  i3614.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3615[1], i3614.rateOverTime)
  i3614.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3615[2], i3614.rateOverDistance)
  var i3617 = i3615[3]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3617[i + 0]) );
  }
  i3614.bursts = i3616
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3620 = root || new pc.ParticleSystemBurst()
  var i3621 = data
  i3620.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3621[0], i3620.count)
  i3620.cycleCount = i3621[1]
  i3620.minCount = i3621[2]
  i3620.maxCount = i3621[3]
  i3620.repeatInterval = i3621[4]
  i3620.time = i3621[5]
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3622 = root || new pc.ParticleSystemRotationBySpeed()
  var i3623 = data
  i3622.enabled = !!i3623[0]
  i3622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3623[1], i3622.x)
  i3622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3623[2], i3622.y)
  i3622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3623[3], i3622.z)
  i3622.separateAxes = !!i3623[4]
  i3622.range = new pc.Vec2( i3623[5], i3623[6] )
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3624 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3625 = data
  i3624.enabled = !!i3625[0]
  i3624.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[1], i3624.x)
  i3624.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[2], i3624.y)
  i3624.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[3], i3624.z)
  i3624.separateAxes = !!i3625[4]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3626 = root || new pc.ParticleSystemShape()
  var i3627 = data
  i3626.enabled = !!i3627[0]
  i3626.shapeType = i3627[1]
  i3626.randomDirectionAmount = i3627[2]
  i3626.sphericalDirectionAmount = i3627[3]
  i3626.randomPositionAmount = i3627[4]
  i3626.alignToDirection = !!i3627[5]
  i3626.radius = i3627[6]
  i3626.radiusMode = i3627[7]
  i3626.radiusSpread = i3627[8]
  i3626.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[9], i3626.radiusSpeed)
  i3626.radiusThickness = i3627[10]
  i3626.angle = i3627[11]
  i3626.length = i3627[12]
  i3626.boxThickness = new pc.Vec3( i3627[13], i3627[14], i3627[15] )
  i3626.meshShapeType = i3627[16]
  request.r(i3627[17], i3627[18], 0, i3626, 'mesh')
  request.r(i3627[19], i3627[20], 0, i3626, 'meshRenderer')
  request.r(i3627[21], i3627[22], 0, i3626, 'skinnedMeshRenderer')
  i3626.useMeshMaterialIndex = !!i3627[23]
  i3626.meshMaterialIndex = i3627[24]
  i3626.useMeshColors = !!i3627[25]
  i3626.normalOffset = i3627[26]
  i3626.arc = i3627[27]
  i3626.arcMode = i3627[28]
  i3626.arcSpread = i3627[29]
  i3626.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[30], i3626.arcSpeed)
  i3626.donutRadius = i3627[31]
  i3626.position = new pc.Vec3( i3627[32], i3627[33], i3627[34] )
  i3626.rotation = new pc.Vec3( i3627[35], i3627[36], i3627[37] )
  i3626.scale = new pc.Vec3( i3627[38], i3627[39], i3627[40] )
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3628 = root || new pc.ParticleSystemSizeBySpeed()
  var i3629 = data
  i3628.enabled = !!i3629[0]
  i3628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[1], i3628.x)
  i3628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[2], i3628.y)
  i3628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[3], i3628.z)
  i3628.separateAxes = !!i3629[4]
  i3628.range = new pc.Vec2( i3629[5], i3629[6] )
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3630 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3631 = data
  i3630.enabled = !!i3631[0]
  i3630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[1], i3630.x)
  i3630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[2], i3630.y)
  i3630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[3], i3630.z)
  i3630.separateAxes = !!i3631[4]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3632 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3633 = data
  i3632.enabled = !!i3633[0]
  i3632.mode = i3633[1]
  i3632.animation = i3633[2]
  i3632.numTilesX = i3633[3]
  i3632.numTilesY = i3633[4]
  i3632.useRandomRow = !!i3633[5]
  i3632.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3633[6], i3632.frameOverTime)
  i3632.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3633[7], i3632.startFrame)
  i3632.cycleCount = i3633[8]
  i3632.rowIndex = i3633[9]
  i3632.flipU = i3633[10]
  i3632.flipV = i3633[11]
  i3632.spriteCount = i3633[12]
  var i3635 = i3633[13]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 2) {
  request.r(i3635[i + 0], i3635[i + 1], 2, i3634, '')
  }
  i3632.sprites = i3634
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3638 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3639 = data
  i3638.enabled = !!i3639[0]
  i3638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[1], i3638.x)
  i3638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[2], i3638.y)
  i3638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[3], i3638.z)
  i3638.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[4], i3638.radial)
  i3638.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[5], i3638.speedModifier)
  i3638.space = i3639[6]
  i3638.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[7], i3638.orbitalX)
  i3638.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[8], i3638.orbitalY)
  i3638.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[9], i3638.orbitalZ)
  i3638.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[10], i3638.orbitalOffsetX)
  i3638.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[11], i3638.orbitalOffsetY)
  i3638.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[12], i3638.orbitalOffsetZ)
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3640 = root || new pc.ParticleSystemNoise()
  var i3641 = data
  i3640.enabled = !!i3641[0]
  i3640.separateAxes = !!i3641[1]
  i3640.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[2], i3640.strengthX)
  i3640.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[3], i3640.strengthY)
  i3640.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[4], i3640.strengthZ)
  i3640.frequency = i3641[5]
  i3640.damping = !!i3641[6]
  i3640.octaveCount = i3641[7]
  i3640.octaveMultiplier = i3641[8]
  i3640.octaveScale = i3641[9]
  i3640.quality = i3641[10]
  i3640.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[11], i3640.scrollSpeed)
  i3640.scrollSpeedMultiplier = i3641[12]
  i3640.remapEnabled = !!i3641[13]
  i3640.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[14], i3640.remapX)
  i3640.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[15], i3640.remapY)
  i3640.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[16], i3640.remapZ)
  i3640.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[17], i3640.positionAmount)
  i3640.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[18], i3640.rotationAmount)
  i3640.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[19], i3640.sizeAmount)
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3642 = root || new pc.ParticleSystemInheritVelocity()
  var i3643 = data
  i3642.enabled = !!i3643[0]
  i3642.mode = i3643[1]
  i3642.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[2], i3642.curve)
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3644 = root || new pc.ParticleSystemForceOverLifetime()
  var i3645 = data
  i3644.enabled = !!i3645[0]
  i3644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[1], i3644.x)
  i3644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[2], i3644.y)
  i3644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[3], i3644.z)
  i3644.space = i3645[4]
  i3644.randomized = !!i3645[5]
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3646 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3647 = data
  i3646.enabled = !!i3647[0]
  i3646.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[1], i3646.limit)
  i3646.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[2], i3646.limitX)
  i3646.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[3], i3646.limitY)
  i3646.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[4], i3646.limitZ)
  i3646.dampen = i3647[5]
  i3646.separateAxes = !!i3647[6]
  i3646.space = i3647[7]
  i3646.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[8], i3646.drag)
  i3646.multiplyDragByParticleSize = !!i3647[9]
  i3646.multiplyDragByParticleVelocity = !!i3647[10]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3649 = data
  request.r(i3649[0], i3649[1], 0, i3648, 'mesh')
  i3648.meshCount = i3649[2]
  i3648.activeVertexStreamsCount = i3649[3]
  i3648.alignment = i3649[4]
  i3648.renderMode = i3649[5]
  i3648.sortMode = i3649[6]
  i3648.lengthScale = i3649[7]
  i3648.velocityScale = i3649[8]
  i3648.cameraVelocityScale = i3649[9]
  i3648.normalDirection = i3649[10]
  i3648.sortingFudge = i3649[11]
  i3648.minParticleSize = i3649[12]
  i3648.maxParticleSize = i3649[13]
  i3648.pivot = new pc.Vec3( i3649[14], i3649[15], i3649[16] )
  request.r(i3649[17], i3649[18], 0, i3648, 'trailMaterial')
  i3648.applyActiveColorSpace = !!i3649[19]
  i3648.enabled = !!i3649[20]
  request.r(i3649[21], i3649[22], 0, i3648, 'sharedMaterial')
  var i3651 = i3649[23]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 2) {
  request.r(i3651[i + 0], i3651[i + 1], 2, i3650, '')
  }
  i3648.sharedMaterials = i3650
  i3648.receiveShadows = !!i3649[24]
  i3648.shadowCastingMode = i3649[25]
  i3648.sortingLayerID = i3649[26]
  i3648.sortingOrder = i3649[27]
  i3648.lightmapIndex = i3649[28]
  i3648.lightmapSceneIndex = i3649[29]
  i3648.lightmapScaleOffset = new pc.Vec4( i3649[30], i3649[31], i3649[32], i3649[33] )
  i3648.lightProbeUsage = i3649[34]
  i3648.reflectionProbeUsage = i3649[35]
  return i3648
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i3654 = root || request.c( 'MergeEffect' )
  var i3655 = data
  request.r(i3655[0], i3655[1], 0, i3654, 'tf')
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3657 = data
  i3656.name = i3657[0]
  i3656.tagId = i3657[1]
  i3656.enabled = !!i3657[2]
  i3656.isStatic = !!i3657[3]
  i3656.layer = i3657[4]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3659 = data
  i3658.name = i3659[0]
  i3658.halfPrecision = !!i3659[1]
  i3658.useSimplification = !!i3659[2]
  i3658.useUInt32IndexFormat = !!i3659[3]
  i3658.vertexCount = i3659[4]
  i3658.aabb = i3659[5]
  var i3661 = i3659[6]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( !!i3661[i + 0] );
  }
  i3658.streams = i3660
  i3658.vertices = i3659[7]
  var i3663 = i3659[8]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3663[i + 0]) );
  }
  i3658.subMeshes = i3662
  var i3665 = i3659[9]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 16) {
    i3664.push( new pc.Mat4().setData(i3665[i + 0], i3665[i + 1], i3665[i + 2], i3665[i + 3],  i3665[i + 4], i3665[i + 5], i3665[i + 6], i3665[i + 7],  i3665[i + 8], i3665[i + 9], i3665[i + 10], i3665[i + 11],  i3665[i + 12], i3665[i + 13], i3665[i + 14], i3665[i + 15]) );
  }
  i3658.bindposes = i3664
  var i3667 = i3659[10]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3667[i + 0]) );
  }
  i3658.blendShapes = i3666
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3673 = data
  i3672.triangles = i3673[0]
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3679 = data
  i3678.name = i3679[0]
  var i3681 = i3679[1]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 1) {
    i3680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3681[i + 0]) );
  }
  i3678.frames = i3680
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3683 = data
  i3682.name = i3683[0]
  i3682.index = i3683[1]
  i3682.startup = !!i3683[2]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3685 = data
  i3684.pivot = new pc.Vec2( i3685[0], i3685[1] )
  i3684.anchorMin = new pc.Vec2( i3685[2], i3685[3] )
  i3684.anchorMax = new pc.Vec2( i3685[4], i3685[5] )
  i3684.sizeDelta = new pc.Vec2( i3685[6], i3685[7] )
  i3684.anchoredPosition3D = new pc.Vec3( i3685[8], i3685[9], i3685[10] )
  i3684.rotation = new pc.Quat(i3685[11], i3685[12], i3685[13], i3685[14])
  i3684.scale = new pc.Vec3( i3685[15], i3685[16], i3685[17] )
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3687 = data
  i3686.planeDistance = i3687[0]
  i3686.referencePixelsPerUnit = i3687[1]
  i3686.isFallbackOverlay = !!i3687[2]
  i3686.renderMode = i3687[3]
  i3686.renderOrder = i3687[4]
  i3686.sortingLayerName = i3687[5]
  i3686.sortingOrder = i3687[6]
  i3686.scaleFactor = i3687[7]
  request.r(i3687[8], i3687[9], 0, i3686, 'worldCamera')
  i3686.overrideSorting = !!i3687[10]
  i3686.pixelPerfect = !!i3687[11]
  i3686.targetDisplay = i3687[12]
  i3686.overridePixelPerfect = !!i3687[13]
  i3686.enabled = !!i3687[14]
  return i3686
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3689 = data
  i3688.m_UiScaleMode = i3689[0]
  i3688.m_ReferencePixelsPerUnit = i3689[1]
  i3688.m_ScaleFactor = i3689[2]
  i3688.m_ReferenceResolution = new pc.Vec2( i3689[3], i3689[4] )
  i3688.m_ScreenMatchMode = i3689[5]
  i3688.m_MatchWidthOrHeight = i3689[6]
  i3688.m_PhysicalUnit = i3689[7]
  i3688.m_FallbackScreenDPI = i3689[8]
  i3688.m_DefaultSpriteDPI = i3689[9]
  i3688.m_DynamicPixelsPerUnit = i3689[10]
  i3688.m_PresetInfoIsWorld = !!i3689[11]
  return i3688
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3690 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3691 = data
  i3690.m_IgnoreReversedGraphics = !!i3691[0]
  i3690.m_BlockingObjects = i3691[1]
  i3690.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3691[2] )
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3693 = data
  request.r(i3693[0], i3693[1], 0, i3692, 'animatorController')
  request.r(i3693[2], i3693[3], 0, i3692, 'avatar')
  i3692.updateMode = i3693[4]
  i3692.hasTransformHierarchy = !!i3693[5]
  i3692.applyRootMotion = !!i3693[6]
  var i3695 = i3693[7]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 2) {
  request.r(i3695[i + 0], i3695[i + 1], 2, i3694, '')
  }
  i3692.humanBones = i3694
  i3692.enabled = !!i3693[8]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3699 = data
  i3698.cullTransparentMesh = !!i3699[0]
  return i3698
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3700 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3701 = data
  i3700.m_hasFontAssetChanged = !!i3701[0]
  request.r(i3701[1], i3701[2], 0, i3700, 'm_baseMaterial')
  i3700.m_maskOffset = new pc.Vec4( i3701[3], i3701[4], i3701[5], i3701[6] )
  i3700.m_text = i3701[7]
  i3700.m_isRightToLeft = !!i3701[8]
  request.r(i3701[9], i3701[10], 0, i3700, 'm_fontAsset')
  request.r(i3701[11], i3701[12], 0, i3700, 'm_sharedMaterial')
  var i3703 = i3701[13]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 2) {
  request.r(i3703[i + 0], i3703[i + 1], 2, i3702, '')
  }
  i3700.m_fontSharedMaterials = i3702
  request.r(i3701[14], i3701[15], 0, i3700, 'm_fontMaterial')
  var i3705 = i3701[16]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 2) {
  request.r(i3705[i + 0], i3705[i + 1], 2, i3704, '')
  }
  i3700.m_fontMaterials = i3704
  i3700.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3701[17], i3701[18], i3701[19], i3701[20])
  i3700.m_fontColor = new pc.Color(i3701[21], i3701[22], i3701[23], i3701[24])
  i3700.m_enableVertexGradient = !!i3701[25]
  i3700.m_colorMode = i3701[26]
  i3700.m_fontColorGradient = request.d('TMPro.VertexGradient', i3701[27], i3700.m_fontColorGradient)
  request.r(i3701[28], i3701[29], 0, i3700, 'm_fontColorGradientPreset')
  request.r(i3701[30], i3701[31], 0, i3700, 'm_spriteAsset')
  i3700.m_tintAllSprites = !!i3701[32]
  request.r(i3701[33], i3701[34], 0, i3700, 'm_StyleSheet')
  i3700.m_TextStyleHashCode = i3701[35]
  i3700.m_overrideHtmlColors = !!i3701[36]
  i3700.m_faceColor = UnityEngine.Color32.ConstructColor(i3701[37], i3701[38], i3701[39], i3701[40])
  i3700.m_fontSize = i3701[41]
  i3700.m_fontSizeBase = i3701[42]
  i3700.m_fontWeight = i3701[43]
  i3700.m_enableAutoSizing = !!i3701[44]
  i3700.m_fontSizeMin = i3701[45]
  i3700.m_fontSizeMax = i3701[46]
  i3700.m_fontStyle = i3701[47]
  i3700.m_HorizontalAlignment = i3701[48]
  i3700.m_VerticalAlignment = i3701[49]
  i3700.m_textAlignment = i3701[50]
  i3700.m_characterSpacing = i3701[51]
  i3700.m_wordSpacing = i3701[52]
  i3700.m_lineSpacing = i3701[53]
  i3700.m_lineSpacingMax = i3701[54]
  i3700.m_paragraphSpacing = i3701[55]
  i3700.m_charWidthMaxAdj = i3701[56]
  i3700.m_TextWrappingMode = i3701[57]
  i3700.m_wordWrappingRatios = i3701[58]
  i3700.m_overflowMode = i3701[59]
  request.r(i3701[60], i3701[61], 0, i3700, 'm_linkedTextComponent')
  request.r(i3701[62], i3701[63], 0, i3700, 'parentLinkedComponent')
  i3700.m_enableKerning = !!i3701[64]
  var i3707 = i3701[65]
  var i3706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.add(i3707[i + 0]);
  }
  i3700.m_ActiveFontFeatures = i3706
  i3700.m_enableExtraPadding = !!i3701[66]
  i3700.checkPaddingRequired = !!i3701[67]
  i3700.m_isRichText = !!i3701[68]
  i3700.m_parseCtrlCharacters = !!i3701[69]
  i3700.m_isOrthographic = !!i3701[70]
  i3700.m_isCullingEnabled = !!i3701[71]
  i3700.m_horizontalMapping = i3701[72]
  i3700.m_verticalMapping = i3701[73]
  i3700.m_uvLineOffset = i3701[74]
  i3700.m_geometrySortingOrder = i3701[75]
  i3700.m_IsTextObjectScaleStatic = !!i3701[76]
  i3700.m_VertexBufferAutoSizeReduction = !!i3701[77]
  i3700.m_useMaxVisibleDescender = !!i3701[78]
  i3700.m_pageToDisplay = i3701[79]
  i3700.m_margin = new pc.Vec4( i3701[80], i3701[81], i3701[82], i3701[83] )
  i3700.m_isUsingLegacyAnimationComponent = !!i3701[84]
  i3700.m_isVolumetricText = !!i3701[85]
  request.r(i3701[86], i3701[87], 0, i3700, 'm_Material')
  i3700.m_EmojiFallbackSupport = !!i3701[88]
  i3700.m_Maskable = !!i3701[89]
  i3700.m_Color = new pc.Color(i3701[90], i3701[91], i3701[92], i3701[93])
  i3700.m_RaycastTarget = !!i3701[94]
  i3700.m_RaycastPadding = new pc.Vec4( i3701[95], i3701[96], i3701[97], i3701[98] )
  return i3700
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3708 = root || request.c( 'TMPro.VertexGradient' )
  var i3709 = data
  i3708.topLeft = new pc.Color(i3709[0], i3709[1], i3709[2], i3709[3])
  i3708.topRight = new pc.Color(i3709[4], i3709[5], i3709[6], i3709[7])
  i3708.bottomLeft = new pc.Color(i3709[8], i3709[9], i3709[10], i3709[11])
  i3708.bottomRight = new pc.Color(i3709[12], i3709[13], i3709[14], i3709[15])
  return i3708
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3712 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'm_FillRect')
  request.r(i3713[2], i3713[3], 0, i3712, 'm_HandleRect')
  i3712.m_Direction = i3713[4]
  i3712.m_MinValue = i3713[5]
  i3712.m_MaxValue = i3713[6]
  i3712.m_WholeNumbers = !!i3713[7]
  i3712.m_Value = i3713[8]
  i3712.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3713[9], i3712.m_OnValueChanged)
  i3712.m_Navigation = request.d('UnityEngine.UI.Navigation', i3713[10], i3712.m_Navigation)
  i3712.m_Transition = i3713[11]
  i3712.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3713[12], i3712.m_Colors)
  i3712.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3713[13], i3712.m_SpriteState)
  i3712.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3713[14], i3712.m_AnimationTriggers)
  i3712.m_Interactable = !!i3713[15]
  request.r(i3713[16], i3713[17], 0, i3712, 'm_TargetGraphic')
  return i3712
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3714 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3715 = data
  i3714.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3715[0], i3714.m_PersistentCalls)
  return i3714
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3716 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3717 = data
  var i3719 = i3717[0]
  var i3718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.add(request.d('UnityEngine.Events.PersistentCall', i3719[i + 0]));
  }
  i3716.m_Calls = i3718
  return i3716
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3722 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3723 = data
  request.r(i3723[0], i3723[1], 0, i3722, 'm_Target')
  i3722.m_TargetAssemblyTypeName = i3723[2]
  i3722.m_MethodName = i3723[3]
  i3722.m_Mode = i3723[4]
  i3722.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3723[5], i3722.m_Arguments)
  i3722.m_CallState = i3723[6]
  return i3722
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3724 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3725 = data
  i3724.m_Mode = i3725[0]
  i3724.m_WrapAround = !!i3725[1]
  request.r(i3725[2], i3725[3], 0, i3724, 'm_SelectOnUp')
  request.r(i3725[4], i3725[5], 0, i3724, 'm_SelectOnDown')
  request.r(i3725[6], i3725[7], 0, i3724, 'm_SelectOnLeft')
  request.r(i3725[8], i3725[9], 0, i3724, 'm_SelectOnRight')
  return i3724
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3726 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3727 = data
  i3726.m_NormalColor = new pc.Color(i3727[0], i3727[1], i3727[2], i3727[3])
  i3726.m_HighlightedColor = new pc.Color(i3727[4], i3727[5], i3727[6], i3727[7])
  i3726.m_PressedColor = new pc.Color(i3727[8], i3727[9], i3727[10], i3727[11])
  i3726.m_SelectedColor = new pc.Color(i3727[12], i3727[13], i3727[14], i3727[15])
  i3726.m_DisabledColor = new pc.Color(i3727[16], i3727[17], i3727[18], i3727[19])
  i3726.m_ColorMultiplier = i3727[20]
  i3726.m_FadeDuration = i3727[21]
  return i3726
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3728 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3729 = data
  request.r(i3729[0], i3729[1], 0, i3728, 'm_HighlightedSprite')
  request.r(i3729[2], i3729[3], 0, i3728, 'm_PressedSprite')
  request.r(i3729[4], i3729[5], 0, i3728, 'm_SelectedSprite')
  request.r(i3729[6], i3729[7], 0, i3728, 'm_DisabledSprite')
  return i3728
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3730 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3731 = data
  i3730.m_NormalTrigger = i3731[0]
  i3730.m_HighlightedTrigger = i3731[1]
  i3730.m_PressedTrigger = i3731[2]
  i3730.m_SelectedTrigger = i3731[3]
  i3730.m_DisabledTrigger = i3731[4]
  return i3730
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3732 = root || request.c( 'UnityEngine.UI.Image' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'm_Sprite')
  i3732.m_Type = i3733[2]
  i3732.m_PreserveAspect = !!i3733[3]
  i3732.m_FillCenter = !!i3733[4]
  i3732.m_FillMethod = i3733[5]
  i3732.m_FillAmount = i3733[6]
  i3732.m_FillClockwise = !!i3733[7]
  i3732.m_FillOrigin = i3733[8]
  i3732.m_UseSpriteMesh = !!i3733[9]
  i3732.m_PixelsPerUnitMultiplier = i3733[10]
  request.r(i3733[11], i3733[12], 0, i3732, 'm_Material')
  i3732.m_Maskable = !!i3733[13]
  i3732.m_Color = new pc.Color(i3733[14], i3733[15], i3733[16], i3733[17])
  i3732.m_RaycastTarget = !!i3733[18]
  i3732.m_RaycastPadding = new pc.Vec4( i3733[19], i3733[20], i3733[21], i3733[22] )
  return i3732
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3734 = root || request.c( 'UnityEngine.UI.Button' )
  var i3735 = data
  i3734.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3735[0], i3734.m_OnClick)
  i3734.m_Navigation = request.d('UnityEngine.UI.Navigation', i3735[1], i3734.m_Navigation)
  i3734.m_Transition = i3735[2]
  i3734.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3735[3], i3734.m_Colors)
  i3734.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3735[4], i3734.m_SpriteState)
  i3734.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3735[5], i3734.m_AnimationTriggers)
  i3734.m_Interactable = !!i3735[6]
  request.r(i3735[7], i3735[8], 0, i3734, 'm_TargetGraphic')
  return i3734
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3736 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3737 = data
  i3736.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3737[0], i3736.m_PersistentCalls)
  return i3736
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3738 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3739 = data
  request.r(i3739[0], i3739[1], 0, i3738, 'm_ObjectArgument')
  i3738.m_ObjectArgumentAssemblyTypeName = i3739[2]
  i3738.m_IntArgument = i3739[3]
  i3738.m_FloatArgument = i3739[4]
  i3738.m_StringArgument = i3739[5]
  i3738.m_BoolArgument = !!i3739[6]
  return i3738
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3740 = root || request.c( 'Ply_Pool' )
  var i3741 = data
  var i3743 = i3741[0]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Ply_Pool+PoolAmount', i3743[i + 0]) );
  }
  i3740.poolAmounts = i3742
  request.r(i3741[1], i3741[2], 0, i3740, 'poolHolder')
  return i3740
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3746 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3747 = data
  i3746.type = i3747[0]
  i3746.amount = i3747[1]
  request.r(i3747[2], i3747[3], 0, i3746, 'gameUnit')
  return i3746
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3748 = root || request.c( 'Ply_SoundManager' )
  var i3749 = data
  var i3751 = i3749[0]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 2) {
  request.r(i3751[i + 0], i3751[i + 1], 2, i3750, '')
  }
  i3748.audioClips = i3750
  request.r(i3749[1], i3749[2], 0, i3748, 'sound')
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3755 = data
  request.r(i3755[0], i3755[1], 0, i3754, 'clip')
  request.r(i3755[2], i3755[3], 0, i3754, 'outputAudioMixerGroup')
  i3754.playOnAwake = !!i3755[4]
  i3754.loop = !!i3755[5]
  i3754.time = i3755[6]
  i3754.volume = i3755[7]
  i3754.pitch = i3755[8]
  i3754.enabled = !!i3755[9]
  return i3754
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3756 = root || request.c( 'GameManager' )
  var i3757 = data
  i3756.isPlaying = !!i3757[0]
  i3756.isTutorial = !!i3757[1]
  i3756.isGotoStore = !!i3757[2]
  i3756.countMove = i3757[3]
  i3756.maxMove = i3757[4]
  i3756.startLayer = i3757[5]
  i3756.currentLayer = i3757[6]
  request.r(i3757[7], i3757[8], 0, i3756, 'mainBox')
  request.r(i3757[9], i3757[10], 0, i3756, 'handTutorial')
  i3756.tutorialDelay = i3757[11]
  return i3756
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3758 = root || request.c( 'UIManager' )
  var i3759 = data
  request.r(i3759[0], i3759[1], 0, i3758, 'winUI')
  request.r(i3759[2], i3759[3], 0, i3758, 'loseUI')
  request.r(i3759[4], i3759[5], 0, i3758, 'tutorial')
  request.r(i3759[6], i3759[7], 0, i3758, 'verticalUI')
  request.r(i3759[8], i3759[9], 0, i3758, 'horizontalUI')
  request.r(i3759[10], i3759[11], 0, i3758, 'downloadBtnVertical')
  request.r(i3759[12], i3759[13], 0, i3758, 'dowloadBtnHorizontal')
  request.r(i3759[14], i3759[15], 0, i3758, 'progressSlider')
  request.r(i3759[16], i3759[17], 0, i3758, 'progressText')
  i3758.maxProgressItems = i3759[18]
  i3758.startProgressItems = i3759[19]
  i3758.screenWidth = i3759[20]
  i3758.screenHeight = i3759[21]
  i3758.scaleHeightOnWidth = i3759[22]
  i3758.isVertical = !!i3759[23]
  request.r(i3759[24], i3759[25], 0, i3758, 'cam')
  i3758.introZoomOutMultiplier = i3759[26]
  i3758.cameraZoomDuration = i3759[27]
  i3758.useContinuousScaling = !!i3759[28]
  i3758.baseOrthographicSize = i3759[29]
  i3758.baseAspect = i3759[30]
  i3758.landscapeSize = i3759[31]
  i3758.defaultPortraitSize = i3759[32]
  var i3761 = i3759[33]
  var i3760 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.add(request.d('ScreenScaleStep', i3761[i + 0]));
  }
  i3758.discreteScaleSteps = i3760
  i3758.usePerspectiveCamera = !!i3759[34]
  request.r(i3759[35], i3759[36], 0, i3758, 'perspectiveFocus')
  i3758.perspectiveFocusDistance = i3759[37]
  i3758.perspectivePadding = i3759[38]
  i3758.fitRendererBounds = !!i3759[39]
  request.r(i3759[40], i3759[41], 0, i3758, 'boundsRoot')
  var i3763 = i3759[42]
  var i3762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i3763.length; i += 2) {
  request.r(i3763[i + 0], i3763[i + 1], 1, i3762, '')
  }
  i3758.boundsRenderers = i3762
  return i3758
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i3766 = root || request.c( 'ScreenScaleStep' )
  var i3767 = data
  i3766.heightOnWidthRatio = i3767[0]
  i3766.orthographicSize = i3767[1]
  return i3766
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3770 = root || request.c( 'InputManager' )
  var i3771 = data
  i3770.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3771[0] )
  i3770.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i3771[1] )
  i3770.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i3771[2] )
  i3770.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i3771[3] )
  i3770.isDragging = !!i3771[4]
  request.r(i3771[5], i3771[6], 0, i3770, 'mainCamera')
  return i3770
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i3772 = root || request.c( 'ItemSetupTool' )
  var i3773 = data
  request.r(i3773[0], i3773[1], 0, i3772, 'spritesParent')
  request.r(i3773[2], i3773[3], 0, i3772, 'holdersParent')
  i3772.shadowSuffix = i3773[4]
  i3772.holderPrefix = i3773[5]
  i3772.holdersParentName = i3773[6]
  i3772.colliderDepth = i3773[7]
  i3772.colliderSizeMultiplier = i3773[8]
  i3772.generatedShadowColor = new pc.Color(i3773[9], i3773[10], i3773[11], i3773[12])
  i3772.generatedShadowLocalOffset = new pc.Vec3( i3773[13], i3773[14], i3773[15] )
  i3772.itemLayerName = i3773[16]
  i3772.holderLayerName = i3773[17]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3775 = data
  i3774.aspect = i3775[0]
  i3774.orthographic = !!i3775[1]
  i3774.orthographicSize = i3775[2]
  i3774.backgroundColor = new pc.Color(i3775[3], i3775[4], i3775[5], i3775[6])
  i3774.nearClipPlane = i3775[7]
  i3774.farClipPlane = i3775[8]
  i3774.fieldOfView = i3775[9]
  i3774.depth = i3775[10]
  i3774.clearFlags = i3775[11]
  i3774.cullingMask = i3775[12]
  i3774.rect = i3775[13]
  request.r(i3775[14], i3775[15], 0, i3774, 'targetTexture')
  i3774.usePhysicalProperties = !!i3775[16]
  i3774.focalLength = i3775[17]
  i3774.sensorSize = new pc.Vec2( i3775[18], i3775[19] )
  i3774.lensShift = new pc.Vec2( i3775[20], i3775[21] )
  i3774.gateFit = i3775[22]
  i3774.commandBufferCount = i3775[23]
  i3774.cameraType = i3775[24]
  i3774.enabled = !!i3775[25]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3777 = data
  i3776.type = i3777[0]
  i3776.color = new pc.Color(i3777[1], i3777[2], i3777[3], i3777[4])
  i3776.cullingMask = i3777[5]
  i3776.intensity = i3777[6]
  i3776.range = i3777[7]
  i3776.spotAngle = i3777[8]
  i3776.shadows = i3777[9]
  i3776.shadowNormalBias = i3777[10]
  i3776.shadowBias = i3777[11]
  i3776.shadowStrength = i3777[12]
  i3776.shadowResolution = i3777[13]
  i3776.lightmapBakeType = i3777[14]
  i3776.renderMode = i3777[15]
  request.r(i3777[16], i3777[17], 0, i3776, 'cookie')
  i3776.cookieSize = i3777[18]
  i3776.shadowNearPlane = i3777[19]
  i3776.occlusionMaskChannel = i3777[20]
  i3776.enabled = !!i3777[21]
  return i3776
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3778 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3779 = data
  request.r(i3779[0], i3779[1], 0, i3778, 'm_FirstSelected')
  i3778.m_sendNavigationEvents = !!i3779[2]
  i3778.m_DragThreshold = i3779[3]
  return i3778
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3780 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3781 = data
  i3780.m_HorizontalAxis = i3781[0]
  i3780.m_VerticalAxis = i3781[1]
  i3780.m_SubmitButton = i3781[2]
  i3780.m_CancelButton = i3781[3]
  i3780.m_InputActionsPerSecond = i3781[4]
  i3780.m_RepeatDelay = i3781[5]
  i3780.m_ForceModuleActive = !!i3781[6]
  i3780.m_SendPointerHoverToParent = !!i3781[7]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3783 = data
  i3782.color = new pc.Color(i3783[0], i3783[1], i3783[2], i3783[3])
  request.r(i3783[4], i3783[5], 0, i3782, 'sprite')
  i3782.flipX = !!i3783[6]
  i3782.flipY = !!i3783[7]
  i3782.drawMode = i3783[8]
  i3782.size = new pc.Vec2( i3783[9], i3783[10] )
  i3782.tileMode = i3783[11]
  i3782.adaptiveModeThreshold = i3783[12]
  i3782.maskInteraction = i3783[13]
  i3782.spriteSortPoint = i3783[14]
  i3782.enabled = !!i3783[15]
  request.r(i3783[16], i3783[17], 0, i3782, 'sharedMaterial')
  var i3785 = i3783[18]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 2) {
  request.r(i3785[i + 0], i3785[i + 1], 2, i3784, '')
  }
  i3782.sharedMaterials = i3784
  i3782.receiveShadows = !!i3783[19]
  i3782.shadowCastingMode = i3783[20]
  i3782.sortingLayerID = i3783[21]
  i3782.sortingOrder = i3783[22]
  i3782.lightmapIndex = i3783[23]
  i3782.lightmapSceneIndex = i3783[24]
  i3782.lightmapScaleOffset = new pc.Vec4( i3783[25], i3783[26], i3783[27], i3783[28] )
  i3782.lightProbeUsage = i3783[29]
  i3782.reflectionProbeUsage = i3783[30]
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3787 = data
  i3786.center = new pc.Vec3( i3787[0], i3787[1], i3787[2] )
  i3786.radius = i3787[3]
  i3786.enabled = !!i3787[4]
  i3786.isTrigger = !!i3787[5]
  request.r(i3787[6], i3787[7], 0, i3786, 'material')
  return i3786
}

Deserializers["Box"] = function (request, data, root) {
  var i3788 = root || request.c( 'Box' )
  var i3789 = data
  var i3791 = i3789[0]
  var i3790 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3791.length; i += 2) {
  request.r(i3791[i + 0], i3791[i + 1], 1, i3790, '')
  }
  i3788.dynamicItems = i3790
  var i3793 = i3789[1]
  var i3792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3793.length; i += 2) {
  request.r(i3793[i + 0], i3793[i + 1], 1, i3792, '')
  }
  i3788.spawnTargets = i3792
  i3788.initialSpawnCount = i3789[2]
  i3788.revealDuration = i3789[3]
  request.r(i3789[4], i3789[5], 0, i3788, 'graphicController')
  return i3788
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i3798 = root || request.c( 'BoxGraphicController' )
  var i3799 = data
  request.r(i3799[0], i3799[1], 0, i3798, 'skeletonAnimation')
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3801 = data
  request.r(i3801[0], i3801[1], 0, i3800, 'sharedMesh')
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3803 = data
  request.r(i3803[0], i3803[1], 0, i3802, 'additionalVertexStreams')
  i3802.enabled = !!i3803[2]
  request.r(i3803[3], i3803[4], 0, i3802, 'sharedMaterial')
  var i3805 = i3803[5]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 2) {
  request.r(i3805[i + 0], i3805[i + 1], 2, i3804, '')
  }
  i3802.sharedMaterials = i3804
  i3802.receiveShadows = !!i3803[6]
  i3802.shadowCastingMode = i3803[7]
  i3802.sortingLayerID = i3803[8]
  i3802.sortingOrder = i3803[9]
  i3802.lightmapIndex = i3803[10]
  i3802.lightmapSceneIndex = i3803[11]
  i3802.lightmapScaleOffset = new pc.Vec4( i3803[12], i3803[13], i3803[14], i3803[15] )
  i3802.lightProbeUsage = i3803[16]
  i3802.reflectionProbeUsage = i3803[17]
  return i3802
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i3806 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i3807 = data
  i3806.loop = !!i3807[0]
  i3806.timeScale = i3807[1]
  request.r(i3807[2], i3807[3], 0, i3806, 'skeletonDataAsset')
  i3806.initialSkinName = i3807[4]
  i3806.fixPrefabOverrideViaMeshFilter = i3807[5]
  i3806.initialFlipX = !!i3807[6]
  i3806.initialFlipY = !!i3807[7]
  i3806.updateWhenInvisible = i3807[8]
  i3806.zSpacing = i3807[9]
  i3806.useClipping = !!i3807[10]
  i3806.immutableTriangles = !!i3807[11]
  i3806.pmaVertexColors = !!i3807[12]
  i3806.clearStateOnDisable = !!i3807[13]
  i3806.tintBlack = !!i3807[14]
  i3806.singleSubmesh = !!i3807[15]
  i3806.fixDrawOrder = !!i3807[16]
  i3806.addNormals = !!i3807[17]
  i3806.calculateTangents = !!i3807[18]
  i3806.maskInteraction = i3807[19]
  i3806.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i3807[20], i3806.maskMaterials)
  i3806.disableRenderingOnOverride = !!i3807[21]
  i3806._animationName = i3807[22]
  var i3809 = i3807[23]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( i3809[i + 0] );
  }
  i3806.separatorSlotNames = i3808
  return i3806
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i3810 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i3811 = data
  var i3813 = i3811[0]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 2) {
  request.r(i3813[i + 0], i3813[i + 1], 2, i3812, '')
  }
  i3810.materialsMaskDisabled = i3812
  var i3815 = i3811[1]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 2) {
  request.r(i3815[i + 0], i3815[i + 1], 2, i3814, '')
  }
  i3810.materialsInsideMask = i3814
  var i3817 = i3811[2]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 2) {
  request.r(i3817[i + 0], i3817[i + 1], 2, i3816, '')
  }
  i3810.materialsOutsideMask = i3816
  return i3810
}

Deserializers["Item"] = function (request, data, root) {
  var i3820 = root || request.c( 'Item' )
  var i3821 = data
  i3820.placeSoundType = i3821[0]
  i3820.id = i3821[1]
  i3820.currentState = i3821[2]
  i3820.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i3821[3] )
  request.r(i3821[4], i3821[5], 0, i3820, 'correctHolderTransform')
  request.r(i3821[6], i3821[7], 0, i3820, 'shadowOnHolder')
  i3820.canShowShadowHint = !!i3821[8]
  i3820.waitingPosition = new pc.Vec3( i3821[9], i3821[10], i3821[11] )
  request.r(i3821[12], i3821[13], 0, i3820, 'spriteRenderer')
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3823 = data
  i3822.center = new pc.Vec3( i3823[0], i3823[1], i3823[2] )
  i3822.size = new pc.Vec3( i3823[3], i3823[4], i3823[5] )
  i3822.enabled = !!i3823[6]
  i3822.isTrigger = !!i3823[7]
  request.r(i3823[8], i3823[9], 0, i3822, 'material')
  return i3822
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i3824 = root || request.c( 'ItemHolder' )
  var i3825 = data
  i3824.id = i3825[0]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3827 = data
  i3826.ambientIntensity = i3827[0]
  i3826.reflectionIntensity = i3827[1]
  i3826.ambientMode = i3827[2]
  i3826.ambientLight = new pc.Color(i3827[3], i3827[4], i3827[5], i3827[6])
  i3826.ambientSkyColor = new pc.Color(i3827[7], i3827[8], i3827[9], i3827[10])
  i3826.ambientGroundColor = new pc.Color(i3827[11], i3827[12], i3827[13], i3827[14])
  i3826.ambientEquatorColor = new pc.Color(i3827[15], i3827[16], i3827[17], i3827[18])
  i3826.fogColor = new pc.Color(i3827[19], i3827[20], i3827[21], i3827[22])
  i3826.fogEndDistance = i3827[23]
  i3826.fogStartDistance = i3827[24]
  i3826.fogDensity = i3827[25]
  i3826.fog = !!i3827[26]
  request.r(i3827[27], i3827[28], 0, i3826, 'skybox')
  i3826.fogMode = i3827[29]
  var i3829 = i3827[30]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3829[i + 0]) );
  }
  i3826.lightmaps = i3828
  i3826.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3827[31], i3826.lightProbes)
  i3826.lightmapsMode = i3827[32]
  i3826.mixedBakeMode = i3827[33]
  i3826.environmentLightingMode = i3827[34]
  i3826.ambientProbe = new pc.SphericalHarmonicsL2(i3827[35])
  i3826.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3827[36])
  i3826.useReferenceAmbientProbe = !!i3827[37]
  request.r(i3827[38], i3827[39], 0, i3826, 'customReflection')
  request.r(i3827[40], i3827[41], 0, i3826, 'defaultReflection')
  i3826.defaultReflectionMode = i3827[42]
  i3826.defaultReflectionResolution = i3827[43]
  i3826.sunLightObjectId = i3827[44]
  i3826.pixelLightCount = i3827[45]
  i3826.defaultReflectionHDR = !!i3827[46]
  i3826.hasLightDataAsset = !!i3827[47]
  i3826.hasManualGenerate = !!i3827[48]
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3833 = data
  request.r(i3833[0], i3833[1], 0, i3832, 'lightmapColor')
  request.r(i3833[2], i3833[3], 0, i3832, 'lightmapDirection')
  request.r(i3833[4], i3833[5], 0, i3832, 'shadowMask')
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3834 = root || new UnityEngine.LightProbes()
  var i3835 = data
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3843 = data
  var i3845 = i3843[0]
  var i3844 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3845[i + 0]));
  }
  i3842.ShaderCompilationErrors = i3844
  i3842.name = i3843[1]
  i3842.guid = i3843[2]
  var i3847 = i3843[3]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( i3847[i + 0] );
  }
  i3842.shaderDefinedKeywords = i3846
  var i3849 = i3843[4]
  var i3848 = []
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3849[i + 0]) );
  }
  i3842.passes = i3848
  var i3851 = i3843[5]
  var i3850 = []
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3851[i + 0]) );
  }
  i3842.usePasses = i3850
  var i3853 = i3843[6]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3853[i + 0]) );
  }
  i3842.defaultParameterValues = i3852
  request.r(i3843[7], i3843[8], 0, i3842, 'unityFallbackShader')
  i3842.readDepth = !!i3843[9]
  i3842.hasDepthOnlyPass = !!i3843[10]
  i3842.isCreatedByShaderGraph = !!i3843[11]
  i3842.disableBatching = !!i3843[12]
  i3842.compiled = !!i3843[13]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3857 = data
  i3856.shaderName = i3857[0]
  i3856.errorMessage = i3857[1]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3860 = root || new pc.UnityShaderPass()
  var i3861 = data
  i3860.id = i3861[0]
  i3860.subShaderIndex = i3861[1]
  i3860.name = i3861[2]
  i3860.passType = i3861[3]
  i3860.grabPassTextureName = i3861[4]
  i3860.usePass = !!i3861[5]
  i3860.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[6], i3860.zTest)
  i3860.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[7], i3860.zWrite)
  i3860.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[8], i3860.culling)
  i3860.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3861[9], i3860.blending)
  i3860.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3861[10], i3860.alphaBlending)
  i3860.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[11], i3860.colorWriteMask)
  i3860.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[12], i3860.offsetUnits)
  i3860.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[13], i3860.offsetFactor)
  i3860.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[14], i3860.stencilRef)
  i3860.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[15], i3860.stencilReadMask)
  i3860.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[16], i3860.stencilWriteMask)
  i3860.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3861[17], i3860.stencilOp)
  i3860.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3861[18], i3860.stencilOpFront)
  i3860.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3861[19], i3860.stencilOpBack)
  var i3863 = i3861[20]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3863[i + 0]) );
  }
  i3860.tags = i3862
  var i3865 = i3861[21]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.push( i3865[i + 0] );
  }
  i3860.passDefinedKeywords = i3864
  var i3867 = i3861[22]
  var i3866 = []
  for(var i = 0; i < i3867.length; i += 1) {
    i3866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3867[i + 0]) );
  }
  i3860.passDefinedKeywordGroups = i3866
  var i3869 = i3861[23]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3869[i + 0]) );
  }
  i3860.variants = i3868
  var i3871 = i3861[24]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3871[i + 0]) );
  }
  i3860.excludedVariants = i3870
  i3860.hasDepthReader = !!i3861[25]
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3873 = data
  i3872.val = i3873[0]
  i3872.name = i3873[1]
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3875 = data
  i3874.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3875[0], i3874.src)
  i3874.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3875[1], i3874.dst)
  i3874.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3875[2], i3874.op)
  return i3874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3877 = data
  i3876.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3877[0], i3876.pass)
  i3876.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3877[1], i3876.fail)
  i3876.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3877[2], i3876.zFail)
  i3876.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3877[3], i3876.comp)
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3881 = data
  i3880.name = i3881[0]
  i3880.value = i3881[1]
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3885 = data
  var i3887 = i3885[0]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.push( i3887[i + 0] );
  }
  i3884.keywords = i3886
  i3884.hasDiscard = !!i3885[1]
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3891 = data
  i3890.passId = i3891[0]
  i3890.subShaderIndex = i3891[1]
  var i3893 = i3891[2]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( i3893[i + 0] );
  }
  i3890.keywords = i3892
  i3890.vertexProgram = i3891[3]
  i3890.fragmentProgram = i3891[4]
  i3890.exportedForWebGl2 = !!i3891[5]
  i3890.readDepth = !!i3891[6]
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3897 = data
  request.r(i3897[0], i3897[1], 0, i3896, 'shader')
  i3896.pass = i3897[2]
  return i3896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3901 = data
  i3900.name = i3901[0]
  i3900.type = i3901[1]
  i3900.value = new pc.Vec4( i3901[2], i3901[3], i3901[4], i3901[5] )
  i3900.textureValue = i3901[6]
  i3900.shaderPropertyFlag = i3901[7]
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3903 = data
  i3902.name = i3903[0]
  request.r(i3903[1], i3903[2], 0, i3902, 'texture')
  i3902.aabb = i3903[3]
  i3902.vertices = i3903[4]
  i3902.triangles = i3903[5]
  i3902.textureRect = UnityEngine.Rect.MinMaxRect(i3903[6], i3903[7], i3903[8], i3903[9])
  i3902.packedRect = UnityEngine.Rect.MinMaxRect(i3903[10], i3903[11], i3903[12], i3903[13])
  i3902.border = new pc.Vec4( i3903[14], i3903[15], i3903[16], i3903[17] )
  i3902.transparency = i3903[18]
  i3902.bounds = i3903[19]
  i3902.pixelsPerUnit = i3903[20]
  i3902.textureWidth = i3903[21]
  i3902.textureHeight = i3903[22]
  i3902.nativeSize = new pc.Vec2( i3903[23], i3903[24] )
  i3902.pivot = new pc.Vec2( i3903[25], i3903[26] )
  i3902.textureRectOffset = new pc.Vec2( i3903[27], i3903[28] )
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3905 = data
  i3904.name = i3905[0]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3907 = data
  i3906.name = i3907[0]
  i3906.wrapMode = i3907[1]
  i3906.isLooping = !!i3907[2]
  i3906.length = i3907[3]
  var i3909 = i3907[4]
  var i3908 = []
  for(var i = 0; i < i3909.length; i += 1) {
    i3908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3909[i + 0]) );
  }
  i3906.curves = i3908
  var i3911 = i3907[5]
  var i3910 = []
  for(var i = 0; i < i3911.length; i += 1) {
    i3910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3911[i + 0]) );
  }
  i3906.events = i3910
  i3906.halfPrecision = !!i3907[6]
  i3906._frameRate = i3907[7]
  i3906.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3907[8], i3906.localBounds)
  i3906.hasMuscleCurves = !!i3907[9]
  var i3913 = i3907[10]
  var i3912 = []
  for(var i = 0; i < i3913.length; i += 1) {
    i3912.push( i3913[i + 0] );
  }
  i3906.clipMuscleConstant = i3912
  i3906.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3907[11], i3906.clipBindingConstant)
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3917 = data
  i3916.path = i3917[0]
  i3916.hash = i3917[1]
  i3916.componentType = i3917[2]
  i3916.property = i3917[3]
  i3916.keys = i3917[4]
  var i3919 = i3917[5]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3919[i + 0]) );
  }
  i3916.objectReferenceKeys = i3918
  return i3916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3923 = data
  i3922.time = i3923[0]
  request.r(i3923[1], i3923[2], 0, i3922, 'value')
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3927 = data
  i3926.functionName = i3927[0]
  i3926.floatParameter = i3927[1]
  i3926.intParameter = i3927[2]
  i3926.stringParameter = i3927[3]
  request.r(i3927[4], i3927[5], 0, i3926, 'objectReferenceParameter')
  i3926.time = i3927[6]
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3929 = data
  i3928.center = new pc.Vec3( i3929[0], i3929[1], i3929[2] )
  i3928.extends = new pc.Vec3( i3929[3], i3929[4], i3929[5] )
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3933 = data
  var i3935 = i3933[0]
  var i3934 = []
  for(var i = 0; i < i3935.length; i += 1) {
    i3934.push( i3935[i + 0] );
  }
  i3932.genericBindings = i3934
  var i3937 = i3933[1]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( i3937[i + 0] );
  }
  i3932.pptrCurveMapping = i3936
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3939 = data
  i3938.name = i3939[0]
  var i3941 = i3939[1]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3941[i + 0]) );
  }
  i3938.layers = i3940
  var i3943 = i3939[2]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3943[i + 0]) );
  }
  i3938.parameters = i3942
  i3938.animationClips = i3939[3]
  i3938.avatarUnsupported = i3939[4]
  return i3938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3947 = data
  i3946.name = i3947[0]
  i3946.defaultWeight = i3947[1]
  i3946.blendingMode = i3947[2]
  i3946.avatarMask = i3947[3]
  i3946.syncedLayerIndex = i3947[4]
  i3946.syncedLayerAffectsTiming = !!i3947[5]
  i3946.syncedLayers = i3947[6]
  i3946.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3947[7], i3946.stateMachine)
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3949 = data
  i3948.id = i3949[0]
  i3948.name = i3949[1]
  i3948.path = i3949[2]
  var i3951 = i3949[3]
  var i3950 = []
  for(var i = 0; i < i3951.length; i += 1) {
    i3950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3951[i + 0]) );
  }
  i3948.states = i3950
  var i3953 = i3949[4]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3953[i + 0]) );
  }
  i3948.machines = i3952
  var i3955 = i3949[5]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3955[i + 0]) );
  }
  i3948.entryStateTransitions = i3954
  var i3957 = i3949[6]
  var i3956 = []
  for(var i = 0; i < i3957.length; i += 1) {
    i3956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3957[i + 0]) );
  }
  i3948.exitStateTransitions = i3956
  var i3959 = i3949[7]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3959[i + 0]) );
  }
  i3948.anyStateTransitions = i3958
  i3948.defaultStateId = i3949[8]
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3963 = data
  i3962.id = i3963[0]
  i3962.name = i3963[1]
  i3962.cycleOffset = i3963[2]
  i3962.cycleOffsetParameter = i3963[3]
  i3962.cycleOffsetParameterActive = !!i3963[4]
  i3962.mirror = !!i3963[5]
  i3962.mirrorParameter = i3963[6]
  i3962.mirrorParameterActive = !!i3963[7]
  i3962.motionId = i3963[8]
  i3962.nameHash = i3963[9]
  i3962.fullPathHash = i3963[10]
  i3962.speed = i3963[11]
  i3962.speedParameter = i3963[12]
  i3962.speedParameterActive = !!i3963[13]
  i3962.tag = i3963[14]
  i3962.tagHash = i3963[15]
  i3962.writeDefaultValues = !!i3963[16]
  var i3965 = i3963[17]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 2) {
  request.r(i3965[i + 0], i3965[i + 1], 2, i3964, '')
  }
  i3962.behaviours = i3964
  var i3967 = i3963[18]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3967[i + 0]) );
  }
  i3962.transitions = i3966
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3973 = data
  i3972.fullPath = i3973[0]
  i3972.canTransitionToSelf = !!i3973[1]
  i3972.duration = i3973[2]
  i3972.exitTime = i3973[3]
  i3972.hasExitTime = !!i3973[4]
  i3972.hasFixedDuration = !!i3973[5]
  i3972.interruptionSource = i3973[6]
  i3972.offset = i3973[7]
  i3972.orderedInterruption = !!i3973[8]
  i3972.destinationStateId = i3973[9]
  i3972.isExit = !!i3973[10]
  i3972.mute = !!i3973[11]
  i3972.solo = !!i3973[12]
  var i3975 = i3973[13]
  var i3974 = []
  for(var i = 0; i < i3975.length; i += 1) {
    i3974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3975[i + 0]) );
  }
  i3972.conditions = i3974
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3981 = data
  i3980.destinationStateId = i3981[0]
  i3980.isExit = !!i3981[1]
  i3980.mute = !!i3981[2]
  i3980.solo = !!i3981[3]
  var i3983 = i3981[4]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3983[i + 0]) );
  }
  i3980.conditions = i3982
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3987 = data
  i3986.defaultBool = !!i3987[0]
  i3986.defaultFloat = i3987[1]
  i3986.defaultInt = i3987[2]
  i3986.name = i3987[3]
  i3986.nameHash = i3987[4]
  i3986.type = i3987[5]
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3989 = data
  i3988.name = i3989[0]
  i3988.bytes64 = i3989[1]
  i3988.data = i3989[2]
  return i3988
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3990 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3991 = data
  i3990.normalStyle = i3991[0]
  i3990.normalSpacingOffset = i3991[1]
  i3990.boldStyle = i3991[2]
  i3990.boldSpacing = i3991[3]
  i3990.italicStyle = i3991[4]
  i3990.tabSize = i3991[5]
  request.r(i3991[6], i3991[7], 0, i3990, 'atlas')
  i3990.m_SourceFontFileGUID = i3991[8]
  i3990.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3991[9], i3990.m_CreationSettings)
  request.r(i3991[10], i3991[11], 0, i3990, 'm_SourceFontFile')
  i3990.m_SourceFontFilePath = i3991[12]
  i3990.m_AtlasPopulationMode = i3991[13]
  i3990.InternalDynamicOS = !!i3991[14]
  var i3993 = i3991[15]
  var i3992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.add(request.d('UnityEngine.TextCore.Glyph', i3993[i + 0]));
  }
  i3990.m_GlyphTable = i3992
  var i3995 = i3991[16]
  var i3994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.add(request.d('TMPro.TMP_Character', i3995[i + 0]));
  }
  i3990.m_CharacterTable = i3994
  var i3997 = i3991[17]
  var i3996 = []
  for(var i = 0; i < i3997.length; i += 2) {
  request.r(i3997[i + 0], i3997[i + 1], 2, i3996, '')
  }
  i3990.m_AtlasTextures = i3996
  i3990.m_AtlasTextureIndex = i3991[18]
  i3990.m_IsMultiAtlasTexturesEnabled = !!i3991[19]
  i3990.m_GetFontFeatures = !!i3991[20]
  i3990.m_ClearDynamicDataOnBuild = !!i3991[21]
  i3990.m_AtlasWidth = i3991[22]
  i3990.m_AtlasHeight = i3991[23]
  i3990.m_AtlasPadding = i3991[24]
  i3990.m_AtlasRenderMode = i3991[25]
  var i3999 = i3991[26]
  var i3998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3999.length; i += 1) {
    i3998.add(request.d('UnityEngine.TextCore.GlyphRect', i3999[i + 0]));
  }
  i3990.m_UsedGlyphRects = i3998
  var i4001 = i3991[27]
  var i4000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4001.length; i += 1) {
    i4000.add(request.d('UnityEngine.TextCore.GlyphRect', i4001[i + 0]));
  }
  i3990.m_FreeGlyphRects = i4000
  i3990.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3991[28], i3990.m_FontFeatureTable)
  i3990.m_ShouldReimportFontFeatures = !!i3991[29]
  var i4003 = i3991[30]
  var i4002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4003.length; i += 2) {
  request.r(i4003[i + 0], i4003[i + 1], 1, i4002, '')
  }
  i3990.m_FallbackFontAssetTable = i4002
  var i4005 = i3991[31]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('TMPro.TMP_FontWeightPair', i4005[i + 0]) );
  }
  i3990.m_FontWeightTable = i4004
  var i4007 = i3991[32]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('TMPro.TMP_FontWeightPair', i4007[i + 0]) );
  }
  i3990.fontWeights = i4006
  i3990.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3991[33], i3990.m_fontInfo)
  var i4009 = i3991[34]
  var i4008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.add(request.d('TMPro.TMP_Glyph', i4009[i + 0]));
  }
  i3990.m_glyphInfoList = i4008
  i3990.m_KerningTable = request.d('TMPro.KerningTable', i3991[35], i3990.m_KerningTable)
  var i4011 = i3991[36]
  var i4010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4011.length; i += 2) {
  request.r(i4011[i + 0], i4011[i + 1], 1, i4010, '')
  }
  i3990.fallbackFontAssets = i4010
  i3990.m_Version = i3991[37]
  i3990.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3991[38], i3990.m_FaceInfo)
  request.r(i3991[39], i3991[40], 0, i3990, 'm_Material')
  return i3990
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4012 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4013 = data
  i4012.sourceFontFileName = i4013[0]
  i4012.sourceFontFileGUID = i4013[1]
  i4012.faceIndex = i4013[2]
  i4012.pointSizeSamplingMode = i4013[3]
  i4012.pointSize = i4013[4]
  i4012.padding = i4013[5]
  i4012.paddingMode = i4013[6]
  i4012.packingMode = i4013[7]
  i4012.atlasWidth = i4013[8]
  i4012.atlasHeight = i4013[9]
  i4012.characterSetSelectionMode = i4013[10]
  i4012.characterSequence = i4013[11]
  i4012.referencedFontAssetGUID = i4013[12]
  i4012.referencedTextAssetGUID = i4013[13]
  i4012.fontStyle = i4013[14]
  i4012.fontStyleModifier = i4013[15]
  i4012.renderMode = i4013[16]
  i4012.includeFontFeatures = !!i4013[17]
  return i4012
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4016 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4017 = data
  i4016.m_Index = i4017[0]
  i4016.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4017[1], i4016.m_Metrics)
  i4016.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4017[2], i4016.m_GlyphRect)
  i4016.m_Scale = i4017[3]
  i4016.m_AtlasIndex = i4017[4]
  i4016.m_ClassDefinitionType = i4017[5]
  return i4016
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4018 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4019 = data
  i4018.m_Width = i4019[0]
  i4018.m_Height = i4019[1]
  i4018.m_HorizontalBearingX = i4019[2]
  i4018.m_HorizontalBearingY = i4019[3]
  i4018.m_HorizontalAdvance = i4019[4]
  return i4018
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4020 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4021 = data
  i4020.m_X = i4021[0]
  i4020.m_Y = i4021[1]
  i4020.m_Width = i4021[2]
  i4020.m_Height = i4021[3]
  return i4020
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4024 = root || request.c( 'TMPro.TMP_Character' )
  var i4025 = data
  i4024.m_ElementType = i4025[0]
  i4024.m_Unicode = i4025[1]
  i4024.m_GlyphIndex = i4025[2]
  i4024.m_Scale = i4025[3]
  return i4024
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4030 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4031 = data
  var i4033 = i4031[0]
  var i4032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4033.length; i += 1) {
    i4032.add(request.d('TMPro.MultipleSubstitutionRecord', i4033[i + 0]));
  }
  i4030.m_MultipleSubstitutionRecords = i4032
  var i4035 = i4031[1]
  var i4034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.add(request.d('TMPro.LigatureSubstitutionRecord', i4035[i + 0]));
  }
  i4030.m_LigatureSubstitutionRecords = i4034
  var i4037 = i4031[2]
  var i4036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4037[i + 0]));
  }
  i4030.m_GlyphPairAdjustmentRecords = i4036
  var i4039 = i4031[3]
  var i4038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4039.length; i += 1) {
    i4038.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4039[i + 0]));
  }
  i4030.m_MarkToBaseAdjustmentRecords = i4038
  var i4041 = i4031[4]
  var i4040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4041[i + 0]));
  }
  i4030.m_MarkToMarkAdjustmentRecords = i4040
  return i4030
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4044 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4045 = data
  i4044.m_TargetGlyphID = i4045[0]
  i4044.m_SubstituteGlyphIDs = i4045[1]
  return i4044
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4048 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4049 = data
  i4048.m_ComponentGlyphIDs = i4049[0]
  i4048.m_LigatureGlyphID = i4049[1]
  return i4048
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4052 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4053 = data
  i4052.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4053[0], i4052.m_FirstAdjustmentRecord)
  i4052.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4053[1], i4052.m_SecondAdjustmentRecord)
  i4052.m_FeatureLookupFlags = i4053[2]
  return i4052
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4056 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4057 = data
  i4056.m_BaseGlyphID = i4057[0]
  i4056.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4057[1], i4056.m_BaseGlyphAnchorPoint)
  i4056.m_MarkGlyphID = i4057[2]
  i4056.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4057[3], i4056.m_MarkPositionAdjustment)
  return i4056
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4060 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4061 = data
  i4060.m_BaseMarkGlyphID = i4061[0]
  i4060.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4061[1], i4060.m_BaseMarkGlyphAnchorPoint)
  i4060.m_CombiningMarkGlyphID = i4061[2]
  i4060.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4061[3], i4060.m_CombiningMarkPositionAdjustment)
  return i4060
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4066 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4067 = data
  request.r(i4067[0], i4067[1], 0, i4066, 'regularTypeface')
  request.r(i4067[2], i4067[3], 0, i4066, 'italicTypeface')
  return i4066
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4068 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4069 = data
  i4068.Name = i4069[0]
  i4068.PointSize = i4069[1]
  i4068.Scale = i4069[2]
  i4068.CharacterCount = i4069[3]
  i4068.LineHeight = i4069[4]
  i4068.Baseline = i4069[5]
  i4068.Ascender = i4069[6]
  i4068.CapHeight = i4069[7]
  i4068.Descender = i4069[8]
  i4068.CenterLine = i4069[9]
  i4068.SuperscriptOffset = i4069[10]
  i4068.SubscriptOffset = i4069[11]
  i4068.SubSize = i4069[12]
  i4068.Underline = i4069[13]
  i4068.UnderlineThickness = i4069[14]
  i4068.strikethrough = i4069[15]
  i4068.strikethroughThickness = i4069[16]
  i4068.TabWidth = i4069[17]
  i4068.Padding = i4069[18]
  i4068.AtlasWidth = i4069[19]
  i4068.AtlasHeight = i4069[20]
  return i4068
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4072 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4073 = data
  i4072.id = i4073[0]
  i4072.x = i4073[1]
  i4072.y = i4073[2]
  i4072.width = i4073[3]
  i4072.height = i4073[4]
  i4072.xOffset = i4073[5]
  i4072.yOffset = i4073[6]
  i4072.xAdvance = i4073[7]
  i4072.scale = i4073[8]
  return i4072
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4074 = root || request.c( 'TMPro.KerningTable' )
  var i4075 = data
  var i4077 = i4075[0]
  var i4076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4077.length; i += 1) {
    i4076.add(request.d('TMPro.KerningPair', i4077[i + 0]));
  }
  i4074.kerningPairs = i4076
  return i4074
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4080 = root || request.c( 'TMPro.KerningPair' )
  var i4081 = data
  i4080.xOffset = i4081[0]
  i4080.m_FirstGlyph = i4081[1]
  i4080.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4081[2], i4080.m_FirstGlyphAdjustments)
  i4080.m_SecondGlyph = i4081[3]
  i4080.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4081[4], i4080.m_SecondGlyphAdjustments)
  i4080.m_IgnoreSpacingAdjustments = !!i4081[5]
  return i4080
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4082 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4083 = data
  i4082.m_FaceIndex = i4083[0]
  i4082.m_FamilyName = i4083[1]
  i4082.m_StyleName = i4083[2]
  i4082.m_PointSize = i4083[3]
  i4082.m_Scale = i4083[4]
  i4082.m_UnitsPerEM = i4083[5]
  i4082.m_LineHeight = i4083[6]
  i4082.m_AscentLine = i4083[7]
  i4082.m_CapLine = i4083[8]
  i4082.m_MeanLine = i4083[9]
  i4082.m_Baseline = i4083[10]
  i4082.m_DescentLine = i4083[11]
  i4082.m_SuperscriptOffset = i4083[12]
  i4082.m_SuperscriptSize = i4083[13]
  i4082.m_SubscriptOffset = i4083[14]
  i4082.m_SubscriptSize = i4083[15]
  i4082.m_UnderlineOffset = i4083[16]
  i4082.m_UnderlineThickness = i4083[17]
  i4082.m_StrikethroughOffset = i4083[18]
  i4082.m_StrikethroughThickness = i4083[19]
  i4082.m_TabWidth = i4083[20]
  return i4082
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4084 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4085 = data
  var i4087 = i4085[0]
  var i4086 = []
  for(var i = 0; i < i4087.length; i += 2) {
  request.r(i4087[i + 0], i4087[i + 1], 2, i4086, '')
  }
  i4084.atlasAssets = i4086
  i4084.scale = i4085[1]
  request.r(i4085[2], i4085[3], 0, i4084, 'skeletonJSON')
  i4084.isUpgradingBlendModeMaterials = !!i4085[4]
  i4084.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4085[5], i4084.blendModeMaterials)
  var i4089 = i4085[6]
  var i4088 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4089.length; i += 2) {
  request.r(i4089[i + 0], i4089[i + 1], 1, i4088, '')
  }
  i4084.skeletonDataModifiers = i4088
  var i4091 = i4085[7]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 1) {
    i4090.push( i4091[i + 0] );
  }
  i4084.fromAnimation = i4090
  var i4093 = i4085[8]
  var i4092 = []
  for(var i = 0; i < i4093.length; i += 1) {
    i4092.push( i4093[i + 0] );
  }
  i4084.toAnimation = i4092
  i4084.duration = i4085[9]
  i4084.defaultMix = i4085[10]
  request.r(i4085[11], i4085[12], 0, i4084, 'controller')
  return i4084
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4096 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4097 = data
  i4096.applyAdditiveMaterial = !!i4097[0]
  var i4099 = i4097[1]
  var i4098 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4099.length; i += 1) {
    i4098.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4099[i + 0]));
  }
  i4096.additiveMaterials = i4098
  var i4101 = i4097[2]
  var i4100 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4101[i + 0]));
  }
  i4096.multiplyMaterials = i4100
  var i4103 = i4097[3]
  var i4102 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4103.length; i += 1) {
    i4102.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4103[i + 0]));
  }
  i4096.screenMaterials = i4102
  i4096.requiresBlendModeMaterials = !!i4097[4]
  return i4096
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4106 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4107 = data
  i4106.pageName = i4107[0]
  request.r(i4107[1], i4107[2], 0, i4106, 'material')
  return i4106
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4110 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4111 = data
  request.r(i4111[0], i4111[1], 0, i4110, 'atlasFile')
  var i4113 = i4111[2]
  var i4112 = []
  for(var i = 0; i < i4113.length; i += 2) {
  request.r(i4113[i + 0], i4113[i + 1], 2, i4112, '')
  }
  i4110.materials = i4112
  return i4110
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4114 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4115 = data
  i4114.useSafeMode = !!i4115[0]
  i4114.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4115[1], i4114.safeModeOptions)
  i4114.timeScale = i4115[2]
  i4114.unscaledTimeScale = i4115[3]
  i4114.useSmoothDeltaTime = !!i4115[4]
  i4114.maxSmoothUnscaledTime = i4115[5]
  i4114.rewindCallbackMode = i4115[6]
  i4114.showUnityEditorReport = !!i4115[7]
  i4114.logBehaviour = i4115[8]
  i4114.drawGizmos = !!i4115[9]
  i4114.defaultRecyclable = !!i4115[10]
  i4114.defaultAutoPlay = i4115[11]
  i4114.defaultUpdateType = i4115[12]
  i4114.defaultTimeScaleIndependent = !!i4115[13]
  i4114.defaultEaseType = i4115[14]
  i4114.defaultEaseOvershootOrAmplitude = i4115[15]
  i4114.defaultEasePeriod = i4115[16]
  i4114.defaultAutoKill = !!i4115[17]
  i4114.defaultLoopType = i4115[18]
  i4114.debugMode = !!i4115[19]
  i4114.debugStoreTargetId = !!i4115[20]
  i4114.showPreviewPanel = !!i4115[21]
  i4114.storeSettingsLocation = i4115[22]
  i4114.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4115[23], i4114.modules)
  i4114.createASMDEF = !!i4115[24]
  i4114.showPlayingTweens = !!i4115[25]
  i4114.showPausedTweens = !!i4115[26]
  return i4114
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4116 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4117 = data
  i4116.logBehaviour = i4117[0]
  i4116.nestedTweenFailureBehaviour = i4117[1]
  return i4116
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4118 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4119 = data
  i4118.showPanel = !!i4119[0]
  i4118.audioEnabled = !!i4119[1]
  i4118.physicsEnabled = !!i4119[2]
  i4118.physics2DEnabled = !!i4119[3]
  i4118.spriteEnabled = !!i4119[4]
  i4118.uiEnabled = !!i4119[5]
  i4118.uiToolkitEnabled = !!i4119[6]
  i4118.textMeshProEnabled = !!i4119[7]
  i4118.tk2DEnabled = !!i4119[8]
  i4118.deAudioEnabled = !!i4119[9]
  i4118.deUnityExtendedEnabled = !!i4119[10]
  i4118.epoOutlineEnabled = !!i4119[11]
  return i4118
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4120 = root || request.c( 'TMPro.TMP_Settings' )
  var i4121 = data
  i4120.assetVersion = i4121[0]
  i4120.m_TextWrappingMode = i4121[1]
  i4120.m_enableKerning = !!i4121[2]
  var i4123 = i4121[3]
  var i4122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.add(i4123[i + 0]);
  }
  i4120.m_ActiveFontFeatures = i4122
  i4120.m_enableExtraPadding = !!i4121[4]
  i4120.m_enableTintAllSprites = !!i4121[5]
  i4120.m_enableParseEscapeCharacters = !!i4121[6]
  i4120.m_EnableRaycastTarget = !!i4121[7]
  i4120.m_GetFontFeaturesAtRuntime = !!i4121[8]
  i4120.m_missingGlyphCharacter = i4121[9]
  i4120.m_ClearDynamicDataOnBuild = !!i4121[10]
  i4120.m_warningsDisabled = !!i4121[11]
  request.r(i4121[12], i4121[13], 0, i4120, 'm_defaultFontAsset')
  i4120.m_defaultFontAssetPath = i4121[14]
  i4120.m_defaultFontSize = i4121[15]
  i4120.m_defaultAutoSizeMinRatio = i4121[16]
  i4120.m_defaultAutoSizeMaxRatio = i4121[17]
  i4120.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4121[18], i4121[19] )
  i4120.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4121[20], i4121[21] )
  i4120.m_autoSizeTextContainer = !!i4121[22]
  i4120.m_IsTextObjectScaleStatic = !!i4121[23]
  var i4125 = i4121[24]
  var i4124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4125.length; i += 2) {
  request.r(i4125[i + 0], i4125[i + 1], 1, i4124, '')
  }
  i4120.m_fallbackFontAssets = i4124
  i4120.m_matchMaterialPreset = !!i4121[25]
  i4120.m_HideSubTextObjects = !!i4121[26]
  request.r(i4121[27], i4121[28], 0, i4120, 'm_defaultSpriteAsset')
  i4120.m_defaultSpriteAssetPath = i4121[29]
  i4120.m_enableEmojiSupport = !!i4121[30]
  i4120.m_MissingCharacterSpriteUnicode = i4121[31]
  var i4127 = i4121[32]
  var i4126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4127.length; i += 2) {
  request.r(i4127[i + 0], i4127[i + 1], 1, i4126, '')
  }
  i4120.m_EmojiFallbackTextAssets = i4126
  i4120.m_defaultColorGradientPresetsPath = i4121[33]
  request.r(i4121[34], i4121[35], 0, i4120, 'm_defaultStyleSheet')
  i4120.m_StyleSheetsResourcePath = i4121[36]
  request.r(i4121[37], i4121[38], 0, i4120, 'm_leadingCharacters')
  request.r(i4121[39], i4121[40], 0, i4120, 'm_followingCharacters')
  i4120.m_UseModernHangulLineBreakingRules = !!i4121[41]
  return i4120
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4130 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4131 = data
  request.r(i4131[0], i4131[1], 0, i4130, 'spriteSheet')
  var i4133 = i4131[2]
  var i4132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.add(request.d('TMPro.TMP_Sprite', i4133[i + 0]));
  }
  i4130.spriteInfoList = i4132
  var i4135 = i4131[3]
  var i4134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4135.length; i += 2) {
  request.r(i4135[i + 0], i4135[i + 1], 1, i4134, '')
  }
  i4130.fallbackSpriteAssets = i4134
  var i4137 = i4131[4]
  var i4136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4137.length; i += 1) {
    i4136.add(request.d('TMPro.TMP_SpriteCharacter', i4137[i + 0]));
  }
  i4130.m_SpriteCharacterTable = i4136
  var i4139 = i4131[5]
  var i4138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4139.length; i += 1) {
    i4138.add(request.d('TMPro.TMP_SpriteGlyph', i4139[i + 0]));
  }
  i4130.m_GlyphTable = i4138
  i4130.m_Version = i4131[6]
  i4130.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4131[7], i4130.m_FaceInfo)
  request.r(i4131[8], i4131[9], 0, i4130, 'm_Material')
  return i4130
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4142 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4143 = data
  i4142.name = i4143[0]
  i4142.hashCode = i4143[1]
  i4142.unicode = i4143[2]
  i4142.pivot = new pc.Vec2( i4143[3], i4143[4] )
  request.r(i4143[5], i4143[6], 0, i4142, 'sprite')
  i4142.id = i4143[7]
  i4142.x = i4143[8]
  i4142.y = i4143[9]
  i4142.width = i4143[10]
  i4142.height = i4143[11]
  i4142.xOffset = i4143[12]
  i4142.yOffset = i4143[13]
  i4142.xAdvance = i4143[14]
  i4142.scale = i4143[15]
  return i4142
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4148 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4149 = data
  i4148.m_Name = i4149[0]
  i4148.m_ElementType = i4149[1]
  i4148.m_Unicode = i4149[2]
  i4148.m_GlyphIndex = i4149[3]
  i4148.m_Scale = i4149[4]
  return i4148
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4152 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4153 = data
  request.r(i4153[0], i4153[1], 0, i4152, 'sprite')
  i4152.m_Index = i4153[2]
  i4152.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4153[3], i4152.m_Metrics)
  i4152.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4153[4], i4152.m_GlyphRect)
  i4152.m_Scale = i4153[5]
  i4152.m_AtlasIndex = i4153[6]
  i4152.m_ClassDefinitionType = i4153[7]
  return i4152
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4154 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4155 = data
  var i4157 = i4155[0]
  var i4156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4157.length; i += 1) {
    i4156.add(request.d('TMPro.TMP_Style', i4157[i + 0]));
  }
  i4154.m_StyleList = i4156
  return i4154
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4160 = root || request.c( 'TMPro.TMP_Style' )
  var i4161 = data
  i4160.m_Name = i4161[0]
  i4160.m_HashCode = i4161[1]
  i4160.m_OpeningDefinition = i4161[2]
  i4160.m_ClosingDefinition = i4161[3]
  i4160.m_OpeningTagArray = i4161[4]
  i4160.m_ClosingTagArray = i4161[5]
  return i4160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4163 = data
  var i4165 = i4163[0]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4165[i + 0]) );
  }
  i4162.files = i4164
  i4162.componentToPrefabIds = i4163[1]
  return i4162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4169 = data
  i4168.path = i4169[0]
  request.r(i4169[1], i4169[2], 0, i4168, 'unityObject')
  return i4168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4171 = data
  var i4173 = i4171[0]
  var i4172 = []
  for(var i = 0; i < i4173.length; i += 1) {
    i4172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4173[i + 0]) );
  }
  i4170.scriptsExecutionOrder = i4172
  var i4175 = i4171[1]
  var i4174 = []
  for(var i = 0; i < i4175.length; i += 1) {
    i4174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4175[i + 0]) );
  }
  i4170.sortingLayers = i4174
  var i4177 = i4171[2]
  var i4176 = []
  for(var i = 0; i < i4177.length; i += 1) {
    i4176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4177[i + 0]) );
  }
  i4170.cullingLayers = i4176
  i4170.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4171[3], i4170.timeSettings)
  i4170.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4171[4], i4170.physicsSettings)
  i4170.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4171[5], i4170.physics2DSettings)
  i4170.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4171[6], i4170.qualitySettings)
  i4170.enableRealtimeShadows = !!i4171[7]
  i4170.enableAutoInstancing = !!i4171[8]
  i4170.enableStaticBatching = !!i4171[9]
  i4170.enableDynamicBatching = !!i4171[10]
  i4170.lightmapEncodingQuality = i4171[11]
  i4170.desiredColorSpace = i4171[12]
  var i4179 = i4171[13]
  var i4178 = []
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.push( i4179[i + 0] );
  }
  i4170.allTags = i4178
  return i4170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4183 = data
  i4182.name = i4183[0]
  i4182.value = i4183[1]
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4187 = data
  i4186.id = i4187[0]
  i4186.name = i4187[1]
  i4186.value = i4187[2]
  return i4186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4191 = data
  i4190.id = i4191[0]
  i4190.name = i4191[1]
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4193 = data
  i4192.fixedDeltaTime = i4193[0]
  i4192.maximumDeltaTime = i4193[1]
  i4192.timeScale = i4193[2]
  i4192.maximumParticleTimestep = i4193[3]
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4195 = data
  i4194.gravity = new pc.Vec3( i4195[0], i4195[1], i4195[2] )
  i4194.defaultSolverIterations = i4195[3]
  i4194.bounceThreshold = i4195[4]
  i4194.autoSyncTransforms = !!i4195[5]
  i4194.autoSimulation = !!i4195[6]
  var i4197 = i4195[7]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 1) {
    i4196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4197[i + 0]) );
  }
  i4194.collisionMatrix = i4196
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4201 = data
  i4200.enabled = !!i4201[0]
  i4200.layerId = i4201[1]
  i4200.otherLayerId = i4201[2]
  return i4200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4203 = data
  request.r(i4203[0], i4203[1], 0, i4202, 'material')
  i4202.gravity = new pc.Vec2( i4203[2], i4203[3] )
  i4202.positionIterations = i4203[4]
  i4202.velocityIterations = i4203[5]
  i4202.velocityThreshold = i4203[6]
  i4202.maxLinearCorrection = i4203[7]
  i4202.maxAngularCorrection = i4203[8]
  i4202.maxTranslationSpeed = i4203[9]
  i4202.maxRotationSpeed = i4203[10]
  i4202.baumgarteScale = i4203[11]
  i4202.baumgarteTOIScale = i4203[12]
  i4202.timeToSleep = i4203[13]
  i4202.linearSleepTolerance = i4203[14]
  i4202.angularSleepTolerance = i4203[15]
  i4202.defaultContactOffset = i4203[16]
  i4202.autoSimulation = !!i4203[17]
  i4202.queriesHitTriggers = !!i4203[18]
  i4202.queriesStartInColliders = !!i4203[19]
  i4202.callbacksOnDisable = !!i4203[20]
  i4202.reuseCollisionCallbacks = !!i4203[21]
  i4202.autoSyncTransforms = !!i4203[22]
  var i4205 = i4203[23]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4205[i + 0]) );
  }
  i4202.collisionMatrix = i4204
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4209 = data
  i4208.enabled = !!i4209[0]
  i4208.layerId = i4209[1]
  i4208.otherLayerId = i4209[2]
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4211 = data
  var i4213 = i4211[0]
  var i4212 = []
  for(var i = 0; i < i4213.length; i += 1) {
    i4212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4213[i + 0]) );
  }
  i4210.qualityLevels = i4212
  var i4215 = i4211[1]
  var i4214 = []
  for(var i = 0; i < i4215.length; i += 1) {
    i4214.push( i4215[i + 0] );
  }
  i4210.names = i4214
  i4210.shadows = i4211[2]
  i4210.anisotropicFiltering = i4211[3]
  i4210.antiAliasing = i4211[4]
  i4210.lodBias = i4211[5]
  i4210.shadowCascades = i4211[6]
  i4210.shadowDistance = i4211[7]
  i4210.shadowmaskMode = i4211[8]
  i4210.shadowProjection = i4211[9]
  i4210.shadowResolution = i4211[10]
  i4210.softParticles = !!i4211[11]
  i4210.softVegetation = !!i4211[12]
  i4210.activeColorSpace = i4211[13]
  i4210.desiredColorSpace = i4211[14]
  i4210.masterTextureLimit = i4211[15]
  i4210.maxQueuedFrames = i4211[16]
  i4210.particleRaycastBudget = i4211[17]
  i4210.pixelLightCount = i4211[18]
  i4210.realtimeReflectionProbes = !!i4211[19]
  i4210.shadowCascade2Split = i4211[20]
  i4210.shadowCascade4Split = new pc.Vec3( i4211[21], i4211[22], i4211[23] )
  i4210.streamingMipmapsActive = !!i4211[24]
  i4210.vSyncCount = i4211[25]
  i4210.asyncUploadBufferSize = i4211[26]
  i4210.asyncUploadTimeSlice = i4211[27]
  i4210.billboardsFaceCameraPosition = !!i4211[28]
  i4210.shadowNearPlaneOffset = i4211[29]
  i4210.streamingMipmapsMemoryBudget = i4211[30]
  i4210.maximumLODLevel = i4211[31]
  i4210.streamingMipmapsAddAllCameras = !!i4211[32]
  i4210.streamingMipmapsMaxLevelReduction = i4211[33]
  i4210.streamingMipmapsRenderersPerFrame = i4211[34]
  i4210.resolutionScalingFixedDPIFactor = i4211[35]
  i4210.streamingMipmapsMaxFileIORequests = i4211[36]
  i4210.currentQualityLevel = i4211[37]
  return i4210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4221 = data
  i4220.weight = i4221[0]
  i4220.vertices = i4221[1]
  i4220.normals = i4221[2]
  i4220.tangents = i4221[3]
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4225 = data
  i4224.mode = i4225[0]
  i4224.parameter = i4225[1]
  i4224.threshold = i4225[2]
  return i4224
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4226 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4227 = data
  i4226.m_GlyphIndex = i4227[0]
  i4226.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4227[1], i4226.m_GlyphValueRecord)
  return i4226
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4228 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4229 = data
  i4228.m_XCoordinate = i4229[0]
  i4228.m_YCoordinate = i4229[1]
  return i4228
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4230 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4231 = data
  i4230.m_XPositionAdjustment = i4231[0]
  i4230.m_YPositionAdjustment = i4231[1]
  return i4230
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4232 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4233 = data
  i4232.xPlacement = i4233[0]
  i4232.yPlacement = i4233[1]
  i4232.xAdvance = i4233[2]
  i4232.yAdvance = i4233[3]
  return i4232
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4234 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4235 = data
  i4234.m_XPlacement = i4235[0]
  i4234.m_YPlacement = i4235[1]
  i4234.m_XAdvance = i4235[2]
  i4234.m_YAdvance = i4235[3]
  return i4234
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[32],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[32],"87":[45],"88":[89],"90":[89],"10":[9],"91":[92],"93":[94],"95":[45,44],"96":[94],"97":[96],"98":[94],"99":[94],"100":[101],"102":[101],"103":[94],"104":[9],"105":[16,9],"43":[45],"106":[16,9],"107":[14,45],"94":[45],"108":[45,44],"109":[66],"110":[73],"111":[112],"113":[101],"114":[39],"115":[32],"116":[117],"118":[37],"119":[10],"120":[9],"121":[45,9],"17":[9,16],"122":[9],"123":[16,9],"124":[45],"125":[16,9],"126":[9],"127":[128],"129":[128],"130":[128],"131":[9],"132":[9],"13":[10],"20":[16,9],"133":[9],"12":[10],"134":[9],"135":[9],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[16,9],"144":[9],"145":[9],"146":[9],"19":[9],"147":[16,9],"148":[9],"149":[37],"150":[37],"38":[37],"151":[37],"152":[32],"153":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider","ItemHolder","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv711_PrideMonth";

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

Deserializers.buildID = "8de58fd8-eb61-4957-a971-528ea3f80cb3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

