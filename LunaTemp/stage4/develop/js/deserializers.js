var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3550 = root || request.c( 'UnityEngine.JointSpring' )
  var i3551 = data
  i3550.spring = i3551[0]
  i3550.damper = i3551[1]
  i3550.targetPosition = i3551[2]
  return i3550
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3552 = root || request.c( 'UnityEngine.JointMotor' )
  var i3553 = data
  i3552.m_TargetVelocity = i3553[0]
  i3552.m_Force = i3553[1]
  i3552.m_FreeSpin = i3553[2]
  return i3552
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3554 = root || request.c( 'UnityEngine.JointLimits' )
  var i3555 = data
  i3554.m_Min = i3555[0]
  i3554.m_Max = i3555[1]
  i3554.m_Bounciness = i3555[2]
  i3554.m_BounceMinVelocity = i3555[3]
  i3554.m_ContactDistance = i3555[4]
  i3554.minBounce = i3555[5]
  i3554.maxBounce = i3555[6]
  return i3554
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3556 = root || request.c( 'UnityEngine.JointDrive' )
  var i3557 = data
  i3556.m_PositionSpring = i3557[0]
  i3556.m_PositionDamper = i3557[1]
  i3556.m_MaximumForce = i3557[2]
  i3556.m_UseAcceleration = i3557[3]
  return i3556
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3558 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3559 = data
  i3558.m_Spring = i3559[0]
  i3558.m_Damper = i3559[1]
  return i3558
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3560 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3561 = data
  i3560.m_Limit = i3561[0]
  i3560.m_Bounciness = i3561[1]
  i3560.m_ContactDistance = i3561[2]
  return i3560
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3562 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3563 = data
  i3562.m_ExtremumSlip = i3563[0]
  i3562.m_ExtremumValue = i3563[1]
  i3562.m_AsymptoteSlip = i3563[2]
  i3562.m_AsymptoteValue = i3563[3]
  i3562.m_Stiffness = i3563[4]
  return i3562
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3564 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3565 = data
  i3564.m_LowerAngle = i3565[0]
  i3564.m_UpperAngle = i3565[1]
  return i3564
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3566 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3567 = data
  i3566.m_MotorSpeed = i3567[0]
  i3566.m_MaximumMotorTorque = i3567[1]
  return i3566
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3569 = data
  i3568.m_DampingRatio = i3569[0]
  i3568.m_Frequency = i3569[1]
  i3568.m_Angle = i3569[2]
  return i3568
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3571 = data
  i3570.m_LowerTranslation = i3571[0]
  i3570.m_UpperTranslation = i3571[1]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3572 = root || new pc.UnityMaterial()
  var i3573 = data
  i3572.name = i3573[0]
  request.r(i3573[1], i3573[2], 0, i3572, 'shader')
  i3572.renderQueue = i3573[3]
  i3572.enableInstancing = !!i3573[4]
  var i3575 = i3573[5]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3575[i + 0]) );
  }
  i3572.floatParameters = i3574
  var i3577 = i3573[6]
  var i3576 = []
  for(var i = 0; i < i3577.length; i += 1) {
    i3576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3577[i + 0]) );
  }
  i3572.colorParameters = i3576
  var i3579 = i3573[7]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 1) {
    i3578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3579[i + 0]) );
  }
  i3572.vectorParameters = i3578
  var i3581 = i3573[8]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3581[i + 0]) );
  }
  i3572.textureParameters = i3580
  var i3583 = i3573[9]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3583[i + 0]) );
  }
  i3572.materialFlags = i3582
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3587 = data
  i3586.name = i3587[0]
  i3586.value = i3587[1]
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3591 = data
  i3590.name = i3591[0]
  i3590.value = new pc.Color(i3591[1], i3591[2], i3591[3], i3591[4])
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3595 = data
  i3594.name = i3595[0]
  i3594.value = new pc.Vec4( i3595[1], i3595[2], i3595[3], i3595[4] )
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3599 = data
  i3598.name = i3599[0]
  request.r(i3599[1], i3599[2], 0, i3598, 'value')
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3603 = data
  i3602.name = i3603[0]
  i3602.enabled = !!i3603[1]
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3605 = data
  i3604.name = i3605[0]
  i3604.width = i3605[1]
  i3604.height = i3605[2]
  i3604.mipmapCount = i3605[3]
  i3604.anisoLevel = i3605[4]
  i3604.filterMode = i3605[5]
  i3604.hdr = !!i3605[6]
  i3604.format = i3605[7]
  i3604.wrapMode = i3605[8]
  i3604.alphaIsTransparency = !!i3605[9]
  i3604.alphaSource = i3605[10]
  i3604.graphicsFormat = i3605[11]
  i3604.sRGBTexture = !!i3605[12]
  i3604.desiredColorSpace = i3605[13]
  i3604.wrapU = i3605[14]
  i3604.wrapV = i3605[15]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3607 = data
  i3606.position = new pc.Vec3( i3607[0], i3607[1], i3607[2] )
  i3606.scale = new pc.Vec3( i3607[3], i3607[4], i3607[5] )
  i3606.rotation = new pc.Quat(i3607[6], i3607[7], i3607[8], i3607[9])
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3609 = data
  i3608.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3609[0], i3608.main)
  i3608.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3609[1], i3608.colorBySpeed)
  i3608.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3609[2], i3608.colorOverLifetime)
  i3608.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3609[3], i3608.emission)
  i3608.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3609[4], i3608.rotationBySpeed)
  i3608.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3609[5], i3608.rotationOverLifetime)
  i3608.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3609[6], i3608.shape)
  i3608.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3609[7], i3608.sizeBySpeed)
  i3608.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3609[8], i3608.sizeOverLifetime)
  i3608.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3609[9], i3608.textureSheetAnimation)
  i3608.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3609[10], i3608.velocityOverLifetime)
  i3608.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3609[11], i3608.noise)
  i3608.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3609[12], i3608.inheritVelocity)
  i3608.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3609[13], i3608.forceOverLifetime)
  i3608.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3609[14], i3608.limitVelocityOverLifetime)
  i3608.useAutoRandomSeed = !!i3609[15]
  i3608.randomSeed = i3609[16]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3610 = root || new pc.ParticleSystemMain()
  var i3611 = data
  i3610.duration = i3611[0]
  i3610.loop = !!i3611[1]
  i3610.prewarm = !!i3611[2]
  i3610.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[3], i3610.startDelay)
  i3610.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[4], i3610.startLifetime)
  i3610.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[5], i3610.startSpeed)
  i3610.startSize3D = !!i3611[6]
  i3610.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[7], i3610.startSizeX)
  i3610.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[8], i3610.startSizeY)
  i3610.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[9], i3610.startSizeZ)
  i3610.startRotation3D = !!i3611[10]
  i3610.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[11], i3610.startRotationX)
  i3610.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[12], i3610.startRotationY)
  i3610.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[13], i3610.startRotationZ)
  i3610.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3611[14], i3610.startColor)
  i3610.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[15], i3610.gravityModifier)
  i3610.simulationSpace = i3611[16]
  request.r(i3611[17], i3611[18], 0, i3610, 'customSimulationSpace')
  i3610.simulationSpeed = i3611[19]
  i3610.useUnscaledTime = !!i3611[20]
  i3610.scalingMode = i3611[21]
  i3610.playOnAwake = !!i3611[22]
  i3610.maxParticles = i3611[23]
  i3610.emitterVelocityMode = i3611[24]
  i3610.stopAction = i3611[25]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3612 = root || new pc.MinMaxCurve()
  var i3613 = data
  i3612.mode = i3613[0]
  i3612.curveMin = new pc.AnimationCurve( { keys_flow: i3613[1] } )
  i3612.curveMax = new pc.AnimationCurve( { keys_flow: i3613[2] } )
  i3612.curveMultiplier = i3613[3]
  i3612.constantMin = i3613[4]
  i3612.constantMax = i3613[5]
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3614 = root || new pc.MinMaxGradient()
  var i3615 = data
  i3614.mode = i3615[0]
  i3614.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3615[1], i3614.gradientMin)
  i3614.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3615[2], i3614.gradientMax)
  i3614.colorMin = new pc.Color(i3615[3], i3615[4], i3615[5], i3615[6])
  i3614.colorMax = new pc.Color(i3615[7], i3615[8], i3615[9], i3615[10])
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3617 = data
  i3616.mode = i3617[0]
  var i3619 = i3617[1]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3619[i + 0]) );
  }
  i3616.colorKeys = i3618
  var i3621 = i3617[2]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3621[i + 0]) );
  }
  i3616.alphaKeys = i3620
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3622 = root || new pc.ParticleSystemColorBySpeed()
  var i3623 = data
  i3622.enabled = !!i3623[0]
  i3622.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3623[1], i3622.color)
  i3622.range = new pc.Vec2( i3623[2], i3623[3] )
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3627 = data
  i3626.color = new pc.Color(i3627[0], i3627[1], i3627[2], i3627[3])
  i3626.time = i3627[4]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3631 = data
  i3630.alpha = i3631[0]
  i3630.time = i3631[1]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3632 = root || new pc.ParticleSystemColorOverLifetime()
  var i3633 = data
  i3632.enabled = !!i3633[0]
  i3632.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3633[1], i3632.color)
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3634 = root || new pc.ParticleSystemEmitter()
  var i3635 = data
  i3634.enabled = !!i3635[0]
  i3634.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3635[1], i3634.rateOverTime)
  i3634.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3635[2], i3634.rateOverDistance)
  var i3637 = i3635[3]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3637[i + 0]) );
  }
  i3634.bursts = i3636
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3640 = root || new pc.ParticleSystemBurst()
  var i3641 = data
  i3640.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[0], i3640.count)
  i3640.cycleCount = i3641[1]
  i3640.minCount = i3641[2]
  i3640.maxCount = i3641[3]
  i3640.repeatInterval = i3641[4]
  i3640.time = i3641[5]
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3642 = root || new pc.ParticleSystemRotationBySpeed()
  var i3643 = data
  i3642.enabled = !!i3643[0]
  i3642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[1], i3642.x)
  i3642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[2], i3642.y)
  i3642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[3], i3642.z)
  i3642.separateAxes = !!i3643[4]
  i3642.range = new pc.Vec2( i3643[5], i3643[6] )
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3644 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3645 = data
  i3644.enabled = !!i3645[0]
  i3644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[1], i3644.x)
  i3644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[2], i3644.y)
  i3644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[3], i3644.z)
  i3644.separateAxes = !!i3645[4]
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3646 = root || new pc.ParticleSystemShape()
  var i3647 = data
  i3646.enabled = !!i3647[0]
  i3646.shapeType = i3647[1]
  i3646.randomDirectionAmount = i3647[2]
  i3646.sphericalDirectionAmount = i3647[3]
  i3646.randomPositionAmount = i3647[4]
  i3646.alignToDirection = !!i3647[5]
  i3646.radius = i3647[6]
  i3646.radiusMode = i3647[7]
  i3646.radiusSpread = i3647[8]
  i3646.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[9], i3646.radiusSpeed)
  i3646.radiusThickness = i3647[10]
  i3646.angle = i3647[11]
  i3646.length = i3647[12]
  i3646.boxThickness = new pc.Vec3( i3647[13], i3647[14], i3647[15] )
  i3646.meshShapeType = i3647[16]
  request.r(i3647[17], i3647[18], 0, i3646, 'mesh')
  request.r(i3647[19], i3647[20], 0, i3646, 'meshRenderer')
  request.r(i3647[21], i3647[22], 0, i3646, 'skinnedMeshRenderer')
  i3646.useMeshMaterialIndex = !!i3647[23]
  i3646.meshMaterialIndex = i3647[24]
  i3646.useMeshColors = !!i3647[25]
  i3646.normalOffset = i3647[26]
  i3646.arc = i3647[27]
  i3646.arcMode = i3647[28]
  i3646.arcSpread = i3647[29]
  i3646.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[30], i3646.arcSpeed)
  i3646.donutRadius = i3647[31]
  i3646.position = new pc.Vec3( i3647[32], i3647[33], i3647[34] )
  i3646.rotation = new pc.Vec3( i3647[35], i3647[36], i3647[37] )
  i3646.scale = new pc.Vec3( i3647[38], i3647[39], i3647[40] )
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3648 = root || new pc.ParticleSystemSizeBySpeed()
  var i3649 = data
  i3648.enabled = !!i3649[0]
  i3648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[1], i3648.x)
  i3648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[2], i3648.y)
  i3648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[3], i3648.z)
  i3648.separateAxes = !!i3649[4]
  i3648.range = new pc.Vec2( i3649[5], i3649[6] )
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3650 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3651 = data
  i3650.enabled = !!i3651[0]
  i3650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[1], i3650.x)
  i3650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[2], i3650.y)
  i3650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[3], i3650.z)
  i3650.separateAxes = !!i3651[4]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3652 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3653 = data
  i3652.enabled = !!i3653[0]
  i3652.mode = i3653[1]
  i3652.animation = i3653[2]
  i3652.numTilesX = i3653[3]
  i3652.numTilesY = i3653[4]
  i3652.useRandomRow = !!i3653[5]
  i3652.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3653[6], i3652.frameOverTime)
  i3652.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3653[7], i3652.startFrame)
  i3652.cycleCount = i3653[8]
  i3652.rowIndex = i3653[9]
  i3652.flipU = i3653[10]
  i3652.flipV = i3653[11]
  i3652.spriteCount = i3653[12]
  var i3655 = i3653[13]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 2) {
  request.r(i3655[i + 0], i3655[i + 1], 2, i3654, '')
  }
  i3652.sprites = i3654
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3658 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3659 = data
  i3658.enabled = !!i3659[0]
  i3658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[1], i3658.x)
  i3658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[2], i3658.y)
  i3658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[3], i3658.z)
  i3658.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[4], i3658.radial)
  i3658.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[5], i3658.speedModifier)
  i3658.space = i3659[6]
  i3658.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[7], i3658.orbitalX)
  i3658.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[8], i3658.orbitalY)
  i3658.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[9], i3658.orbitalZ)
  i3658.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[10], i3658.orbitalOffsetX)
  i3658.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[11], i3658.orbitalOffsetY)
  i3658.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[12], i3658.orbitalOffsetZ)
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3660 = root || new pc.ParticleSystemNoise()
  var i3661 = data
  i3660.enabled = !!i3661[0]
  i3660.separateAxes = !!i3661[1]
  i3660.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[2], i3660.strengthX)
  i3660.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[3], i3660.strengthY)
  i3660.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[4], i3660.strengthZ)
  i3660.frequency = i3661[5]
  i3660.damping = !!i3661[6]
  i3660.octaveCount = i3661[7]
  i3660.octaveMultiplier = i3661[8]
  i3660.octaveScale = i3661[9]
  i3660.quality = i3661[10]
  i3660.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[11], i3660.scrollSpeed)
  i3660.scrollSpeedMultiplier = i3661[12]
  i3660.remapEnabled = !!i3661[13]
  i3660.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[14], i3660.remapX)
  i3660.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[15], i3660.remapY)
  i3660.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[16], i3660.remapZ)
  i3660.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[17], i3660.positionAmount)
  i3660.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[18], i3660.rotationAmount)
  i3660.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[19], i3660.sizeAmount)
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3662 = root || new pc.ParticleSystemInheritVelocity()
  var i3663 = data
  i3662.enabled = !!i3663[0]
  i3662.mode = i3663[1]
  i3662.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[2], i3662.curve)
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3664 = root || new pc.ParticleSystemForceOverLifetime()
  var i3665 = data
  i3664.enabled = !!i3665[0]
  i3664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3665[1], i3664.x)
  i3664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3665[2], i3664.y)
  i3664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3665[3], i3664.z)
  i3664.space = i3665[4]
  i3664.randomized = !!i3665[5]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3666 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3667 = data
  i3666.enabled = !!i3667[0]
  i3666.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[1], i3666.limit)
  i3666.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[2], i3666.limitX)
  i3666.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[3], i3666.limitY)
  i3666.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[4], i3666.limitZ)
  i3666.dampen = i3667[5]
  i3666.separateAxes = !!i3667[6]
  i3666.space = i3667[7]
  i3666.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[8], i3666.drag)
  i3666.multiplyDragByParticleSize = !!i3667[9]
  i3666.multiplyDragByParticleVelocity = !!i3667[10]
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3669 = data
  request.r(i3669[0], i3669[1], 0, i3668, 'mesh')
  i3668.meshCount = i3669[2]
  i3668.activeVertexStreamsCount = i3669[3]
  i3668.alignment = i3669[4]
  i3668.renderMode = i3669[5]
  i3668.sortMode = i3669[6]
  i3668.lengthScale = i3669[7]
  i3668.velocityScale = i3669[8]
  i3668.cameraVelocityScale = i3669[9]
  i3668.normalDirection = i3669[10]
  i3668.sortingFudge = i3669[11]
  i3668.minParticleSize = i3669[12]
  i3668.maxParticleSize = i3669[13]
  i3668.pivot = new pc.Vec3( i3669[14], i3669[15], i3669[16] )
  request.r(i3669[17], i3669[18], 0, i3668, 'trailMaterial')
  i3668.applyActiveColorSpace = !!i3669[19]
  i3668.enabled = !!i3669[20]
  request.r(i3669[21], i3669[22], 0, i3668, 'sharedMaterial')
  var i3671 = i3669[23]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 2) {
  request.r(i3671[i + 0], i3671[i + 1], 2, i3670, '')
  }
  i3668.sharedMaterials = i3670
  i3668.receiveShadows = !!i3669[24]
  i3668.shadowCastingMode = i3669[25]
  i3668.sortingLayerID = i3669[26]
  i3668.sortingOrder = i3669[27]
  i3668.lightmapIndex = i3669[28]
  i3668.lightmapSceneIndex = i3669[29]
  i3668.lightmapScaleOffset = new pc.Vec4( i3669[30], i3669[31], i3669[32], i3669[33] )
  i3668.lightProbeUsage = i3669[34]
  i3668.reflectionProbeUsage = i3669[35]
  return i3668
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i3674 = root || request.c( 'MergeEffect' )
  var i3675 = data
  request.r(i3675[0], i3675[1], 0, i3674, 'tf')
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3677 = data
  i3676.name = i3677[0]
  i3676.tagId = i3677[1]
  i3676.enabled = !!i3677[2]
  i3676.isStatic = !!i3677[3]
  i3676.layer = i3677[4]
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3679 = data
  i3678.name = i3679[0]
  i3678.halfPrecision = !!i3679[1]
  i3678.useSimplification = !!i3679[2]
  i3678.useUInt32IndexFormat = !!i3679[3]
  i3678.vertexCount = i3679[4]
  i3678.aabb = i3679[5]
  var i3681 = i3679[6]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 1) {
    i3680.push( !!i3681[i + 0] );
  }
  i3678.streams = i3680
  i3678.vertices = i3679[7]
  var i3683 = i3679[8]
  var i3682 = []
  for(var i = 0; i < i3683.length; i += 1) {
    i3682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3683[i + 0]) );
  }
  i3678.subMeshes = i3682
  var i3685 = i3679[9]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 16) {
    i3684.push( new pc.Mat4().setData(i3685[i + 0], i3685[i + 1], i3685[i + 2], i3685[i + 3],  i3685[i + 4], i3685[i + 5], i3685[i + 6], i3685[i + 7],  i3685[i + 8], i3685[i + 9], i3685[i + 10], i3685[i + 11],  i3685[i + 12], i3685[i + 13], i3685[i + 14], i3685[i + 15]) );
  }
  i3678.bindposes = i3684
  var i3687 = i3679[10]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3687[i + 0]) );
  }
  i3678.blendShapes = i3686
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3693 = data
  i3692.triangles = i3693[0]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3699 = data
  i3698.name = i3699[0]
  var i3701 = i3699[1]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3701[i + 0]) );
  }
  i3698.frames = i3700
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3703 = data
  i3702.name = i3703[0]
  i3702.index = i3703[1]
  i3702.startup = !!i3703[2]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3705 = data
  i3704.pivot = new pc.Vec2( i3705[0], i3705[1] )
  i3704.anchorMin = new pc.Vec2( i3705[2], i3705[3] )
  i3704.anchorMax = new pc.Vec2( i3705[4], i3705[5] )
  i3704.sizeDelta = new pc.Vec2( i3705[6], i3705[7] )
  i3704.anchoredPosition3D = new pc.Vec3( i3705[8], i3705[9], i3705[10] )
  i3704.rotation = new pc.Quat(i3705[11], i3705[12], i3705[13], i3705[14])
  i3704.scale = new pc.Vec3( i3705[15], i3705[16], i3705[17] )
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3707 = data
  i3706.planeDistance = i3707[0]
  i3706.referencePixelsPerUnit = i3707[1]
  i3706.isFallbackOverlay = !!i3707[2]
  i3706.renderMode = i3707[3]
  i3706.renderOrder = i3707[4]
  i3706.sortingLayerName = i3707[5]
  i3706.sortingOrder = i3707[6]
  i3706.scaleFactor = i3707[7]
  request.r(i3707[8], i3707[9], 0, i3706, 'worldCamera')
  i3706.overrideSorting = !!i3707[10]
  i3706.pixelPerfect = !!i3707[11]
  i3706.targetDisplay = i3707[12]
  i3706.overridePixelPerfect = !!i3707[13]
  i3706.enabled = !!i3707[14]
  return i3706
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3708 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3709 = data
  i3708.m_UiScaleMode = i3709[0]
  i3708.m_ReferencePixelsPerUnit = i3709[1]
  i3708.m_ScaleFactor = i3709[2]
  i3708.m_ReferenceResolution = new pc.Vec2( i3709[3], i3709[4] )
  i3708.m_ScreenMatchMode = i3709[5]
  i3708.m_MatchWidthOrHeight = i3709[6]
  i3708.m_PhysicalUnit = i3709[7]
  i3708.m_FallbackScreenDPI = i3709[8]
  i3708.m_DefaultSpriteDPI = i3709[9]
  i3708.m_DynamicPixelsPerUnit = i3709[10]
  i3708.m_PresetInfoIsWorld = !!i3709[11]
  return i3708
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3710 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3711 = data
  i3710.m_IgnoreReversedGraphics = !!i3711[0]
  i3710.m_BlockingObjects = i3711[1]
  i3710.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3711[2] )
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'animatorController')
  request.r(i3713[2], i3713[3], 0, i3712, 'avatar')
  i3712.updateMode = i3713[4]
  i3712.hasTransformHierarchy = !!i3713[5]
  i3712.applyRootMotion = !!i3713[6]
  var i3715 = i3713[7]
  var i3714 = []
  for(var i = 0; i < i3715.length; i += 2) {
  request.r(i3715[i + 0], i3715[i + 1], 2, i3714, '')
  }
  i3712.humanBones = i3714
  i3712.enabled = !!i3713[8]
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3719 = data
  i3718.cullTransparentMesh = !!i3719[0]
  return i3718
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3720 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3721 = data
  i3720.m_hasFontAssetChanged = !!i3721[0]
  request.r(i3721[1], i3721[2], 0, i3720, 'm_baseMaterial')
  i3720.m_maskOffset = new pc.Vec4( i3721[3], i3721[4], i3721[5], i3721[6] )
  i3720.m_text = i3721[7]
  i3720.m_isRightToLeft = !!i3721[8]
  request.r(i3721[9], i3721[10], 0, i3720, 'm_fontAsset')
  request.r(i3721[11], i3721[12], 0, i3720, 'm_sharedMaterial')
  var i3723 = i3721[13]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 2) {
  request.r(i3723[i + 0], i3723[i + 1], 2, i3722, '')
  }
  i3720.m_fontSharedMaterials = i3722
  request.r(i3721[14], i3721[15], 0, i3720, 'm_fontMaterial')
  var i3725 = i3721[16]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 2) {
  request.r(i3725[i + 0], i3725[i + 1], 2, i3724, '')
  }
  i3720.m_fontMaterials = i3724
  i3720.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3721[17], i3721[18], i3721[19], i3721[20])
  i3720.m_fontColor = new pc.Color(i3721[21], i3721[22], i3721[23], i3721[24])
  i3720.m_enableVertexGradient = !!i3721[25]
  i3720.m_colorMode = i3721[26]
  i3720.m_fontColorGradient = request.d('TMPro.VertexGradient', i3721[27], i3720.m_fontColorGradient)
  request.r(i3721[28], i3721[29], 0, i3720, 'm_fontColorGradientPreset')
  request.r(i3721[30], i3721[31], 0, i3720, 'm_spriteAsset')
  i3720.m_tintAllSprites = !!i3721[32]
  request.r(i3721[33], i3721[34], 0, i3720, 'm_StyleSheet')
  i3720.m_TextStyleHashCode = i3721[35]
  i3720.m_overrideHtmlColors = !!i3721[36]
  i3720.m_faceColor = UnityEngine.Color32.ConstructColor(i3721[37], i3721[38], i3721[39], i3721[40])
  i3720.m_fontSize = i3721[41]
  i3720.m_fontSizeBase = i3721[42]
  i3720.m_fontWeight = i3721[43]
  i3720.m_enableAutoSizing = !!i3721[44]
  i3720.m_fontSizeMin = i3721[45]
  i3720.m_fontSizeMax = i3721[46]
  i3720.m_fontStyle = i3721[47]
  i3720.m_HorizontalAlignment = i3721[48]
  i3720.m_VerticalAlignment = i3721[49]
  i3720.m_textAlignment = i3721[50]
  i3720.m_characterSpacing = i3721[51]
  i3720.m_wordSpacing = i3721[52]
  i3720.m_lineSpacing = i3721[53]
  i3720.m_lineSpacingMax = i3721[54]
  i3720.m_paragraphSpacing = i3721[55]
  i3720.m_charWidthMaxAdj = i3721[56]
  i3720.m_TextWrappingMode = i3721[57]
  i3720.m_wordWrappingRatios = i3721[58]
  i3720.m_overflowMode = i3721[59]
  request.r(i3721[60], i3721[61], 0, i3720, 'm_linkedTextComponent')
  request.r(i3721[62], i3721[63], 0, i3720, 'parentLinkedComponent')
  i3720.m_enableKerning = !!i3721[64]
  var i3727 = i3721[65]
  var i3726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.add(i3727[i + 0]);
  }
  i3720.m_ActiveFontFeatures = i3726
  i3720.m_enableExtraPadding = !!i3721[66]
  i3720.checkPaddingRequired = !!i3721[67]
  i3720.m_isRichText = !!i3721[68]
  i3720.m_parseCtrlCharacters = !!i3721[69]
  i3720.m_isOrthographic = !!i3721[70]
  i3720.m_isCullingEnabled = !!i3721[71]
  i3720.m_horizontalMapping = i3721[72]
  i3720.m_verticalMapping = i3721[73]
  i3720.m_uvLineOffset = i3721[74]
  i3720.m_geometrySortingOrder = i3721[75]
  i3720.m_IsTextObjectScaleStatic = !!i3721[76]
  i3720.m_VertexBufferAutoSizeReduction = !!i3721[77]
  i3720.m_useMaxVisibleDescender = !!i3721[78]
  i3720.m_pageToDisplay = i3721[79]
  i3720.m_margin = new pc.Vec4( i3721[80], i3721[81], i3721[82], i3721[83] )
  i3720.m_isUsingLegacyAnimationComponent = !!i3721[84]
  i3720.m_isVolumetricText = !!i3721[85]
  request.r(i3721[86], i3721[87], 0, i3720, 'm_Material')
  i3720.m_EmojiFallbackSupport = !!i3721[88]
  i3720.m_Maskable = !!i3721[89]
  i3720.m_Color = new pc.Color(i3721[90], i3721[91], i3721[92], i3721[93])
  i3720.m_RaycastTarget = !!i3721[94]
  i3720.m_RaycastPadding = new pc.Vec4( i3721[95], i3721[96], i3721[97], i3721[98] )
  return i3720
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3728 = root || request.c( 'TMPro.VertexGradient' )
  var i3729 = data
  i3728.topLeft = new pc.Color(i3729[0], i3729[1], i3729[2], i3729[3])
  i3728.topRight = new pc.Color(i3729[4], i3729[5], i3729[6], i3729[7])
  i3728.bottomLeft = new pc.Color(i3729[8], i3729[9], i3729[10], i3729[11])
  i3728.bottomRight = new pc.Color(i3729[12], i3729[13], i3729[14], i3729[15])
  return i3728
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3732 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'm_FillRect')
  request.r(i3733[2], i3733[3], 0, i3732, 'm_HandleRect')
  i3732.m_Direction = i3733[4]
  i3732.m_MinValue = i3733[5]
  i3732.m_MaxValue = i3733[6]
  i3732.m_WholeNumbers = !!i3733[7]
  i3732.m_Value = i3733[8]
  i3732.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3733[9], i3732.m_OnValueChanged)
  i3732.m_Navigation = request.d('UnityEngine.UI.Navigation', i3733[10], i3732.m_Navigation)
  i3732.m_Transition = i3733[11]
  i3732.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3733[12], i3732.m_Colors)
  i3732.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3733[13], i3732.m_SpriteState)
  i3732.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3733[14], i3732.m_AnimationTriggers)
  i3732.m_Interactable = !!i3733[15]
  request.r(i3733[16], i3733[17], 0, i3732, 'm_TargetGraphic')
  return i3732
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3734 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3735 = data
  i3734.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3735[0], i3734.m_PersistentCalls)
  return i3734
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3736 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3737 = data
  var i3739 = i3737[0]
  var i3738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3739.length; i += 1) {
    i3738.add(request.d('UnityEngine.Events.PersistentCall', i3739[i + 0]));
  }
  i3736.m_Calls = i3738
  return i3736
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3742 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3743 = data
  request.r(i3743[0], i3743[1], 0, i3742, 'm_Target')
  i3742.m_TargetAssemblyTypeName = i3743[2]
  i3742.m_MethodName = i3743[3]
  i3742.m_Mode = i3743[4]
  i3742.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3743[5], i3742.m_Arguments)
  i3742.m_CallState = i3743[6]
  return i3742
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3744 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3745 = data
  i3744.m_Mode = i3745[0]
  i3744.m_WrapAround = !!i3745[1]
  request.r(i3745[2], i3745[3], 0, i3744, 'm_SelectOnUp')
  request.r(i3745[4], i3745[5], 0, i3744, 'm_SelectOnDown')
  request.r(i3745[6], i3745[7], 0, i3744, 'm_SelectOnLeft')
  request.r(i3745[8], i3745[9], 0, i3744, 'm_SelectOnRight')
  return i3744
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3746 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3747 = data
  i3746.m_NormalColor = new pc.Color(i3747[0], i3747[1], i3747[2], i3747[3])
  i3746.m_HighlightedColor = new pc.Color(i3747[4], i3747[5], i3747[6], i3747[7])
  i3746.m_PressedColor = new pc.Color(i3747[8], i3747[9], i3747[10], i3747[11])
  i3746.m_SelectedColor = new pc.Color(i3747[12], i3747[13], i3747[14], i3747[15])
  i3746.m_DisabledColor = new pc.Color(i3747[16], i3747[17], i3747[18], i3747[19])
  i3746.m_ColorMultiplier = i3747[20]
  i3746.m_FadeDuration = i3747[21]
  return i3746
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3748 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3749 = data
  request.r(i3749[0], i3749[1], 0, i3748, 'm_HighlightedSprite')
  request.r(i3749[2], i3749[3], 0, i3748, 'm_PressedSprite')
  request.r(i3749[4], i3749[5], 0, i3748, 'm_SelectedSprite')
  request.r(i3749[6], i3749[7], 0, i3748, 'm_DisabledSprite')
  return i3748
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3750 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3751 = data
  i3750.m_NormalTrigger = i3751[0]
  i3750.m_HighlightedTrigger = i3751[1]
  i3750.m_PressedTrigger = i3751[2]
  i3750.m_SelectedTrigger = i3751[3]
  i3750.m_DisabledTrigger = i3751[4]
  return i3750
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3752 = root || request.c( 'UnityEngine.UI.Image' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, 'm_Sprite')
  i3752.m_Type = i3753[2]
  i3752.m_PreserveAspect = !!i3753[3]
  i3752.m_FillCenter = !!i3753[4]
  i3752.m_FillMethod = i3753[5]
  i3752.m_FillAmount = i3753[6]
  i3752.m_FillClockwise = !!i3753[7]
  i3752.m_FillOrigin = i3753[8]
  i3752.m_UseSpriteMesh = !!i3753[9]
  i3752.m_PixelsPerUnitMultiplier = i3753[10]
  request.r(i3753[11], i3753[12], 0, i3752, 'm_Material')
  i3752.m_Maskable = !!i3753[13]
  i3752.m_Color = new pc.Color(i3753[14], i3753[15], i3753[16], i3753[17])
  i3752.m_RaycastTarget = !!i3753[18]
  i3752.m_RaycastPadding = new pc.Vec4( i3753[19], i3753[20], i3753[21], i3753[22] )
  return i3752
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3754 = root || request.c( 'UnityEngine.UI.Button' )
  var i3755 = data
  i3754.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3755[0], i3754.m_OnClick)
  i3754.m_Navigation = request.d('UnityEngine.UI.Navigation', i3755[1], i3754.m_Navigation)
  i3754.m_Transition = i3755[2]
  i3754.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3755[3], i3754.m_Colors)
  i3754.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3755[4], i3754.m_SpriteState)
  i3754.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3755[5], i3754.m_AnimationTriggers)
  i3754.m_Interactable = !!i3755[6]
  request.r(i3755[7], i3755[8], 0, i3754, 'm_TargetGraphic')
  return i3754
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3756 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3757 = data
  i3756.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3757[0], i3756.m_PersistentCalls)
  return i3756
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3758 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3759 = data
  request.r(i3759[0], i3759[1], 0, i3758, 'm_ObjectArgument')
  i3758.m_ObjectArgumentAssemblyTypeName = i3759[2]
  i3758.m_IntArgument = i3759[3]
  i3758.m_FloatArgument = i3759[4]
  i3758.m_StringArgument = i3759[5]
  i3758.m_BoolArgument = !!i3759[6]
  return i3758
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3760 = root || request.c( 'Ply_Pool' )
  var i3761 = data
  var i3763 = i3761[0]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Ply_Pool+PoolAmount', i3763[i + 0]) );
  }
  i3760.poolAmounts = i3762
  request.r(i3761[1], i3761[2], 0, i3760, 'poolHolder')
  return i3760
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3766 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3767 = data
  i3766.type = i3767[0]
  i3766.amount = i3767[1]
  request.r(i3767[2], i3767[3], 0, i3766, 'gameUnit')
  return i3766
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3768 = root || request.c( 'Ply_SoundManager' )
  var i3769 = data
  var i3771 = i3769[0]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 2) {
  request.r(i3771[i + 0], i3771[i + 1], 2, i3770, '')
  }
  i3768.audioClips = i3770
  request.r(i3769[1], i3769[2], 0, i3768, 'sound')
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'clip')
  request.r(i3775[2], i3775[3], 0, i3774, 'outputAudioMixerGroup')
  i3774.playOnAwake = !!i3775[4]
  i3774.loop = !!i3775[5]
  i3774.time = i3775[6]
  i3774.volume = i3775[7]
  i3774.pitch = i3775[8]
  i3774.enabled = !!i3775[9]
  return i3774
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3776 = root || request.c( 'GameManager' )
  var i3777 = data
  i3776.isPlaying = !!i3777[0]
  i3776.isTutorial = !!i3777[1]
  i3776.isGotoStore = !!i3777[2]
  i3776.countMove = i3777[3]
  i3776.maxMove = i3777[4]
  i3776.startLayer = i3777[5]
  i3776.currentLayer = i3777[6]
  request.r(i3777[7], i3777[8], 0, i3776, 'mainBox')
  request.r(i3777[9], i3777[10], 0, i3776, 'handTutorial')
  i3776.tutorialDelay = i3777[11]
  return i3776
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3778 = root || request.c( 'UIManager' )
  var i3779 = data
  request.r(i3779[0], i3779[1], 0, i3778, 'winUI')
  request.r(i3779[2], i3779[3], 0, i3778, 'loseUI')
  request.r(i3779[4], i3779[5], 0, i3778, 'tutorial')
  request.r(i3779[6], i3779[7], 0, i3778, 'verticalUI')
  request.r(i3779[8], i3779[9], 0, i3778, 'horizontalUI')
  request.r(i3779[10], i3779[11], 0, i3778, 'downloadBtnVertical')
  request.r(i3779[12], i3779[13], 0, i3778, 'dowloadBtnHorizontal')
  request.r(i3779[14], i3779[15], 0, i3778, 'progressSlider')
  request.r(i3779[16], i3779[17], 0, i3778, 'progressText')
  i3778.maxProgressItems = i3779[18]
  i3778.startProgressItems = i3779[19]
  i3778.screenWidth = i3779[20]
  i3778.screenHeight = i3779[21]
  i3778.scaleHeightOnWidth = i3779[22]
  i3778.isVertical = !!i3779[23]
  request.r(i3779[24], i3779[25], 0, i3778, 'cam')
  i3778.introZoomOutMultiplier = i3779[26]
  i3778.cameraZoomDuration = i3779[27]
  i3778.useContinuousScaling = !!i3779[28]
  i3778.baseOrthographicSize = i3779[29]
  i3778.baseAspect = i3779[30]
  i3778.landscapeSize = i3779[31]
  i3778.defaultPortraitSize = i3779[32]
  var i3781 = i3779[33]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.add(request.d('ScreenScaleStep', i3781[i + 0]));
  }
  i3778.discreteScaleSteps = i3780
  i3778.usePerspectiveCamera = !!i3779[34]
  request.r(i3779[35], i3779[36], 0, i3778, 'perspectiveFocus')
  i3778.perspectiveFocusDistance = i3779[37]
  i3778.perspectivePadding = i3779[38]
  i3778.fitRendererBounds = !!i3779[39]
  request.r(i3779[40], i3779[41], 0, i3778, 'boundsRoot')
  var i3783 = i3779[42]
  var i3782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i3783.length; i += 2) {
  request.r(i3783[i + 0], i3783[i + 1], 1, i3782, '')
  }
  i3778.boundsRenderers = i3782
  return i3778
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i3786 = root || request.c( 'ScreenScaleStep' )
  var i3787 = data
  i3786.heightOnWidthRatio = i3787[0]
  i3786.orthographicSize = i3787[1]
  return i3786
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3790 = root || request.c( 'InputManager' )
  var i3791 = data
  i3790.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3791[0] )
  i3790.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i3791[1] )
  i3790.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i3791[2] )
  i3790.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i3791[3] )
  i3790.isDragging = !!i3791[4]
  request.r(i3791[5], i3791[6], 0, i3790, 'mainCamera')
  return i3790
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i3792 = root || request.c( 'ItemSetupTool' )
  var i3793 = data
  request.r(i3793[0], i3793[1], 0, i3792, 'spritesParent')
  request.r(i3793[2], i3793[3], 0, i3792, 'holdersParent')
  i3792.shadowSuffix = i3793[4]
  i3792.holderPrefix = i3793[5]
  i3792.holdersParentName = i3793[6]
  i3792.colliderDepth = i3793[7]
  i3792.colliderSizeMultiplier = i3793[8]
  i3792.generatedShadowColor = new pc.Color(i3793[9], i3793[10], i3793[11], i3793[12])
  i3792.fadedBlackShadowColor = new pc.Color(i3793[13], i3793[14], i3793[15], i3793[16])
  i3792.generatedShadowLocalOffset = new pc.Vec3( i3793[17], i3793[18], i3793[19] )
  i3792.itemLayerName = i3793[20]
  i3792.holderLayerName = i3793[21]
  return i3792
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3794 = root || request.c( 'CameraController' )
  var i3795 = data
  request.r(i3795[0], i3795[1], 0, i3794, 'targetCamera')
  i3794.enableZoom = !!i3795[2]
  i3794.minZoomRatio = i3795[3]
  i3794.maxZoomRatio = i3795[4]
  i3794.mouseWheelZoomSpeed = i3795[5]
  i3794.pinchZoomSpeed = i3795[6]
  i3794.enableDrag = !!i3795[7]
  i3794.horizontalOnly = !!i3795[8]
  i3794.dragSensitivity = i3795[9]
  i3794.maxHorizontalOffset = i3795[10]
  i3794.maxVerticalOffset = i3795[11]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3797 = data
  i3796.aspect = i3797[0]
  i3796.orthographic = !!i3797[1]
  i3796.orthographicSize = i3797[2]
  i3796.backgroundColor = new pc.Color(i3797[3], i3797[4], i3797[5], i3797[6])
  i3796.nearClipPlane = i3797[7]
  i3796.farClipPlane = i3797[8]
  i3796.fieldOfView = i3797[9]
  i3796.depth = i3797[10]
  i3796.clearFlags = i3797[11]
  i3796.cullingMask = i3797[12]
  i3796.rect = i3797[13]
  request.r(i3797[14], i3797[15], 0, i3796, 'targetTexture')
  i3796.usePhysicalProperties = !!i3797[16]
  i3796.focalLength = i3797[17]
  i3796.sensorSize = new pc.Vec2( i3797[18], i3797[19] )
  i3796.lensShift = new pc.Vec2( i3797[20], i3797[21] )
  i3796.gateFit = i3797[22]
  i3796.commandBufferCount = i3797[23]
  i3796.cameraType = i3797[24]
  i3796.enabled = !!i3797[25]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3799 = data
  i3798.type = i3799[0]
  i3798.color = new pc.Color(i3799[1], i3799[2], i3799[3], i3799[4])
  i3798.cullingMask = i3799[5]
  i3798.intensity = i3799[6]
  i3798.range = i3799[7]
  i3798.spotAngle = i3799[8]
  i3798.shadows = i3799[9]
  i3798.shadowNormalBias = i3799[10]
  i3798.shadowBias = i3799[11]
  i3798.shadowStrength = i3799[12]
  i3798.shadowResolution = i3799[13]
  i3798.lightmapBakeType = i3799[14]
  i3798.renderMode = i3799[15]
  request.r(i3799[16], i3799[17], 0, i3798, 'cookie')
  i3798.cookieSize = i3799[18]
  i3798.shadowNearPlane = i3799[19]
  i3798.occlusionMaskChannel = i3799[20]
  i3798.enabled = !!i3799[21]
  return i3798
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3800 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3801 = data
  request.r(i3801[0], i3801[1], 0, i3800, 'm_FirstSelected')
  i3800.m_sendNavigationEvents = !!i3801[2]
  i3800.m_DragThreshold = i3801[3]
  return i3800
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3802 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3803 = data
  i3802.m_HorizontalAxis = i3803[0]
  i3802.m_VerticalAxis = i3803[1]
  i3802.m_SubmitButton = i3803[2]
  i3802.m_CancelButton = i3803[3]
  i3802.m_InputActionsPerSecond = i3803[4]
  i3802.m_RepeatDelay = i3803[5]
  i3802.m_ForceModuleActive = !!i3803[6]
  i3802.m_SendPointerHoverToParent = !!i3803[7]
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3805 = data
  i3804.color = new pc.Color(i3805[0], i3805[1], i3805[2], i3805[3])
  request.r(i3805[4], i3805[5], 0, i3804, 'sprite')
  i3804.flipX = !!i3805[6]
  i3804.flipY = !!i3805[7]
  i3804.drawMode = i3805[8]
  i3804.size = new pc.Vec2( i3805[9], i3805[10] )
  i3804.tileMode = i3805[11]
  i3804.adaptiveModeThreshold = i3805[12]
  i3804.maskInteraction = i3805[13]
  i3804.spriteSortPoint = i3805[14]
  i3804.enabled = !!i3805[15]
  request.r(i3805[16], i3805[17], 0, i3804, 'sharedMaterial')
  var i3807 = i3805[18]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 2) {
  request.r(i3807[i + 0], i3807[i + 1], 2, i3806, '')
  }
  i3804.sharedMaterials = i3806
  i3804.receiveShadows = !!i3805[19]
  i3804.shadowCastingMode = i3805[20]
  i3804.sortingLayerID = i3805[21]
  i3804.sortingOrder = i3805[22]
  i3804.lightmapIndex = i3805[23]
  i3804.lightmapSceneIndex = i3805[24]
  i3804.lightmapScaleOffset = new pc.Vec4( i3805[25], i3805[26], i3805[27], i3805[28] )
  i3804.lightProbeUsage = i3805[29]
  i3804.reflectionProbeUsage = i3805[30]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3809 = data
  i3808.center = new pc.Vec3( i3809[0], i3809[1], i3809[2] )
  i3808.radius = i3809[3]
  i3808.enabled = !!i3809[4]
  i3808.isTrigger = !!i3809[5]
  request.r(i3809[6], i3809[7], 0, i3808, 'material')
  return i3808
}

Deserializers["Box"] = function (request, data, root) {
  var i3810 = root || request.c( 'Box' )
  var i3811 = data
  i3810.useBox = !!i3811[0]
  i3810.spawnMode = i3811[1]
  var i3813 = i3811[2]
  var i3812 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3813.length; i += 2) {
  request.r(i3813[i + 0], i3813[i + 1], 1, i3812, '')
  }
  i3810.dynamicItems = i3812
  var i3815 = i3811[3]
  var i3814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3815.length; i += 2) {
  request.r(i3815[i + 0], i3815[i + 1], 1, i3814, '')
  }
  i3810.spawnTargets = i3814
  i3810.initialSpawnCount = i3811[4]
  i3810.revealDuration = i3811[5]
  i3810.showInitialBatchShadowsOnSpawn = !!i3811[6]
  request.r(i3811[7], i3811[8], 0, i3810, 'graphicController')
  return i3810
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i3820 = root || request.c( 'BoxGraphicController' )
  var i3821 = data
  request.r(i3821[0], i3821[1], 0, i3820, 'skeletonAnimation')
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3823 = data
  request.r(i3823[0], i3823[1], 0, i3822, 'sharedMesh')
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3825 = data
  request.r(i3825[0], i3825[1], 0, i3824, 'additionalVertexStreams')
  i3824.enabled = !!i3825[2]
  request.r(i3825[3], i3825[4], 0, i3824, 'sharedMaterial')
  var i3827 = i3825[5]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 2) {
  request.r(i3827[i + 0], i3827[i + 1], 2, i3826, '')
  }
  i3824.sharedMaterials = i3826
  i3824.receiveShadows = !!i3825[6]
  i3824.shadowCastingMode = i3825[7]
  i3824.sortingLayerID = i3825[8]
  i3824.sortingOrder = i3825[9]
  i3824.lightmapIndex = i3825[10]
  i3824.lightmapSceneIndex = i3825[11]
  i3824.lightmapScaleOffset = new pc.Vec4( i3825[12], i3825[13], i3825[14], i3825[15] )
  i3824.lightProbeUsage = i3825[16]
  i3824.reflectionProbeUsage = i3825[17]
  return i3824
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i3828 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i3829 = data
  i3828.loop = !!i3829[0]
  i3828.timeScale = i3829[1]
  request.r(i3829[2], i3829[3], 0, i3828, 'skeletonDataAsset')
  i3828.initialSkinName = i3829[4]
  i3828.fixPrefabOverrideViaMeshFilter = i3829[5]
  i3828.initialFlipX = !!i3829[6]
  i3828.initialFlipY = !!i3829[7]
  i3828.updateWhenInvisible = i3829[8]
  i3828.zSpacing = i3829[9]
  i3828.useClipping = !!i3829[10]
  i3828.immutableTriangles = !!i3829[11]
  i3828.pmaVertexColors = !!i3829[12]
  i3828.clearStateOnDisable = !!i3829[13]
  i3828.tintBlack = !!i3829[14]
  i3828.singleSubmesh = !!i3829[15]
  i3828.fixDrawOrder = !!i3829[16]
  i3828.addNormals = !!i3829[17]
  i3828.calculateTangents = !!i3829[18]
  i3828.maskInteraction = i3829[19]
  i3828.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i3829[20], i3828.maskMaterials)
  i3828.disableRenderingOnOverride = !!i3829[21]
  i3828._animationName = i3829[22]
  var i3831 = i3829[23]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( i3831[i + 0] );
  }
  i3828.separatorSlotNames = i3830
  return i3828
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i3832 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i3833 = data
  var i3835 = i3833[0]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 2) {
  request.r(i3835[i + 0], i3835[i + 1], 2, i3834, '')
  }
  i3832.materialsMaskDisabled = i3834
  var i3837 = i3833[1]
  var i3836 = []
  for(var i = 0; i < i3837.length; i += 2) {
  request.r(i3837[i + 0], i3837[i + 1], 2, i3836, '')
  }
  i3832.materialsInsideMask = i3836
  var i3839 = i3833[2]
  var i3838 = []
  for(var i = 0; i < i3839.length; i += 2) {
  request.r(i3839[i + 0], i3839[i + 1], 2, i3838, '')
  }
  i3832.materialsOutsideMask = i3838
  return i3832
}

Deserializers["DelayStartAnim"] = function (request, data, root) {
  var i3842 = root || request.c( 'DelayStartAnim' )
  var i3843 = data
  request.r(i3843[0], i3843[1], 0, i3842, 'anim')
  i3842.minDelay = i3843[2]
  i3842.maxDelay = i3843[3]
  return i3842
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i3844 = root || request.c( 'ItemHolder' )
  var i3845 = data
  i3844.id = i3845[0]
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3847 = data
  i3846.center = new pc.Vec3( i3847[0], i3847[1], i3847[2] )
  i3846.size = new pc.Vec3( i3847[3], i3847[4], i3847[5] )
  i3846.enabled = !!i3847[6]
  i3846.isTrigger = !!i3847[7]
  request.r(i3847[8], i3847[9], 0, i3846, 'material')
  return i3846
}

Deserializers["Item"] = function (request, data, root) {
  var i3848 = root || request.c( 'Item' )
  var i3849 = data
  i3848.fxType = i3849[0]
  i3848.fxTypeOnPlace = i3849[1]
  i3848.id = i3849[2]
  i3848.currentState = i3849[3]
  i3848.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i3849[4] )
  request.r(i3849[5], i3849[6], 0, i3848, 'auraEffect')
  i3848.scaleOnSpawn = !!i3849[7]
  i3848.spawnScaleMultiplier = i3849[8]
  request.r(i3849[9], i3849[10], 0, i3848, 'correctHolderTransform')
  request.r(i3849[11], i3849[12], 0, i3848, 'shadowOnHolder')
  i3848.canShowShadowHint = !!i3849[13]
  i3848.waitingPosition = new pc.Vec3( i3849[14], i3849[15], i3849[16] )
  request.r(i3849[17], i3849[18], 0, i3848, 'spriteRenderer')
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3851 = data
  i3850.ambientIntensity = i3851[0]
  i3850.reflectionIntensity = i3851[1]
  i3850.ambientMode = i3851[2]
  i3850.ambientLight = new pc.Color(i3851[3], i3851[4], i3851[5], i3851[6])
  i3850.ambientSkyColor = new pc.Color(i3851[7], i3851[8], i3851[9], i3851[10])
  i3850.ambientGroundColor = new pc.Color(i3851[11], i3851[12], i3851[13], i3851[14])
  i3850.ambientEquatorColor = new pc.Color(i3851[15], i3851[16], i3851[17], i3851[18])
  i3850.fogColor = new pc.Color(i3851[19], i3851[20], i3851[21], i3851[22])
  i3850.fogEndDistance = i3851[23]
  i3850.fogStartDistance = i3851[24]
  i3850.fogDensity = i3851[25]
  i3850.fog = !!i3851[26]
  request.r(i3851[27], i3851[28], 0, i3850, 'skybox')
  i3850.fogMode = i3851[29]
  var i3853 = i3851[30]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3853[i + 0]) );
  }
  i3850.lightmaps = i3852
  i3850.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3851[31], i3850.lightProbes)
  i3850.lightmapsMode = i3851[32]
  i3850.mixedBakeMode = i3851[33]
  i3850.environmentLightingMode = i3851[34]
  i3850.ambientProbe = new pc.SphericalHarmonicsL2(i3851[35])
  i3850.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3851[36])
  i3850.useReferenceAmbientProbe = !!i3851[37]
  request.r(i3851[38], i3851[39], 0, i3850, 'customReflection')
  request.r(i3851[40], i3851[41], 0, i3850, 'defaultReflection')
  i3850.defaultReflectionMode = i3851[42]
  i3850.defaultReflectionResolution = i3851[43]
  i3850.sunLightObjectId = i3851[44]
  i3850.pixelLightCount = i3851[45]
  i3850.defaultReflectionHDR = !!i3851[46]
  i3850.hasLightDataAsset = !!i3851[47]
  i3850.hasManualGenerate = !!i3851[48]
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3857 = data
  request.r(i3857[0], i3857[1], 0, i3856, 'lightmapColor')
  request.r(i3857[2], i3857[3], 0, i3856, 'lightmapDirection')
  request.r(i3857[4], i3857[5], 0, i3856, 'shadowMask')
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3858 = root || new UnityEngine.LightProbes()
  var i3859 = data
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3867 = data
  var i3869 = i3867[0]
  var i3868 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3869[i + 0]));
  }
  i3866.ShaderCompilationErrors = i3868
  i3866.name = i3867[1]
  i3866.guid = i3867[2]
  var i3871 = i3867[3]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( i3871[i + 0] );
  }
  i3866.shaderDefinedKeywords = i3870
  var i3873 = i3867[4]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 1) {
    i3872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3873[i + 0]) );
  }
  i3866.passes = i3872
  var i3875 = i3867[5]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 1) {
    i3874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3875[i + 0]) );
  }
  i3866.usePasses = i3874
  var i3877 = i3867[6]
  var i3876 = []
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3877[i + 0]) );
  }
  i3866.defaultParameterValues = i3876
  request.r(i3867[7], i3867[8], 0, i3866, 'unityFallbackShader')
  i3866.readDepth = !!i3867[9]
  i3866.hasDepthOnlyPass = !!i3867[10]
  i3866.isCreatedByShaderGraph = !!i3867[11]
  i3866.disableBatching = !!i3867[12]
  i3866.compiled = !!i3867[13]
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3881 = data
  i3880.shaderName = i3881[0]
  i3880.errorMessage = i3881[1]
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3884 = root || new pc.UnityShaderPass()
  var i3885 = data
  i3884.id = i3885[0]
  i3884.subShaderIndex = i3885[1]
  i3884.name = i3885[2]
  i3884.passType = i3885[3]
  i3884.grabPassTextureName = i3885[4]
  i3884.usePass = !!i3885[5]
  i3884.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[6], i3884.zTest)
  i3884.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[7], i3884.zWrite)
  i3884.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[8], i3884.culling)
  i3884.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3885[9], i3884.blending)
  i3884.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3885[10], i3884.alphaBlending)
  i3884.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[11], i3884.colorWriteMask)
  i3884.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[12], i3884.offsetUnits)
  i3884.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[13], i3884.offsetFactor)
  i3884.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[14], i3884.stencilRef)
  i3884.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[15], i3884.stencilReadMask)
  i3884.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3885[16], i3884.stencilWriteMask)
  i3884.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3885[17], i3884.stencilOp)
  i3884.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3885[18], i3884.stencilOpFront)
  i3884.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3885[19], i3884.stencilOpBack)
  var i3887 = i3885[20]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3887[i + 0]) );
  }
  i3884.tags = i3886
  var i3889 = i3885[21]
  var i3888 = []
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.push( i3889[i + 0] );
  }
  i3884.passDefinedKeywords = i3888
  var i3891 = i3885[22]
  var i3890 = []
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3891[i + 0]) );
  }
  i3884.passDefinedKeywordGroups = i3890
  var i3893 = i3885[23]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3893[i + 0]) );
  }
  i3884.variants = i3892
  var i3895 = i3885[24]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3895[i + 0]) );
  }
  i3884.excludedVariants = i3894
  i3884.hasDepthReader = !!i3885[25]
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3897 = data
  i3896.val = i3897[0]
  i3896.name = i3897[1]
  return i3896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3899 = data
  i3898.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3899[0], i3898.src)
  i3898.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3899[1], i3898.dst)
  i3898.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3899[2], i3898.op)
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3901 = data
  i3900.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3901[0], i3900.pass)
  i3900.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3901[1], i3900.fail)
  i3900.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3901[2], i3900.zFail)
  i3900.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3901[3], i3900.comp)
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3905 = data
  i3904.name = i3905[0]
  i3904.value = i3905[1]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3909 = data
  var i3911 = i3909[0]
  var i3910 = []
  for(var i = 0; i < i3911.length; i += 1) {
    i3910.push( i3911[i + 0] );
  }
  i3908.keywords = i3910
  i3908.hasDiscard = !!i3909[1]
  return i3908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3915 = data
  i3914.passId = i3915[0]
  i3914.subShaderIndex = i3915[1]
  var i3917 = i3915[2]
  var i3916 = []
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.push( i3917[i + 0] );
  }
  i3914.keywords = i3916
  i3914.vertexProgram = i3915[3]
  i3914.fragmentProgram = i3915[4]
  i3914.exportedForWebGl2 = !!i3915[5]
  i3914.readDepth = !!i3915[6]
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3921 = data
  request.r(i3921[0], i3921[1], 0, i3920, 'shader')
  i3920.pass = i3921[2]
  return i3920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3925 = data
  i3924.name = i3925[0]
  i3924.type = i3925[1]
  i3924.value = new pc.Vec4( i3925[2], i3925[3], i3925[4], i3925[5] )
  i3924.textureValue = i3925[6]
  i3924.shaderPropertyFlag = i3925[7]
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3927 = data
  i3926.name = i3927[0]
  request.r(i3927[1], i3927[2], 0, i3926, 'texture')
  i3926.aabb = i3927[3]
  i3926.vertices = i3927[4]
  i3926.triangles = i3927[5]
  i3926.textureRect = UnityEngine.Rect.MinMaxRect(i3927[6], i3927[7], i3927[8], i3927[9])
  i3926.packedRect = UnityEngine.Rect.MinMaxRect(i3927[10], i3927[11], i3927[12], i3927[13])
  i3926.border = new pc.Vec4( i3927[14], i3927[15], i3927[16], i3927[17] )
  i3926.transparency = i3927[18]
  i3926.bounds = i3927[19]
  i3926.pixelsPerUnit = i3927[20]
  i3926.textureWidth = i3927[21]
  i3926.textureHeight = i3927[22]
  i3926.nativeSize = new pc.Vec2( i3927[23], i3927[24] )
  i3926.pivot = new pc.Vec2( i3927[25], i3927[26] )
  i3926.textureRectOffset = new pc.Vec2( i3927[27], i3927[28] )
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3929 = data
  i3928.name = i3929[0]
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3931 = data
  i3930.name = i3931[0]
  i3930.wrapMode = i3931[1]
  i3930.isLooping = !!i3931[2]
  i3930.length = i3931[3]
  var i3933 = i3931[4]
  var i3932 = []
  for(var i = 0; i < i3933.length; i += 1) {
    i3932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3933[i + 0]) );
  }
  i3930.curves = i3932
  var i3935 = i3931[5]
  var i3934 = []
  for(var i = 0; i < i3935.length; i += 1) {
    i3934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3935[i + 0]) );
  }
  i3930.events = i3934
  i3930.halfPrecision = !!i3931[6]
  i3930._frameRate = i3931[7]
  i3930.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3931[8], i3930.localBounds)
  i3930.hasMuscleCurves = !!i3931[9]
  var i3937 = i3931[10]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( i3937[i + 0] );
  }
  i3930.clipMuscleConstant = i3936
  i3930.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3931[11], i3930.clipBindingConstant)
  return i3930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3941 = data
  i3940.path = i3941[0]
  i3940.hash = i3941[1]
  i3940.componentType = i3941[2]
  i3940.property = i3941[3]
  i3940.keys = i3941[4]
  var i3943 = i3941[5]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3943[i + 0]) );
  }
  i3940.objectReferenceKeys = i3942
  return i3940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3947 = data
  i3946.time = i3947[0]
  request.r(i3947[1], i3947[2], 0, i3946, 'value')
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3951 = data
  i3950.functionName = i3951[0]
  i3950.floatParameter = i3951[1]
  i3950.intParameter = i3951[2]
  i3950.stringParameter = i3951[3]
  request.r(i3951[4], i3951[5], 0, i3950, 'objectReferenceParameter')
  i3950.time = i3951[6]
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3953 = data
  i3952.center = new pc.Vec3( i3953[0], i3953[1], i3953[2] )
  i3952.extends = new pc.Vec3( i3953[3], i3953[4], i3953[5] )
  return i3952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3957 = data
  var i3959 = i3957[0]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( i3959[i + 0] );
  }
  i3956.genericBindings = i3958
  var i3961 = i3957[1]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( i3961[i + 0] );
  }
  i3956.pptrCurveMapping = i3960
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3963 = data
  i3962.name = i3963[0]
  var i3965 = i3963[1]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3965[i + 0]) );
  }
  i3962.layers = i3964
  var i3967 = i3963[2]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3967[i + 0]) );
  }
  i3962.parameters = i3966
  i3962.animationClips = i3963[3]
  i3962.avatarUnsupported = i3963[4]
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3971 = data
  i3970.name = i3971[0]
  i3970.defaultWeight = i3971[1]
  i3970.blendingMode = i3971[2]
  i3970.avatarMask = i3971[3]
  i3970.syncedLayerIndex = i3971[4]
  i3970.syncedLayerAffectsTiming = !!i3971[5]
  i3970.syncedLayers = i3971[6]
  i3970.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3971[7], i3970.stateMachine)
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3973 = data
  i3972.id = i3973[0]
  i3972.name = i3973[1]
  i3972.path = i3973[2]
  var i3975 = i3973[3]
  var i3974 = []
  for(var i = 0; i < i3975.length; i += 1) {
    i3974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3975[i + 0]) );
  }
  i3972.states = i3974
  var i3977 = i3973[4]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3977[i + 0]) );
  }
  i3972.machines = i3976
  var i3979 = i3973[5]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3979[i + 0]) );
  }
  i3972.entryStateTransitions = i3978
  var i3981 = i3973[6]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3981[i + 0]) );
  }
  i3972.exitStateTransitions = i3980
  var i3983 = i3973[7]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3983[i + 0]) );
  }
  i3972.anyStateTransitions = i3982
  i3972.defaultStateId = i3973[8]
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3987 = data
  i3986.id = i3987[0]
  i3986.name = i3987[1]
  i3986.cycleOffset = i3987[2]
  i3986.cycleOffsetParameter = i3987[3]
  i3986.cycleOffsetParameterActive = !!i3987[4]
  i3986.mirror = !!i3987[5]
  i3986.mirrorParameter = i3987[6]
  i3986.mirrorParameterActive = !!i3987[7]
  i3986.motionId = i3987[8]
  i3986.nameHash = i3987[9]
  i3986.fullPathHash = i3987[10]
  i3986.speed = i3987[11]
  i3986.speedParameter = i3987[12]
  i3986.speedParameterActive = !!i3987[13]
  i3986.tag = i3987[14]
  i3986.tagHash = i3987[15]
  i3986.writeDefaultValues = !!i3987[16]
  var i3989 = i3987[17]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 2) {
  request.r(i3989[i + 0], i3989[i + 1], 2, i3988, '')
  }
  i3986.behaviours = i3988
  var i3991 = i3987[18]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3991[i + 0]) );
  }
  i3986.transitions = i3990
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3997 = data
  i3996.fullPath = i3997[0]
  i3996.canTransitionToSelf = !!i3997[1]
  i3996.duration = i3997[2]
  i3996.exitTime = i3997[3]
  i3996.hasExitTime = !!i3997[4]
  i3996.hasFixedDuration = !!i3997[5]
  i3996.interruptionSource = i3997[6]
  i3996.offset = i3997[7]
  i3996.orderedInterruption = !!i3997[8]
  i3996.destinationStateId = i3997[9]
  i3996.isExit = !!i3997[10]
  i3996.mute = !!i3997[11]
  i3996.solo = !!i3997[12]
  var i3999 = i3997[13]
  var i3998 = []
  for(var i = 0; i < i3999.length; i += 1) {
    i3998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3999[i + 0]) );
  }
  i3996.conditions = i3998
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4005 = data
  i4004.destinationStateId = i4005[0]
  i4004.isExit = !!i4005[1]
  i4004.mute = !!i4005[2]
  i4004.solo = !!i4005[3]
  var i4007 = i4005[4]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4007[i + 0]) );
  }
  i4004.conditions = i4006
  return i4004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4011 = data
  i4010.defaultBool = !!i4011[0]
  i4010.defaultFloat = i4011[1]
  i4010.defaultInt = i4011[2]
  i4010.name = i4011[3]
  i4010.nameHash = i4011[4]
  i4010.type = i4011[5]
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4013 = data
  i4012.name = i4013[0]
  i4012.bytes64 = i4013[1]
  i4012.data = i4013[2]
  return i4012
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4014 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4015 = data
  i4014.normalStyle = i4015[0]
  i4014.normalSpacingOffset = i4015[1]
  i4014.boldStyle = i4015[2]
  i4014.boldSpacing = i4015[3]
  i4014.italicStyle = i4015[4]
  i4014.tabSize = i4015[5]
  request.r(i4015[6], i4015[7], 0, i4014, 'atlas')
  i4014.m_SourceFontFileGUID = i4015[8]
  i4014.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4015[9], i4014.m_CreationSettings)
  request.r(i4015[10], i4015[11], 0, i4014, 'm_SourceFontFile')
  i4014.m_SourceFontFilePath = i4015[12]
  i4014.m_AtlasPopulationMode = i4015[13]
  i4014.InternalDynamicOS = !!i4015[14]
  var i4017 = i4015[15]
  var i4016 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4017.length; i += 1) {
    i4016.add(request.d('UnityEngine.TextCore.Glyph', i4017[i + 0]));
  }
  i4014.m_GlyphTable = i4016
  var i4019 = i4015[16]
  var i4018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4019.length; i += 1) {
    i4018.add(request.d('TMPro.TMP_Character', i4019[i + 0]));
  }
  i4014.m_CharacterTable = i4018
  var i4021 = i4015[17]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 2) {
  request.r(i4021[i + 0], i4021[i + 1], 2, i4020, '')
  }
  i4014.m_AtlasTextures = i4020
  i4014.m_AtlasTextureIndex = i4015[18]
  i4014.m_IsMultiAtlasTexturesEnabled = !!i4015[19]
  i4014.m_GetFontFeatures = !!i4015[20]
  i4014.m_ClearDynamicDataOnBuild = !!i4015[21]
  i4014.m_AtlasWidth = i4015[22]
  i4014.m_AtlasHeight = i4015[23]
  i4014.m_AtlasPadding = i4015[24]
  i4014.m_AtlasRenderMode = i4015[25]
  var i4023 = i4015[26]
  var i4022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4023.length; i += 1) {
    i4022.add(request.d('UnityEngine.TextCore.GlyphRect', i4023[i + 0]));
  }
  i4014.m_UsedGlyphRects = i4022
  var i4025 = i4015[27]
  var i4024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.add(request.d('UnityEngine.TextCore.GlyphRect', i4025[i + 0]));
  }
  i4014.m_FreeGlyphRects = i4024
  i4014.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4015[28], i4014.m_FontFeatureTable)
  i4014.m_ShouldReimportFontFeatures = !!i4015[29]
  var i4027 = i4015[30]
  var i4026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4027.length; i += 2) {
  request.r(i4027[i + 0], i4027[i + 1], 1, i4026, '')
  }
  i4014.m_FallbackFontAssetTable = i4026
  var i4029 = i4015[31]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( request.d('TMPro.TMP_FontWeightPair', i4029[i + 0]) );
  }
  i4014.m_FontWeightTable = i4028
  var i4031 = i4015[32]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.push( request.d('TMPro.TMP_FontWeightPair', i4031[i + 0]) );
  }
  i4014.fontWeights = i4030
  i4014.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4015[33], i4014.m_fontInfo)
  var i4033 = i4015[34]
  var i4032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4033.length; i += 1) {
    i4032.add(request.d('TMPro.TMP_Glyph', i4033[i + 0]));
  }
  i4014.m_glyphInfoList = i4032
  i4014.m_KerningTable = request.d('TMPro.KerningTable', i4015[35], i4014.m_KerningTable)
  var i4035 = i4015[36]
  var i4034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4035.length; i += 2) {
  request.r(i4035[i + 0], i4035[i + 1], 1, i4034, '')
  }
  i4014.fallbackFontAssets = i4034
  i4014.m_Version = i4015[37]
  i4014.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4015[38], i4014.m_FaceInfo)
  request.r(i4015[39], i4015[40], 0, i4014, 'm_Material')
  return i4014
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4036 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4037 = data
  i4036.sourceFontFileName = i4037[0]
  i4036.sourceFontFileGUID = i4037[1]
  i4036.faceIndex = i4037[2]
  i4036.pointSizeSamplingMode = i4037[3]
  i4036.pointSize = i4037[4]
  i4036.padding = i4037[5]
  i4036.paddingMode = i4037[6]
  i4036.packingMode = i4037[7]
  i4036.atlasWidth = i4037[8]
  i4036.atlasHeight = i4037[9]
  i4036.characterSetSelectionMode = i4037[10]
  i4036.characterSequence = i4037[11]
  i4036.referencedFontAssetGUID = i4037[12]
  i4036.referencedTextAssetGUID = i4037[13]
  i4036.fontStyle = i4037[14]
  i4036.fontStyleModifier = i4037[15]
  i4036.renderMode = i4037[16]
  i4036.includeFontFeatures = !!i4037[17]
  return i4036
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4040 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4041 = data
  i4040.m_Index = i4041[0]
  i4040.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4041[1], i4040.m_Metrics)
  i4040.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4041[2], i4040.m_GlyphRect)
  i4040.m_Scale = i4041[3]
  i4040.m_AtlasIndex = i4041[4]
  i4040.m_ClassDefinitionType = i4041[5]
  return i4040
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4042 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4043 = data
  i4042.m_Width = i4043[0]
  i4042.m_Height = i4043[1]
  i4042.m_HorizontalBearingX = i4043[2]
  i4042.m_HorizontalBearingY = i4043[3]
  i4042.m_HorizontalAdvance = i4043[4]
  return i4042
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4044 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4045 = data
  i4044.m_X = i4045[0]
  i4044.m_Y = i4045[1]
  i4044.m_Width = i4045[2]
  i4044.m_Height = i4045[3]
  return i4044
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4048 = root || request.c( 'TMPro.TMP_Character' )
  var i4049 = data
  i4048.m_ElementType = i4049[0]
  i4048.m_Unicode = i4049[1]
  i4048.m_GlyphIndex = i4049[2]
  i4048.m_Scale = i4049[3]
  return i4048
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4054 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4055 = data
  var i4057 = i4055[0]
  var i4056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.add(request.d('TMPro.MultipleSubstitutionRecord', i4057[i + 0]));
  }
  i4054.m_MultipleSubstitutionRecords = i4056
  var i4059 = i4055[1]
  var i4058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.add(request.d('TMPro.LigatureSubstitutionRecord', i4059[i + 0]));
  }
  i4054.m_LigatureSubstitutionRecords = i4058
  var i4061 = i4055[2]
  var i4060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4061[i + 0]));
  }
  i4054.m_GlyphPairAdjustmentRecords = i4060
  var i4063 = i4055[3]
  var i4062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4063[i + 0]));
  }
  i4054.m_MarkToBaseAdjustmentRecords = i4062
  var i4065 = i4055[4]
  var i4064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4065[i + 0]));
  }
  i4054.m_MarkToMarkAdjustmentRecords = i4064
  return i4054
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4068 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4069 = data
  i4068.m_TargetGlyphID = i4069[0]
  i4068.m_SubstituteGlyphIDs = i4069[1]
  return i4068
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4072 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4073 = data
  i4072.m_ComponentGlyphIDs = i4073[0]
  i4072.m_LigatureGlyphID = i4073[1]
  return i4072
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4076 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4077 = data
  i4076.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4077[0], i4076.m_FirstAdjustmentRecord)
  i4076.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4077[1], i4076.m_SecondAdjustmentRecord)
  i4076.m_FeatureLookupFlags = i4077[2]
  return i4076
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4080 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4081 = data
  i4080.m_BaseGlyphID = i4081[0]
  i4080.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4081[1], i4080.m_BaseGlyphAnchorPoint)
  i4080.m_MarkGlyphID = i4081[2]
  i4080.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4081[3], i4080.m_MarkPositionAdjustment)
  return i4080
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4084 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4085 = data
  i4084.m_BaseMarkGlyphID = i4085[0]
  i4084.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4085[1], i4084.m_BaseMarkGlyphAnchorPoint)
  i4084.m_CombiningMarkGlyphID = i4085[2]
  i4084.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4085[3], i4084.m_CombiningMarkPositionAdjustment)
  return i4084
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4090 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4091 = data
  request.r(i4091[0], i4091[1], 0, i4090, 'regularTypeface')
  request.r(i4091[2], i4091[3], 0, i4090, 'italicTypeface')
  return i4090
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4092 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4093 = data
  i4092.Name = i4093[0]
  i4092.PointSize = i4093[1]
  i4092.Scale = i4093[2]
  i4092.CharacterCount = i4093[3]
  i4092.LineHeight = i4093[4]
  i4092.Baseline = i4093[5]
  i4092.Ascender = i4093[6]
  i4092.CapHeight = i4093[7]
  i4092.Descender = i4093[8]
  i4092.CenterLine = i4093[9]
  i4092.SuperscriptOffset = i4093[10]
  i4092.SubscriptOffset = i4093[11]
  i4092.SubSize = i4093[12]
  i4092.Underline = i4093[13]
  i4092.UnderlineThickness = i4093[14]
  i4092.strikethrough = i4093[15]
  i4092.strikethroughThickness = i4093[16]
  i4092.TabWidth = i4093[17]
  i4092.Padding = i4093[18]
  i4092.AtlasWidth = i4093[19]
  i4092.AtlasHeight = i4093[20]
  return i4092
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4096 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4097 = data
  i4096.id = i4097[0]
  i4096.x = i4097[1]
  i4096.y = i4097[2]
  i4096.width = i4097[3]
  i4096.height = i4097[4]
  i4096.xOffset = i4097[5]
  i4096.yOffset = i4097[6]
  i4096.xAdvance = i4097[7]
  i4096.scale = i4097[8]
  return i4096
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4098 = root || request.c( 'TMPro.KerningTable' )
  var i4099 = data
  var i4101 = i4099[0]
  var i4100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.add(request.d('TMPro.KerningPair', i4101[i + 0]));
  }
  i4098.kerningPairs = i4100
  return i4098
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4104 = root || request.c( 'TMPro.KerningPair' )
  var i4105 = data
  i4104.xOffset = i4105[0]
  i4104.m_FirstGlyph = i4105[1]
  i4104.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4105[2], i4104.m_FirstGlyphAdjustments)
  i4104.m_SecondGlyph = i4105[3]
  i4104.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4105[4], i4104.m_SecondGlyphAdjustments)
  i4104.m_IgnoreSpacingAdjustments = !!i4105[5]
  return i4104
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4106 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4107 = data
  i4106.m_FaceIndex = i4107[0]
  i4106.m_FamilyName = i4107[1]
  i4106.m_StyleName = i4107[2]
  i4106.m_PointSize = i4107[3]
  i4106.m_Scale = i4107[4]
  i4106.m_UnitsPerEM = i4107[5]
  i4106.m_LineHeight = i4107[6]
  i4106.m_AscentLine = i4107[7]
  i4106.m_CapLine = i4107[8]
  i4106.m_MeanLine = i4107[9]
  i4106.m_Baseline = i4107[10]
  i4106.m_DescentLine = i4107[11]
  i4106.m_SuperscriptOffset = i4107[12]
  i4106.m_SuperscriptSize = i4107[13]
  i4106.m_SubscriptOffset = i4107[14]
  i4106.m_SubscriptSize = i4107[15]
  i4106.m_UnderlineOffset = i4107[16]
  i4106.m_UnderlineThickness = i4107[17]
  i4106.m_StrikethroughOffset = i4107[18]
  i4106.m_StrikethroughThickness = i4107[19]
  i4106.m_TabWidth = i4107[20]
  return i4106
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4108 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4109 = data
  var i4111 = i4109[0]
  var i4110 = []
  for(var i = 0; i < i4111.length; i += 2) {
  request.r(i4111[i + 0], i4111[i + 1], 2, i4110, '')
  }
  i4108.atlasAssets = i4110
  i4108.scale = i4109[1]
  request.r(i4109[2], i4109[3], 0, i4108, 'skeletonJSON')
  i4108.isUpgradingBlendModeMaterials = !!i4109[4]
  i4108.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4109[5], i4108.blendModeMaterials)
  var i4113 = i4109[6]
  var i4112 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4113.length; i += 2) {
  request.r(i4113[i + 0], i4113[i + 1], 1, i4112, '')
  }
  i4108.skeletonDataModifiers = i4112
  var i4115 = i4109[7]
  var i4114 = []
  for(var i = 0; i < i4115.length; i += 1) {
    i4114.push( i4115[i + 0] );
  }
  i4108.fromAnimation = i4114
  var i4117 = i4109[8]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( i4117[i + 0] );
  }
  i4108.toAnimation = i4116
  i4108.duration = i4109[9]
  i4108.defaultMix = i4109[10]
  request.r(i4109[11], i4109[12], 0, i4108, 'controller')
  return i4108
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4120 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4121 = data
  i4120.applyAdditiveMaterial = !!i4121[0]
  var i4123 = i4121[1]
  var i4122 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4123[i + 0]));
  }
  i4120.additiveMaterials = i4122
  var i4125 = i4121[2]
  var i4124 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4125.length; i += 1) {
    i4124.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4125[i + 0]));
  }
  i4120.multiplyMaterials = i4124
  var i4127 = i4121[3]
  var i4126 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4127[i + 0]));
  }
  i4120.screenMaterials = i4126
  i4120.requiresBlendModeMaterials = !!i4121[4]
  return i4120
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4130 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4131 = data
  i4130.pageName = i4131[0]
  request.r(i4131[1], i4131[2], 0, i4130, 'material')
  return i4130
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4134 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4135 = data
  request.r(i4135[0], i4135[1], 0, i4134, 'atlasFile')
  var i4137 = i4135[2]
  var i4136 = []
  for(var i = 0; i < i4137.length; i += 2) {
  request.r(i4137[i + 0], i4137[i + 1], 2, i4136, '')
  }
  i4134.materials = i4136
  return i4134
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4138 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4139 = data
  i4138.useSafeMode = !!i4139[0]
  i4138.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4139[1], i4138.safeModeOptions)
  i4138.timeScale = i4139[2]
  i4138.unscaledTimeScale = i4139[3]
  i4138.useSmoothDeltaTime = !!i4139[4]
  i4138.maxSmoothUnscaledTime = i4139[5]
  i4138.rewindCallbackMode = i4139[6]
  i4138.showUnityEditorReport = !!i4139[7]
  i4138.logBehaviour = i4139[8]
  i4138.drawGizmos = !!i4139[9]
  i4138.defaultRecyclable = !!i4139[10]
  i4138.defaultAutoPlay = i4139[11]
  i4138.defaultUpdateType = i4139[12]
  i4138.defaultTimeScaleIndependent = !!i4139[13]
  i4138.defaultEaseType = i4139[14]
  i4138.defaultEaseOvershootOrAmplitude = i4139[15]
  i4138.defaultEasePeriod = i4139[16]
  i4138.defaultAutoKill = !!i4139[17]
  i4138.defaultLoopType = i4139[18]
  i4138.debugMode = !!i4139[19]
  i4138.debugStoreTargetId = !!i4139[20]
  i4138.showPreviewPanel = !!i4139[21]
  i4138.storeSettingsLocation = i4139[22]
  i4138.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4139[23], i4138.modules)
  i4138.createASMDEF = !!i4139[24]
  i4138.showPlayingTweens = !!i4139[25]
  i4138.showPausedTweens = !!i4139[26]
  return i4138
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4140 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4141 = data
  i4140.logBehaviour = i4141[0]
  i4140.nestedTweenFailureBehaviour = i4141[1]
  return i4140
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4142 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4143 = data
  i4142.showPanel = !!i4143[0]
  i4142.audioEnabled = !!i4143[1]
  i4142.physicsEnabled = !!i4143[2]
  i4142.physics2DEnabled = !!i4143[3]
  i4142.spriteEnabled = !!i4143[4]
  i4142.uiEnabled = !!i4143[5]
  i4142.uiToolkitEnabled = !!i4143[6]
  i4142.textMeshProEnabled = !!i4143[7]
  i4142.tk2DEnabled = !!i4143[8]
  i4142.deAudioEnabled = !!i4143[9]
  i4142.deUnityExtendedEnabled = !!i4143[10]
  i4142.epoOutlineEnabled = !!i4143[11]
  return i4142
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4144 = root || request.c( 'TMPro.TMP_Settings' )
  var i4145 = data
  i4144.assetVersion = i4145[0]
  i4144.m_TextWrappingMode = i4145[1]
  i4144.m_enableKerning = !!i4145[2]
  var i4147 = i4145[3]
  var i4146 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4147.length; i += 1) {
    i4146.add(i4147[i + 0]);
  }
  i4144.m_ActiveFontFeatures = i4146
  i4144.m_enableExtraPadding = !!i4145[4]
  i4144.m_enableTintAllSprites = !!i4145[5]
  i4144.m_enableParseEscapeCharacters = !!i4145[6]
  i4144.m_EnableRaycastTarget = !!i4145[7]
  i4144.m_GetFontFeaturesAtRuntime = !!i4145[8]
  i4144.m_missingGlyphCharacter = i4145[9]
  i4144.m_ClearDynamicDataOnBuild = !!i4145[10]
  i4144.m_warningsDisabled = !!i4145[11]
  request.r(i4145[12], i4145[13], 0, i4144, 'm_defaultFontAsset')
  i4144.m_defaultFontAssetPath = i4145[14]
  i4144.m_defaultFontSize = i4145[15]
  i4144.m_defaultAutoSizeMinRatio = i4145[16]
  i4144.m_defaultAutoSizeMaxRatio = i4145[17]
  i4144.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4145[18], i4145[19] )
  i4144.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4145[20], i4145[21] )
  i4144.m_autoSizeTextContainer = !!i4145[22]
  i4144.m_IsTextObjectScaleStatic = !!i4145[23]
  var i4149 = i4145[24]
  var i4148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4149.length; i += 2) {
  request.r(i4149[i + 0], i4149[i + 1], 1, i4148, '')
  }
  i4144.m_fallbackFontAssets = i4148
  i4144.m_matchMaterialPreset = !!i4145[25]
  i4144.m_HideSubTextObjects = !!i4145[26]
  request.r(i4145[27], i4145[28], 0, i4144, 'm_defaultSpriteAsset')
  i4144.m_defaultSpriteAssetPath = i4145[29]
  i4144.m_enableEmojiSupport = !!i4145[30]
  i4144.m_MissingCharacterSpriteUnicode = i4145[31]
  var i4151 = i4145[32]
  var i4150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4151.length; i += 2) {
  request.r(i4151[i + 0], i4151[i + 1], 1, i4150, '')
  }
  i4144.m_EmojiFallbackTextAssets = i4150
  i4144.m_defaultColorGradientPresetsPath = i4145[33]
  request.r(i4145[34], i4145[35], 0, i4144, 'm_defaultStyleSheet')
  i4144.m_StyleSheetsResourcePath = i4145[36]
  request.r(i4145[37], i4145[38], 0, i4144, 'm_leadingCharacters')
  request.r(i4145[39], i4145[40], 0, i4144, 'm_followingCharacters')
  i4144.m_UseModernHangulLineBreakingRules = !!i4145[41]
  return i4144
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4154 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4155 = data
  request.r(i4155[0], i4155[1], 0, i4154, 'spriteSheet')
  var i4157 = i4155[2]
  var i4156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4157.length; i += 1) {
    i4156.add(request.d('TMPro.TMP_Sprite', i4157[i + 0]));
  }
  i4154.spriteInfoList = i4156
  var i4159 = i4155[3]
  var i4158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4159.length; i += 2) {
  request.r(i4159[i + 0], i4159[i + 1], 1, i4158, '')
  }
  i4154.fallbackSpriteAssets = i4158
  var i4161 = i4155[4]
  var i4160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4161.length; i += 1) {
    i4160.add(request.d('TMPro.TMP_SpriteCharacter', i4161[i + 0]));
  }
  i4154.m_SpriteCharacterTable = i4160
  var i4163 = i4155[5]
  var i4162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.add(request.d('TMPro.TMP_SpriteGlyph', i4163[i + 0]));
  }
  i4154.m_GlyphTable = i4162
  i4154.m_Version = i4155[6]
  i4154.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4155[7], i4154.m_FaceInfo)
  request.r(i4155[8], i4155[9], 0, i4154, 'm_Material')
  return i4154
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4166 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4167 = data
  i4166.name = i4167[0]
  i4166.hashCode = i4167[1]
  i4166.unicode = i4167[2]
  i4166.pivot = new pc.Vec2( i4167[3], i4167[4] )
  request.r(i4167[5], i4167[6], 0, i4166, 'sprite')
  i4166.id = i4167[7]
  i4166.x = i4167[8]
  i4166.y = i4167[9]
  i4166.width = i4167[10]
  i4166.height = i4167[11]
  i4166.xOffset = i4167[12]
  i4166.yOffset = i4167[13]
  i4166.xAdvance = i4167[14]
  i4166.scale = i4167[15]
  return i4166
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4172 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4173 = data
  i4172.m_Name = i4173[0]
  i4172.m_ElementType = i4173[1]
  i4172.m_Unicode = i4173[2]
  i4172.m_GlyphIndex = i4173[3]
  i4172.m_Scale = i4173[4]
  return i4172
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4176 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4177 = data
  request.r(i4177[0], i4177[1], 0, i4176, 'sprite')
  i4176.m_Index = i4177[2]
  i4176.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4177[3], i4176.m_Metrics)
  i4176.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4177[4], i4176.m_GlyphRect)
  i4176.m_Scale = i4177[5]
  i4176.m_AtlasIndex = i4177[6]
  i4176.m_ClassDefinitionType = i4177[7]
  return i4176
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4178 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4179 = data
  var i4181 = i4179[0]
  var i4180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4181.length; i += 1) {
    i4180.add(request.d('TMPro.TMP_Style', i4181[i + 0]));
  }
  i4178.m_StyleList = i4180
  return i4178
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4184 = root || request.c( 'TMPro.TMP_Style' )
  var i4185 = data
  i4184.m_Name = i4185[0]
  i4184.m_HashCode = i4185[1]
  i4184.m_OpeningDefinition = i4185[2]
  i4184.m_ClosingDefinition = i4185[3]
  i4184.m_OpeningTagArray = i4185[4]
  i4184.m_ClosingTagArray = i4185[5]
  return i4184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4187 = data
  var i4189 = i4187[0]
  var i4188 = []
  for(var i = 0; i < i4189.length; i += 1) {
    i4188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4189[i + 0]) );
  }
  i4186.files = i4188
  i4186.componentToPrefabIds = i4187[1]
  return i4186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4193 = data
  i4192.path = i4193[0]
  request.r(i4193[1], i4193[2], 0, i4192, 'unityObject')
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4195 = data
  var i4197 = i4195[0]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 1) {
    i4196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4197[i + 0]) );
  }
  i4194.scriptsExecutionOrder = i4196
  var i4199 = i4195[1]
  var i4198 = []
  for(var i = 0; i < i4199.length; i += 1) {
    i4198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4199[i + 0]) );
  }
  i4194.sortingLayers = i4198
  var i4201 = i4195[2]
  var i4200 = []
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4201[i + 0]) );
  }
  i4194.cullingLayers = i4200
  i4194.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4195[3], i4194.timeSettings)
  i4194.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4195[4], i4194.physicsSettings)
  i4194.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4195[5], i4194.physics2DSettings)
  i4194.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4195[6], i4194.qualitySettings)
  i4194.enableRealtimeShadows = !!i4195[7]
  i4194.enableAutoInstancing = !!i4195[8]
  i4194.enableStaticBatching = !!i4195[9]
  i4194.enableDynamicBatching = !!i4195[10]
  i4194.lightmapEncodingQuality = i4195[11]
  i4194.desiredColorSpace = i4195[12]
  var i4203 = i4195[13]
  var i4202 = []
  for(var i = 0; i < i4203.length; i += 1) {
    i4202.push( i4203[i + 0] );
  }
  i4194.allTags = i4202
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4207 = data
  i4206.name = i4207[0]
  i4206.value = i4207[1]
  return i4206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4211 = data
  i4210.id = i4211[0]
  i4210.name = i4211[1]
  i4210.value = i4211[2]
  return i4210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4215 = data
  i4214.id = i4215[0]
  i4214.name = i4215[1]
  return i4214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4217 = data
  i4216.fixedDeltaTime = i4217[0]
  i4216.maximumDeltaTime = i4217[1]
  i4216.timeScale = i4217[2]
  i4216.maximumParticleTimestep = i4217[3]
  return i4216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4219 = data
  i4218.gravity = new pc.Vec3( i4219[0], i4219[1], i4219[2] )
  i4218.defaultSolverIterations = i4219[3]
  i4218.bounceThreshold = i4219[4]
  i4218.autoSyncTransforms = !!i4219[5]
  i4218.autoSimulation = !!i4219[6]
  var i4221 = i4219[7]
  var i4220 = []
  for(var i = 0; i < i4221.length; i += 1) {
    i4220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4221[i + 0]) );
  }
  i4218.collisionMatrix = i4220
  return i4218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4225 = data
  i4224.enabled = !!i4225[0]
  i4224.layerId = i4225[1]
  i4224.otherLayerId = i4225[2]
  return i4224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4227 = data
  request.r(i4227[0], i4227[1], 0, i4226, 'material')
  i4226.gravity = new pc.Vec2( i4227[2], i4227[3] )
  i4226.positionIterations = i4227[4]
  i4226.velocityIterations = i4227[5]
  i4226.velocityThreshold = i4227[6]
  i4226.maxLinearCorrection = i4227[7]
  i4226.maxAngularCorrection = i4227[8]
  i4226.maxTranslationSpeed = i4227[9]
  i4226.maxRotationSpeed = i4227[10]
  i4226.baumgarteScale = i4227[11]
  i4226.baumgarteTOIScale = i4227[12]
  i4226.timeToSleep = i4227[13]
  i4226.linearSleepTolerance = i4227[14]
  i4226.angularSleepTolerance = i4227[15]
  i4226.defaultContactOffset = i4227[16]
  i4226.autoSimulation = !!i4227[17]
  i4226.queriesHitTriggers = !!i4227[18]
  i4226.queriesStartInColliders = !!i4227[19]
  i4226.callbacksOnDisable = !!i4227[20]
  i4226.reuseCollisionCallbacks = !!i4227[21]
  i4226.autoSyncTransforms = !!i4227[22]
  var i4229 = i4227[23]
  var i4228 = []
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4229[i + 0]) );
  }
  i4226.collisionMatrix = i4228
  return i4226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4233 = data
  i4232.enabled = !!i4233[0]
  i4232.layerId = i4233[1]
  i4232.otherLayerId = i4233[2]
  return i4232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4235 = data
  var i4237 = i4235[0]
  var i4236 = []
  for(var i = 0; i < i4237.length; i += 1) {
    i4236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4237[i + 0]) );
  }
  i4234.qualityLevels = i4236
  var i4239 = i4235[1]
  var i4238 = []
  for(var i = 0; i < i4239.length; i += 1) {
    i4238.push( i4239[i + 0] );
  }
  i4234.names = i4238
  i4234.shadows = i4235[2]
  i4234.anisotropicFiltering = i4235[3]
  i4234.antiAliasing = i4235[4]
  i4234.lodBias = i4235[5]
  i4234.shadowCascades = i4235[6]
  i4234.shadowDistance = i4235[7]
  i4234.shadowmaskMode = i4235[8]
  i4234.shadowProjection = i4235[9]
  i4234.shadowResolution = i4235[10]
  i4234.softParticles = !!i4235[11]
  i4234.softVegetation = !!i4235[12]
  i4234.activeColorSpace = i4235[13]
  i4234.desiredColorSpace = i4235[14]
  i4234.masterTextureLimit = i4235[15]
  i4234.maxQueuedFrames = i4235[16]
  i4234.particleRaycastBudget = i4235[17]
  i4234.pixelLightCount = i4235[18]
  i4234.realtimeReflectionProbes = !!i4235[19]
  i4234.shadowCascade2Split = i4235[20]
  i4234.shadowCascade4Split = new pc.Vec3( i4235[21], i4235[22], i4235[23] )
  i4234.streamingMipmapsActive = !!i4235[24]
  i4234.vSyncCount = i4235[25]
  i4234.asyncUploadBufferSize = i4235[26]
  i4234.asyncUploadTimeSlice = i4235[27]
  i4234.billboardsFaceCameraPosition = !!i4235[28]
  i4234.shadowNearPlaneOffset = i4235[29]
  i4234.streamingMipmapsMemoryBudget = i4235[30]
  i4234.maximumLODLevel = i4235[31]
  i4234.streamingMipmapsAddAllCameras = !!i4235[32]
  i4234.streamingMipmapsMaxLevelReduction = i4235[33]
  i4234.streamingMipmapsRenderersPerFrame = i4235[34]
  i4234.resolutionScalingFixedDPIFactor = i4235[35]
  i4234.streamingMipmapsMaxFileIORequests = i4235[36]
  i4234.currentQualityLevel = i4235[37]
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4245 = data
  i4244.weight = i4245[0]
  i4244.vertices = i4245[1]
  i4244.normals = i4245[2]
  i4244.tangents = i4245[3]
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4249 = data
  i4248.mode = i4249[0]
  i4248.parameter = i4249[1]
  i4248.threshold = i4249[2]
  return i4248
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4250 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4251 = data
  i4250.m_GlyphIndex = i4251[0]
  i4250.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4251[1], i4250.m_GlyphValueRecord)
  return i4250
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4252 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4253 = data
  i4252.m_XCoordinate = i4253[0]
  i4252.m_YCoordinate = i4253[1]
  return i4252
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4254 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4255 = data
  i4254.m_XPositionAdjustment = i4255[0]
  i4254.m_YPositionAdjustment = i4255[1]
  return i4254
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4256 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4257 = data
  i4256.xPlacement = i4257[0]
  i4256.yPlacement = i4257[1]
  i4256.xAdvance = i4257[2]
  i4256.yAdvance = i4257[3]
  return i4256
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4258 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4259 = data
  i4258.m_XPlacement = i4259[0]
  i4258.m_YPlacement = i4259[1]
  i4258.m_XAdvance = i4259[2]
  i4258.m_YAdvance = i4259[3]
  return i4258
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[32],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[32],"89":[46],"90":[91],"92":[91],"10":[9],"93":[94],"95":[96],"97":[46,45],"98":[96],"99":[98],"100":[96],"101":[96],"102":[103],"104":[103],"105":[96],"106":[9],"107":[16,9],"44":[46],"108":[16,9],"109":[14,46],"96":[46],"110":[46,45],"111":[68],"112":[75],"113":[114],"115":[103],"116":[40],"117":[32],"118":[119],"120":[38],"121":[10],"122":[9],"123":[46,9],"17":[9,16],"124":[9],"125":[16,9],"126":[46],"127":[16,9],"128":[9],"129":[130],"131":[130],"132":[130],"133":[9],"134":[9],"13":[10],"20":[16,9],"135":[9],"12":[10],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[9],"145":[16,9],"146":[9],"147":[9],"148":[9],"19":[9],"149":[16,9],"150":[9],"151":[38],"152":[38],"39":[38],"153":[38],"154":[32],"155":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","DelayStartAnim","ItemHolder","UnityEngine.BoxCollider","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "2.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv689_GG";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1858";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5004";

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

Deserializers.buildID = "a5cf3c7f-37d3-463d-8b25-f16c8a321143";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

