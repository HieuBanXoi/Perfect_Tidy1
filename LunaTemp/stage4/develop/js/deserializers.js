var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3590 = root || request.c( 'UnityEngine.JointSpring' )
  var i3591 = data
  i3590.spring = i3591[0]
  i3590.damper = i3591[1]
  i3590.targetPosition = i3591[2]
  return i3590
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3592 = root || request.c( 'UnityEngine.JointMotor' )
  var i3593 = data
  i3592.m_TargetVelocity = i3593[0]
  i3592.m_Force = i3593[1]
  i3592.m_FreeSpin = i3593[2]
  return i3592
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3594 = root || request.c( 'UnityEngine.JointLimits' )
  var i3595 = data
  i3594.m_Min = i3595[0]
  i3594.m_Max = i3595[1]
  i3594.m_Bounciness = i3595[2]
  i3594.m_BounceMinVelocity = i3595[3]
  i3594.m_ContactDistance = i3595[4]
  i3594.minBounce = i3595[5]
  i3594.maxBounce = i3595[6]
  return i3594
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3596 = root || request.c( 'UnityEngine.JointDrive' )
  var i3597 = data
  i3596.m_PositionSpring = i3597[0]
  i3596.m_PositionDamper = i3597[1]
  i3596.m_MaximumForce = i3597[2]
  i3596.m_UseAcceleration = i3597[3]
  return i3596
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3598 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3599 = data
  i3598.m_Spring = i3599[0]
  i3598.m_Damper = i3599[1]
  return i3598
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3600 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3601 = data
  i3600.m_Limit = i3601[0]
  i3600.m_Bounciness = i3601[1]
  i3600.m_ContactDistance = i3601[2]
  return i3600
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3602 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3603 = data
  i3602.m_ExtremumSlip = i3603[0]
  i3602.m_ExtremumValue = i3603[1]
  i3602.m_AsymptoteSlip = i3603[2]
  i3602.m_AsymptoteValue = i3603[3]
  i3602.m_Stiffness = i3603[4]
  return i3602
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3604 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3605 = data
  i3604.m_LowerAngle = i3605[0]
  i3604.m_UpperAngle = i3605[1]
  return i3604
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3607 = data
  i3606.m_MotorSpeed = i3607[0]
  i3606.m_MaximumMotorTorque = i3607[1]
  return i3606
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3609 = data
  i3608.m_DampingRatio = i3609[0]
  i3608.m_Frequency = i3609[1]
  i3608.m_Angle = i3609[2]
  return i3608
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3610 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3611 = data
  i3610.m_LowerTranslation = i3611[0]
  i3610.m_UpperTranslation = i3611[1]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3612 = root || new pc.UnityMaterial()
  var i3613 = data
  i3612.name = i3613[0]
  request.r(i3613[1], i3613[2], 0, i3612, 'shader')
  i3612.renderQueue = i3613[3]
  i3612.enableInstancing = !!i3613[4]
  var i3615 = i3613[5]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 1) {
    i3614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3615[i + 0]) );
  }
  i3612.floatParameters = i3614
  var i3617 = i3613[6]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3617[i + 0]) );
  }
  i3612.colorParameters = i3616
  var i3619 = i3613[7]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3619[i + 0]) );
  }
  i3612.vectorParameters = i3618
  var i3621 = i3613[8]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3621[i + 0]) );
  }
  i3612.textureParameters = i3620
  var i3623 = i3613[9]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 1) {
    i3622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3623[i + 0]) );
  }
  i3612.materialFlags = i3622
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3627 = data
  i3626.name = i3627[0]
  i3626.value = i3627[1]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3631 = data
  i3630.name = i3631[0]
  i3630.value = new pc.Color(i3631[1], i3631[2], i3631[3], i3631[4])
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3635 = data
  i3634.name = i3635[0]
  i3634.value = new pc.Vec4( i3635[1], i3635[2], i3635[3], i3635[4] )
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3639 = data
  i3638.name = i3639[0]
  request.r(i3639[1], i3639[2], 0, i3638, 'value')
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3643 = data
  i3642.name = i3643[0]
  i3642.enabled = !!i3643[1]
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3645 = data
  i3644.name = i3645[0]
  i3644.width = i3645[1]
  i3644.height = i3645[2]
  i3644.mipmapCount = i3645[3]
  i3644.anisoLevel = i3645[4]
  i3644.filterMode = i3645[5]
  i3644.hdr = !!i3645[6]
  i3644.format = i3645[7]
  i3644.wrapMode = i3645[8]
  i3644.alphaIsTransparency = !!i3645[9]
  i3644.alphaSource = i3645[10]
  i3644.graphicsFormat = i3645[11]
  i3644.sRGBTexture = !!i3645[12]
  i3644.desiredColorSpace = i3645[13]
  i3644.wrapU = i3645[14]
  i3644.wrapV = i3645[15]
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3647 = data
  i3646.position = new pc.Vec3( i3647[0], i3647[1], i3647[2] )
  i3646.scale = new pc.Vec3( i3647[3], i3647[4], i3647[5] )
  i3646.rotation = new pc.Quat(i3647[6], i3647[7], i3647[8], i3647[9])
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3649 = data
  i3648.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3649[0], i3648.main)
  i3648.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3649[1], i3648.colorBySpeed)
  i3648.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3649[2], i3648.colorOverLifetime)
  i3648.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3649[3], i3648.emission)
  i3648.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3649[4], i3648.rotationBySpeed)
  i3648.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3649[5], i3648.rotationOverLifetime)
  i3648.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3649[6], i3648.shape)
  i3648.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3649[7], i3648.sizeBySpeed)
  i3648.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3649[8], i3648.sizeOverLifetime)
  i3648.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3649[9], i3648.textureSheetAnimation)
  i3648.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3649[10], i3648.velocityOverLifetime)
  i3648.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3649[11], i3648.noise)
  i3648.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3649[12], i3648.inheritVelocity)
  i3648.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3649[13], i3648.forceOverLifetime)
  i3648.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3649[14], i3648.limitVelocityOverLifetime)
  i3648.useAutoRandomSeed = !!i3649[15]
  i3648.randomSeed = i3649[16]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3650 = root || new pc.ParticleSystemMain()
  var i3651 = data
  i3650.duration = i3651[0]
  i3650.loop = !!i3651[1]
  i3650.prewarm = !!i3651[2]
  i3650.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[3], i3650.startDelay)
  i3650.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[4], i3650.startLifetime)
  i3650.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[5], i3650.startSpeed)
  i3650.startSize3D = !!i3651[6]
  i3650.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[7], i3650.startSizeX)
  i3650.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[8], i3650.startSizeY)
  i3650.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[9], i3650.startSizeZ)
  i3650.startRotation3D = !!i3651[10]
  i3650.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[11], i3650.startRotationX)
  i3650.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[12], i3650.startRotationY)
  i3650.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[13], i3650.startRotationZ)
  i3650.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3651[14], i3650.startColor)
  i3650.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3651[15], i3650.gravityModifier)
  i3650.simulationSpace = i3651[16]
  request.r(i3651[17], i3651[18], 0, i3650, 'customSimulationSpace')
  i3650.simulationSpeed = i3651[19]
  i3650.useUnscaledTime = !!i3651[20]
  i3650.scalingMode = i3651[21]
  i3650.playOnAwake = !!i3651[22]
  i3650.maxParticles = i3651[23]
  i3650.emitterVelocityMode = i3651[24]
  i3650.stopAction = i3651[25]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3652 = root || new pc.MinMaxCurve()
  var i3653 = data
  i3652.mode = i3653[0]
  i3652.curveMin = new pc.AnimationCurve( { keys_flow: i3653[1] } )
  i3652.curveMax = new pc.AnimationCurve( { keys_flow: i3653[2] } )
  i3652.curveMultiplier = i3653[3]
  i3652.constantMin = i3653[4]
  i3652.constantMax = i3653[5]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3654 = root || new pc.MinMaxGradient()
  var i3655 = data
  i3654.mode = i3655[0]
  i3654.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3655[1], i3654.gradientMin)
  i3654.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3655[2], i3654.gradientMax)
  i3654.colorMin = new pc.Color(i3655[3], i3655[4], i3655[5], i3655[6])
  i3654.colorMax = new pc.Color(i3655[7], i3655[8], i3655[9], i3655[10])
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3657 = data
  i3656.mode = i3657[0]
  var i3659 = i3657[1]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3659[i + 0]) );
  }
  i3656.colorKeys = i3658
  var i3661 = i3657[2]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3661[i + 0]) );
  }
  i3656.alphaKeys = i3660
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3662 = root || new pc.ParticleSystemColorBySpeed()
  var i3663 = data
  i3662.enabled = !!i3663[0]
  i3662.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3663[1], i3662.color)
  i3662.range = new pc.Vec2( i3663[2], i3663[3] )
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3667 = data
  i3666.color = new pc.Color(i3667[0], i3667[1], i3667[2], i3667[3])
  i3666.time = i3667[4]
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3671 = data
  i3670.alpha = i3671[0]
  i3670.time = i3671[1]
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3672 = root || new pc.ParticleSystemColorOverLifetime()
  var i3673 = data
  i3672.enabled = !!i3673[0]
  i3672.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3673[1], i3672.color)
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3674 = root || new pc.ParticleSystemEmitter()
  var i3675 = data
  i3674.enabled = !!i3675[0]
  i3674.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3675[1], i3674.rateOverTime)
  i3674.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3675[2], i3674.rateOverDistance)
  var i3677 = i3675[3]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3677[i + 0]) );
  }
  i3674.bursts = i3676
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3680 = root || new pc.ParticleSystemBurst()
  var i3681 = data
  i3680.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[0], i3680.count)
  i3680.cycleCount = i3681[1]
  i3680.minCount = i3681[2]
  i3680.maxCount = i3681[3]
  i3680.repeatInterval = i3681[4]
  i3680.time = i3681[5]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3682 = root || new pc.ParticleSystemRotationBySpeed()
  var i3683 = data
  i3682.enabled = !!i3683[0]
  i3682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[1], i3682.x)
  i3682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[2], i3682.y)
  i3682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[3], i3682.z)
  i3682.separateAxes = !!i3683[4]
  i3682.range = new pc.Vec2( i3683[5], i3683[6] )
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3684 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3685 = data
  i3684.enabled = !!i3685[0]
  i3684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[1], i3684.x)
  i3684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[2], i3684.y)
  i3684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[3], i3684.z)
  i3684.separateAxes = !!i3685[4]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3686 = root || new pc.ParticleSystemShape()
  var i3687 = data
  i3686.enabled = !!i3687[0]
  i3686.shapeType = i3687[1]
  i3686.randomDirectionAmount = i3687[2]
  i3686.sphericalDirectionAmount = i3687[3]
  i3686.randomPositionAmount = i3687[4]
  i3686.alignToDirection = !!i3687[5]
  i3686.radius = i3687[6]
  i3686.radiusMode = i3687[7]
  i3686.radiusSpread = i3687[8]
  i3686.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[9], i3686.radiusSpeed)
  i3686.radiusThickness = i3687[10]
  i3686.angle = i3687[11]
  i3686.length = i3687[12]
  i3686.boxThickness = new pc.Vec3( i3687[13], i3687[14], i3687[15] )
  i3686.meshShapeType = i3687[16]
  request.r(i3687[17], i3687[18], 0, i3686, 'mesh')
  request.r(i3687[19], i3687[20], 0, i3686, 'meshRenderer')
  request.r(i3687[21], i3687[22], 0, i3686, 'skinnedMeshRenderer')
  i3686.useMeshMaterialIndex = !!i3687[23]
  i3686.meshMaterialIndex = i3687[24]
  i3686.useMeshColors = !!i3687[25]
  i3686.normalOffset = i3687[26]
  i3686.arc = i3687[27]
  i3686.arcMode = i3687[28]
  i3686.arcSpread = i3687[29]
  i3686.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[30], i3686.arcSpeed)
  i3686.donutRadius = i3687[31]
  i3686.position = new pc.Vec3( i3687[32], i3687[33], i3687[34] )
  i3686.rotation = new pc.Vec3( i3687[35], i3687[36], i3687[37] )
  i3686.scale = new pc.Vec3( i3687[38], i3687[39], i3687[40] )
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3688 = root || new pc.ParticleSystemSizeBySpeed()
  var i3689 = data
  i3688.enabled = !!i3689[0]
  i3688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3689[1], i3688.x)
  i3688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3689[2], i3688.y)
  i3688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3689[3], i3688.z)
  i3688.separateAxes = !!i3689[4]
  i3688.range = new pc.Vec2( i3689[5], i3689[6] )
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3690 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3691 = data
  i3690.enabled = !!i3691[0]
  i3690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3691[1], i3690.x)
  i3690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3691[2], i3690.y)
  i3690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3691[3], i3690.z)
  i3690.separateAxes = !!i3691[4]
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3692 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3693 = data
  i3692.enabled = !!i3693[0]
  i3692.mode = i3693[1]
  i3692.animation = i3693[2]
  i3692.numTilesX = i3693[3]
  i3692.numTilesY = i3693[4]
  i3692.useRandomRow = !!i3693[5]
  i3692.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3693[6], i3692.frameOverTime)
  i3692.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3693[7], i3692.startFrame)
  i3692.cycleCount = i3693[8]
  i3692.rowIndex = i3693[9]
  i3692.flipU = i3693[10]
  i3692.flipV = i3693[11]
  i3692.spriteCount = i3693[12]
  var i3695 = i3693[13]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 2) {
  request.r(i3695[i + 0], i3695[i + 1], 2, i3694, '')
  }
  i3692.sprites = i3694
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3698 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3699 = data
  i3698.enabled = !!i3699[0]
  i3698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[1], i3698.x)
  i3698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[2], i3698.y)
  i3698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[3], i3698.z)
  i3698.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[4], i3698.radial)
  i3698.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[5], i3698.speedModifier)
  i3698.space = i3699[6]
  i3698.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[7], i3698.orbitalX)
  i3698.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[8], i3698.orbitalY)
  i3698.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[9], i3698.orbitalZ)
  i3698.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[10], i3698.orbitalOffsetX)
  i3698.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[11], i3698.orbitalOffsetY)
  i3698.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[12], i3698.orbitalOffsetZ)
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3700 = root || new pc.ParticleSystemNoise()
  var i3701 = data
  i3700.enabled = !!i3701[0]
  i3700.separateAxes = !!i3701[1]
  i3700.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[2], i3700.strengthX)
  i3700.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[3], i3700.strengthY)
  i3700.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[4], i3700.strengthZ)
  i3700.frequency = i3701[5]
  i3700.damping = !!i3701[6]
  i3700.octaveCount = i3701[7]
  i3700.octaveMultiplier = i3701[8]
  i3700.octaveScale = i3701[9]
  i3700.quality = i3701[10]
  i3700.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[11], i3700.scrollSpeed)
  i3700.scrollSpeedMultiplier = i3701[12]
  i3700.remapEnabled = !!i3701[13]
  i3700.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[14], i3700.remapX)
  i3700.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[15], i3700.remapY)
  i3700.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[16], i3700.remapZ)
  i3700.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[17], i3700.positionAmount)
  i3700.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[18], i3700.rotationAmount)
  i3700.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[19], i3700.sizeAmount)
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3702 = root || new pc.ParticleSystemInheritVelocity()
  var i3703 = data
  i3702.enabled = !!i3703[0]
  i3702.mode = i3703[1]
  i3702.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3703[2], i3702.curve)
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3704 = root || new pc.ParticleSystemForceOverLifetime()
  var i3705 = data
  i3704.enabled = !!i3705[0]
  i3704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3705[1], i3704.x)
  i3704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3705[2], i3704.y)
  i3704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3705[3], i3704.z)
  i3704.space = i3705[4]
  i3704.randomized = !!i3705[5]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3706 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3707 = data
  i3706.enabled = !!i3707[0]
  i3706.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3707[1], i3706.limit)
  i3706.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3707[2], i3706.limitX)
  i3706.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3707[3], i3706.limitY)
  i3706.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3707[4], i3706.limitZ)
  i3706.dampen = i3707[5]
  i3706.separateAxes = !!i3707[6]
  i3706.space = i3707[7]
  i3706.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3707[8], i3706.drag)
  i3706.multiplyDragByParticleSize = !!i3707[9]
  i3706.multiplyDragByParticleVelocity = !!i3707[10]
  return i3706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3709 = data
  request.r(i3709[0], i3709[1], 0, i3708, 'mesh')
  i3708.meshCount = i3709[2]
  i3708.activeVertexStreamsCount = i3709[3]
  i3708.alignment = i3709[4]
  i3708.renderMode = i3709[5]
  i3708.sortMode = i3709[6]
  i3708.lengthScale = i3709[7]
  i3708.velocityScale = i3709[8]
  i3708.cameraVelocityScale = i3709[9]
  i3708.normalDirection = i3709[10]
  i3708.sortingFudge = i3709[11]
  i3708.minParticleSize = i3709[12]
  i3708.maxParticleSize = i3709[13]
  i3708.pivot = new pc.Vec3( i3709[14], i3709[15], i3709[16] )
  request.r(i3709[17], i3709[18], 0, i3708, 'trailMaterial')
  i3708.applyActiveColorSpace = !!i3709[19]
  i3708.enabled = !!i3709[20]
  request.r(i3709[21], i3709[22], 0, i3708, 'sharedMaterial')
  var i3711 = i3709[23]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 2) {
  request.r(i3711[i + 0], i3711[i + 1], 2, i3710, '')
  }
  i3708.sharedMaterials = i3710
  i3708.receiveShadows = !!i3709[24]
  i3708.shadowCastingMode = i3709[25]
  i3708.sortingLayerID = i3709[26]
  i3708.sortingOrder = i3709[27]
  i3708.lightmapIndex = i3709[28]
  i3708.lightmapSceneIndex = i3709[29]
  i3708.lightmapScaleOffset = new pc.Vec4( i3709[30], i3709[31], i3709[32], i3709[33] )
  i3708.lightProbeUsage = i3709[34]
  i3708.reflectionProbeUsage = i3709[35]
  return i3708
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i3714 = root || request.c( 'MergeEffect' )
  var i3715 = data
  request.r(i3715[0], i3715[1], 0, i3714, 'tf')
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3717 = data
  i3716.name = i3717[0]
  i3716.tagId = i3717[1]
  i3716.enabled = !!i3717[2]
  i3716.isStatic = !!i3717[3]
  i3716.layer = i3717[4]
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3719 = data
  i3718.name = i3719[0]
  i3718.halfPrecision = !!i3719[1]
  i3718.useSimplification = !!i3719[2]
  i3718.useUInt32IndexFormat = !!i3719[3]
  i3718.vertexCount = i3719[4]
  i3718.aabb = i3719[5]
  var i3721 = i3719[6]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( !!i3721[i + 0] );
  }
  i3718.streams = i3720
  i3718.vertices = i3719[7]
  var i3723 = i3719[8]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 1) {
    i3722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3723[i + 0]) );
  }
  i3718.subMeshes = i3722
  var i3725 = i3719[9]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 16) {
    i3724.push( new pc.Mat4().setData(i3725[i + 0], i3725[i + 1], i3725[i + 2], i3725[i + 3],  i3725[i + 4], i3725[i + 5], i3725[i + 6], i3725[i + 7],  i3725[i + 8], i3725[i + 9], i3725[i + 10], i3725[i + 11],  i3725[i + 12], i3725[i + 13], i3725[i + 14], i3725[i + 15]) );
  }
  i3718.bindposes = i3724
  var i3727 = i3719[10]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3727[i + 0]) );
  }
  i3718.blendShapes = i3726
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3733 = data
  i3732.triangles = i3733[0]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3739 = data
  i3738.name = i3739[0]
  var i3741 = i3739[1]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3741[i + 0]) );
  }
  i3738.frames = i3740
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3743 = data
  i3742.name = i3743[0]
  i3742.index = i3743[1]
  i3742.startup = !!i3743[2]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3745 = data
  i3744.pivot = new pc.Vec2( i3745[0], i3745[1] )
  i3744.anchorMin = new pc.Vec2( i3745[2], i3745[3] )
  i3744.anchorMax = new pc.Vec2( i3745[4], i3745[5] )
  i3744.sizeDelta = new pc.Vec2( i3745[6], i3745[7] )
  i3744.anchoredPosition3D = new pc.Vec3( i3745[8], i3745[9], i3745[10] )
  i3744.rotation = new pc.Quat(i3745[11], i3745[12], i3745[13], i3745[14])
  i3744.scale = new pc.Vec3( i3745[15], i3745[16], i3745[17] )
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3747 = data
  i3746.planeDistance = i3747[0]
  i3746.referencePixelsPerUnit = i3747[1]
  i3746.isFallbackOverlay = !!i3747[2]
  i3746.renderMode = i3747[3]
  i3746.renderOrder = i3747[4]
  i3746.sortingLayerName = i3747[5]
  i3746.sortingOrder = i3747[6]
  i3746.scaleFactor = i3747[7]
  request.r(i3747[8], i3747[9], 0, i3746, 'worldCamera')
  i3746.overrideSorting = !!i3747[10]
  i3746.pixelPerfect = !!i3747[11]
  i3746.targetDisplay = i3747[12]
  i3746.overridePixelPerfect = !!i3747[13]
  i3746.enabled = !!i3747[14]
  return i3746
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3748 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3749 = data
  i3748.m_UiScaleMode = i3749[0]
  i3748.m_ReferencePixelsPerUnit = i3749[1]
  i3748.m_ScaleFactor = i3749[2]
  i3748.m_ReferenceResolution = new pc.Vec2( i3749[3], i3749[4] )
  i3748.m_ScreenMatchMode = i3749[5]
  i3748.m_MatchWidthOrHeight = i3749[6]
  i3748.m_PhysicalUnit = i3749[7]
  i3748.m_FallbackScreenDPI = i3749[8]
  i3748.m_DefaultSpriteDPI = i3749[9]
  i3748.m_DynamicPixelsPerUnit = i3749[10]
  i3748.m_PresetInfoIsWorld = !!i3749[11]
  return i3748
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3750 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3751 = data
  i3750.m_IgnoreReversedGraphics = !!i3751[0]
  i3750.m_BlockingObjects = i3751[1]
  i3750.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3751[2] )
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, 'animatorController')
  request.r(i3753[2], i3753[3], 0, i3752, 'avatar')
  i3752.updateMode = i3753[4]
  i3752.hasTransformHierarchy = !!i3753[5]
  i3752.applyRootMotion = !!i3753[6]
  var i3755 = i3753[7]
  var i3754 = []
  for(var i = 0; i < i3755.length; i += 2) {
  request.r(i3755[i + 0], i3755[i + 1], 2, i3754, '')
  }
  i3752.humanBones = i3754
  i3752.enabled = !!i3753[8]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3759 = data
  i3758.cullTransparentMesh = !!i3759[0]
  return i3758
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3760 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3761 = data
  i3760.m_hasFontAssetChanged = !!i3761[0]
  request.r(i3761[1], i3761[2], 0, i3760, 'm_baseMaterial')
  i3760.m_maskOffset = new pc.Vec4( i3761[3], i3761[4], i3761[5], i3761[6] )
  i3760.m_text = i3761[7]
  i3760.m_isRightToLeft = !!i3761[8]
  request.r(i3761[9], i3761[10], 0, i3760, 'm_fontAsset')
  request.r(i3761[11], i3761[12], 0, i3760, 'm_sharedMaterial')
  var i3763 = i3761[13]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 2) {
  request.r(i3763[i + 0], i3763[i + 1], 2, i3762, '')
  }
  i3760.m_fontSharedMaterials = i3762
  request.r(i3761[14], i3761[15], 0, i3760, 'm_fontMaterial')
  var i3765 = i3761[16]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 2) {
  request.r(i3765[i + 0], i3765[i + 1], 2, i3764, '')
  }
  i3760.m_fontMaterials = i3764
  i3760.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3761[17], i3761[18], i3761[19], i3761[20])
  i3760.m_fontColor = new pc.Color(i3761[21], i3761[22], i3761[23], i3761[24])
  i3760.m_enableVertexGradient = !!i3761[25]
  i3760.m_colorMode = i3761[26]
  i3760.m_fontColorGradient = request.d('TMPro.VertexGradient', i3761[27], i3760.m_fontColorGradient)
  request.r(i3761[28], i3761[29], 0, i3760, 'm_fontColorGradientPreset')
  request.r(i3761[30], i3761[31], 0, i3760, 'm_spriteAsset')
  i3760.m_tintAllSprites = !!i3761[32]
  request.r(i3761[33], i3761[34], 0, i3760, 'm_StyleSheet')
  i3760.m_TextStyleHashCode = i3761[35]
  i3760.m_overrideHtmlColors = !!i3761[36]
  i3760.m_faceColor = UnityEngine.Color32.ConstructColor(i3761[37], i3761[38], i3761[39], i3761[40])
  i3760.m_fontSize = i3761[41]
  i3760.m_fontSizeBase = i3761[42]
  i3760.m_fontWeight = i3761[43]
  i3760.m_enableAutoSizing = !!i3761[44]
  i3760.m_fontSizeMin = i3761[45]
  i3760.m_fontSizeMax = i3761[46]
  i3760.m_fontStyle = i3761[47]
  i3760.m_HorizontalAlignment = i3761[48]
  i3760.m_VerticalAlignment = i3761[49]
  i3760.m_textAlignment = i3761[50]
  i3760.m_characterSpacing = i3761[51]
  i3760.m_wordSpacing = i3761[52]
  i3760.m_lineSpacing = i3761[53]
  i3760.m_lineSpacingMax = i3761[54]
  i3760.m_paragraphSpacing = i3761[55]
  i3760.m_charWidthMaxAdj = i3761[56]
  i3760.m_TextWrappingMode = i3761[57]
  i3760.m_wordWrappingRatios = i3761[58]
  i3760.m_overflowMode = i3761[59]
  request.r(i3761[60], i3761[61], 0, i3760, 'm_linkedTextComponent')
  request.r(i3761[62], i3761[63], 0, i3760, 'parentLinkedComponent')
  i3760.m_enableKerning = !!i3761[64]
  var i3767 = i3761[65]
  var i3766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.add(i3767[i + 0]);
  }
  i3760.m_ActiveFontFeatures = i3766
  i3760.m_enableExtraPadding = !!i3761[66]
  i3760.checkPaddingRequired = !!i3761[67]
  i3760.m_isRichText = !!i3761[68]
  i3760.m_parseCtrlCharacters = !!i3761[69]
  i3760.m_isOrthographic = !!i3761[70]
  i3760.m_isCullingEnabled = !!i3761[71]
  i3760.m_horizontalMapping = i3761[72]
  i3760.m_verticalMapping = i3761[73]
  i3760.m_uvLineOffset = i3761[74]
  i3760.m_geometrySortingOrder = i3761[75]
  i3760.m_IsTextObjectScaleStatic = !!i3761[76]
  i3760.m_VertexBufferAutoSizeReduction = !!i3761[77]
  i3760.m_useMaxVisibleDescender = !!i3761[78]
  i3760.m_pageToDisplay = i3761[79]
  i3760.m_margin = new pc.Vec4( i3761[80], i3761[81], i3761[82], i3761[83] )
  i3760.m_isUsingLegacyAnimationComponent = !!i3761[84]
  i3760.m_isVolumetricText = !!i3761[85]
  request.r(i3761[86], i3761[87], 0, i3760, 'm_Material')
  i3760.m_EmojiFallbackSupport = !!i3761[88]
  i3760.m_Maskable = !!i3761[89]
  i3760.m_Color = new pc.Color(i3761[90], i3761[91], i3761[92], i3761[93])
  i3760.m_RaycastTarget = !!i3761[94]
  i3760.m_RaycastPadding = new pc.Vec4( i3761[95], i3761[96], i3761[97], i3761[98] )
  return i3760
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3768 = root || request.c( 'TMPro.VertexGradient' )
  var i3769 = data
  i3768.topLeft = new pc.Color(i3769[0], i3769[1], i3769[2], i3769[3])
  i3768.topRight = new pc.Color(i3769[4], i3769[5], i3769[6], i3769[7])
  i3768.bottomLeft = new pc.Color(i3769[8], i3769[9], i3769[10], i3769[11])
  i3768.bottomRight = new pc.Color(i3769[12], i3769[13], i3769[14], i3769[15])
  return i3768
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3772 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3773 = data
  request.r(i3773[0], i3773[1], 0, i3772, 'm_FillRect')
  request.r(i3773[2], i3773[3], 0, i3772, 'm_HandleRect')
  i3772.m_Direction = i3773[4]
  i3772.m_MinValue = i3773[5]
  i3772.m_MaxValue = i3773[6]
  i3772.m_WholeNumbers = !!i3773[7]
  i3772.m_Value = i3773[8]
  i3772.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3773[9], i3772.m_OnValueChanged)
  i3772.m_Navigation = request.d('UnityEngine.UI.Navigation', i3773[10], i3772.m_Navigation)
  i3772.m_Transition = i3773[11]
  i3772.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3773[12], i3772.m_Colors)
  i3772.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3773[13], i3772.m_SpriteState)
  i3772.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3773[14], i3772.m_AnimationTriggers)
  i3772.m_Interactable = !!i3773[15]
  request.r(i3773[16], i3773[17], 0, i3772, 'm_TargetGraphic')
  return i3772
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3774 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3775 = data
  i3774.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3775[0], i3774.m_PersistentCalls)
  return i3774
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3776 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3777 = data
  var i3779 = i3777[0]
  var i3778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.add(request.d('UnityEngine.Events.PersistentCall', i3779[i + 0]));
  }
  i3776.m_Calls = i3778
  return i3776
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3782 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3783 = data
  request.r(i3783[0], i3783[1], 0, i3782, 'm_Target')
  i3782.m_TargetAssemblyTypeName = i3783[2]
  i3782.m_MethodName = i3783[3]
  i3782.m_Mode = i3783[4]
  i3782.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3783[5], i3782.m_Arguments)
  i3782.m_CallState = i3783[6]
  return i3782
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3784 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3785 = data
  i3784.m_Mode = i3785[0]
  i3784.m_WrapAround = !!i3785[1]
  request.r(i3785[2], i3785[3], 0, i3784, 'm_SelectOnUp')
  request.r(i3785[4], i3785[5], 0, i3784, 'm_SelectOnDown')
  request.r(i3785[6], i3785[7], 0, i3784, 'm_SelectOnLeft')
  request.r(i3785[8], i3785[9], 0, i3784, 'm_SelectOnRight')
  return i3784
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3786 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3787 = data
  i3786.m_NormalColor = new pc.Color(i3787[0], i3787[1], i3787[2], i3787[3])
  i3786.m_HighlightedColor = new pc.Color(i3787[4], i3787[5], i3787[6], i3787[7])
  i3786.m_PressedColor = new pc.Color(i3787[8], i3787[9], i3787[10], i3787[11])
  i3786.m_SelectedColor = new pc.Color(i3787[12], i3787[13], i3787[14], i3787[15])
  i3786.m_DisabledColor = new pc.Color(i3787[16], i3787[17], i3787[18], i3787[19])
  i3786.m_ColorMultiplier = i3787[20]
  i3786.m_FadeDuration = i3787[21]
  return i3786
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3788 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3789 = data
  request.r(i3789[0], i3789[1], 0, i3788, 'm_HighlightedSprite')
  request.r(i3789[2], i3789[3], 0, i3788, 'm_PressedSprite')
  request.r(i3789[4], i3789[5], 0, i3788, 'm_SelectedSprite')
  request.r(i3789[6], i3789[7], 0, i3788, 'm_DisabledSprite')
  return i3788
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3790 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3791 = data
  i3790.m_NormalTrigger = i3791[0]
  i3790.m_HighlightedTrigger = i3791[1]
  i3790.m_PressedTrigger = i3791[2]
  i3790.m_SelectedTrigger = i3791[3]
  i3790.m_DisabledTrigger = i3791[4]
  return i3790
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3792 = root || request.c( 'UnityEngine.UI.Image' )
  var i3793 = data
  request.r(i3793[0], i3793[1], 0, i3792, 'm_Sprite')
  i3792.m_Type = i3793[2]
  i3792.m_PreserveAspect = !!i3793[3]
  i3792.m_FillCenter = !!i3793[4]
  i3792.m_FillMethod = i3793[5]
  i3792.m_FillAmount = i3793[6]
  i3792.m_FillClockwise = !!i3793[7]
  i3792.m_FillOrigin = i3793[8]
  i3792.m_UseSpriteMesh = !!i3793[9]
  i3792.m_PixelsPerUnitMultiplier = i3793[10]
  request.r(i3793[11], i3793[12], 0, i3792, 'm_Material')
  i3792.m_Maskable = !!i3793[13]
  i3792.m_Color = new pc.Color(i3793[14], i3793[15], i3793[16], i3793[17])
  i3792.m_RaycastTarget = !!i3793[18]
  i3792.m_RaycastPadding = new pc.Vec4( i3793[19], i3793[20], i3793[21], i3793[22] )
  return i3792
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3794 = root || request.c( 'UnityEngine.UI.Button' )
  var i3795 = data
  i3794.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3795[0], i3794.m_OnClick)
  i3794.m_Navigation = request.d('UnityEngine.UI.Navigation', i3795[1], i3794.m_Navigation)
  i3794.m_Transition = i3795[2]
  i3794.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3795[3], i3794.m_Colors)
  i3794.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3795[4], i3794.m_SpriteState)
  i3794.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3795[5], i3794.m_AnimationTriggers)
  i3794.m_Interactable = !!i3795[6]
  request.r(i3795[7], i3795[8], 0, i3794, 'm_TargetGraphic')
  return i3794
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3796 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3797 = data
  i3796.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3797[0], i3796.m_PersistentCalls)
  return i3796
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3798 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3799 = data
  request.r(i3799[0], i3799[1], 0, i3798, 'm_ObjectArgument')
  i3798.m_ObjectArgumentAssemblyTypeName = i3799[2]
  i3798.m_IntArgument = i3799[3]
  i3798.m_FloatArgument = i3799[4]
  i3798.m_StringArgument = i3799[5]
  i3798.m_BoolArgument = !!i3799[6]
  return i3798
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3800 = root || request.c( 'Ply_Pool' )
  var i3801 = data
  var i3803 = i3801[0]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( request.d('Ply_Pool+PoolAmount', i3803[i + 0]) );
  }
  i3800.poolAmounts = i3802
  request.r(i3801[1], i3801[2], 0, i3800, 'poolHolder')
  return i3800
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3806 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3807 = data
  i3806.type = i3807[0]
  i3806.amount = i3807[1]
  request.r(i3807[2], i3807[3], 0, i3806, 'gameUnit')
  return i3806
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3808 = root || request.c( 'Ply_SoundManager' )
  var i3809 = data
  var i3811 = i3809[0]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 2) {
  request.r(i3811[i + 0], i3811[i + 1], 2, i3810, '')
  }
  i3808.audioClips = i3810
  request.r(i3809[1], i3809[2], 0, i3808, 'sound')
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3815 = data
  request.r(i3815[0], i3815[1], 0, i3814, 'clip')
  request.r(i3815[2], i3815[3], 0, i3814, 'outputAudioMixerGroup')
  i3814.playOnAwake = !!i3815[4]
  i3814.loop = !!i3815[5]
  i3814.time = i3815[6]
  i3814.volume = i3815[7]
  i3814.pitch = i3815[8]
  i3814.enabled = !!i3815[9]
  return i3814
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3816 = root || request.c( 'GameManager' )
  var i3817 = data
  i3816.isPlaying = !!i3817[0]
  i3816.isTutorial = !!i3817[1]
  i3816.isGotoStore = !!i3817[2]
  i3816.countMove = i3817[3]
  i3816.maxMove = i3817[4]
  i3816.startLayer = i3817[5]
  i3816.currentLayer = i3817[6]
  request.r(i3817[7], i3817[8], 0, i3816, 'mainBox')
  request.r(i3817[9], i3817[10], 0, i3816, 'handTutorial')
  i3816.tutorialDelay = i3817[11]
  return i3816
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3818 = root || request.c( 'UIManager' )
  var i3819 = data
  request.r(i3819[0], i3819[1], 0, i3818, 'winUI')
  request.r(i3819[2], i3819[3], 0, i3818, 'loseUI')
  request.r(i3819[4], i3819[5], 0, i3818, 'tutorial')
  request.r(i3819[6], i3819[7], 0, i3818, 'verticalUI')
  request.r(i3819[8], i3819[9], 0, i3818, 'horizontalUI')
  request.r(i3819[10], i3819[11], 0, i3818, 'downloadBtnVertical')
  request.r(i3819[12], i3819[13], 0, i3818, 'dowloadBtnHorizontal')
  request.r(i3819[14], i3819[15], 0, i3818, 'progressSlider')
  request.r(i3819[16], i3819[17], 0, i3818, 'progressText')
  i3818.maxProgressItems = i3819[18]
  i3818.startProgressItems = i3819[19]
  i3818.screenWidth = i3819[20]
  i3818.screenHeight = i3819[21]
  i3818.scaleHeightOnWidth = i3819[22]
  i3818.isVertical = !!i3819[23]
  request.r(i3819[24], i3819[25], 0, i3818, 'cam')
  i3818.introZoomOutMultiplier = i3819[26]
  i3818.cameraZoomDuration = i3819[27]
  i3818.useContinuousScaling = !!i3819[28]
  i3818.baseOrthographicSize = i3819[29]
  i3818.baseAspect = i3819[30]
  i3818.landscapeSize = i3819[31]
  i3818.defaultPortraitSize = i3819[32]
  var i3821 = i3819[33]
  var i3820 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.add(request.d('ScreenScaleStep', i3821[i + 0]));
  }
  i3818.discreteScaleSteps = i3820
  i3818.usePerspectiveCamera = !!i3819[34]
  request.r(i3819[35], i3819[36], 0, i3818, 'perspectiveFocus')
  i3818.perspectiveFocusDistance = i3819[37]
  i3818.perspectivePadding = i3819[38]
  i3818.fitRendererBounds = !!i3819[39]
  request.r(i3819[40], i3819[41], 0, i3818, 'boundsRoot')
  var i3823 = i3819[42]
  var i3822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i3823.length; i += 2) {
  request.r(i3823[i + 0], i3823[i + 1], 1, i3822, '')
  }
  i3818.boundsRenderers = i3822
  return i3818
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i3826 = root || request.c( 'ScreenScaleStep' )
  var i3827 = data
  i3826.heightOnWidthRatio = i3827[0]
  i3826.orthographicSize = i3827[1]
  return i3826
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3830 = root || request.c( 'InputManager' )
  var i3831 = data
  i3830.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3831[0] )
  i3830.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i3831[1] )
  i3830.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i3831[2] )
  i3830.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i3831[3] )
  i3830.isDragging = !!i3831[4]
  request.r(i3831[5], i3831[6], 0, i3830, 'mainCamera')
  return i3830
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i3832 = root || request.c( 'ItemSetupTool' )
  var i3833 = data
  request.r(i3833[0], i3833[1], 0, i3832, 'spritesParent')
  request.r(i3833[2], i3833[3], 0, i3832, 'holdersParent')
  i3832.shadowSuffix = i3833[4]
  i3832.holderPrefix = i3833[5]
  i3832.holdersParentName = i3833[6]
  i3832.colliderDepth = i3833[7]
  i3832.colliderSizeMultiplier = i3833[8]
  i3832.generatedShadowColor = new pc.Color(i3833[9], i3833[10], i3833[11], i3833[12])
  i3832.fadedBlackShadowColor = new pc.Color(i3833[13], i3833[14], i3833[15], i3833[16])
  i3832.generatedShadowLocalOffset = new pc.Vec3( i3833[17], i3833[18], i3833[19] )
  i3832.itemLayerName = i3833[20]
  i3832.holderLayerName = i3833[21]
  return i3832
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3834 = root || request.c( 'CameraController' )
  var i3835 = data
  request.r(i3835[0], i3835[1], 0, i3834, 'targetCamera')
  i3834.enableZoom = !!i3835[2]
  i3834.minZoomRatio = i3835[3]
  i3834.maxZoomRatio = i3835[4]
  i3834.mouseWheelZoomSpeed = i3835[5]
  i3834.pinchZoomSpeed = i3835[6]
  i3834.enableDrag = !!i3835[7]
  i3834.horizontalOnly = !!i3835[8]
  i3834.dragSensitivity = i3835[9]
  i3834.maxHorizontalOffset = i3835[10]
  i3834.maxVerticalOffset = i3835[11]
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3837 = data
  i3836.aspect = i3837[0]
  i3836.orthographic = !!i3837[1]
  i3836.orthographicSize = i3837[2]
  i3836.backgroundColor = new pc.Color(i3837[3], i3837[4], i3837[5], i3837[6])
  i3836.nearClipPlane = i3837[7]
  i3836.farClipPlane = i3837[8]
  i3836.fieldOfView = i3837[9]
  i3836.depth = i3837[10]
  i3836.clearFlags = i3837[11]
  i3836.cullingMask = i3837[12]
  i3836.rect = i3837[13]
  request.r(i3837[14], i3837[15], 0, i3836, 'targetTexture')
  i3836.usePhysicalProperties = !!i3837[16]
  i3836.focalLength = i3837[17]
  i3836.sensorSize = new pc.Vec2( i3837[18], i3837[19] )
  i3836.lensShift = new pc.Vec2( i3837[20], i3837[21] )
  i3836.gateFit = i3837[22]
  i3836.commandBufferCount = i3837[23]
  i3836.cameraType = i3837[24]
  i3836.enabled = !!i3837[25]
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3839 = data
  i3838.type = i3839[0]
  i3838.color = new pc.Color(i3839[1], i3839[2], i3839[3], i3839[4])
  i3838.cullingMask = i3839[5]
  i3838.intensity = i3839[6]
  i3838.range = i3839[7]
  i3838.spotAngle = i3839[8]
  i3838.shadows = i3839[9]
  i3838.shadowNormalBias = i3839[10]
  i3838.shadowBias = i3839[11]
  i3838.shadowStrength = i3839[12]
  i3838.shadowResolution = i3839[13]
  i3838.lightmapBakeType = i3839[14]
  i3838.renderMode = i3839[15]
  request.r(i3839[16], i3839[17], 0, i3838, 'cookie')
  i3838.cookieSize = i3839[18]
  i3838.shadowNearPlane = i3839[19]
  i3838.occlusionMaskChannel = i3839[20]
  i3838.enabled = !!i3839[21]
  return i3838
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3840 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3841 = data
  request.r(i3841[0], i3841[1], 0, i3840, 'm_FirstSelected')
  i3840.m_sendNavigationEvents = !!i3841[2]
  i3840.m_DragThreshold = i3841[3]
  return i3840
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3842 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3843 = data
  i3842.m_HorizontalAxis = i3843[0]
  i3842.m_VerticalAxis = i3843[1]
  i3842.m_SubmitButton = i3843[2]
  i3842.m_CancelButton = i3843[3]
  i3842.m_InputActionsPerSecond = i3843[4]
  i3842.m_RepeatDelay = i3843[5]
  i3842.m_ForceModuleActive = !!i3843[6]
  i3842.m_SendPointerHoverToParent = !!i3843[7]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3845 = data
  i3844.color = new pc.Color(i3845[0], i3845[1], i3845[2], i3845[3])
  request.r(i3845[4], i3845[5], 0, i3844, 'sprite')
  i3844.flipX = !!i3845[6]
  i3844.flipY = !!i3845[7]
  i3844.drawMode = i3845[8]
  i3844.size = new pc.Vec2( i3845[9], i3845[10] )
  i3844.tileMode = i3845[11]
  i3844.adaptiveModeThreshold = i3845[12]
  i3844.maskInteraction = i3845[13]
  i3844.spriteSortPoint = i3845[14]
  i3844.enabled = !!i3845[15]
  request.r(i3845[16], i3845[17], 0, i3844, 'sharedMaterial')
  var i3847 = i3845[18]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 2) {
  request.r(i3847[i + 0], i3847[i + 1], 2, i3846, '')
  }
  i3844.sharedMaterials = i3846
  i3844.receiveShadows = !!i3845[19]
  i3844.shadowCastingMode = i3845[20]
  i3844.sortingLayerID = i3845[21]
  i3844.sortingOrder = i3845[22]
  i3844.lightmapIndex = i3845[23]
  i3844.lightmapSceneIndex = i3845[24]
  i3844.lightmapScaleOffset = new pc.Vec4( i3845[25], i3845[26], i3845[27], i3845[28] )
  i3844.lightProbeUsage = i3845[29]
  i3844.reflectionProbeUsage = i3845[30]
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3849 = data
  i3848.center = new pc.Vec3( i3849[0], i3849[1], i3849[2] )
  i3848.radius = i3849[3]
  i3848.enabled = !!i3849[4]
  i3848.isTrigger = !!i3849[5]
  request.r(i3849[6], i3849[7], 0, i3848, 'material')
  return i3848
}

Deserializers["Box"] = function (request, data, root) {
  var i3850 = root || request.c( 'Box' )
  var i3851 = data
  i3850.useBox = !!i3851[0]
  i3850.spawnMode = i3851[1]
  var i3853 = i3851[2]
  var i3852 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3853.length; i += 2) {
  request.r(i3853[i + 0], i3853[i + 1], 1, i3852, '')
  }
  i3850.dynamicItems = i3852
  var i3855 = i3851[3]
  var i3854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3855.length; i += 2) {
  request.r(i3855[i + 0], i3855[i + 1], 1, i3854, '')
  }
  i3850.spawnTargets = i3854
  i3850.initialSpawnCount = i3851[4]
  i3850.revealDuration = i3851[5]
  i3850.showInitialBatchShadowsOnSpawn = !!i3851[6]
  request.r(i3851[7], i3851[8], 0, i3850, 'graphicController')
  return i3850
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i3860 = root || request.c( 'BoxGraphicController' )
  var i3861 = data
  request.r(i3861[0], i3861[1], 0, i3860, 'skeletonAnimation')
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3863 = data
  request.r(i3863[0], i3863[1], 0, i3862, 'sharedMesh')
  return i3862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3865 = data
  request.r(i3865[0], i3865[1], 0, i3864, 'additionalVertexStreams')
  i3864.enabled = !!i3865[2]
  request.r(i3865[3], i3865[4], 0, i3864, 'sharedMaterial')
  var i3867 = i3865[5]
  var i3866 = []
  for(var i = 0; i < i3867.length; i += 2) {
  request.r(i3867[i + 0], i3867[i + 1], 2, i3866, '')
  }
  i3864.sharedMaterials = i3866
  i3864.receiveShadows = !!i3865[6]
  i3864.shadowCastingMode = i3865[7]
  i3864.sortingLayerID = i3865[8]
  i3864.sortingOrder = i3865[9]
  i3864.lightmapIndex = i3865[10]
  i3864.lightmapSceneIndex = i3865[11]
  i3864.lightmapScaleOffset = new pc.Vec4( i3865[12], i3865[13], i3865[14], i3865[15] )
  i3864.lightProbeUsage = i3865[16]
  i3864.reflectionProbeUsage = i3865[17]
  return i3864
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i3868 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i3869 = data
  i3868.loop = !!i3869[0]
  i3868.timeScale = i3869[1]
  request.r(i3869[2], i3869[3], 0, i3868, 'skeletonDataAsset')
  i3868.initialSkinName = i3869[4]
  i3868.fixPrefabOverrideViaMeshFilter = i3869[5]
  i3868.initialFlipX = !!i3869[6]
  i3868.initialFlipY = !!i3869[7]
  i3868.updateWhenInvisible = i3869[8]
  i3868.zSpacing = i3869[9]
  i3868.useClipping = !!i3869[10]
  i3868.immutableTriangles = !!i3869[11]
  i3868.pmaVertexColors = !!i3869[12]
  i3868.clearStateOnDisable = !!i3869[13]
  i3868.tintBlack = !!i3869[14]
  i3868.singleSubmesh = !!i3869[15]
  i3868.fixDrawOrder = !!i3869[16]
  i3868.addNormals = !!i3869[17]
  i3868.calculateTangents = !!i3869[18]
  i3868.maskInteraction = i3869[19]
  i3868.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i3869[20], i3868.maskMaterials)
  i3868.disableRenderingOnOverride = !!i3869[21]
  i3868._animationName = i3869[22]
  var i3871 = i3869[23]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( i3871[i + 0] );
  }
  i3868.separatorSlotNames = i3870
  return i3868
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i3872 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i3873 = data
  var i3875 = i3873[0]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 2) {
  request.r(i3875[i + 0], i3875[i + 1], 2, i3874, '')
  }
  i3872.materialsMaskDisabled = i3874
  var i3877 = i3873[1]
  var i3876 = []
  for(var i = 0; i < i3877.length; i += 2) {
  request.r(i3877[i + 0], i3877[i + 1], 2, i3876, '')
  }
  i3872.materialsInsideMask = i3876
  var i3879 = i3873[2]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 2) {
  request.r(i3879[i + 0], i3879[i + 1], 2, i3878, '')
  }
  i3872.materialsOutsideMask = i3878
  return i3872
}

Deserializers["Item"] = function (request, data, root) {
  var i3882 = root || request.c( 'Item' )
  var i3883 = data
  i3882.placeSoundType = i3883[0]
  i3882.id = i3883[1]
  i3882.currentState = i3883[2]
  i3882.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i3883[3] )
  i3882.scaleOnSpawn = !!i3883[4]
  i3882.spawnScaleMultiplier = i3883[5]
  request.r(i3883[6], i3883[7], 0, i3882, 'correctHolderTransform')
  request.r(i3883[8], i3883[9], 0, i3882, 'shadowOnHolder')
  i3882.canShowShadowHint = !!i3883[10]
  i3882.waitingPosition = new pc.Vec3( i3883[11], i3883[12], i3883[13] )
  request.r(i3883[14], i3883[15], 0, i3882, 'spriteRenderer')
  return i3882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3885 = data
  i3884.center = new pc.Vec3( i3885[0], i3885[1], i3885[2] )
  i3884.size = new pc.Vec3( i3885[3], i3885[4], i3885[5] )
  i3884.enabled = !!i3885[6]
  i3884.isTrigger = !!i3885[7]
  request.r(i3885[8], i3885[9], 0, i3884, 'material')
  return i3884
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i3886 = root || request.c( 'PSD_Tool' )
  var i3887 = data
  var i3889 = i3887[0]
  var i3888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3889.length; i += 2) {
  request.r(i3889[i + 0], i3889[i + 1], 1, i3888, '')
  }
  i3886.sprites = i3888
  request.r(i3887[1], i3887[2], 0, i3886, 'holder')
  var i3891 = i3887[3]
  var i3890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3891.length; i += 2) {
  request.r(i3891[i + 0], i3891[i + 1], 1, i3890, '')
  }
  i3886.childGameObjects = i3890
  return i3886
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i3896 = root || request.c( 'ItemHolder' )
  var i3897 = data
  i3896.id = i3897[0]
  return i3896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3899 = data
  i3898.ambientIntensity = i3899[0]
  i3898.reflectionIntensity = i3899[1]
  i3898.ambientMode = i3899[2]
  i3898.ambientLight = new pc.Color(i3899[3], i3899[4], i3899[5], i3899[6])
  i3898.ambientSkyColor = new pc.Color(i3899[7], i3899[8], i3899[9], i3899[10])
  i3898.ambientGroundColor = new pc.Color(i3899[11], i3899[12], i3899[13], i3899[14])
  i3898.ambientEquatorColor = new pc.Color(i3899[15], i3899[16], i3899[17], i3899[18])
  i3898.fogColor = new pc.Color(i3899[19], i3899[20], i3899[21], i3899[22])
  i3898.fogEndDistance = i3899[23]
  i3898.fogStartDistance = i3899[24]
  i3898.fogDensity = i3899[25]
  i3898.fog = !!i3899[26]
  request.r(i3899[27], i3899[28], 0, i3898, 'skybox')
  i3898.fogMode = i3899[29]
  var i3901 = i3899[30]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3901[i + 0]) );
  }
  i3898.lightmaps = i3900
  i3898.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3899[31], i3898.lightProbes)
  i3898.lightmapsMode = i3899[32]
  i3898.mixedBakeMode = i3899[33]
  i3898.environmentLightingMode = i3899[34]
  i3898.ambientProbe = new pc.SphericalHarmonicsL2(i3899[35])
  i3898.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3899[36])
  i3898.useReferenceAmbientProbe = !!i3899[37]
  request.r(i3899[38], i3899[39], 0, i3898, 'customReflection')
  request.r(i3899[40], i3899[41], 0, i3898, 'defaultReflection')
  i3898.defaultReflectionMode = i3899[42]
  i3898.defaultReflectionResolution = i3899[43]
  i3898.sunLightObjectId = i3899[44]
  i3898.pixelLightCount = i3899[45]
  i3898.defaultReflectionHDR = !!i3899[46]
  i3898.hasLightDataAsset = !!i3899[47]
  i3898.hasManualGenerate = !!i3899[48]
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3905 = data
  request.r(i3905[0], i3905[1], 0, i3904, 'lightmapColor')
  request.r(i3905[2], i3905[3], 0, i3904, 'lightmapDirection')
  request.r(i3905[4], i3905[5], 0, i3904, 'shadowMask')
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3906 = root || new UnityEngine.LightProbes()
  var i3907 = data
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3915 = data
  var i3917 = i3915[0]
  var i3916 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3917[i + 0]));
  }
  i3914.ShaderCompilationErrors = i3916
  i3914.name = i3915[1]
  i3914.guid = i3915[2]
  var i3919 = i3915[3]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( i3919[i + 0] );
  }
  i3914.shaderDefinedKeywords = i3918
  var i3921 = i3915[4]
  var i3920 = []
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3921[i + 0]) );
  }
  i3914.passes = i3920
  var i3923 = i3915[5]
  var i3922 = []
  for(var i = 0; i < i3923.length; i += 1) {
    i3922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3923[i + 0]) );
  }
  i3914.usePasses = i3922
  var i3925 = i3915[6]
  var i3924 = []
  for(var i = 0; i < i3925.length; i += 1) {
    i3924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3925[i + 0]) );
  }
  i3914.defaultParameterValues = i3924
  request.r(i3915[7], i3915[8], 0, i3914, 'unityFallbackShader')
  i3914.readDepth = !!i3915[9]
  i3914.hasDepthOnlyPass = !!i3915[10]
  i3914.isCreatedByShaderGraph = !!i3915[11]
  i3914.disableBatching = !!i3915[12]
  i3914.compiled = !!i3915[13]
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3929 = data
  i3928.shaderName = i3929[0]
  i3928.errorMessage = i3929[1]
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3932 = root || new pc.UnityShaderPass()
  var i3933 = data
  i3932.id = i3933[0]
  i3932.subShaderIndex = i3933[1]
  i3932.name = i3933[2]
  i3932.passType = i3933[3]
  i3932.grabPassTextureName = i3933[4]
  i3932.usePass = !!i3933[5]
  i3932.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[6], i3932.zTest)
  i3932.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[7], i3932.zWrite)
  i3932.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[8], i3932.culling)
  i3932.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3933[9], i3932.blending)
  i3932.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3933[10], i3932.alphaBlending)
  i3932.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[11], i3932.colorWriteMask)
  i3932.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[12], i3932.offsetUnits)
  i3932.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[13], i3932.offsetFactor)
  i3932.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[14], i3932.stencilRef)
  i3932.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[15], i3932.stencilReadMask)
  i3932.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3933[16], i3932.stencilWriteMask)
  i3932.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3933[17], i3932.stencilOp)
  i3932.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3933[18], i3932.stencilOpFront)
  i3932.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3933[19], i3932.stencilOpBack)
  var i3935 = i3933[20]
  var i3934 = []
  for(var i = 0; i < i3935.length; i += 1) {
    i3934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3935[i + 0]) );
  }
  i3932.tags = i3934
  var i3937 = i3933[21]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( i3937[i + 0] );
  }
  i3932.passDefinedKeywords = i3936
  var i3939 = i3933[22]
  var i3938 = []
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3939[i + 0]) );
  }
  i3932.passDefinedKeywordGroups = i3938
  var i3941 = i3933[23]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3941[i + 0]) );
  }
  i3932.variants = i3940
  var i3943 = i3933[24]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3943[i + 0]) );
  }
  i3932.excludedVariants = i3942
  i3932.hasDepthReader = !!i3933[25]
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3945 = data
  i3944.val = i3945[0]
  i3944.name = i3945[1]
  return i3944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3947 = data
  i3946.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3947[0], i3946.src)
  i3946.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3947[1], i3946.dst)
  i3946.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3947[2], i3946.op)
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3949 = data
  i3948.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3949[0], i3948.pass)
  i3948.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3949[1], i3948.fail)
  i3948.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3949[2], i3948.zFail)
  i3948.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3949[3], i3948.comp)
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3953 = data
  i3952.name = i3953[0]
  i3952.value = i3953[1]
  return i3952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3957 = data
  var i3959 = i3957[0]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( i3959[i + 0] );
  }
  i3956.keywords = i3958
  i3956.hasDiscard = !!i3957[1]
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3963 = data
  i3962.passId = i3963[0]
  i3962.subShaderIndex = i3963[1]
  var i3965 = i3963[2]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( i3965[i + 0] );
  }
  i3962.keywords = i3964
  i3962.vertexProgram = i3963[3]
  i3962.fragmentProgram = i3963[4]
  i3962.exportedForWebGl2 = !!i3963[5]
  i3962.readDepth = !!i3963[6]
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3969 = data
  request.r(i3969[0], i3969[1], 0, i3968, 'shader')
  i3968.pass = i3969[2]
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3973 = data
  i3972.name = i3973[0]
  i3972.type = i3973[1]
  i3972.value = new pc.Vec4( i3973[2], i3973[3], i3973[4], i3973[5] )
  i3972.textureValue = i3973[6]
  i3972.shaderPropertyFlag = i3973[7]
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3975 = data
  i3974.name = i3975[0]
  request.r(i3975[1], i3975[2], 0, i3974, 'texture')
  i3974.aabb = i3975[3]
  i3974.vertices = i3975[4]
  i3974.triangles = i3975[5]
  i3974.textureRect = UnityEngine.Rect.MinMaxRect(i3975[6], i3975[7], i3975[8], i3975[9])
  i3974.packedRect = UnityEngine.Rect.MinMaxRect(i3975[10], i3975[11], i3975[12], i3975[13])
  i3974.border = new pc.Vec4( i3975[14], i3975[15], i3975[16], i3975[17] )
  i3974.transparency = i3975[18]
  i3974.bounds = i3975[19]
  i3974.pixelsPerUnit = i3975[20]
  i3974.textureWidth = i3975[21]
  i3974.textureHeight = i3975[22]
  i3974.nativeSize = new pc.Vec2( i3975[23], i3975[24] )
  i3974.pivot = new pc.Vec2( i3975[25], i3975[26] )
  i3974.textureRectOffset = new pc.Vec2( i3975[27], i3975[28] )
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3977 = data
  i3976.name = i3977[0]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3979 = data
  i3978.name = i3979[0]
  i3978.wrapMode = i3979[1]
  i3978.isLooping = !!i3979[2]
  i3978.length = i3979[3]
  var i3981 = i3979[4]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3981[i + 0]) );
  }
  i3978.curves = i3980
  var i3983 = i3979[5]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3983[i + 0]) );
  }
  i3978.events = i3982
  i3978.halfPrecision = !!i3979[6]
  i3978._frameRate = i3979[7]
  i3978.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3979[8], i3978.localBounds)
  i3978.hasMuscleCurves = !!i3979[9]
  var i3985 = i3979[10]
  var i3984 = []
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.push( i3985[i + 0] );
  }
  i3978.clipMuscleConstant = i3984
  i3978.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3979[11], i3978.clipBindingConstant)
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3989 = data
  i3988.path = i3989[0]
  i3988.hash = i3989[1]
  i3988.componentType = i3989[2]
  i3988.property = i3989[3]
  i3988.keys = i3989[4]
  var i3991 = i3989[5]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3991[i + 0]) );
  }
  i3988.objectReferenceKeys = i3990
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3995 = data
  i3994.time = i3995[0]
  request.r(i3995[1], i3995[2], 0, i3994, 'value')
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3999 = data
  i3998.functionName = i3999[0]
  i3998.floatParameter = i3999[1]
  i3998.intParameter = i3999[2]
  i3998.stringParameter = i3999[3]
  request.r(i3999[4], i3999[5], 0, i3998, 'objectReferenceParameter')
  i3998.time = i3999[6]
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4001 = data
  i4000.center = new pc.Vec3( i4001[0], i4001[1], i4001[2] )
  i4000.extends = new pc.Vec3( i4001[3], i4001[4], i4001[5] )
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4005 = data
  var i4007 = i4005[0]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( i4007[i + 0] );
  }
  i4004.genericBindings = i4006
  var i4009 = i4005[1]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( i4009[i + 0] );
  }
  i4004.pptrCurveMapping = i4008
  return i4004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4011 = data
  i4010.name = i4011[0]
  var i4013 = i4011[1]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 1) {
    i4012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4013[i + 0]) );
  }
  i4010.layers = i4012
  var i4015 = i4011[2]
  var i4014 = []
  for(var i = 0; i < i4015.length; i += 1) {
    i4014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4015[i + 0]) );
  }
  i4010.parameters = i4014
  i4010.animationClips = i4011[3]
  i4010.avatarUnsupported = i4011[4]
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4019 = data
  i4018.name = i4019[0]
  i4018.defaultWeight = i4019[1]
  i4018.blendingMode = i4019[2]
  i4018.avatarMask = i4019[3]
  i4018.syncedLayerIndex = i4019[4]
  i4018.syncedLayerAffectsTiming = !!i4019[5]
  i4018.syncedLayers = i4019[6]
  i4018.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4019[7], i4018.stateMachine)
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4021 = data
  i4020.id = i4021[0]
  i4020.name = i4021[1]
  i4020.path = i4021[2]
  var i4023 = i4021[3]
  var i4022 = []
  for(var i = 0; i < i4023.length; i += 1) {
    i4022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4023[i + 0]) );
  }
  i4020.states = i4022
  var i4025 = i4021[4]
  var i4024 = []
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4025[i + 0]) );
  }
  i4020.machines = i4024
  var i4027 = i4021[5]
  var i4026 = []
  for(var i = 0; i < i4027.length; i += 1) {
    i4026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4027[i + 0]) );
  }
  i4020.entryStateTransitions = i4026
  var i4029 = i4021[6]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4029[i + 0]) );
  }
  i4020.exitStateTransitions = i4028
  var i4031 = i4021[7]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4031[i + 0]) );
  }
  i4020.anyStateTransitions = i4030
  i4020.defaultStateId = i4021[8]
  return i4020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4035 = data
  i4034.id = i4035[0]
  i4034.name = i4035[1]
  i4034.cycleOffset = i4035[2]
  i4034.cycleOffsetParameter = i4035[3]
  i4034.cycleOffsetParameterActive = !!i4035[4]
  i4034.mirror = !!i4035[5]
  i4034.mirrorParameter = i4035[6]
  i4034.mirrorParameterActive = !!i4035[7]
  i4034.motionId = i4035[8]
  i4034.nameHash = i4035[9]
  i4034.fullPathHash = i4035[10]
  i4034.speed = i4035[11]
  i4034.speedParameter = i4035[12]
  i4034.speedParameterActive = !!i4035[13]
  i4034.tag = i4035[14]
  i4034.tagHash = i4035[15]
  i4034.writeDefaultValues = !!i4035[16]
  var i4037 = i4035[17]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 2) {
  request.r(i4037[i + 0], i4037[i + 1], 2, i4036, '')
  }
  i4034.behaviours = i4036
  var i4039 = i4035[18]
  var i4038 = []
  for(var i = 0; i < i4039.length; i += 1) {
    i4038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4039[i + 0]) );
  }
  i4034.transitions = i4038
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4045 = data
  i4044.fullPath = i4045[0]
  i4044.canTransitionToSelf = !!i4045[1]
  i4044.duration = i4045[2]
  i4044.exitTime = i4045[3]
  i4044.hasExitTime = !!i4045[4]
  i4044.hasFixedDuration = !!i4045[5]
  i4044.interruptionSource = i4045[6]
  i4044.offset = i4045[7]
  i4044.orderedInterruption = !!i4045[8]
  i4044.destinationStateId = i4045[9]
  i4044.isExit = !!i4045[10]
  i4044.mute = !!i4045[11]
  i4044.solo = !!i4045[12]
  var i4047 = i4045[13]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4047[i + 0]) );
  }
  i4044.conditions = i4046
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4053 = data
  i4052.destinationStateId = i4053[0]
  i4052.isExit = !!i4053[1]
  i4052.mute = !!i4053[2]
  i4052.solo = !!i4053[3]
  var i4055 = i4053[4]
  var i4054 = []
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4055[i + 0]) );
  }
  i4052.conditions = i4054
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4059 = data
  i4058.defaultBool = !!i4059[0]
  i4058.defaultFloat = i4059[1]
  i4058.defaultInt = i4059[2]
  i4058.name = i4059[3]
  i4058.nameHash = i4059[4]
  i4058.type = i4059[5]
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4061 = data
  i4060.name = i4061[0]
  i4060.bytes64 = i4061[1]
  i4060.data = i4061[2]
  return i4060
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4062 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4063 = data
  i4062.normalStyle = i4063[0]
  i4062.normalSpacingOffset = i4063[1]
  i4062.boldStyle = i4063[2]
  i4062.boldSpacing = i4063[3]
  i4062.italicStyle = i4063[4]
  i4062.tabSize = i4063[5]
  request.r(i4063[6], i4063[7], 0, i4062, 'atlas')
  i4062.m_SourceFontFileGUID = i4063[8]
  i4062.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4063[9], i4062.m_CreationSettings)
  request.r(i4063[10], i4063[11], 0, i4062, 'm_SourceFontFile')
  i4062.m_SourceFontFilePath = i4063[12]
  i4062.m_AtlasPopulationMode = i4063[13]
  i4062.InternalDynamicOS = !!i4063[14]
  var i4065 = i4063[15]
  var i4064 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.add(request.d('UnityEngine.TextCore.Glyph', i4065[i + 0]));
  }
  i4062.m_GlyphTable = i4064
  var i4067 = i4063[16]
  var i4066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4067.length; i += 1) {
    i4066.add(request.d('TMPro.TMP_Character', i4067[i + 0]));
  }
  i4062.m_CharacterTable = i4066
  var i4069 = i4063[17]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 2) {
  request.r(i4069[i + 0], i4069[i + 1], 2, i4068, '')
  }
  i4062.m_AtlasTextures = i4068
  i4062.m_AtlasTextureIndex = i4063[18]
  i4062.m_IsMultiAtlasTexturesEnabled = !!i4063[19]
  i4062.m_GetFontFeatures = !!i4063[20]
  i4062.m_ClearDynamicDataOnBuild = !!i4063[21]
  i4062.m_AtlasWidth = i4063[22]
  i4062.m_AtlasHeight = i4063[23]
  i4062.m_AtlasPadding = i4063[24]
  i4062.m_AtlasRenderMode = i4063[25]
  var i4071 = i4063[26]
  var i4070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.add(request.d('UnityEngine.TextCore.GlyphRect', i4071[i + 0]));
  }
  i4062.m_UsedGlyphRects = i4070
  var i4073 = i4063[27]
  var i4072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4073.length; i += 1) {
    i4072.add(request.d('UnityEngine.TextCore.GlyphRect', i4073[i + 0]));
  }
  i4062.m_FreeGlyphRects = i4072
  i4062.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4063[28], i4062.m_FontFeatureTable)
  i4062.m_ShouldReimportFontFeatures = !!i4063[29]
  var i4075 = i4063[30]
  var i4074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4075.length; i += 2) {
  request.r(i4075[i + 0], i4075[i + 1], 1, i4074, '')
  }
  i4062.m_FallbackFontAssetTable = i4074
  var i4077 = i4063[31]
  var i4076 = []
  for(var i = 0; i < i4077.length; i += 1) {
    i4076.push( request.d('TMPro.TMP_FontWeightPair', i4077[i + 0]) );
  }
  i4062.m_FontWeightTable = i4076
  var i4079 = i4063[32]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.push( request.d('TMPro.TMP_FontWeightPair', i4079[i + 0]) );
  }
  i4062.fontWeights = i4078
  i4062.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4063[33], i4062.m_fontInfo)
  var i4081 = i4063[34]
  var i4080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4081.length; i += 1) {
    i4080.add(request.d('TMPro.TMP_Glyph', i4081[i + 0]));
  }
  i4062.m_glyphInfoList = i4080
  i4062.m_KerningTable = request.d('TMPro.KerningTable', i4063[35], i4062.m_KerningTable)
  var i4083 = i4063[36]
  var i4082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4083.length; i += 2) {
  request.r(i4083[i + 0], i4083[i + 1], 1, i4082, '')
  }
  i4062.fallbackFontAssets = i4082
  i4062.m_Version = i4063[37]
  i4062.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4063[38], i4062.m_FaceInfo)
  request.r(i4063[39], i4063[40], 0, i4062, 'm_Material')
  return i4062
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4084 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4085 = data
  i4084.sourceFontFileName = i4085[0]
  i4084.sourceFontFileGUID = i4085[1]
  i4084.faceIndex = i4085[2]
  i4084.pointSizeSamplingMode = i4085[3]
  i4084.pointSize = i4085[4]
  i4084.padding = i4085[5]
  i4084.paddingMode = i4085[6]
  i4084.packingMode = i4085[7]
  i4084.atlasWidth = i4085[8]
  i4084.atlasHeight = i4085[9]
  i4084.characterSetSelectionMode = i4085[10]
  i4084.characterSequence = i4085[11]
  i4084.referencedFontAssetGUID = i4085[12]
  i4084.referencedTextAssetGUID = i4085[13]
  i4084.fontStyle = i4085[14]
  i4084.fontStyleModifier = i4085[15]
  i4084.renderMode = i4085[16]
  i4084.includeFontFeatures = !!i4085[17]
  return i4084
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4088 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4089 = data
  i4088.m_Index = i4089[0]
  i4088.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4089[1], i4088.m_Metrics)
  i4088.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4089[2], i4088.m_GlyphRect)
  i4088.m_Scale = i4089[3]
  i4088.m_AtlasIndex = i4089[4]
  i4088.m_ClassDefinitionType = i4089[5]
  return i4088
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4090 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4091 = data
  i4090.m_Width = i4091[0]
  i4090.m_Height = i4091[1]
  i4090.m_HorizontalBearingX = i4091[2]
  i4090.m_HorizontalBearingY = i4091[3]
  i4090.m_HorizontalAdvance = i4091[4]
  return i4090
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4092 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4093 = data
  i4092.m_X = i4093[0]
  i4092.m_Y = i4093[1]
  i4092.m_Width = i4093[2]
  i4092.m_Height = i4093[3]
  return i4092
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4096 = root || request.c( 'TMPro.TMP_Character' )
  var i4097 = data
  i4096.m_ElementType = i4097[0]
  i4096.m_Unicode = i4097[1]
  i4096.m_GlyphIndex = i4097[2]
  i4096.m_Scale = i4097[3]
  return i4096
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4102 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4103 = data
  var i4105 = i4103[0]
  var i4104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4105.length; i += 1) {
    i4104.add(request.d('TMPro.MultipleSubstitutionRecord', i4105[i + 0]));
  }
  i4102.m_MultipleSubstitutionRecords = i4104
  var i4107 = i4103[1]
  var i4106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4107.length; i += 1) {
    i4106.add(request.d('TMPro.LigatureSubstitutionRecord', i4107[i + 0]));
  }
  i4102.m_LigatureSubstitutionRecords = i4106
  var i4109 = i4103[2]
  var i4108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4109[i + 0]));
  }
  i4102.m_GlyphPairAdjustmentRecords = i4108
  var i4111 = i4103[3]
  var i4110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4111.length; i += 1) {
    i4110.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4111[i + 0]));
  }
  i4102.m_MarkToBaseAdjustmentRecords = i4110
  var i4113 = i4103[4]
  var i4112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4113.length; i += 1) {
    i4112.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4113[i + 0]));
  }
  i4102.m_MarkToMarkAdjustmentRecords = i4112
  return i4102
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4116 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4117 = data
  i4116.m_TargetGlyphID = i4117[0]
  i4116.m_SubstituteGlyphIDs = i4117[1]
  return i4116
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4120 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4121 = data
  i4120.m_ComponentGlyphIDs = i4121[0]
  i4120.m_LigatureGlyphID = i4121[1]
  return i4120
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4124 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4125 = data
  i4124.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4125[0], i4124.m_FirstAdjustmentRecord)
  i4124.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4125[1], i4124.m_SecondAdjustmentRecord)
  i4124.m_FeatureLookupFlags = i4125[2]
  return i4124
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4128 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4129 = data
  i4128.m_BaseGlyphID = i4129[0]
  i4128.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4129[1], i4128.m_BaseGlyphAnchorPoint)
  i4128.m_MarkGlyphID = i4129[2]
  i4128.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4129[3], i4128.m_MarkPositionAdjustment)
  return i4128
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4132 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4133 = data
  i4132.m_BaseMarkGlyphID = i4133[0]
  i4132.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4133[1], i4132.m_BaseMarkGlyphAnchorPoint)
  i4132.m_CombiningMarkGlyphID = i4133[2]
  i4132.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4133[3], i4132.m_CombiningMarkPositionAdjustment)
  return i4132
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4138 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4139 = data
  request.r(i4139[0], i4139[1], 0, i4138, 'regularTypeface')
  request.r(i4139[2], i4139[3], 0, i4138, 'italicTypeface')
  return i4138
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4140 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4141 = data
  i4140.Name = i4141[0]
  i4140.PointSize = i4141[1]
  i4140.Scale = i4141[2]
  i4140.CharacterCount = i4141[3]
  i4140.LineHeight = i4141[4]
  i4140.Baseline = i4141[5]
  i4140.Ascender = i4141[6]
  i4140.CapHeight = i4141[7]
  i4140.Descender = i4141[8]
  i4140.CenterLine = i4141[9]
  i4140.SuperscriptOffset = i4141[10]
  i4140.SubscriptOffset = i4141[11]
  i4140.SubSize = i4141[12]
  i4140.Underline = i4141[13]
  i4140.UnderlineThickness = i4141[14]
  i4140.strikethrough = i4141[15]
  i4140.strikethroughThickness = i4141[16]
  i4140.TabWidth = i4141[17]
  i4140.Padding = i4141[18]
  i4140.AtlasWidth = i4141[19]
  i4140.AtlasHeight = i4141[20]
  return i4140
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4144 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4145 = data
  i4144.id = i4145[0]
  i4144.x = i4145[1]
  i4144.y = i4145[2]
  i4144.width = i4145[3]
  i4144.height = i4145[4]
  i4144.xOffset = i4145[5]
  i4144.yOffset = i4145[6]
  i4144.xAdvance = i4145[7]
  i4144.scale = i4145[8]
  return i4144
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4146 = root || request.c( 'TMPro.KerningTable' )
  var i4147 = data
  var i4149 = i4147[0]
  var i4148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4149.length; i += 1) {
    i4148.add(request.d('TMPro.KerningPair', i4149[i + 0]));
  }
  i4146.kerningPairs = i4148
  return i4146
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4152 = root || request.c( 'TMPro.KerningPair' )
  var i4153 = data
  i4152.xOffset = i4153[0]
  i4152.m_FirstGlyph = i4153[1]
  i4152.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4153[2], i4152.m_FirstGlyphAdjustments)
  i4152.m_SecondGlyph = i4153[3]
  i4152.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4153[4], i4152.m_SecondGlyphAdjustments)
  i4152.m_IgnoreSpacingAdjustments = !!i4153[5]
  return i4152
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4154 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4155 = data
  i4154.m_FaceIndex = i4155[0]
  i4154.m_FamilyName = i4155[1]
  i4154.m_StyleName = i4155[2]
  i4154.m_PointSize = i4155[3]
  i4154.m_Scale = i4155[4]
  i4154.m_UnitsPerEM = i4155[5]
  i4154.m_LineHeight = i4155[6]
  i4154.m_AscentLine = i4155[7]
  i4154.m_CapLine = i4155[8]
  i4154.m_MeanLine = i4155[9]
  i4154.m_Baseline = i4155[10]
  i4154.m_DescentLine = i4155[11]
  i4154.m_SuperscriptOffset = i4155[12]
  i4154.m_SuperscriptSize = i4155[13]
  i4154.m_SubscriptOffset = i4155[14]
  i4154.m_SubscriptSize = i4155[15]
  i4154.m_UnderlineOffset = i4155[16]
  i4154.m_UnderlineThickness = i4155[17]
  i4154.m_StrikethroughOffset = i4155[18]
  i4154.m_StrikethroughThickness = i4155[19]
  i4154.m_TabWidth = i4155[20]
  return i4154
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4156 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4157 = data
  var i4159 = i4157[0]
  var i4158 = []
  for(var i = 0; i < i4159.length; i += 2) {
  request.r(i4159[i + 0], i4159[i + 1], 2, i4158, '')
  }
  i4156.atlasAssets = i4158
  i4156.scale = i4157[1]
  request.r(i4157[2], i4157[3], 0, i4156, 'skeletonJSON')
  i4156.isUpgradingBlendModeMaterials = !!i4157[4]
  i4156.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4157[5], i4156.blendModeMaterials)
  var i4161 = i4157[6]
  var i4160 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4161.length; i += 2) {
  request.r(i4161[i + 0], i4161[i + 1], 1, i4160, '')
  }
  i4156.skeletonDataModifiers = i4160
  var i4163 = i4157[7]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( i4163[i + 0] );
  }
  i4156.fromAnimation = i4162
  var i4165 = i4157[8]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( i4165[i + 0] );
  }
  i4156.toAnimation = i4164
  i4156.duration = i4157[9]
  i4156.defaultMix = i4157[10]
  request.r(i4157[11], i4157[12], 0, i4156, 'controller')
  return i4156
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4168 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4169 = data
  i4168.applyAdditiveMaterial = !!i4169[0]
  var i4171 = i4169[1]
  var i4170 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4171.length; i += 1) {
    i4170.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4171[i + 0]));
  }
  i4168.additiveMaterials = i4170
  var i4173 = i4169[2]
  var i4172 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4173.length; i += 1) {
    i4172.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4173[i + 0]));
  }
  i4168.multiplyMaterials = i4172
  var i4175 = i4169[3]
  var i4174 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4175.length; i += 1) {
    i4174.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4175[i + 0]));
  }
  i4168.screenMaterials = i4174
  i4168.requiresBlendModeMaterials = !!i4169[4]
  return i4168
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4178 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4179 = data
  i4178.pageName = i4179[0]
  request.r(i4179[1], i4179[2], 0, i4178, 'material')
  return i4178
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4182 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4183 = data
  request.r(i4183[0], i4183[1], 0, i4182, 'atlasFile')
  var i4185 = i4183[2]
  var i4184 = []
  for(var i = 0; i < i4185.length; i += 2) {
  request.r(i4185[i + 0], i4185[i + 1], 2, i4184, '')
  }
  i4182.materials = i4184
  return i4182
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4186 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4187 = data
  i4186.useSafeMode = !!i4187[0]
  i4186.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4187[1], i4186.safeModeOptions)
  i4186.timeScale = i4187[2]
  i4186.unscaledTimeScale = i4187[3]
  i4186.useSmoothDeltaTime = !!i4187[4]
  i4186.maxSmoothUnscaledTime = i4187[5]
  i4186.rewindCallbackMode = i4187[6]
  i4186.showUnityEditorReport = !!i4187[7]
  i4186.logBehaviour = i4187[8]
  i4186.drawGizmos = !!i4187[9]
  i4186.defaultRecyclable = !!i4187[10]
  i4186.defaultAutoPlay = i4187[11]
  i4186.defaultUpdateType = i4187[12]
  i4186.defaultTimeScaleIndependent = !!i4187[13]
  i4186.defaultEaseType = i4187[14]
  i4186.defaultEaseOvershootOrAmplitude = i4187[15]
  i4186.defaultEasePeriod = i4187[16]
  i4186.defaultAutoKill = !!i4187[17]
  i4186.defaultLoopType = i4187[18]
  i4186.debugMode = !!i4187[19]
  i4186.debugStoreTargetId = !!i4187[20]
  i4186.showPreviewPanel = !!i4187[21]
  i4186.storeSettingsLocation = i4187[22]
  i4186.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4187[23], i4186.modules)
  i4186.createASMDEF = !!i4187[24]
  i4186.showPlayingTweens = !!i4187[25]
  i4186.showPausedTweens = !!i4187[26]
  return i4186
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4188 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4189 = data
  i4188.logBehaviour = i4189[0]
  i4188.nestedTweenFailureBehaviour = i4189[1]
  return i4188
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4190 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4191 = data
  i4190.showPanel = !!i4191[0]
  i4190.audioEnabled = !!i4191[1]
  i4190.physicsEnabled = !!i4191[2]
  i4190.physics2DEnabled = !!i4191[3]
  i4190.spriteEnabled = !!i4191[4]
  i4190.uiEnabled = !!i4191[5]
  i4190.uiToolkitEnabled = !!i4191[6]
  i4190.textMeshProEnabled = !!i4191[7]
  i4190.tk2DEnabled = !!i4191[8]
  i4190.deAudioEnabled = !!i4191[9]
  i4190.deUnityExtendedEnabled = !!i4191[10]
  i4190.epoOutlineEnabled = !!i4191[11]
  return i4190
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4192 = root || request.c( 'TMPro.TMP_Settings' )
  var i4193 = data
  i4192.assetVersion = i4193[0]
  i4192.m_TextWrappingMode = i4193[1]
  i4192.m_enableKerning = !!i4193[2]
  var i4195 = i4193[3]
  var i4194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4195.length; i += 1) {
    i4194.add(i4195[i + 0]);
  }
  i4192.m_ActiveFontFeatures = i4194
  i4192.m_enableExtraPadding = !!i4193[4]
  i4192.m_enableTintAllSprites = !!i4193[5]
  i4192.m_enableParseEscapeCharacters = !!i4193[6]
  i4192.m_EnableRaycastTarget = !!i4193[7]
  i4192.m_GetFontFeaturesAtRuntime = !!i4193[8]
  i4192.m_missingGlyphCharacter = i4193[9]
  i4192.m_ClearDynamicDataOnBuild = !!i4193[10]
  i4192.m_warningsDisabled = !!i4193[11]
  request.r(i4193[12], i4193[13], 0, i4192, 'm_defaultFontAsset')
  i4192.m_defaultFontAssetPath = i4193[14]
  i4192.m_defaultFontSize = i4193[15]
  i4192.m_defaultAutoSizeMinRatio = i4193[16]
  i4192.m_defaultAutoSizeMaxRatio = i4193[17]
  i4192.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4193[18], i4193[19] )
  i4192.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4193[20], i4193[21] )
  i4192.m_autoSizeTextContainer = !!i4193[22]
  i4192.m_IsTextObjectScaleStatic = !!i4193[23]
  var i4197 = i4193[24]
  var i4196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4197.length; i += 2) {
  request.r(i4197[i + 0], i4197[i + 1], 1, i4196, '')
  }
  i4192.m_fallbackFontAssets = i4196
  i4192.m_matchMaterialPreset = !!i4193[25]
  i4192.m_HideSubTextObjects = !!i4193[26]
  request.r(i4193[27], i4193[28], 0, i4192, 'm_defaultSpriteAsset')
  i4192.m_defaultSpriteAssetPath = i4193[29]
  i4192.m_enableEmojiSupport = !!i4193[30]
  i4192.m_MissingCharacterSpriteUnicode = i4193[31]
  var i4199 = i4193[32]
  var i4198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4199.length; i += 2) {
  request.r(i4199[i + 0], i4199[i + 1], 1, i4198, '')
  }
  i4192.m_EmojiFallbackTextAssets = i4198
  i4192.m_defaultColorGradientPresetsPath = i4193[33]
  request.r(i4193[34], i4193[35], 0, i4192, 'm_defaultStyleSheet')
  i4192.m_StyleSheetsResourcePath = i4193[36]
  request.r(i4193[37], i4193[38], 0, i4192, 'm_leadingCharacters')
  request.r(i4193[39], i4193[40], 0, i4192, 'm_followingCharacters')
  i4192.m_UseModernHangulLineBreakingRules = !!i4193[41]
  return i4192
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4202 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4203 = data
  request.r(i4203[0], i4203[1], 0, i4202, 'spriteSheet')
  var i4205 = i4203[2]
  var i4204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.add(request.d('TMPro.TMP_Sprite', i4205[i + 0]));
  }
  i4202.spriteInfoList = i4204
  var i4207 = i4203[3]
  var i4206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4207.length; i += 2) {
  request.r(i4207[i + 0], i4207[i + 1], 1, i4206, '')
  }
  i4202.fallbackSpriteAssets = i4206
  var i4209 = i4203[4]
  var i4208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.add(request.d('TMPro.TMP_SpriteCharacter', i4209[i + 0]));
  }
  i4202.m_SpriteCharacterTable = i4208
  var i4211 = i4203[5]
  var i4210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4211.length; i += 1) {
    i4210.add(request.d('TMPro.TMP_SpriteGlyph', i4211[i + 0]));
  }
  i4202.m_GlyphTable = i4210
  i4202.m_Version = i4203[6]
  i4202.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4203[7], i4202.m_FaceInfo)
  request.r(i4203[8], i4203[9], 0, i4202, 'm_Material')
  return i4202
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4214 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4215 = data
  i4214.name = i4215[0]
  i4214.hashCode = i4215[1]
  i4214.unicode = i4215[2]
  i4214.pivot = new pc.Vec2( i4215[3], i4215[4] )
  request.r(i4215[5], i4215[6], 0, i4214, 'sprite')
  i4214.id = i4215[7]
  i4214.x = i4215[8]
  i4214.y = i4215[9]
  i4214.width = i4215[10]
  i4214.height = i4215[11]
  i4214.xOffset = i4215[12]
  i4214.yOffset = i4215[13]
  i4214.xAdvance = i4215[14]
  i4214.scale = i4215[15]
  return i4214
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4220 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4221 = data
  i4220.m_Name = i4221[0]
  i4220.m_ElementType = i4221[1]
  i4220.m_Unicode = i4221[2]
  i4220.m_GlyphIndex = i4221[3]
  i4220.m_Scale = i4221[4]
  return i4220
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4224 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4225 = data
  request.r(i4225[0], i4225[1], 0, i4224, 'sprite')
  i4224.m_Index = i4225[2]
  i4224.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4225[3], i4224.m_Metrics)
  i4224.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4225[4], i4224.m_GlyphRect)
  i4224.m_Scale = i4225[5]
  i4224.m_AtlasIndex = i4225[6]
  i4224.m_ClassDefinitionType = i4225[7]
  return i4224
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4226 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4227 = data
  var i4229 = i4227[0]
  var i4228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.add(request.d('TMPro.TMP_Style', i4229[i + 0]));
  }
  i4226.m_StyleList = i4228
  return i4226
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4232 = root || request.c( 'TMPro.TMP_Style' )
  var i4233 = data
  i4232.m_Name = i4233[0]
  i4232.m_HashCode = i4233[1]
  i4232.m_OpeningDefinition = i4233[2]
  i4232.m_ClosingDefinition = i4233[3]
  i4232.m_OpeningTagArray = i4233[4]
  i4232.m_ClosingTagArray = i4233[5]
  return i4232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4235 = data
  var i4237 = i4235[0]
  var i4236 = []
  for(var i = 0; i < i4237.length; i += 1) {
    i4236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4237[i + 0]) );
  }
  i4234.files = i4236
  i4234.componentToPrefabIds = i4235[1]
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4241 = data
  i4240.path = i4241[0]
  request.r(i4241[1], i4241[2], 0, i4240, 'unityObject')
  return i4240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4243 = data
  var i4245 = i4243[0]
  var i4244 = []
  for(var i = 0; i < i4245.length; i += 1) {
    i4244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4245[i + 0]) );
  }
  i4242.scriptsExecutionOrder = i4244
  var i4247 = i4243[1]
  var i4246 = []
  for(var i = 0; i < i4247.length; i += 1) {
    i4246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4247[i + 0]) );
  }
  i4242.sortingLayers = i4246
  var i4249 = i4243[2]
  var i4248 = []
  for(var i = 0; i < i4249.length; i += 1) {
    i4248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4249[i + 0]) );
  }
  i4242.cullingLayers = i4248
  i4242.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4243[3], i4242.timeSettings)
  i4242.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4243[4], i4242.physicsSettings)
  i4242.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4243[5], i4242.physics2DSettings)
  i4242.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4243[6], i4242.qualitySettings)
  i4242.enableRealtimeShadows = !!i4243[7]
  i4242.enableAutoInstancing = !!i4243[8]
  i4242.enableStaticBatching = !!i4243[9]
  i4242.enableDynamicBatching = !!i4243[10]
  i4242.lightmapEncodingQuality = i4243[11]
  i4242.desiredColorSpace = i4243[12]
  var i4251 = i4243[13]
  var i4250 = []
  for(var i = 0; i < i4251.length; i += 1) {
    i4250.push( i4251[i + 0] );
  }
  i4242.allTags = i4250
  return i4242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4255 = data
  i4254.name = i4255[0]
  i4254.value = i4255[1]
  return i4254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4259 = data
  i4258.id = i4259[0]
  i4258.name = i4259[1]
  i4258.value = i4259[2]
  return i4258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4263 = data
  i4262.id = i4263[0]
  i4262.name = i4263[1]
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4265 = data
  i4264.fixedDeltaTime = i4265[0]
  i4264.maximumDeltaTime = i4265[1]
  i4264.timeScale = i4265[2]
  i4264.maximumParticleTimestep = i4265[3]
  return i4264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4267 = data
  i4266.gravity = new pc.Vec3( i4267[0], i4267[1], i4267[2] )
  i4266.defaultSolverIterations = i4267[3]
  i4266.bounceThreshold = i4267[4]
  i4266.autoSyncTransforms = !!i4267[5]
  i4266.autoSimulation = !!i4267[6]
  var i4269 = i4267[7]
  var i4268 = []
  for(var i = 0; i < i4269.length; i += 1) {
    i4268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4269[i + 0]) );
  }
  i4266.collisionMatrix = i4268
  return i4266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4273 = data
  i4272.enabled = !!i4273[0]
  i4272.layerId = i4273[1]
  i4272.otherLayerId = i4273[2]
  return i4272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4275 = data
  request.r(i4275[0], i4275[1], 0, i4274, 'material')
  i4274.gravity = new pc.Vec2( i4275[2], i4275[3] )
  i4274.positionIterations = i4275[4]
  i4274.velocityIterations = i4275[5]
  i4274.velocityThreshold = i4275[6]
  i4274.maxLinearCorrection = i4275[7]
  i4274.maxAngularCorrection = i4275[8]
  i4274.maxTranslationSpeed = i4275[9]
  i4274.maxRotationSpeed = i4275[10]
  i4274.baumgarteScale = i4275[11]
  i4274.baumgarteTOIScale = i4275[12]
  i4274.timeToSleep = i4275[13]
  i4274.linearSleepTolerance = i4275[14]
  i4274.angularSleepTolerance = i4275[15]
  i4274.defaultContactOffset = i4275[16]
  i4274.autoSimulation = !!i4275[17]
  i4274.queriesHitTriggers = !!i4275[18]
  i4274.queriesStartInColliders = !!i4275[19]
  i4274.callbacksOnDisable = !!i4275[20]
  i4274.reuseCollisionCallbacks = !!i4275[21]
  i4274.autoSyncTransforms = !!i4275[22]
  var i4277 = i4275[23]
  var i4276 = []
  for(var i = 0; i < i4277.length; i += 1) {
    i4276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4277[i + 0]) );
  }
  i4274.collisionMatrix = i4276
  return i4274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4281 = data
  i4280.enabled = !!i4281[0]
  i4280.layerId = i4281[1]
  i4280.otherLayerId = i4281[2]
  return i4280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4283 = data
  var i4285 = i4283[0]
  var i4284 = []
  for(var i = 0; i < i4285.length; i += 1) {
    i4284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4285[i + 0]) );
  }
  i4282.qualityLevels = i4284
  var i4287 = i4283[1]
  var i4286 = []
  for(var i = 0; i < i4287.length; i += 1) {
    i4286.push( i4287[i + 0] );
  }
  i4282.names = i4286
  i4282.shadows = i4283[2]
  i4282.anisotropicFiltering = i4283[3]
  i4282.antiAliasing = i4283[4]
  i4282.lodBias = i4283[5]
  i4282.shadowCascades = i4283[6]
  i4282.shadowDistance = i4283[7]
  i4282.shadowmaskMode = i4283[8]
  i4282.shadowProjection = i4283[9]
  i4282.shadowResolution = i4283[10]
  i4282.softParticles = !!i4283[11]
  i4282.softVegetation = !!i4283[12]
  i4282.activeColorSpace = i4283[13]
  i4282.desiredColorSpace = i4283[14]
  i4282.masterTextureLimit = i4283[15]
  i4282.maxQueuedFrames = i4283[16]
  i4282.particleRaycastBudget = i4283[17]
  i4282.pixelLightCount = i4283[18]
  i4282.realtimeReflectionProbes = !!i4283[19]
  i4282.shadowCascade2Split = i4283[20]
  i4282.shadowCascade4Split = new pc.Vec3( i4283[21], i4283[22], i4283[23] )
  i4282.streamingMipmapsActive = !!i4283[24]
  i4282.vSyncCount = i4283[25]
  i4282.asyncUploadBufferSize = i4283[26]
  i4282.asyncUploadTimeSlice = i4283[27]
  i4282.billboardsFaceCameraPosition = !!i4283[28]
  i4282.shadowNearPlaneOffset = i4283[29]
  i4282.streamingMipmapsMemoryBudget = i4283[30]
  i4282.maximumLODLevel = i4283[31]
  i4282.streamingMipmapsAddAllCameras = !!i4283[32]
  i4282.streamingMipmapsMaxLevelReduction = i4283[33]
  i4282.streamingMipmapsRenderersPerFrame = i4283[34]
  i4282.resolutionScalingFixedDPIFactor = i4283[35]
  i4282.streamingMipmapsMaxFileIORequests = i4283[36]
  i4282.currentQualityLevel = i4283[37]
  return i4282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4293 = data
  i4292.weight = i4293[0]
  i4292.vertices = i4293[1]
  i4292.normals = i4293[2]
  i4292.tangents = i4293[3]
  return i4292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4297 = data
  i4296.mode = i4297[0]
  i4296.parameter = i4297[1]
  i4296.threshold = i4297[2]
  return i4296
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4298 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4299 = data
  i4298.m_GlyphIndex = i4299[0]
  i4298.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4299[1], i4298.m_GlyphValueRecord)
  return i4298
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4300 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4301 = data
  i4300.m_XCoordinate = i4301[0]
  i4300.m_YCoordinate = i4301[1]
  return i4300
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4302 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4303 = data
  i4302.m_XPositionAdjustment = i4303[0]
  i4302.m_YPositionAdjustment = i4303[1]
  return i4302
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4304 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4305 = data
  i4304.xPlacement = i4305[0]
  i4304.yPlacement = i4305[1]
  i4304.xAdvance = i4305[2]
  i4304.yAdvance = i4305[3]
  return i4304
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4306 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4307 = data
  i4306.m_XPlacement = i4307[0]
  i4306.m_YPlacement = i4307[1]
  i4306.m_XAdvance = i4307[2]
  i4306.m_YAdvance = i4307[3]
  return i4306
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

Deserializers.buildID = "1dc4380e-5f6c-4a40-9322-14927ab2dc93";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

