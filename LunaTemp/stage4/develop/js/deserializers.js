var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3640 = root || request.c( 'UnityEngine.JointSpring' )
  var i3641 = data
  i3640.spring = i3641[0]
  i3640.damper = i3641[1]
  i3640.targetPosition = i3641[2]
  return i3640
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3642 = root || request.c( 'UnityEngine.JointMotor' )
  var i3643 = data
  i3642.m_TargetVelocity = i3643[0]
  i3642.m_Force = i3643[1]
  i3642.m_FreeSpin = i3643[2]
  return i3642
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3644 = root || request.c( 'UnityEngine.JointLimits' )
  var i3645 = data
  i3644.m_Min = i3645[0]
  i3644.m_Max = i3645[1]
  i3644.m_Bounciness = i3645[2]
  i3644.m_BounceMinVelocity = i3645[3]
  i3644.m_ContactDistance = i3645[4]
  i3644.minBounce = i3645[5]
  i3644.maxBounce = i3645[6]
  return i3644
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3646 = root || request.c( 'UnityEngine.JointDrive' )
  var i3647 = data
  i3646.m_PositionSpring = i3647[0]
  i3646.m_PositionDamper = i3647[1]
  i3646.m_MaximumForce = i3647[2]
  i3646.m_UseAcceleration = i3647[3]
  return i3646
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3649 = data
  i3648.m_Spring = i3649[0]
  i3648.m_Damper = i3649[1]
  return i3648
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3650 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3651 = data
  i3650.m_Limit = i3651[0]
  i3650.m_Bounciness = i3651[1]
  i3650.m_ContactDistance = i3651[2]
  return i3650
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3652 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3653 = data
  i3652.m_ExtremumSlip = i3653[0]
  i3652.m_ExtremumValue = i3653[1]
  i3652.m_AsymptoteSlip = i3653[2]
  i3652.m_AsymptoteValue = i3653[3]
  i3652.m_Stiffness = i3653[4]
  return i3652
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3655 = data
  i3654.m_LowerAngle = i3655[0]
  i3654.m_UpperAngle = i3655[1]
  return i3654
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3657 = data
  i3656.m_MotorSpeed = i3657[0]
  i3656.m_MaximumMotorTorque = i3657[1]
  return i3656
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3659 = data
  i3658.m_DampingRatio = i3659[0]
  i3658.m_Frequency = i3659[1]
  i3658.m_Angle = i3659[2]
  return i3658
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3661 = data
  i3660.m_LowerTranslation = i3661[0]
  i3660.m_UpperTranslation = i3661[1]
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3662 = root || new pc.UnityMaterial()
  var i3663 = data
  i3662.name = i3663[0]
  request.r(i3663[1], i3663[2], 0, i3662, 'shader')
  i3662.renderQueue = i3663[3]
  i3662.enableInstancing = !!i3663[4]
  var i3665 = i3663[5]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3665[i + 0]) );
  }
  i3662.floatParameters = i3664
  var i3667 = i3663[6]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3667[i + 0]) );
  }
  i3662.colorParameters = i3666
  var i3669 = i3663[7]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3669[i + 0]) );
  }
  i3662.vectorParameters = i3668
  var i3671 = i3663[8]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3671[i + 0]) );
  }
  i3662.textureParameters = i3670
  var i3673 = i3663[9]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3673[i + 0]) );
  }
  i3662.materialFlags = i3672
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3677 = data
  i3676.name = i3677[0]
  i3676.value = i3677[1]
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3681 = data
  i3680.name = i3681[0]
  i3680.value = new pc.Color(i3681[1], i3681[2], i3681[3], i3681[4])
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3685 = data
  i3684.name = i3685[0]
  i3684.value = new pc.Vec4( i3685[1], i3685[2], i3685[3], i3685[4] )
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3689 = data
  i3688.name = i3689[0]
  request.r(i3689[1], i3689[2], 0, i3688, 'value')
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3693 = data
  i3692.name = i3693[0]
  i3692.enabled = !!i3693[1]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3695 = data
  i3694.name = i3695[0]
  i3694.width = i3695[1]
  i3694.height = i3695[2]
  i3694.mipmapCount = i3695[3]
  i3694.anisoLevel = i3695[4]
  i3694.filterMode = i3695[5]
  i3694.hdr = !!i3695[6]
  i3694.format = i3695[7]
  i3694.wrapMode = i3695[8]
  i3694.alphaIsTransparency = !!i3695[9]
  i3694.alphaSource = i3695[10]
  i3694.graphicsFormat = i3695[11]
  i3694.sRGBTexture = !!i3695[12]
  i3694.desiredColorSpace = i3695[13]
  i3694.wrapU = i3695[14]
  i3694.wrapV = i3695[15]
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3697 = data
  i3696.position = new pc.Vec3( i3697[0], i3697[1], i3697[2] )
  i3696.scale = new pc.Vec3( i3697[3], i3697[4], i3697[5] )
  i3696.rotation = new pc.Quat(i3697[6], i3697[7], i3697[8], i3697[9])
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3699 = data
  i3698.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3699[0], i3698.main)
  i3698.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3699[1], i3698.colorBySpeed)
  i3698.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3699[2], i3698.colorOverLifetime)
  i3698.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3699[3], i3698.emission)
  i3698.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3699[4], i3698.rotationBySpeed)
  i3698.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3699[5], i3698.rotationOverLifetime)
  i3698.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3699[6], i3698.shape)
  i3698.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3699[7], i3698.sizeBySpeed)
  i3698.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3699[8], i3698.sizeOverLifetime)
  i3698.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3699[9], i3698.textureSheetAnimation)
  i3698.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3699[10], i3698.velocityOverLifetime)
  i3698.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3699[11], i3698.noise)
  i3698.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3699[12], i3698.inheritVelocity)
  i3698.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3699[13], i3698.forceOverLifetime)
  i3698.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3699[14], i3698.limitVelocityOverLifetime)
  i3698.useAutoRandomSeed = !!i3699[15]
  i3698.randomSeed = i3699[16]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3700 = root || new pc.ParticleSystemMain()
  var i3701 = data
  i3700.duration = i3701[0]
  i3700.loop = !!i3701[1]
  i3700.prewarm = !!i3701[2]
  i3700.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[3], i3700.startDelay)
  i3700.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[4], i3700.startLifetime)
  i3700.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[5], i3700.startSpeed)
  i3700.startSize3D = !!i3701[6]
  i3700.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[7], i3700.startSizeX)
  i3700.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[8], i3700.startSizeY)
  i3700.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[9], i3700.startSizeZ)
  i3700.startRotation3D = !!i3701[10]
  i3700.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[11], i3700.startRotationX)
  i3700.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[12], i3700.startRotationY)
  i3700.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[13], i3700.startRotationZ)
  i3700.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3701[14], i3700.startColor)
  i3700.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[15], i3700.gravityModifier)
  i3700.simulationSpace = i3701[16]
  request.r(i3701[17], i3701[18], 0, i3700, 'customSimulationSpace')
  i3700.simulationSpeed = i3701[19]
  i3700.useUnscaledTime = !!i3701[20]
  i3700.scalingMode = i3701[21]
  i3700.playOnAwake = !!i3701[22]
  i3700.maxParticles = i3701[23]
  i3700.emitterVelocityMode = i3701[24]
  i3700.stopAction = i3701[25]
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3702 = root || new pc.MinMaxCurve()
  var i3703 = data
  i3702.mode = i3703[0]
  i3702.curveMin = new pc.AnimationCurve( { keys_flow: i3703[1] } )
  i3702.curveMax = new pc.AnimationCurve( { keys_flow: i3703[2] } )
  i3702.curveMultiplier = i3703[3]
  i3702.constantMin = i3703[4]
  i3702.constantMax = i3703[5]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3704 = root || new pc.MinMaxGradient()
  var i3705 = data
  i3704.mode = i3705[0]
  i3704.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3705[1], i3704.gradientMin)
  i3704.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3705[2], i3704.gradientMax)
  i3704.colorMin = new pc.Color(i3705[3], i3705[4], i3705[5], i3705[6])
  i3704.colorMax = new pc.Color(i3705[7], i3705[8], i3705[9], i3705[10])
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3707 = data
  i3706.mode = i3707[0]
  var i3709 = i3707[1]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3709[i + 0]) );
  }
  i3706.colorKeys = i3708
  var i3711 = i3707[2]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3711[i + 0]) );
  }
  i3706.alphaKeys = i3710
  return i3706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3712 = root || new pc.ParticleSystemColorBySpeed()
  var i3713 = data
  i3712.enabled = !!i3713[0]
  i3712.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3713[1], i3712.color)
  i3712.range = new pc.Vec2( i3713[2], i3713[3] )
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3717 = data
  i3716.color = new pc.Color(i3717[0], i3717[1], i3717[2], i3717[3])
  i3716.time = i3717[4]
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3721 = data
  i3720.alpha = i3721[0]
  i3720.time = i3721[1]
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3722 = root || new pc.ParticleSystemColorOverLifetime()
  var i3723 = data
  i3722.enabled = !!i3723[0]
  i3722.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3723[1], i3722.color)
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3724 = root || new pc.ParticleSystemEmitter()
  var i3725 = data
  i3724.enabled = !!i3725[0]
  i3724.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3725[1], i3724.rateOverTime)
  i3724.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3725[2], i3724.rateOverDistance)
  var i3727 = i3725[3]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3727[i + 0]) );
  }
  i3724.bursts = i3726
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3730 = root || new pc.ParticleSystemBurst()
  var i3731 = data
  i3730.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3731[0], i3730.count)
  i3730.cycleCount = i3731[1]
  i3730.minCount = i3731[2]
  i3730.maxCount = i3731[3]
  i3730.repeatInterval = i3731[4]
  i3730.time = i3731[5]
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3732 = root || new pc.ParticleSystemRotationBySpeed()
  var i3733 = data
  i3732.enabled = !!i3733[0]
  i3732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[1], i3732.x)
  i3732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[2], i3732.y)
  i3732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[3], i3732.z)
  i3732.separateAxes = !!i3733[4]
  i3732.range = new pc.Vec2( i3733[5], i3733[6] )
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3734 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3735 = data
  i3734.enabled = !!i3735[0]
  i3734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[1], i3734.x)
  i3734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[2], i3734.y)
  i3734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[3], i3734.z)
  i3734.separateAxes = !!i3735[4]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3736 = root || new pc.ParticleSystemShape()
  var i3737 = data
  i3736.enabled = !!i3737[0]
  i3736.shapeType = i3737[1]
  i3736.randomDirectionAmount = i3737[2]
  i3736.sphericalDirectionAmount = i3737[3]
  i3736.randomPositionAmount = i3737[4]
  i3736.alignToDirection = !!i3737[5]
  i3736.radius = i3737[6]
  i3736.radiusMode = i3737[7]
  i3736.radiusSpread = i3737[8]
  i3736.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3737[9], i3736.radiusSpeed)
  i3736.radiusThickness = i3737[10]
  i3736.angle = i3737[11]
  i3736.length = i3737[12]
  i3736.boxThickness = new pc.Vec3( i3737[13], i3737[14], i3737[15] )
  i3736.meshShapeType = i3737[16]
  request.r(i3737[17], i3737[18], 0, i3736, 'mesh')
  request.r(i3737[19], i3737[20], 0, i3736, 'meshRenderer')
  request.r(i3737[21], i3737[22], 0, i3736, 'skinnedMeshRenderer')
  i3736.useMeshMaterialIndex = !!i3737[23]
  i3736.meshMaterialIndex = i3737[24]
  i3736.useMeshColors = !!i3737[25]
  i3736.normalOffset = i3737[26]
  i3736.arc = i3737[27]
  i3736.arcMode = i3737[28]
  i3736.arcSpread = i3737[29]
  i3736.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3737[30], i3736.arcSpeed)
  i3736.donutRadius = i3737[31]
  i3736.position = new pc.Vec3( i3737[32], i3737[33], i3737[34] )
  i3736.rotation = new pc.Vec3( i3737[35], i3737[36], i3737[37] )
  i3736.scale = new pc.Vec3( i3737[38], i3737[39], i3737[40] )
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3738 = root || new pc.ParticleSystemSizeBySpeed()
  var i3739 = data
  i3738.enabled = !!i3739[0]
  i3738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3739[1], i3738.x)
  i3738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3739[2], i3738.y)
  i3738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3739[3], i3738.z)
  i3738.separateAxes = !!i3739[4]
  i3738.range = new pc.Vec2( i3739[5], i3739[6] )
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3740 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3741 = data
  i3740.enabled = !!i3741[0]
  i3740.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3741[1], i3740.x)
  i3740.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3741[2], i3740.y)
  i3740.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3741[3], i3740.z)
  i3740.separateAxes = !!i3741[4]
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3742 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3743 = data
  i3742.enabled = !!i3743[0]
  i3742.mode = i3743[1]
  i3742.animation = i3743[2]
  i3742.numTilesX = i3743[3]
  i3742.numTilesY = i3743[4]
  i3742.useRandomRow = !!i3743[5]
  i3742.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[6], i3742.frameOverTime)
  i3742.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[7], i3742.startFrame)
  i3742.cycleCount = i3743[8]
  i3742.rowIndex = i3743[9]
  i3742.flipU = i3743[10]
  i3742.flipV = i3743[11]
  i3742.spriteCount = i3743[12]
  var i3745 = i3743[13]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 2) {
  request.r(i3745[i + 0], i3745[i + 1], 2, i3744, '')
  }
  i3742.sprites = i3744
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3748 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3749 = data
  i3748.enabled = !!i3749[0]
  i3748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[1], i3748.x)
  i3748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[2], i3748.y)
  i3748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[3], i3748.z)
  i3748.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[4], i3748.radial)
  i3748.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[5], i3748.speedModifier)
  i3748.space = i3749[6]
  i3748.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[7], i3748.orbitalX)
  i3748.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[8], i3748.orbitalY)
  i3748.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[9], i3748.orbitalZ)
  i3748.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[10], i3748.orbitalOffsetX)
  i3748.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[11], i3748.orbitalOffsetY)
  i3748.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[12], i3748.orbitalOffsetZ)
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3750 = root || new pc.ParticleSystemNoise()
  var i3751 = data
  i3750.enabled = !!i3751[0]
  i3750.separateAxes = !!i3751[1]
  i3750.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[2], i3750.strengthX)
  i3750.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[3], i3750.strengthY)
  i3750.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[4], i3750.strengthZ)
  i3750.frequency = i3751[5]
  i3750.damping = !!i3751[6]
  i3750.octaveCount = i3751[7]
  i3750.octaveMultiplier = i3751[8]
  i3750.octaveScale = i3751[9]
  i3750.quality = i3751[10]
  i3750.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[11], i3750.scrollSpeed)
  i3750.scrollSpeedMultiplier = i3751[12]
  i3750.remapEnabled = !!i3751[13]
  i3750.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[14], i3750.remapX)
  i3750.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[15], i3750.remapY)
  i3750.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[16], i3750.remapZ)
  i3750.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[17], i3750.positionAmount)
  i3750.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[18], i3750.rotationAmount)
  i3750.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[19], i3750.sizeAmount)
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3752 = root || new pc.ParticleSystemInheritVelocity()
  var i3753 = data
  i3752.enabled = !!i3753[0]
  i3752.mode = i3753[1]
  i3752.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3753[2], i3752.curve)
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3754 = root || new pc.ParticleSystemForceOverLifetime()
  var i3755 = data
  i3754.enabled = !!i3755[0]
  i3754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[1], i3754.x)
  i3754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[2], i3754.y)
  i3754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3755[3], i3754.z)
  i3754.space = i3755[4]
  i3754.randomized = !!i3755[5]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3756 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3757 = data
  i3756.enabled = !!i3757[0]
  i3756.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3757[1], i3756.limit)
  i3756.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3757[2], i3756.limitX)
  i3756.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3757[3], i3756.limitY)
  i3756.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3757[4], i3756.limitZ)
  i3756.dampen = i3757[5]
  i3756.separateAxes = !!i3757[6]
  i3756.space = i3757[7]
  i3756.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3757[8], i3756.drag)
  i3756.multiplyDragByParticleSize = !!i3757[9]
  i3756.multiplyDragByParticleVelocity = !!i3757[10]
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3759 = data
  request.r(i3759[0], i3759[1], 0, i3758, 'mesh')
  i3758.meshCount = i3759[2]
  i3758.activeVertexStreamsCount = i3759[3]
  i3758.alignment = i3759[4]
  i3758.renderMode = i3759[5]
  i3758.sortMode = i3759[6]
  i3758.lengthScale = i3759[7]
  i3758.velocityScale = i3759[8]
  i3758.cameraVelocityScale = i3759[9]
  i3758.normalDirection = i3759[10]
  i3758.sortingFudge = i3759[11]
  i3758.minParticleSize = i3759[12]
  i3758.maxParticleSize = i3759[13]
  i3758.pivot = new pc.Vec3( i3759[14], i3759[15], i3759[16] )
  request.r(i3759[17], i3759[18], 0, i3758, 'trailMaterial')
  i3758.applyActiveColorSpace = !!i3759[19]
  i3758.enabled = !!i3759[20]
  request.r(i3759[21], i3759[22], 0, i3758, 'sharedMaterial')
  var i3761 = i3759[23]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 2) {
  request.r(i3761[i + 0], i3761[i + 1], 2, i3760, '')
  }
  i3758.sharedMaterials = i3760
  i3758.receiveShadows = !!i3759[24]
  i3758.shadowCastingMode = i3759[25]
  i3758.sortingLayerID = i3759[26]
  i3758.sortingOrder = i3759[27]
  i3758.lightmapIndex = i3759[28]
  i3758.lightmapSceneIndex = i3759[29]
  i3758.lightmapScaleOffset = new pc.Vec4( i3759[30], i3759[31], i3759[32], i3759[33] )
  i3758.lightProbeUsage = i3759[34]
  i3758.reflectionProbeUsage = i3759[35]
  return i3758
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i3764 = root || request.c( 'MergeEffect' )
  var i3765 = data
  request.r(i3765[0], i3765[1], 0, i3764, 'tf')
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3767 = data
  i3766.name = i3767[0]
  i3766.tagId = i3767[1]
  i3766.enabled = !!i3767[2]
  i3766.isStatic = !!i3767[3]
  i3766.layer = i3767[4]
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3769 = data
  i3768.name = i3769[0]
  i3768.halfPrecision = !!i3769[1]
  i3768.useSimplification = !!i3769[2]
  i3768.useUInt32IndexFormat = !!i3769[3]
  i3768.vertexCount = i3769[4]
  i3768.aabb = i3769[5]
  var i3771 = i3769[6]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 1) {
    i3770.push( !!i3771[i + 0] );
  }
  i3768.streams = i3770
  i3768.vertices = i3769[7]
  var i3773 = i3769[8]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 1) {
    i3772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3773[i + 0]) );
  }
  i3768.subMeshes = i3772
  var i3775 = i3769[9]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 16) {
    i3774.push( new pc.Mat4().setData(i3775[i + 0], i3775[i + 1], i3775[i + 2], i3775[i + 3],  i3775[i + 4], i3775[i + 5], i3775[i + 6], i3775[i + 7],  i3775[i + 8], i3775[i + 9], i3775[i + 10], i3775[i + 11],  i3775[i + 12], i3775[i + 13], i3775[i + 14], i3775[i + 15]) );
  }
  i3768.bindposes = i3774
  var i3777 = i3769[10]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3777[i + 0]) );
  }
  i3768.blendShapes = i3776
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3783 = data
  i3782.triangles = i3783[0]
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3789 = data
  i3788.name = i3789[0]
  var i3791 = i3789[1]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 1) {
    i3790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3791[i + 0]) );
  }
  i3788.frames = i3790
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3793 = data
  i3792.name = i3793[0]
  i3792.index = i3793[1]
  i3792.startup = !!i3793[2]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3795 = data
  i3794.pivot = new pc.Vec2( i3795[0], i3795[1] )
  i3794.anchorMin = new pc.Vec2( i3795[2], i3795[3] )
  i3794.anchorMax = new pc.Vec2( i3795[4], i3795[5] )
  i3794.sizeDelta = new pc.Vec2( i3795[6], i3795[7] )
  i3794.anchoredPosition3D = new pc.Vec3( i3795[8], i3795[9], i3795[10] )
  i3794.rotation = new pc.Quat(i3795[11], i3795[12], i3795[13], i3795[14])
  i3794.scale = new pc.Vec3( i3795[15], i3795[16], i3795[17] )
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3797 = data
  i3796.planeDistance = i3797[0]
  i3796.referencePixelsPerUnit = i3797[1]
  i3796.isFallbackOverlay = !!i3797[2]
  i3796.renderMode = i3797[3]
  i3796.renderOrder = i3797[4]
  i3796.sortingLayerName = i3797[5]
  i3796.sortingOrder = i3797[6]
  i3796.scaleFactor = i3797[7]
  request.r(i3797[8], i3797[9], 0, i3796, 'worldCamera')
  i3796.overrideSorting = !!i3797[10]
  i3796.pixelPerfect = !!i3797[11]
  i3796.targetDisplay = i3797[12]
  i3796.overridePixelPerfect = !!i3797[13]
  i3796.enabled = !!i3797[14]
  return i3796
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3798 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3799 = data
  i3798.m_UiScaleMode = i3799[0]
  i3798.m_ReferencePixelsPerUnit = i3799[1]
  i3798.m_ScaleFactor = i3799[2]
  i3798.m_ReferenceResolution = new pc.Vec2( i3799[3], i3799[4] )
  i3798.m_ScreenMatchMode = i3799[5]
  i3798.m_MatchWidthOrHeight = i3799[6]
  i3798.m_PhysicalUnit = i3799[7]
  i3798.m_FallbackScreenDPI = i3799[8]
  i3798.m_DefaultSpriteDPI = i3799[9]
  i3798.m_DynamicPixelsPerUnit = i3799[10]
  i3798.m_PresetInfoIsWorld = !!i3799[11]
  return i3798
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3800 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3801 = data
  i3800.m_IgnoreReversedGraphics = !!i3801[0]
  i3800.m_BlockingObjects = i3801[1]
  i3800.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3801[2] )
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3803 = data
  request.r(i3803[0], i3803[1], 0, i3802, 'animatorController')
  request.r(i3803[2], i3803[3], 0, i3802, 'avatar')
  i3802.updateMode = i3803[4]
  i3802.hasTransformHierarchy = !!i3803[5]
  i3802.applyRootMotion = !!i3803[6]
  var i3805 = i3803[7]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 2) {
  request.r(i3805[i + 0], i3805[i + 1], 2, i3804, '')
  }
  i3802.humanBones = i3804
  i3802.enabled = !!i3803[8]
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3809 = data
  i3808.cullTransparentMesh = !!i3809[0]
  return i3808
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3810 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3811 = data
  i3810.m_hasFontAssetChanged = !!i3811[0]
  request.r(i3811[1], i3811[2], 0, i3810, 'm_baseMaterial')
  i3810.m_maskOffset = new pc.Vec4( i3811[3], i3811[4], i3811[5], i3811[6] )
  i3810.m_text = i3811[7]
  i3810.m_isRightToLeft = !!i3811[8]
  request.r(i3811[9], i3811[10], 0, i3810, 'm_fontAsset')
  request.r(i3811[11], i3811[12], 0, i3810, 'm_sharedMaterial')
  var i3813 = i3811[13]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 2) {
  request.r(i3813[i + 0], i3813[i + 1], 2, i3812, '')
  }
  i3810.m_fontSharedMaterials = i3812
  request.r(i3811[14], i3811[15], 0, i3810, 'm_fontMaterial')
  var i3815 = i3811[16]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 2) {
  request.r(i3815[i + 0], i3815[i + 1], 2, i3814, '')
  }
  i3810.m_fontMaterials = i3814
  i3810.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3811[17], i3811[18], i3811[19], i3811[20])
  i3810.m_fontColor = new pc.Color(i3811[21], i3811[22], i3811[23], i3811[24])
  i3810.m_enableVertexGradient = !!i3811[25]
  i3810.m_colorMode = i3811[26]
  i3810.m_fontColorGradient = request.d('TMPro.VertexGradient', i3811[27], i3810.m_fontColorGradient)
  request.r(i3811[28], i3811[29], 0, i3810, 'm_fontColorGradientPreset')
  request.r(i3811[30], i3811[31], 0, i3810, 'm_spriteAsset')
  i3810.m_tintAllSprites = !!i3811[32]
  request.r(i3811[33], i3811[34], 0, i3810, 'm_StyleSheet')
  i3810.m_TextStyleHashCode = i3811[35]
  i3810.m_overrideHtmlColors = !!i3811[36]
  i3810.m_faceColor = UnityEngine.Color32.ConstructColor(i3811[37], i3811[38], i3811[39], i3811[40])
  i3810.m_fontSize = i3811[41]
  i3810.m_fontSizeBase = i3811[42]
  i3810.m_fontWeight = i3811[43]
  i3810.m_enableAutoSizing = !!i3811[44]
  i3810.m_fontSizeMin = i3811[45]
  i3810.m_fontSizeMax = i3811[46]
  i3810.m_fontStyle = i3811[47]
  i3810.m_HorizontalAlignment = i3811[48]
  i3810.m_VerticalAlignment = i3811[49]
  i3810.m_textAlignment = i3811[50]
  i3810.m_characterSpacing = i3811[51]
  i3810.m_wordSpacing = i3811[52]
  i3810.m_lineSpacing = i3811[53]
  i3810.m_lineSpacingMax = i3811[54]
  i3810.m_paragraphSpacing = i3811[55]
  i3810.m_charWidthMaxAdj = i3811[56]
  i3810.m_TextWrappingMode = i3811[57]
  i3810.m_wordWrappingRatios = i3811[58]
  i3810.m_overflowMode = i3811[59]
  request.r(i3811[60], i3811[61], 0, i3810, 'm_linkedTextComponent')
  request.r(i3811[62], i3811[63], 0, i3810, 'parentLinkedComponent')
  i3810.m_enableKerning = !!i3811[64]
  var i3817 = i3811[65]
  var i3816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.add(i3817[i + 0]);
  }
  i3810.m_ActiveFontFeatures = i3816
  i3810.m_enableExtraPadding = !!i3811[66]
  i3810.checkPaddingRequired = !!i3811[67]
  i3810.m_isRichText = !!i3811[68]
  i3810.m_parseCtrlCharacters = !!i3811[69]
  i3810.m_isOrthographic = !!i3811[70]
  i3810.m_isCullingEnabled = !!i3811[71]
  i3810.m_horizontalMapping = i3811[72]
  i3810.m_verticalMapping = i3811[73]
  i3810.m_uvLineOffset = i3811[74]
  i3810.m_geometrySortingOrder = i3811[75]
  i3810.m_IsTextObjectScaleStatic = !!i3811[76]
  i3810.m_VertexBufferAutoSizeReduction = !!i3811[77]
  i3810.m_useMaxVisibleDescender = !!i3811[78]
  i3810.m_pageToDisplay = i3811[79]
  i3810.m_margin = new pc.Vec4( i3811[80], i3811[81], i3811[82], i3811[83] )
  i3810.m_isUsingLegacyAnimationComponent = !!i3811[84]
  i3810.m_isVolumetricText = !!i3811[85]
  request.r(i3811[86], i3811[87], 0, i3810, 'm_Material')
  i3810.m_EmojiFallbackSupport = !!i3811[88]
  i3810.m_Maskable = !!i3811[89]
  i3810.m_Color = new pc.Color(i3811[90], i3811[91], i3811[92], i3811[93])
  i3810.m_RaycastTarget = !!i3811[94]
  i3810.m_RaycastPadding = new pc.Vec4( i3811[95], i3811[96], i3811[97], i3811[98] )
  return i3810
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3818 = root || request.c( 'TMPro.VertexGradient' )
  var i3819 = data
  i3818.topLeft = new pc.Color(i3819[0], i3819[1], i3819[2], i3819[3])
  i3818.topRight = new pc.Color(i3819[4], i3819[5], i3819[6], i3819[7])
  i3818.bottomLeft = new pc.Color(i3819[8], i3819[9], i3819[10], i3819[11])
  i3818.bottomRight = new pc.Color(i3819[12], i3819[13], i3819[14], i3819[15])
  return i3818
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3822 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3823 = data
  request.r(i3823[0], i3823[1], 0, i3822, 'm_FillRect')
  request.r(i3823[2], i3823[3], 0, i3822, 'm_HandleRect')
  i3822.m_Direction = i3823[4]
  i3822.m_MinValue = i3823[5]
  i3822.m_MaxValue = i3823[6]
  i3822.m_WholeNumbers = !!i3823[7]
  i3822.m_Value = i3823[8]
  i3822.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3823[9], i3822.m_OnValueChanged)
  i3822.m_Navigation = request.d('UnityEngine.UI.Navigation', i3823[10], i3822.m_Navigation)
  i3822.m_Transition = i3823[11]
  i3822.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3823[12], i3822.m_Colors)
  i3822.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3823[13], i3822.m_SpriteState)
  i3822.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3823[14], i3822.m_AnimationTriggers)
  i3822.m_Interactable = !!i3823[15]
  request.r(i3823[16], i3823[17], 0, i3822, 'm_TargetGraphic')
  return i3822
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3824 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3825 = data
  i3824.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3825[0], i3824.m_PersistentCalls)
  return i3824
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3826 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3827 = data
  var i3829 = i3827[0]
  var i3828 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.add(request.d('UnityEngine.Events.PersistentCall', i3829[i + 0]));
  }
  i3826.m_Calls = i3828
  return i3826
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3832 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3833 = data
  request.r(i3833[0], i3833[1], 0, i3832, 'm_Target')
  i3832.m_TargetAssemblyTypeName = i3833[2]
  i3832.m_MethodName = i3833[3]
  i3832.m_Mode = i3833[4]
  i3832.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3833[5], i3832.m_Arguments)
  i3832.m_CallState = i3833[6]
  return i3832
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3834 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3835 = data
  i3834.m_Mode = i3835[0]
  i3834.m_WrapAround = !!i3835[1]
  request.r(i3835[2], i3835[3], 0, i3834, 'm_SelectOnUp')
  request.r(i3835[4], i3835[5], 0, i3834, 'm_SelectOnDown')
  request.r(i3835[6], i3835[7], 0, i3834, 'm_SelectOnLeft')
  request.r(i3835[8], i3835[9], 0, i3834, 'm_SelectOnRight')
  return i3834
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3836 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3837 = data
  i3836.m_NormalColor = new pc.Color(i3837[0], i3837[1], i3837[2], i3837[3])
  i3836.m_HighlightedColor = new pc.Color(i3837[4], i3837[5], i3837[6], i3837[7])
  i3836.m_PressedColor = new pc.Color(i3837[8], i3837[9], i3837[10], i3837[11])
  i3836.m_SelectedColor = new pc.Color(i3837[12], i3837[13], i3837[14], i3837[15])
  i3836.m_DisabledColor = new pc.Color(i3837[16], i3837[17], i3837[18], i3837[19])
  i3836.m_ColorMultiplier = i3837[20]
  i3836.m_FadeDuration = i3837[21]
  return i3836
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3838 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3839 = data
  request.r(i3839[0], i3839[1], 0, i3838, 'm_HighlightedSprite')
  request.r(i3839[2], i3839[3], 0, i3838, 'm_PressedSprite')
  request.r(i3839[4], i3839[5], 0, i3838, 'm_SelectedSprite')
  request.r(i3839[6], i3839[7], 0, i3838, 'm_DisabledSprite')
  return i3838
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3840 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3841 = data
  i3840.m_NormalTrigger = i3841[0]
  i3840.m_HighlightedTrigger = i3841[1]
  i3840.m_PressedTrigger = i3841[2]
  i3840.m_SelectedTrigger = i3841[3]
  i3840.m_DisabledTrigger = i3841[4]
  return i3840
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3842 = root || request.c( 'UnityEngine.UI.Image' )
  var i3843 = data
  request.r(i3843[0], i3843[1], 0, i3842, 'm_Sprite')
  i3842.m_Type = i3843[2]
  i3842.m_PreserveAspect = !!i3843[3]
  i3842.m_FillCenter = !!i3843[4]
  i3842.m_FillMethod = i3843[5]
  i3842.m_FillAmount = i3843[6]
  i3842.m_FillClockwise = !!i3843[7]
  i3842.m_FillOrigin = i3843[8]
  i3842.m_UseSpriteMesh = !!i3843[9]
  i3842.m_PixelsPerUnitMultiplier = i3843[10]
  request.r(i3843[11], i3843[12], 0, i3842, 'm_Material')
  i3842.m_Maskable = !!i3843[13]
  i3842.m_Color = new pc.Color(i3843[14], i3843[15], i3843[16], i3843[17])
  i3842.m_RaycastTarget = !!i3843[18]
  i3842.m_RaycastPadding = new pc.Vec4( i3843[19], i3843[20], i3843[21], i3843[22] )
  return i3842
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3844 = root || request.c( 'UnityEngine.UI.Button' )
  var i3845 = data
  i3844.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3845[0], i3844.m_OnClick)
  i3844.m_Navigation = request.d('UnityEngine.UI.Navigation', i3845[1], i3844.m_Navigation)
  i3844.m_Transition = i3845[2]
  i3844.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3845[3], i3844.m_Colors)
  i3844.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3845[4], i3844.m_SpriteState)
  i3844.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3845[5], i3844.m_AnimationTriggers)
  i3844.m_Interactable = !!i3845[6]
  request.r(i3845[7], i3845[8], 0, i3844, 'm_TargetGraphic')
  return i3844
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3846 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3847 = data
  i3846.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3847[0], i3846.m_PersistentCalls)
  return i3846
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3848 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3849 = data
  request.r(i3849[0], i3849[1], 0, i3848, 'm_ObjectArgument')
  i3848.m_ObjectArgumentAssemblyTypeName = i3849[2]
  i3848.m_IntArgument = i3849[3]
  i3848.m_FloatArgument = i3849[4]
  i3848.m_StringArgument = i3849[5]
  i3848.m_BoolArgument = !!i3849[6]
  return i3848
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3850 = root || request.c( 'Ply_Pool' )
  var i3851 = data
  var i3853 = i3851[0]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( request.d('Ply_Pool+PoolAmount', i3853[i + 0]) );
  }
  i3850.poolAmounts = i3852
  request.r(i3851[1], i3851[2], 0, i3850, 'poolHolder')
  return i3850
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3856 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3857 = data
  i3856.type = i3857[0]
  i3856.amount = i3857[1]
  request.r(i3857[2], i3857[3], 0, i3856, 'gameUnit')
  return i3856
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3858 = root || request.c( 'Ply_SoundManager' )
  var i3859 = data
  var i3861 = i3859[0]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( request.d('Ply_SoundManager+FxAudio', i3861[i + 0]) );
  }
  i3858.fxAudios = i3860
  var i3863 = i3859[1]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 2) {
  request.r(i3863[i + 0], i3863[i + 1], 2, i3862, '')
  }
  i3858.audioClips = i3862
  request.r(i3859[2], i3859[3], 0, i3858, 'sound')
  return i3858
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i3866 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i3867 = data
  i3866.fxType = i3867[0]
  request.r(i3867[1], i3867[2], 0, i3866, 'audioClip')
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3871 = data
  request.r(i3871[0], i3871[1], 0, i3870, 'clip')
  request.r(i3871[2], i3871[3], 0, i3870, 'outputAudioMixerGroup')
  i3870.playOnAwake = !!i3871[4]
  i3870.loop = !!i3871[5]
  i3870.time = i3871[6]
  i3870.volume = i3871[7]
  i3870.pitch = i3871[8]
  i3870.enabled = !!i3871[9]
  return i3870
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3872 = root || request.c( 'GameManager' )
  var i3873 = data
  i3872.isPlaying = !!i3873[0]
  i3872.isTutorial = !!i3873[1]
  i3872.isGotoStore = !!i3873[2]
  i3872.isDraggingConveyor = !!i3873[3]
  i3872.countMove = i3873[4]
  i3872.maxMove = i3873[5]
  i3872.startLayer = i3873[6]
  i3872.currentLayer = i3873[7]
  request.r(i3873[8], i3873[9], 0, i3872, 'mainBox')
  request.r(i3873[10], i3873[11], 0, i3872, 'itemConveyor')
  request.r(i3873[12], i3873[13], 0, i3872, 'handTutorial')
  i3872.tutorialDelay = i3873[14]
  return i3872
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3874 = root || request.c( 'UIManager' )
  var i3875 = data
  request.r(i3875[0], i3875[1], 0, i3874, 'winUI')
  request.r(i3875[2], i3875[3], 0, i3874, 'loseUI')
  request.r(i3875[4], i3875[5], 0, i3874, 'tutorial')
  request.r(i3875[6], i3875[7], 0, i3874, 'verticalUI')
  request.r(i3875[8], i3875[9], 0, i3874, 'horizontalUI')
  request.r(i3875[10], i3875[11], 0, i3874, 'downloadBtnVertical')
  request.r(i3875[12], i3875[13], 0, i3874, 'dowloadBtnHorizontal')
  request.r(i3875[14], i3875[15], 0, i3874, 'textAnim')
  i3874.isGoogleBuild = !!i3875[16]
  request.r(i3875[17], i3875[18], 0, i3874, 'progressSlider')
  request.r(i3875[19], i3875[20], 0, i3874, 'progressText')
  i3874.maxProgressItems = i3875[21]
  i3874.startProgressItems = i3875[22]
  i3874.screenWidth = i3875[23]
  i3874.screenHeight = i3875[24]
  i3874.scaleHeightOnWidth = i3875[25]
  i3874.isVertical = !!i3875[26]
  i3874.isScreenVertical = !!i3875[27]
  request.r(i3875[28], i3875[29], 0, i3874, 'cam')
  i3874.verticalUIHeightOnWidthRatio = i3875[30]
  i3874.screenVerticalHeightOnWidthRatio = i3875[31]
  i3874.introZoomOutMultiplier = i3875[32]
  i3874.cameraZoomDuration = i3875[33]
  i3874.useContinuousScaling = !!i3875[34]
  i3874.baseOrthographicSize = i3875[35]
  i3874.baseAspect = i3875[36]
  i3874.landscapeSize = i3875[37]
  i3874.defaultPortraitSize = i3875[38]
  var i3877 = i3875[39]
  var i3876 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.add(request.d('ScreenScaleStep', i3877[i + 0]));
  }
  i3874.discreteScaleSteps = i3876
  i3874.usePerspectiveCamera = !!i3875[40]
  request.r(i3875[41], i3875[42], 0, i3874, 'perspectiveFocus')
  i3874.perspectiveFocusDistance = i3875[43]
  i3874.perspectivePadding = i3875[44]
  i3874.fitRendererBounds = !!i3875[45]
  request.r(i3875[46], i3875[47], 0, i3874, 'boundsRoot')
  var i3879 = i3875[48]
  var i3878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i3879.length; i += 2) {
  request.r(i3879[i + 0], i3879[i + 1], 1, i3878, '')
  }
  i3874.boundsRenderers = i3878
  return i3874
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i3882 = root || request.c( 'ScreenScaleStep' )
  var i3883 = data
  i3882.heightOnWidthRatio = i3883[0]
  i3882.orthographicSize = i3883[1]
  return i3882
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3886 = root || request.c( 'InputManager' )
  var i3887 = data
  i3886.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3887[0] )
  i3886.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i3887[1] )
  i3886.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i3887[2] )
  i3886.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i3887[3] )
  i3886.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i3887[4] )
  i3886.isDragging = !!i3887[5]
  request.r(i3887[6], i3887[7], 0, i3886, 'mainCamera')
  return i3886
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3888 = root || request.c( 'CameraController' )
  var i3889 = data
  request.r(i3889[0], i3889[1], 0, i3888, 'targetCamera')
  i3888.enableZoom = !!i3889[2]
  i3888.minZoomRatio = i3889[3]
  i3888.maxZoomRatio = i3889[4]
  i3888.mouseWheelZoomSpeed = i3889[5]
  i3888.pinchZoomSpeed = i3889[6]
  i3888.enableDrag = !!i3889[7]
  i3888.horizontalOnly = !!i3889[8]
  i3888.dragSensitivity = i3889[9]
  i3888.maxHorizontalOffset = i3889[10]
  i3888.maxVerticalOffset = i3889[11]
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3891 = data
  i3890.aspect = i3891[0]
  i3890.orthographic = !!i3891[1]
  i3890.orthographicSize = i3891[2]
  i3890.backgroundColor = new pc.Color(i3891[3], i3891[4], i3891[5], i3891[6])
  i3890.nearClipPlane = i3891[7]
  i3890.farClipPlane = i3891[8]
  i3890.fieldOfView = i3891[9]
  i3890.depth = i3891[10]
  i3890.clearFlags = i3891[11]
  i3890.cullingMask = i3891[12]
  i3890.rect = i3891[13]
  request.r(i3891[14], i3891[15], 0, i3890, 'targetTexture')
  i3890.usePhysicalProperties = !!i3891[16]
  i3890.focalLength = i3891[17]
  i3890.sensorSize = new pc.Vec2( i3891[18], i3891[19] )
  i3890.lensShift = new pc.Vec2( i3891[20], i3891[21] )
  i3890.gateFit = i3891[22]
  i3890.commandBufferCount = i3891[23]
  i3890.cameraType = i3891[24]
  i3890.enabled = !!i3891[25]
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3893 = data
  i3892.type = i3893[0]
  i3892.color = new pc.Color(i3893[1], i3893[2], i3893[3], i3893[4])
  i3892.cullingMask = i3893[5]
  i3892.intensity = i3893[6]
  i3892.range = i3893[7]
  i3892.spotAngle = i3893[8]
  i3892.shadows = i3893[9]
  i3892.shadowNormalBias = i3893[10]
  i3892.shadowBias = i3893[11]
  i3892.shadowStrength = i3893[12]
  i3892.shadowResolution = i3893[13]
  i3892.lightmapBakeType = i3893[14]
  i3892.renderMode = i3893[15]
  request.r(i3893[16], i3893[17], 0, i3892, 'cookie')
  i3892.cookieSize = i3893[18]
  i3892.shadowNearPlane = i3893[19]
  i3892.occlusionMaskChannel = i3893[20]
  i3892.enabled = !!i3893[21]
  return i3892
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3894 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3895 = data
  request.r(i3895[0], i3895[1], 0, i3894, 'm_FirstSelected')
  i3894.m_sendNavigationEvents = !!i3895[2]
  i3894.m_DragThreshold = i3895[3]
  return i3894
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3896 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3897 = data
  i3896.m_HorizontalAxis = i3897[0]
  i3896.m_VerticalAxis = i3897[1]
  i3896.m_SubmitButton = i3897[2]
  i3896.m_CancelButton = i3897[3]
  i3896.m_InputActionsPerSecond = i3897[4]
  i3896.m_RepeatDelay = i3897[5]
  i3896.m_ForceModuleActive = !!i3897[6]
  i3896.m_SendPointerHoverToParent = !!i3897[7]
  return i3896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3899 = data
  i3898.color = new pc.Color(i3899[0], i3899[1], i3899[2], i3899[3])
  request.r(i3899[4], i3899[5], 0, i3898, 'sprite')
  i3898.flipX = !!i3899[6]
  i3898.flipY = !!i3899[7]
  i3898.drawMode = i3899[8]
  i3898.size = new pc.Vec2( i3899[9], i3899[10] )
  i3898.tileMode = i3899[11]
  i3898.adaptiveModeThreshold = i3899[12]
  i3898.maskInteraction = i3899[13]
  i3898.spriteSortPoint = i3899[14]
  i3898.enabled = !!i3899[15]
  request.r(i3899[16], i3899[17], 0, i3898, 'sharedMaterial')
  var i3901 = i3899[18]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 2) {
  request.r(i3901[i + 0], i3901[i + 1], 2, i3900, '')
  }
  i3898.sharedMaterials = i3900
  i3898.receiveShadows = !!i3899[19]
  i3898.shadowCastingMode = i3899[20]
  i3898.sortingLayerID = i3899[21]
  i3898.sortingOrder = i3899[22]
  i3898.lightmapIndex = i3899[23]
  i3898.lightmapSceneIndex = i3899[24]
  i3898.lightmapScaleOffset = new pc.Vec4( i3899[25], i3899[26], i3899[27], i3899[28] )
  i3898.lightProbeUsage = i3899[29]
  i3898.reflectionProbeUsage = i3899[30]
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3903 = data
  i3902.center = new pc.Vec3( i3903[0], i3903[1], i3903[2] )
  i3902.radius = i3903[3]
  i3902.enabled = !!i3903[4]
  i3902.isTrigger = !!i3903[5]
  request.r(i3903[6], i3903[7], 0, i3902, 'material')
  return i3902
}

Deserializers["Box"] = function (request, data, root) {
  var i3904 = root || request.c( 'Box' )
  var i3905 = data
  i3904.useBox = !!i3905[0]
  i3904.spawnMode = i3905[1]
  var i3907 = i3905[2]
  var i3906 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3907.length; i += 2) {
  request.r(i3907[i + 0], i3907[i + 1], 1, i3906, '')
  }
  i3904.dynamicItems = i3906
  var i3909 = i3905[3]
  var i3908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3909.length; i += 2) {
  request.r(i3909[i + 0], i3909[i + 1], 1, i3908, '')
  }
  i3904.spawnTargets = i3908
  i3904.initialSpawnCount = i3905[4]
  i3904.revealDuration = i3905[5]
  i3904.showInitialBatchShadowsOnSpawn = !!i3905[6]
  request.r(i3905[7], i3905[8], 0, i3904, 'graphicController')
  return i3904
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i3914 = root || request.c( 'BoxGraphicController' )
  var i3915 = data
  request.r(i3915[0], i3915[1], 0, i3914, 'skeletonAnimation')
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3917 = data
  request.r(i3917[0], i3917[1], 0, i3916, 'sharedMesh')
  return i3916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3919 = data
  request.r(i3919[0], i3919[1], 0, i3918, 'additionalVertexStreams')
  i3918.enabled = !!i3919[2]
  request.r(i3919[3], i3919[4], 0, i3918, 'sharedMaterial')
  var i3921 = i3919[5]
  var i3920 = []
  for(var i = 0; i < i3921.length; i += 2) {
  request.r(i3921[i + 0], i3921[i + 1], 2, i3920, '')
  }
  i3918.sharedMaterials = i3920
  i3918.receiveShadows = !!i3919[6]
  i3918.shadowCastingMode = i3919[7]
  i3918.sortingLayerID = i3919[8]
  i3918.sortingOrder = i3919[9]
  i3918.lightmapIndex = i3919[10]
  i3918.lightmapSceneIndex = i3919[11]
  i3918.lightmapScaleOffset = new pc.Vec4( i3919[12], i3919[13], i3919[14], i3919[15] )
  i3918.lightProbeUsage = i3919[16]
  i3918.reflectionProbeUsage = i3919[17]
  return i3918
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i3922 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i3923 = data
  i3922.loop = !!i3923[0]
  i3922.timeScale = i3923[1]
  request.r(i3923[2], i3923[3], 0, i3922, 'skeletonDataAsset')
  i3922.initialSkinName = i3923[4]
  i3922.fixPrefabOverrideViaMeshFilter = i3923[5]
  i3922.initialFlipX = !!i3923[6]
  i3922.initialFlipY = !!i3923[7]
  i3922.updateWhenInvisible = i3923[8]
  i3922.zSpacing = i3923[9]
  i3922.useClipping = !!i3923[10]
  i3922.immutableTriangles = !!i3923[11]
  i3922.pmaVertexColors = !!i3923[12]
  i3922.clearStateOnDisable = !!i3923[13]
  i3922.tintBlack = !!i3923[14]
  i3922.singleSubmesh = !!i3923[15]
  i3922.fixDrawOrder = !!i3923[16]
  i3922.addNormals = !!i3923[17]
  i3922.calculateTangents = !!i3923[18]
  i3922.maskInteraction = i3923[19]
  i3922.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i3923[20], i3922.maskMaterials)
  i3922.disableRenderingOnOverride = !!i3923[21]
  i3922._animationName = i3923[22]
  var i3925 = i3923[23]
  var i3924 = []
  for(var i = 0; i < i3925.length; i += 1) {
    i3924.push( i3925[i + 0] );
  }
  i3922.separatorSlotNames = i3924
  return i3922
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i3926 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i3927 = data
  var i3929 = i3927[0]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 2) {
  request.r(i3929[i + 0], i3929[i + 1], 2, i3928, '')
  }
  i3926.materialsMaskDisabled = i3928
  var i3931 = i3927[1]
  var i3930 = []
  for(var i = 0; i < i3931.length; i += 2) {
  request.r(i3931[i + 0], i3931[i + 1], 2, i3930, '')
  }
  i3926.materialsInsideMask = i3930
  var i3933 = i3927[2]
  var i3932 = []
  for(var i = 0; i < i3933.length; i += 2) {
  request.r(i3933[i + 0], i3933[i + 1], 2, i3932, '')
  }
  i3926.materialsOutsideMask = i3932
  return i3926
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i3936 = root || request.c( 'ItemHolder' )
  var i3937 = data
  i3936.id = i3937[0]
  return i3936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3939 = data
  i3938.center = new pc.Vec3( i3939[0], i3939[1], i3939[2] )
  i3938.size = new pc.Vec3( i3939[3], i3939[4], i3939[5] )
  i3938.enabled = !!i3939[6]
  i3938.isTrigger = !!i3939[7]
  request.r(i3939[8], i3939[9], 0, i3938, 'material')
  return i3938
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i3940 = root || request.c( 'ItemSetupTool' )
  var i3941 = data
  request.r(i3941[0], i3941[1], 0, i3940, 'spritesParent')
  request.r(i3941[2], i3941[3], 0, i3940, 'holdersParent')
  i3940.shadowSuffix = i3941[4]
  i3940.holderPrefix = i3941[5]
  i3940.holdersParentName = i3941[6]
  i3940.colliderDepth = i3941[7]
  i3940.colliderSizeMultiplier = i3941[8]
  i3940.generatedShadowColor = new pc.Color(i3941[9], i3941[10], i3941[11], i3941[12])
  i3940.fadedBlackShadowColor = new pc.Color(i3941[13], i3941[14], i3941[15], i3941[16])
  i3940.generatedShadowLocalOffset = new pc.Vec3( i3941[17], i3941[18], i3941[19] )
  i3940.itemLayerName = i3941[20]
  i3940.holderLayerName = i3941[21]
  return i3940
}

Deserializers["Item"] = function (request, data, root) {
  var i3942 = root || request.c( 'Item' )
  var i3943 = data
  i3942.fxTypeOnPlace = i3943[0]
  i3942.id = i3943[1]
  i3942.currentState = i3943[2]
  i3942.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i3943[3] )
  request.r(i3943[4], i3943[5], 0, i3942, 'auraEffect')
  i3942.returnToSlotOnMiss = !!i3943[6]
  i3942.hideShadowOnDrop = !!i3943[7]
  i3942.scaleOnSpawn = !!i3943[8]
  i3942.spawnScaleMultiplier = i3943[9]
  request.r(i3943[10], i3943[11], 0, i3942, 'correctHolderTransform')
  request.r(i3943[12], i3943[13], 0, i3942, 'shadowOnHolder')
  i3942.canShowShadowHint = !!i3943[14]
  request.r(i3943[15], i3943[16], 0, i3942, 'homeSlot')
  i3942.waitingPosition = new pc.Vec3( i3943[17], i3943[18], i3943[19] )
  request.r(i3943[20], i3943[21], 0, i3942, 'spriteRenderer')
  return i3942
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i3944 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i3945 = data
  request.r(i3945[0], i3945[1], 0, i3944, 'anchorPoint')
  request.r(i3945[2], i3945[3], 0, i3944, 'targetCamera')
  i3944.viewportYRatio = i3945[4]
  i3944.alignOnStart = !!i3945[5]
  i3944.alignOnEnable = !!i3945[6]
  i3944.realignOnScreenSizeChanged = !!i3945[7]
  i3944.drawGizmos = !!i3945[8]
  i3944.targetLineColor = new pc.Color(i3945[9], i3945[10], i3945[11], i3945[12])
  i3944.anchorColor = new pc.Color(i3945[13], i3945[14], i3945[15], i3945[16])
  return i3944
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3946 = root || request.c( 'TMPro.TextMeshPro' )
  var i3947 = data
  i3946._SortingLayer = i3947[0]
  i3946._SortingLayerID = i3947[1]
  i3946._SortingOrder = i3947[2]
  i3946.m_hasFontAssetChanged = !!i3947[3]
  request.r(i3947[4], i3947[5], 0, i3946, 'm_renderer')
  i3946.m_maskType = i3947[6]
  i3946.m_text = i3947[7]
  i3946.m_isRightToLeft = !!i3947[8]
  request.r(i3947[9], i3947[10], 0, i3946, 'm_fontAsset')
  request.r(i3947[11], i3947[12], 0, i3946, 'm_sharedMaterial')
  var i3949 = i3947[13]
  var i3948 = []
  for(var i = 0; i < i3949.length; i += 2) {
  request.r(i3949[i + 0], i3949[i + 1], 2, i3948, '')
  }
  i3946.m_fontSharedMaterials = i3948
  request.r(i3947[14], i3947[15], 0, i3946, 'm_fontMaterial')
  var i3951 = i3947[16]
  var i3950 = []
  for(var i = 0; i < i3951.length; i += 2) {
  request.r(i3951[i + 0], i3951[i + 1], 2, i3950, '')
  }
  i3946.m_fontMaterials = i3950
  i3946.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3947[17], i3947[18], i3947[19], i3947[20])
  i3946.m_fontColor = new pc.Color(i3947[21], i3947[22], i3947[23], i3947[24])
  i3946.m_enableVertexGradient = !!i3947[25]
  i3946.m_colorMode = i3947[26]
  i3946.m_fontColorGradient = request.d('TMPro.VertexGradient', i3947[27], i3946.m_fontColorGradient)
  request.r(i3947[28], i3947[29], 0, i3946, 'm_fontColorGradientPreset')
  request.r(i3947[30], i3947[31], 0, i3946, 'm_spriteAsset')
  i3946.m_tintAllSprites = !!i3947[32]
  request.r(i3947[33], i3947[34], 0, i3946, 'm_StyleSheet')
  i3946.m_TextStyleHashCode = i3947[35]
  i3946.m_overrideHtmlColors = !!i3947[36]
  i3946.m_faceColor = UnityEngine.Color32.ConstructColor(i3947[37], i3947[38], i3947[39], i3947[40])
  i3946.m_fontSize = i3947[41]
  i3946.m_fontSizeBase = i3947[42]
  i3946.m_fontWeight = i3947[43]
  i3946.m_enableAutoSizing = !!i3947[44]
  i3946.m_fontSizeMin = i3947[45]
  i3946.m_fontSizeMax = i3947[46]
  i3946.m_fontStyle = i3947[47]
  i3946.m_HorizontalAlignment = i3947[48]
  i3946.m_VerticalAlignment = i3947[49]
  i3946.m_textAlignment = i3947[50]
  i3946.m_characterSpacing = i3947[51]
  i3946.m_wordSpacing = i3947[52]
  i3946.m_lineSpacing = i3947[53]
  i3946.m_lineSpacingMax = i3947[54]
  i3946.m_paragraphSpacing = i3947[55]
  i3946.m_charWidthMaxAdj = i3947[56]
  i3946.m_TextWrappingMode = i3947[57]
  i3946.m_wordWrappingRatios = i3947[58]
  i3946.m_overflowMode = i3947[59]
  request.r(i3947[60], i3947[61], 0, i3946, 'm_linkedTextComponent')
  request.r(i3947[62], i3947[63], 0, i3946, 'parentLinkedComponent')
  i3946.m_enableKerning = !!i3947[64]
  var i3953 = i3947[65]
  var i3952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.add(i3953[i + 0]);
  }
  i3946.m_ActiveFontFeatures = i3952
  i3946.m_enableExtraPadding = !!i3947[66]
  i3946.checkPaddingRequired = !!i3947[67]
  i3946.m_isRichText = !!i3947[68]
  i3946.m_parseCtrlCharacters = !!i3947[69]
  i3946.m_isOrthographic = !!i3947[70]
  i3946.m_isCullingEnabled = !!i3947[71]
  i3946.m_horizontalMapping = i3947[72]
  i3946.m_verticalMapping = i3947[73]
  i3946.m_uvLineOffset = i3947[74]
  i3946.m_geometrySortingOrder = i3947[75]
  i3946.m_IsTextObjectScaleStatic = !!i3947[76]
  i3946.m_VertexBufferAutoSizeReduction = !!i3947[77]
  i3946.m_useMaxVisibleDescender = !!i3947[78]
  i3946.m_pageToDisplay = i3947[79]
  i3946.m_margin = new pc.Vec4( i3947[80], i3947[81], i3947[82], i3947[83] )
  i3946.m_isUsingLegacyAnimationComponent = !!i3947[84]
  i3946.m_isVolumetricText = !!i3947[85]
  request.r(i3947[86], i3947[87], 0, i3946, 'm_Material')
  i3946.m_EmojiFallbackSupport = !!i3947[88]
  i3946.m_Maskable = !!i3947[89]
  i3946.m_Color = new pc.Color(i3947[90], i3947[91], i3947[92], i3947[93])
  i3946.m_RaycastTarget = !!i3947[94]
  i3946.m_RaycastPadding = new pc.Vec4( i3947[95], i3947[96], i3947[97], i3947[98] )
  return i3946
}

Deserializers["ItemConveyor"] = function (request, data, root) {
  var i3954 = root || request.c( 'ItemConveyor' )
  var i3955 = data
  i3954.isDraggingConveyor = !!i3955[0]
  request.r(i3955[1], i3955[2], 0, i3954, 'movingRoot')
  var i3957 = i3955[3]
  var i3956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3957.length; i += 2) {
  request.r(i3957[i + 0], i3957[i + 1], 1, i3956, '')
  }
  i3954.itemSlots = i3956
  i3954.arrangeSlotsOnStart = !!i3955[4]
  i3954.leftLocalPoint = new pc.Vec3( i3955[5], i3955[6], i3955[7] )
  i3954.rightLocalPoint = new pc.Vec3( i3955[8], i3955[9], i3955[10] )
  i3954.sortSlotsLeftToRight = !!i3955[11]
  i3954.alignLeftMostSlotToScreenLeftOnStart = !!i3955[12]
  i3954.enableHorizontalDrag = !!i3955[13]
  i3954.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i3955[14] )
  request.r(i3955[15], i3955[16], 0, i3954, 'raycastCamera')
  i3954.raycastDistance = i3955[17]
  i3954.leftEdgeViewportPadding = i3955[18]
  i3954.rightEdgeViewportPadding = i3955[19]
  i3954.slideBackSpeed = i3955[20]
  request.r(i3955[21], i3955[22], 0, i3954, 'sliderBackground')
  request.r(i3955[23], i3955[24], 0, i3954, 'sliderHandle')
  request.r(i3955[25], i3955[26], 0, i3954, 'sliderHandleRenderer')
  i3954.hideSliderInLandscape = !!i3955[27]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3959 = data
  i3958.ambientIntensity = i3959[0]
  i3958.reflectionIntensity = i3959[1]
  i3958.ambientMode = i3959[2]
  i3958.ambientLight = new pc.Color(i3959[3], i3959[4], i3959[5], i3959[6])
  i3958.ambientSkyColor = new pc.Color(i3959[7], i3959[8], i3959[9], i3959[10])
  i3958.ambientGroundColor = new pc.Color(i3959[11], i3959[12], i3959[13], i3959[14])
  i3958.ambientEquatorColor = new pc.Color(i3959[15], i3959[16], i3959[17], i3959[18])
  i3958.fogColor = new pc.Color(i3959[19], i3959[20], i3959[21], i3959[22])
  i3958.fogEndDistance = i3959[23]
  i3958.fogStartDistance = i3959[24]
  i3958.fogDensity = i3959[25]
  i3958.fog = !!i3959[26]
  request.r(i3959[27], i3959[28], 0, i3958, 'skybox')
  i3958.fogMode = i3959[29]
  var i3961 = i3959[30]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3961[i + 0]) );
  }
  i3958.lightmaps = i3960
  i3958.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3959[31], i3958.lightProbes)
  i3958.lightmapsMode = i3959[32]
  i3958.mixedBakeMode = i3959[33]
  i3958.environmentLightingMode = i3959[34]
  i3958.ambientProbe = new pc.SphericalHarmonicsL2(i3959[35])
  i3958.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3959[36])
  i3958.useReferenceAmbientProbe = !!i3959[37]
  request.r(i3959[38], i3959[39], 0, i3958, 'customReflection')
  request.r(i3959[40], i3959[41], 0, i3958, 'defaultReflection')
  i3958.defaultReflectionMode = i3959[42]
  i3958.defaultReflectionResolution = i3959[43]
  i3958.sunLightObjectId = i3959[44]
  i3958.pixelLightCount = i3959[45]
  i3958.defaultReflectionHDR = !!i3959[46]
  i3958.hasLightDataAsset = !!i3959[47]
  i3958.hasManualGenerate = !!i3959[48]
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3965 = data
  request.r(i3965[0], i3965[1], 0, i3964, 'lightmapColor')
  request.r(i3965[2], i3965[3], 0, i3964, 'lightmapDirection')
  request.r(i3965[4], i3965[5], 0, i3964, 'shadowMask')
  return i3964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3966 = root || new UnityEngine.LightProbes()
  var i3967 = data
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3975 = data
  var i3977 = i3975[0]
  var i3976 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3977[i + 0]));
  }
  i3974.ShaderCompilationErrors = i3976
  i3974.name = i3975[1]
  i3974.guid = i3975[2]
  var i3979 = i3975[3]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.push( i3979[i + 0] );
  }
  i3974.shaderDefinedKeywords = i3978
  var i3981 = i3975[4]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3981[i + 0]) );
  }
  i3974.passes = i3980
  var i3983 = i3975[5]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3983[i + 0]) );
  }
  i3974.usePasses = i3982
  var i3985 = i3975[6]
  var i3984 = []
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3985[i + 0]) );
  }
  i3974.defaultParameterValues = i3984
  request.r(i3975[7], i3975[8], 0, i3974, 'unityFallbackShader')
  i3974.readDepth = !!i3975[9]
  i3974.hasDepthOnlyPass = !!i3975[10]
  i3974.isCreatedByShaderGraph = !!i3975[11]
  i3974.disableBatching = !!i3975[12]
  i3974.compiled = !!i3975[13]
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3989 = data
  i3988.shaderName = i3989[0]
  i3988.errorMessage = i3989[1]
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3992 = root || new pc.UnityShaderPass()
  var i3993 = data
  i3992.id = i3993[0]
  i3992.subShaderIndex = i3993[1]
  i3992.name = i3993[2]
  i3992.passType = i3993[3]
  i3992.grabPassTextureName = i3993[4]
  i3992.usePass = !!i3993[5]
  i3992.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[6], i3992.zTest)
  i3992.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[7], i3992.zWrite)
  i3992.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[8], i3992.culling)
  i3992.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3993[9], i3992.blending)
  i3992.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3993[10], i3992.alphaBlending)
  i3992.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[11], i3992.colorWriteMask)
  i3992.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[12], i3992.offsetUnits)
  i3992.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[13], i3992.offsetFactor)
  i3992.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[14], i3992.stencilRef)
  i3992.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[15], i3992.stencilReadMask)
  i3992.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3993[16], i3992.stencilWriteMask)
  i3992.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3993[17], i3992.stencilOp)
  i3992.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3993[18], i3992.stencilOpFront)
  i3992.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3993[19], i3992.stencilOpBack)
  var i3995 = i3993[20]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3995[i + 0]) );
  }
  i3992.tags = i3994
  var i3997 = i3993[21]
  var i3996 = []
  for(var i = 0; i < i3997.length; i += 1) {
    i3996.push( i3997[i + 0] );
  }
  i3992.passDefinedKeywords = i3996
  var i3999 = i3993[22]
  var i3998 = []
  for(var i = 0; i < i3999.length; i += 1) {
    i3998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3999[i + 0]) );
  }
  i3992.passDefinedKeywordGroups = i3998
  var i4001 = i3993[23]
  var i4000 = []
  for(var i = 0; i < i4001.length; i += 1) {
    i4000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4001[i + 0]) );
  }
  i3992.variants = i4000
  var i4003 = i3993[24]
  var i4002 = []
  for(var i = 0; i < i4003.length; i += 1) {
    i4002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4003[i + 0]) );
  }
  i3992.excludedVariants = i4002
  i3992.hasDepthReader = !!i3993[25]
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4005 = data
  i4004.val = i4005[0]
  i4004.name = i4005[1]
  return i4004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4007 = data
  i4006.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4007[0], i4006.src)
  i4006.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4007[1], i4006.dst)
  i4006.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4007[2], i4006.op)
  return i4006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4009 = data
  i4008.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4009[0], i4008.pass)
  i4008.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4009[1], i4008.fail)
  i4008.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4009[2], i4008.zFail)
  i4008.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4009[3], i4008.comp)
  return i4008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4013 = data
  i4012.name = i4013[0]
  i4012.value = i4013[1]
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4017 = data
  var i4019 = i4017[0]
  var i4018 = []
  for(var i = 0; i < i4019.length; i += 1) {
    i4018.push( i4019[i + 0] );
  }
  i4016.keywords = i4018
  i4016.hasDiscard = !!i4017[1]
  return i4016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4023 = data
  i4022.passId = i4023[0]
  i4022.subShaderIndex = i4023[1]
  var i4025 = i4023[2]
  var i4024 = []
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.push( i4025[i + 0] );
  }
  i4022.keywords = i4024
  i4022.vertexProgram = i4023[3]
  i4022.fragmentProgram = i4023[4]
  i4022.exportedForWebGl2 = !!i4023[5]
  i4022.readDepth = !!i4023[6]
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4029 = data
  request.r(i4029[0], i4029[1], 0, i4028, 'shader')
  i4028.pass = i4029[2]
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4033 = data
  i4032.name = i4033[0]
  i4032.type = i4033[1]
  i4032.value = new pc.Vec4( i4033[2], i4033[3], i4033[4], i4033[5] )
  i4032.textureValue = i4033[6]
  i4032.shaderPropertyFlag = i4033[7]
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4035 = data
  i4034.name = i4035[0]
  request.r(i4035[1], i4035[2], 0, i4034, 'texture')
  i4034.aabb = i4035[3]
  i4034.vertices = i4035[4]
  i4034.triangles = i4035[5]
  i4034.textureRect = UnityEngine.Rect.MinMaxRect(i4035[6], i4035[7], i4035[8], i4035[9])
  i4034.packedRect = UnityEngine.Rect.MinMaxRect(i4035[10], i4035[11], i4035[12], i4035[13])
  i4034.border = new pc.Vec4( i4035[14], i4035[15], i4035[16], i4035[17] )
  i4034.transparency = i4035[18]
  i4034.bounds = i4035[19]
  i4034.pixelsPerUnit = i4035[20]
  i4034.textureWidth = i4035[21]
  i4034.textureHeight = i4035[22]
  i4034.nativeSize = new pc.Vec2( i4035[23], i4035[24] )
  i4034.pivot = new pc.Vec2( i4035[25], i4035[26] )
  i4034.textureRectOffset = new pc.Vec2( i4035[27], i4035[28] )
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4037 = data
  i4036.name = i4037[0]
  return i4036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4039 = data
  i4038.name = i4039[0]
  i4038.wrapMode = i4039[1]
  i4038.isLooping = !!i4039[2]
  i4038.length = i4039[3]
  var i4041 = i4039[4]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4041[i + 0]) );
  }
  i4038.curves = i4040
  var i4043 = i4039[5]
  var i4042 = []
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4043[i + 0]) );
  }
  i4038.events = i4042
  i4038.halfPrecision = !!i4039[6]
  i4038._frameRate = i4039[7]
  i4038.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4039[8], i4038.localBounds)
  i4038.hasMuscleCurves = !!i4039[9]
  var i4045 = i4039[10]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.push( i4045[i + 0] );
  }
  i4038.clipMuscleConstant = i4044
  i4038.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4039[11], i4038.clipBindingConstant)
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4049 = data
  i4048.path = i4049[0]
  i4048.hash = i4049[1]
  i4048.componentType = i4049[2]
  i4048.property = i4049[3]
  i4048.keys = i4049[4]
  var i4051 = i4049[5]
  var i4050 = []
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4051[i + 0]) );
  }
  i4048.objectReferenceKeys = i4050
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4055 = data
  i4054.time = i4055[0]
  request.r(i4055[1], i4055[2], 0, i4054, 'value')
  return i4054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4059 = data
  i4058.functionName = i4059[0]
  i4058.floatParameter = i4059[1]
  i4058.intParameter = i4059[2]
  i4058.stringParameter = i4059[3]
  request.r(i4059[4], i4059[5], 0, i4058, 'objectReferenceParameter')
  i4058.time = i4059[6]
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4061 = data
  i4060.center = new pc.Vec3( i4061[0], i4061[1], i4061[2] )
  i4060.extends = new pc.Vec3( i4061[3], i4061[4], i4061[5] )
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4065 = data
  var i4067 = i4065[0]
  var i4066 = []
  for(var i = 0; i < i4067.length; i += 1) {
    i4066.push( i4067[i + 0] );
  }
  i4064.genericBindings = i4066
  var i4069 = i4065[1]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.push( i4069[i + 0] );
  }
  i4064.pptrCurveMapping = i4068
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4071 = data
  i4070.name = i4071[0]
  var i4073 = i4071[1]
  var i4072 = []
  for(var i = 0; i < i4073.length; i += 1) {
    i4072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4073[i + 0]) );
  }
  i4070.layers = i4072
  var i4075 = i4071[2]
  var i4074 = []
  for(var i = 0; i < i4075.length; i += 1) {
    i4074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4075[i + 0]) );
  }
  i4070.parameters = i4074
  i4070.animationClips = i4071[3]
  i4070.avatarUnsupported = i4071[4]
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4079 = data
  i4078.name = i4079[0]
  i4078.defaultWeight = i4079[1]
  i4078.blendingMode = i4079[2]
  i4078.avatarMask = i4079[3]
  i4078.syncedLayerIndex = i4079[4]
  i4078.syncedLayerAffectsTiming = !!i4079[5]
  i4078.syncedLayers = i4079[6]
  i4078.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4079[7], i4078.stateMachine)
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4081 = data
  i4080.id = i4081[0]
  i4080.name = i4081[1]
  i4080.path = i4081[2]
  var i4083 = i4081[3]
  var i4082 = []
  for(var i = 0; i < i4083.length; i += 1) {
    i4082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4083[i + 0]) );
  }
  i4080.states = i4082
  var i4085 = i4081[4]
  var i4084 = []
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4085[i + 0]) );
  }
  i4080.machines = i4084
  var i4087 = i4081[5]
  var i4086 = []
  for(var i = 0; i < i4087.length; i += 1) {
    i4086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4087[i + 0]) );
  }
  i4080.entryStateTransitions = i4086
  var i4089 = i4081[6]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4089[i + 0]) );
  }
  i4080.exitStateTransitions = i4088
  var i4091 = i4081[7]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 1) {
    i4090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4091[i + 0]) );
  }
  i4080.anyStateTransitions = i4090
  i4080.defaultStateId = i4081[8]
  return i4080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4095 = data
  i4094.id = i4095[0]
  i4094.name = i4095[1]
  i4094.cycleOffset = i4095[2]
  i4094.cycleOffsetParameter = i4095[3]
  i4094.cycleOffsetParameterActive = !!i4095[4]
  i4094.mirror = !!i4095[5]
  i4094.mirrorParameter = i4095[6]
  i4094.mirrorParameterActive = !!i4095[7]
  i4094.motionId = i4095[8]
  i4094.nameHash = i4095[9]
  i4094.fullPathHash = i4095[10]
  i4094.speed = i4095[11]
  i4094.speedParameter = i4095[12]
  i4094.speedParameterActive = !!i4095[13]
  i4094.tag = i4095[14]
  i4094.tagHash = i4095[15]
  i4094.writeDefaultValues = !!i4095[16]
  var i4097 = i4095[17]
  var i4096 = []
  for(var i = 0; i < i4097.length; i += 2) {
  request.r(i4097[i + 0], i4097[i + 1], 2, i4096, '')
  }
  i4094.behaviours = i4096
  var i4099 = i4095[18]
  var i4098 = []
  for(var i = 0; i < i4099.length; i += 1) {
    i4098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4099[i + 0]) );
  }
  i4094.transitions = i4098
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4105 = data
  i4104.fullPath = i4105[0]
  i4104.canTransitionToSelf = !!i4105[1]
  i4104.duration = i4105[2]
  i4104.exitTime = i4105[3]
  i4104.hasExitTime = !!i4105[4]
  i4104.hasFixedDuration = !!i4105[5]
  i4104.interruptionSource = i4105[6]
  i4104.offset = i4105[7]
  i4104.orderedInterruption = !!i4105[8]
  i4104.destinationStateId = i4105[9]
  i4104.isExit = !!i4105[10]
  i4104.mute = !!i4105[11]
  i4104.solo = !!i4105[12]
  var i4107 = i4105[13]
  var i4106 = []
  for(var i = 0; i < i4107.length; i += 1) {
    i4106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4107[i + 0]) );
  }
  i4104.conditions = i4106
  return i4104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4113 = data
  i4112.destinationStateId = i4113[0]
  i4112.isExit = !!i4113[1]
  i4112.mute = !!i4113[2]
  i4112.solo = !!i4113[3]
  var i4115 = i4113[4]
  var i4114 = []
  for(var i = 0; i < i4115.length; i += 1) {
    i4114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4115[i + 0]) );
  }
  i4112.conditions = i4114
  return i4112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4119 = data
  i4118.defaultBool = !!i4119[0]
  i4118.defaultFloat = i4119[1]
  i4118.defaultInt = i4119[2]
  i4118.name = i4119[3]
  i4118.nameHash = i4119[4]
  i4118.type = i4119[5]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4121 = data
  i4120.name = i4121[0]
  i4120.bytes64 = i4121[1]
  i4120.data = i4121[2]
  return i4120
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4122 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4123 = data
  i4122.normalStyle = i4123[0]
  i4122.normalSpacingOffset = i4123[1]
  i4122.boldStyle = i4123[2]
  i4122.boldSpacing = i4123[3]
  i4122.italicStyle = i4123[4]
  i4122.tabSize = i4123[5]
  request.r(i4123[6], i4123[7], 0, i4122, 'atlas')
  i4122.m_SourceFontFileGUID = i4123[8]
  i4122.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4123[9], i4122.m_CreationSettings)
  request.r(i4123[10], i4123[11], 0, i4122, 'm_SourceFontFile')
  i4122.m_SourceFontFilePath = i4123[12]
  i4122.m_AtlasPopulationMode = i4123[13]
  i4122.InternalDynamicOS = !!i4123[14]
  var i4125 = i4123[15]
  var i4124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4125.length; i += 1) {
    i4124.add(request.d('UnityEngine.TextCore.Glyph', i4125[i + 0]));
  }
  i4122.m_GlyphTable = i4124
  var i4127 = i4123[16]
  var i4126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.add(request.d('TMPro.TMP_Character', i4127[i + 0]));
  }
  i4122.m_CharacterTable = i4126
  var i4129 = i4123[17]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 2) {
  request.r(i4129[i + 0], i4129[i + 1], 2, i4128, '')
  }
  i4122.m_AtlasTextures = i4128
  i4122.m_AtlasTextureIndex = i4123[18]
  i4122.m_IsMultiAtlasTexturesEnabled = !!i4123[19]
  i4122.m_GetFontFeatures = !!i4123[20]
  i4122.m_ClearDynamicDataOnBuild = !!i4123[21]
  i4122.m_AtlasWidth = i4123[22]
  i4122.m_AtlasHeight = i4123[23]
  i4122.m_AtlasPadding = i4123[24]
  i4122.m_AtlasRenderMode = i4123[25]
  var i4131 = i4123[26]
  var i4130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4131.length; i += 1) {
    i4130.add(request.d('UnityEngine.TextCore.GlyphRect', i4131[i + 0]));
  }
  i4122.m_UsedGlyphRects = i4130
  var i4133 = i4123[27]
  var i4132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.add(request.d('UnityEngine.TextCore.GlyphRect', i4133[i + 0]));
  }
  i4122.m_FreeGlyphRects = i4132
  i4122.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4123[28], i4122.m_FontFeatureTable)
  i4122.m_ShouldReimportFontFeatures = !!i4123[29]
  var i4135 = i4123[30]
  var i4134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4135.length; i += 2) {
  request.r(i4135[i + 0], i4135[i + 1], 1, i4134, '')
  }
  i4122.m_FallbackFontAssetTable = i4134
  var i4137 = i4123[31]
  var i4136 = []
  for(var i = 0; i < i4137.length; i += 1) {
    i4136.push( request.d('TMPro.TMP_FontWeightPair', i4137[i + 0]) );
  }
  i4122.m_FontWeightTable = i4136
  var i4139 = i4123[32]
  var i4138 = []
  for(var i = 0; i < i4139.length; i += 1) {
    i4138.push( request.d('TMPro.TMP_FontWeightPair', i4139[i + 0]) );
  }
  i4122.fontWeights = i4138
  i4122.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4123[33], i4122.m_fontInfo)
  var i4141 = i4123[34]
  var i4140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4141.length; i += 1) {
    i4140.add(request.d('TMPro.TMP_Glyph', i4141[i + 0]));
  }
  i4122.m_glyphInfoList = i4140
  i4122.m_KerningTable = request.d('TMPro.KerningTable', i4123[35], i4122.m_KerningTable)
  var i4143 = i4123[36]
  var i4142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4143.length; i += 2) {
  request.r(i4143[i + 0], i4143[i + 1], 1, i4142, '')
  }
  i4122.fallbackFontAssets = i4142
  i4122.m_Version = i4123[37]
  i4122.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4123[38], i4122.m_FaceInfo)
  request.r(i4123[39], i4123[40], 0, i4122, 'm_Material')
  return i4122
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4144 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4145 = data
  i4144.sourceFontFileName = i4145[0]
  i4144.sourceFontFileGUID = i4145[1]
  i4144.faceIndex = i4145[2]
  i4144.pointSizeSamplingMode = i4145[3]
  i4144.pointSize = i4145[4]
  i4144.padding = i4145[5]
  i4144.paddingMode = i4145[6]
  i4144.packingMode = i4145[7]
  i4144.atlasWidth = i4145[8]
  i4144.atlasHeight = i4145[9]
  i4144.characterSetSelectionMode = i4145[10]
  i4144.characterSequence = i4145[11]
  i4144.referencedFontAssetGUID = i4145[12]
  i4144.referencedTextAssetGUID = i4145[13]
  i4144.fontStyle = i4145[14]
  i4144.fontStyleModifier = i4145[15]
  i4144.renderMode = i4145[16]
  i4144.includeFontFeatures = !!i4145[17]
  return i4144
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4148 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4149 = data
  i4148.m_Index = i4149[0]
  i4148.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4149[1], i4148.m_Metrics)
  i4148.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4149[2], i4148.m_GlyphRect)
  i4148.m_Scale = i4149[3]
  i4148.m_AtlasIndex = i4149[4]
  i4148.m_ClassDefinitionType = i4149[5]
  return i4148
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4150 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4151 = data
  i4150.m_Width = i4151[0]
  i4150.m_Height = i4151[1]
  i4150.m_HorizontalBearingX = i4151[2]
  i4150.m_HorizontalBearingY = i4151[3]
  i4150.m_HorizontalAdvance = i4151[4]
  return i4150
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4152 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4153 = data
  i4152.m_X = i4153[0]
  i4152.m_Y = i4153[1]
  i4152.m_Width = i4153[2]
  i4152.m_Height = i4153[3]
  return i4152
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4156 = root || request.c( 'TMPro.TMP_Character' )
  var i4157 = data
  i4156.m_ElementType = i4157[0]
  i4156.m_Unicode = i4157[1]
  i4156.m_GlyphIndex = i4157[2]
  i4156.m_Scale = i4157[3]
  return i4156
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4162 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4163 = data
  var i4165 = i4163[0]
  var i4164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.add(request.d('TMPro.MultipleSubstitutionRecord', i4165[i + 0]));
  }
  i4162.m_MultipleSubstitutionRecords = i4164
  var i4167 = i4163[1]
  var i4166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.add(request.d('TMPro.LigatureSubstitutionRecord', i4167[i + 0]));
  }
  i4162.m_LigatureSubstitutionRecords = i4166
  var i4169 = i4163[2]
  var i4168 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4169.length; i += 1) {
    i4168.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4169[i + 0]));
  }
  i4162.m_GlyphPairAdjustmentRecords = i4168
  var i4171 = i4163[3]
  var i4170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4171.length; i += 1) {
    i4170.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4171[i + 0]));
  }
  i4162.m_MarkToBaseAdjustmentRecords = i4170
  var i4173 = i4163[4]
  var i4172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4173.length; i += 1) {
    i4172.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4173[i + 0]));
  }
  i4162.m_MarkToMarkAdjustmentRecords = i4172
  return i4162
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4176 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4177 = data
  i4176.m_TargetGlyphID = i4177[0]
  i4176.m_SubstituteGlyphIDs = i4177[1]
  return i4176
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4180 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4181 = data
  i4180.m_ComponentGlyphIDs = i4181[0]
  i4180.m_LigatureGlyphID = i4181[1]
  return i4180
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4184 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4185 = data
  i4184.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4185[0], i4184.m_FirstAdjustmentRecord)
  i4184.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4185[1], i4184.m_SecondAdjustmentRecord)
  i4184.m_FeatureLookupFlags = i4185[2]
  return i4184
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4188 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4189 = data
  i4188.m_BaseGlyphID = i4189[0]
  i4188.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4189[1], i4188.m_BaseGlyphAnchorPoint)
  i4188.m_MarkGlyphID = i4189[2]
  i4188.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4189[3], i4188.m_MarkPositionAdjustment)
  return i4188
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4192 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4193 = data
  i4192.m_BaseMarkGlyphID = i4193[0]
  i4192.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4193[1], i4192.m_BaseMarkGlyphAnchorPoint)
  i4192.m_CombiningMarkGlyphID = i4193[2]
  i4192.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4193[3], i4192.m_CombiningMarkPositionAdjustment)
  return i4192
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4198 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4199 = data
  request.r(i4199[0], i4199[1], 0, i4198, 'regularTypeface')
  request.r(i4199[2], i4199[3], 0, i4198, 'italicTypeface')
  return i4198
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4200 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4201 = data
  i4200.Name = i4201[0]
  i4200.PointSize = i4201[1]
  i4200.Scale = i4201[2]
  i4200.CharacterCount = i4201[3]
  i4200.LineHeight = i4201[4]
  i4200.Baseline = i4201[5]
  i4200.Ascender = i4201[6]
  i4200.CapHeight = i4201[7]
  i4200.Descender = i4201[8]
  i4200.CenterLine = i4201[9]
  i4200.SuperscriptOffset = i4201[10]
  i4200.SubscriptOffset = i4201[11]
  i4200.SubSize = i4201[12]
  i4200.Underline = i4201[13]
  i4200.UnderlineThickness = i4201[14]
  i4200.strikethrough = i4201[15]
  i4200.strikethroughThickness = i4201[16]
  i4200.TabWidth = i4201[17]
  i4200.Padding = i4201[18]
  i4200.AtlasWidth = i4201[19]
  i4200.AtlasHeight = i4201[20]
  return i4200
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4204 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4205 = data
  i4204.id = i4205[0]
  i4204.x = i4205[1]
  i4204.y = i4205[2]
  i4204.width = i4205[3]
  i4204.height = i4205[4]
  i4204.xOffset = i4205[5]
  i4204.yOffset = i4205[6]
  i4204.xAdvance = i4205[7]
  i4204.scale = i4205[8]
  return i4204
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4206 = root || request.c( 'TMPro.KerningTable' )
  var i4207 = data
  var i4209 = i4207[0]
  var i4208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.add(request.d('TMPro.KerningPair', i4209[i + 0]));
  }
  i4206.kerningPairs = i4208
  return i4206
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4212 = root || request.c( 'TMPro.KerningPair' )
  var i4213 = data
  i4212.xOffset = i4213[0]
  i4212.m_FirstGlyph = i4213[1]
  i4212.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4213[2], i4212.m_FirstGlyphAdjustments)
  i4212.m_SecondGlyph = i4213[3]
  i4212.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4213[4], i4212.m_SecondGlyphAdjustments)
  i4212.m_IgnoreSpacingAdjustments = !!i4213[5]
  return i4212
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4214 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4215 = data
  i4214.m_FaceIndex = i4215[0]
  i4214.m_FamilyName = i4215[1]
  i4214.m_StyleName = i4215[2]
  i4214.m_PointSize = i4215[3]
  i4214.m_Scale = i4215[4]
  i4214.m_UnitsPerEM = i4215[5]
  i4214.m_LineHeight = i4215[6]
  i4214.m_AscentLine = i4215[7]
  i4214.m_CapLine = i4215[8]
  i4214.m_MeanLine = i4215[9]
  i4214.m_Baseline = i4215[10]
  i4214.m_DescentLine = i4215[11]
  i4214.m_SuperscriptOffset = i4215[12]
  i4214.m_SuperscriptSize = i4215[13]
  i4214.m_SubscriptOffset = i4215[14]
  i4214.m_SubscriptSize = i4215[15]
  i4214.m_UnderlineOffset = i4215[16]
  i4214.m_UnderlineThickness = i4215[17]
  i4214.m_StrikethroughOffset = i4215[18]
  i4214.m_StrikethroughThickness = i4215[19]
  i4214.m_TabWidth = i4215[20]
  return i4214
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4216 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4217 = data
  var i4219 = i4217[0]
  var i4218 = []
  for(var i = 0; i < i4219.length; i += 2) {
  request.r(i4219[i + 0], i4219[i + 1], 2, i4218, '')
  }
  i4216.atlasAssets = i4218
  i4216.scale = i4217[1]
  request.r(i4217[2], i4217[3], 0, i4216, 'skeletonJSON')
  i4216.isUpgradingBlendModeMaterials = !!i4217[4]
  i4216.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4217[5], i4216.blendModeMaterials)
  var i4221 = i4217[6]
  var i4220 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4221.length; i += 2) {
  request.r(i4221[i + 0], i4221[i + 1], 1, i4220, '')
  }
  i4216.skeletonDataModifiers = i4220
  var i4223 = i4217[7]
  var i4222 = []
  for(var i = 0; i < i4223.length; i += 1) {
    i4222.push( i4223[i + 0] );
  }
  i4216.fromAnimation = i4222
  var i4225 = i4217[8]
  var i4224 = []
  for(var i = 0; i < i4225.length; i += 1) {
    i4224.push( i4225[i + 0] );
  }
  i4216.toAnimation = i4224
  i4216.duration = i4217[9]
  i4216.defaultMix = i4217[10]
  request.r(i4217[11], i4217[12], 0, i4216, 'controller')
  return i4216
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4228 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4229 = data
  i4228.applyAdditiveMaterial = !!i4229[0]
  var i4231 = i4229[1]
  var i4230 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4231.length; i += 1) {
    i4230.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4231[i + 0]));
  }
  i4228.additiveMaterials = i4230
  var i4233 = i4229[2]
  var i4232 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4233.length; i += 1) {
    i4232.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4233[i + 0]));
  }
  i4228.multiplyMaterials = i4232
  var i4235 = i4229[3]
  var i4234 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4235.length; i += 1) {
    i4234.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4235[i + 0]));
  }
  i4228.screenMaterials = i4234
  i4228.requiresBlendModeMaterials = !!i4229[4]
  return i4228
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4238 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4239 = data
  i4238.pageName = i4239[0]
  request.r(i4239[1], i4239[2], 0, i4238, 'material')
  return i4238
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4242 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4243 = data
  request.r(i4243[0], i4243[1], 0, i4242, 'atlasFile')
  var i4245 = i4243[2]
  var i4244 = []
  for(var i = 0; i < i4245.length; i += 2) {
  request.r(i4245[i + 0], i4245[i + 1], 2, i4244, '')
  }
  i4242.materials = i4244
  return i4242
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4246 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4247 = data
  i4246.useSafeMode = !!i4247[0]
  i4246.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4247[1], i4246.safeModeOptions)
  i4246.timeScale = i4247[2]
  i4246.unscaledTimeScale = i4247[3]
  i4246.useSmoothDeltaTime = !!i4247[4]
  i4246.maxSmoothUnscaledTime = i4247[5]
  i4246.rewindCallbackMode = i4247[6]
  i4246.showUnityEditorReport = !!i4247[7]
  i4246.logBehaviour = i4247[8]
  i4246.drawGizmos = !!i4247[9]
  i4246.defaultRecyclable = !!i4247[10]
  i4246.defaultAutoPlay = i4247[11]
  i4246.defaultUpdateType = i4247[12]
  i4246.defaultTimeScaleIndependent = !!i4247[13]
  i4246.defaultEaseType = i4247[14]
  i4246.defaultEaseOvershootOrAmplitude = i4247[15]
  i4246.defaultEasePeriod = i4247[16]
  i4246.defaultAutoKill = !!i4247[17]
  i4246.defaultLoopType = i4247[18]
  i4246.debugMode = !!i4247[19]
  i4246.debugStoreTargetId = !!i4247[20]
  i4246.showPreviewPanel = !!i4247[21]
  i4246.storeSettingsLocation = i4247[22]
  i4246.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4247[23], i4246.modules)
  i4246.createASMDEF = !!i4247[24]
  i4246.showPlayingTweens = !!i4247[25]
  i4246.showPausedTweens = !!i4247[26]
  return i4246
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4248 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4249 = data
  i4248.logBehaviour = i4249[0]
  i4248.nestedTweenFailureBehaviour = i4249[1]
  return i4248
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4250 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4251 = data
  i4250.showPanel = !!i4251[0]
  i4250.audioEnabled = !!i4251[1]
  i4250.physicsEnabled = !!i4251[2]
  i4250.physics2DEnabled = !!i4251[3]
  i4250.spriteEnabled = !!i4251[4]
  i4250.uiEnabled = !!i4251[5]
  i4250.uiToolkitEnabled = !!i4251[6]
  i4250.textMeshProEnabled = !!i4251[7]
  i4250.tk2DEnabled = !!i4251[8]
  i4250.deAudioEnabled = !!i4251[9]
  i4250.deUnityExtendedEnabled = !!i4251[10]
  i4250.epoOutlineEnabled = !!i4251[11]
  return i4250
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4252 = root || request.c( 'TMPro.TMP_Settings' )
  var i4253 = data
  i4252.assetVersion = i4253[0]
  i4252.m_TextWrappingMode = i4253[1]
  i4252.m_enableKerning = !!i4253[2]
  var i4255 = i4253[3]
  var i4254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.add(i4255[i + 0]);
  }
  i4252.m_ActiveFontFeatures = i4254
  i4252.m_enableExtraPadding = !!i4253[4]
  i4252.m_enableTintAllSprites = !!i4253[5]
  i4252.m_enableParseEscapeCharacters = !!i4253[6]
  i4252.m_EnableRaycastTarget = !!i4253[7]
  i4252.m_GetFontFeaturesAtRuntime = !!i4253[8]
  i4252.m_missingGlyphCharacter = i4253[9]
  i4252.m_ClearDynamicDataOnBuild = !!i4253[10]
  i4252.m_warningsDisabled = !!i4253[11]
  request.r(i4253[12], i4253[13], 0, i4252, 'm_defaultFontAsset')
  i4252.m_defaultFontAssetPath = i4253[14]
  i4252.m_defaultFontSize = i4253[15]
  i4252.m_defaultAutoSizeMinRatio = i4253[16]
  i4252.m_defaultAutoSizeMaxRatio = i4253[17]
  i4252.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4253[18], i4253[19] )
  i4252.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4253[20], i4253[21] )
  i4252.m_autoSizeTextContainer = !!i4253[22]
  i4252.m_IsTextObjectScaleStatic = !!i4253[23]
  var i4257 = i4253[24]
  var i4256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4257.length; i += 2) {
  request.r(i4257[i + 0], i4257[i + 1], 1, i4256, '')
  }
  i4252.m_fallbackFontAssets = i4256
  i4252.m_matchMaterialPreset = !!i4253[25]
  i4252.m_HideSubTextObjects = !!i4253[26]
  request.r(i4253[27], i4253[28], 0, i4252, 'm_defaultSpriteAsset')
  i4252.m_defaultSpriteAssetPath = i4253[29]
  i4252.m_enableEmojiSupport = !!i4253[30]
  i4252.m_MissingCharacterSpriteUnicode = i4253[31]
  var i4259 = i4253[32]
  var i4258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4259.length; i += 2) {
  request.r(i4259[i + 0], i4259[i + 1], 1, i4258, '')
  }
  i4252.m_EmojiFallbackTextAssets = i4258
  i4252.m_defaultColorGradientPresetsPath = i4253[33]
  request.r(i4253[34], i4253[35], 0, i4252, 'm_defaultStyleSheet')
  i4252.m_StyleSheetsResourcePath = i4253[36]
  request.r(i4253[37], i4253[38], 0, i4252, 'm_leadingCharacters')
  request.r(i4253[39], i4253[40], 0, i4252, 'm_followingCharacters')
  i4252.m_UseModernHangulLineBreakingRules = !!i4253[41]
  return i4252
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4262 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4263 = data
  request.r(i4263[0], i4263[1], 0, i4262, 'spriteSheet')
  var i4265 = i4263[2]
  var i4264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4265.length; i += 1) {
    i4264.add(request.d('TMPro.TMP_Sprite', i4265[i + 0]));
  }
  i4262.spriteInfoList = i4264
  var i4267 = i4263[3]
  var i4266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4267.length; i += 2) {
  request.r(i4267[i + 0], i4267[i + 1], 1, i4266, '')
  }
  i4262.fallbackSpriteAssets = i4266
  var i4269 = i4263[4]
  var i4268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4269.length; i += 1) {
    i4268.add(request.d('TMPro.TMP_SpriteCharacter', i4269[i + 0]));
  }
  i4262.m_SpriteCharacterTable = i4268
  var i4271 = i4263[5]
  var i4270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4271.length; i += 1) {
    i4270.add(request.d('TMPro.TMP_SpriteGlyph', i4271[i + 0]));
  }
  i4262.m_GlyphTable = i4270
  i4262.m_Version = i4263[6]
  i4262.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4263[7], i4262.m_FaceInfo)
  request.r(i4263[8], i4263[9], 0, i4262, 'm_Material')
  return i4262
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4274 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4275 = data
  i4274.name = i4275[0]
  i4274.hashCode = i4275[1]
  i4274.unicode = i4275[2]
  i4274.pivot = new pc.Vec2( i4275[3], i4275[4] )
  request.r(i4275[5], i4275[6], 0, i4274, 'sprite')
  i4274.id = i4275[7]
  i4274.x = i4275[8]
  i4274.y = i4275[9]
  i4274.width = i4275[10]
  i4274.height = i4275[11]
  i4274.xOffset = i4275[12]
  i4274.yOffset = i4275[13]
  i4274.xAdvance = i4275[14]
  i4274.scale = i4275[15]
  return i4274
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4280 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4281 = data
  i4280.m_Name = i4281[0]
  i4280.m_ElementType = i4281[1]
  i4280.m_Unicode = i4281[2]
  i4280.m_GlyphIndex = i4281[3]
  i4280.m_Scale = i4281[4]
  return i4280
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4284 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4285 = data
  request.r(i4285[0], i4285[1], 0, i4284, 'sprite')
  i4284.m_Index = i4285[2]
  i4284.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4285[3], i4284.m_Metrics)
  i4284.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4285[4], i4284.m_GlyphRect)
  i4284.m_Scale = i4285[5]
  i4284.m_AtlasIndex = i4285[6]
  i4284.m_ClassDefinitionType = i4285[7]
  return i4284
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4286 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4287 = data
  var i4289 = i4287[0]
  var i4288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4289.length; i += 1) {
    i4288.add(request.d('TMPro.TMP_Style', i4289[i + 0]));
  }
  i4286.m_StyleList = i4288
  return i4286
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4292 = root || request.c( 'TMPro.TMP_Style' )
  var i4293 = data
  i4292.m_Name = i4293[0]
  i4292.m_HashCode = i4293[1]
  i4292.m_OpeningDefinition = i4293[2]
  i4292.m_ClosingDefinition = i4293[3]
  i4292.m_OpeningTagArray = i4293[4]
  i4292.m_ClosingTagArray = i4293[5]
  return i4292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4295 = data
  var i4297 = i4295[0]
  var i4296 = []
  for(var i = 0; i < i4297.length; i += 1) {
    i4296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4297[i + 0]) );
  }
  i4294.files = i4296
  i4294.componentToPrefabIds = i4295[1]
  return i4294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4301 = data
  i4300.path = i4301[0]
  request.r(i4301[1], i4301[2], 0, i4300, 'unityObject')
  return i4300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4303 = data
  var i4305 = i4303[0]
  var i4304 = []
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4305[i + 0]) );
  }
  i4302.scriptsExecutionOrder = i4304
  var i4307 = i4303[1]
  var i4306 = []
  for(var i = 0; i < i4307.length; i += 1) {
    i4306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4307[i + 0]) );
  }
  i4302.sortingLayers = i4306
  var i4309 = i4303[2]
  var i4308 = []
  for(var i = 0; i < i4309.length; i += 1) {
    i4308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4309[i + 0]) );
  }
  i4302.cullingLayers = i4308
  i4302.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4303[3], i4302.timeSettings)
  i4302.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4303[4], i4302.physicsSettings)
  i4302.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4303[5], i4302.physics2DSettings)
  i4302.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4303[6], i4302.qualitySettings)
  i4302.enableRealtimeShadows = !!i4303[7]
  i4302.enableAutoInstancing = !!i4303[8]
  i4302.enableStaticBatching = !!i4303[9]
  i4302.enableDynamicBatching = !!i4303[10]
  i4302.lightmapEncodingQuality = i4303[11]
  i4302.desiredColorSpace = i4303[12]
  var i4311 = i4303[13]
  var i4310 = []
  for(var i = 0; i < i4311.length; i += 1) {
    i4310.push( i4311[i + 0] );
  }
  i4302.allTags = i4310
  return i4302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4315 = data
  i4314.name = i4315[0]
  i4314.value = i4315[1]
  return i4314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4319 = data
  i4318.id = i4319[0]
  i4318.name = i4319[1]
  i4318.value = i4319[2]
  return i4318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4323 = data
  i4322.id = i4323[0]
  i4322.name = i4323[1]
  return i4322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4325 = data
  i4324.fixedDeltaTime = i4325[0]
  i4324.maximumDeltaTime = i4325[1]
  i4324.timeScale = i4325[2]
  i4324.maximumParticleTimestep = i4325[3]
  return i4324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4327 = data
  i4326.gravity = new pc.Vec3( i4327[0], i4327[1], i4327[2] )
  i4326.defaultSolverIterations = i4327[3]
  i4326.bounceThreshold = i4327[4]
  i4326.autoSyncTransforms = !!i4327[5]
  i4326.autoSimulation = !!i4327[6]
  var i4329 = i4327[7]
  var i4328 = []
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4329[i + 0]) );
  }
  i4326.collisionMatrix = i4328
  return i4326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4333 = data
  i4332.enabled = !!i4333[0]
  i4332.layerId = i4333[1]
  i4332.otherLayerId = i4333[2]
  return i4332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4335 = data
  request.r(i4335[0], i4335[1], 0, i4334, 'material')
  i4334.gravity = new pc.Vec2( i4335[2], i4335[3] )
  i4334.positionIterations = i4335[4]
  i4334.velocityIterations = i4335[5]
  i4334.velocityThreshold = i4335[6]
  i4334.maxLinearCorrection = i4335[7]
  i4334.maxAngularCorrection = i4335[8]
  i4334.maxTranslationSpeed = i4335[9]
  i4334.maxRotationSpeed = i4335[10]
  i4334.baumgarteScale = i4335[11]
  i4334.baumgarteTOIScale = i4335[12]
  i4334.timeToSleep = i4335[13]
  i4334.linearSleepTolerance = i4335[14]
  i4334.angularSleepTolerance = i4335[15]
  i4334.defaultContactOffset = i4335[16]
  i4334.autoSimulation = !!i4335[17]
  i4334.queriesHitTriggers = !!i4335[18]
  i4334.queriesStartInColliders = !!i4335[19]
  i4334.callbacksOnDisable = !!i4335[20]
  i4334.reuseCollisionCallbacks = !!i4335[21]
  i4334.autoSyncTransforms = !!i4335[22]
  var i4337 = i4335[23]
  var i4336 = []
  for(var i = 0; i < i4337.length; i += 1) {
    i4336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4337[i + 0]) );
  }
  i4334.collisionMatrix = i4336
  return i4334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4341 = data
  i4340.enabled = !!i4341[0]
  i4340.layerId = i4341[1]
  i4340.otherLayerId = i4341[2]
  return i4340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4343 = data
  var i4345 = i4343[0]
  var i4344 = []
  for(var i = 0; i < i4345.length; i += 1) {
    i4344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4345[i + 0]) );
  }
  i4342.qualityLevels = i4344
  var i4347 = i4343[1]
  var i4346 = []
  for(var i = 0; i < i4347.length; i += 1) {
    i4346.push( i4347[i + 0] );
  }
  i4342.names = i4346
  i4342.shadows = i4343[2]
  i4342.anisotropicFiltering = i4343[3]
  i4342.antiAliasing = i4343[4]
  i4342.lodBias = i4343[5]
  i4342.shadowCascades = i4343[6]
  i4342.shadowDistance = i4343[7]
  i4342.shadowmaskMode = i4343[8]
  i4342.shadowProjection = i4343[9]
  i4342.shadowResolution = i4343[10]
  i4342.softParticles = !!i4343[11]
  i4342.softVegetation = !!i4343[12]
  i4342.activeColorSpace = i4343[13]
  i4342.desiredColorSpace = i4343[14]
  i4342.masterTextureLimit = i4343[15]
  i4342.maxQueuedFrames = i4343[16]
  i4342.particleRaycastBudget = i4343[17]
  i4342.pixelLightCount = i4343[18]
  i4342.realtimeReflectionProbes = !!i4343[19]
  i4342.shadowCascade2Split = i4343[20]
  i4342.shadowCascade4Split = new pc.Vec3( i4343[21], i4343[22], i4343[23] )
  i4342.streamingMipmapsActive = !!i4343[24]
  i4342.vSyncCount = i4343[25]
  i4342.asyncUploadBufferSize = i4343[26]
  i4342.asyncUploadTimeSlice = i4343[27]
  i4342.billboardsFaceCameraPosition = !!i4343[28]
  i4342.shadowNearPlaneOffset = i4343[29]
  i4342.streamingMipmapsMemoryBudget = i4343[30]
  i4342.maximumLODLevel = i4343[31]
  i4342.streamingMipmapsAddAllCameras = !!i4343[32]
  i4342.streamingMipmapsMaxLevelReduction = i4343[33]
  i4342.streamingMipmapsRenderersPerFrame = i4343[34]
  i4342.resolutionScalingFixedDPIFactor = i4343[35]
  i4342.streamingMipmapsMaxFileIORequests = i4343[36]
  i4342.currentQualityLevel = i4343[37]
  return i4342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4353 = data
  i4352.weight = i4353[0]
  i4352.vertices = i4353[1]
  i4352.normals = i4353[2]
  i4352.tangents = i4353[3]
  return i4352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4357 = data
  i4356.mode = i4357[0]
  i4356.parameter = i4357[1]
  i4356.threshold = i4357[2]
  return i4356
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4358 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4359 = data
  i4358.m_GlyphIndex = i4359[0]
  i4358.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4359[1], i4358.m_GlyphValueRecord)
  return i4358
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4360 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4361 = data
  i4360.m_XCoordinate = i4361[0]
  i4360.m_YCoordinate = i4361[1]
  return i4360
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4362 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4363 = data
  i4362.m_XPositionAdjustment = i4363[0]
  i4362.m_YPositionAdjustment = i4363[1]
  return i4362
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4364 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4365 = data
  i4364.xPlacement = i4365[0]
  i4364.yPlacement = i4365[1]
  i4364.xAdvance = i4365[2]
  i4364.yAdvance = i4365[3]
  return i4364
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4366 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4367 = data
  i4366.m_XPlacement = i4367[0]
  i4366.m_YPlacement = i4367[1]
  i4366.m_XAdvance = i4367[2]
  i4366.m_YAdvance = i4367[3]
  return i4366
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[33],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[77],"85":[77],"86":[77],"87":[77],"88":[77],"89":[77],"90":[33],"91":[46],"92":[93],"94":[93],"10":[9],"95":[96],"97":[98],"99":[46,45],"100":[98],"101":[100],"102":[98],"103":[98],"104":[105],"106":[105],"107":[98],"108":[9],"109":[16,9],"44":[46],"110":[16,9],"111":[14,46],"98":[46],"112":[46,45],"113":[70],"114":[77],"115":[116],"117":[105],"118":[40],"119":[33],"120":[121],"122":[38],"123":[10],"124":[9],"52":[46,9],"17":[9,16],"125":[9],"126":[16,9],"127":[46],"128":[16,9],"129":[9],"130":[131],"132":[131],"133":[131],"134":[9],"135":[9],"13":[10],"20":[16,9],"136":[9],"12":[10],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[9],"145":[9],"146":[16,9],"147":[9],"148":[9],"149":[9],"19":[9],"150":[16,9],"151":[9],"152":[38],"153":[38],"39":[38],"154":[38],"155":[33],"156":[33]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","ItemConveyor","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","ItemHolder","UnityEngine.BoxCollider","ItemSetupTool","ScreenHeightPositionAnchor","TMPro.TextMeshPro","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "27.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv689_GG";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1853";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5183";

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

Deserializers.buildID = "613be232-a80e-4c42-893b-8dbba0c68ddf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

