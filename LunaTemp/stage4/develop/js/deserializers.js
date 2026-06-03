var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.JointSpring' )
  var i3571 = data
  i3570.spring = i3571[0]
  i3570.damper = i3571[1]
  i3570.targetPosition = i3571[2]
  return i3570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3572 = root || request.c( 'UnityEngine.JointMotor' )
  var i3573 = data
  i3572.m_TargetVelocity = i3573[0]
  i3572.m_Force = i3573[1]
  i3572.m_FreeSpin = i3573[2]
  return i3572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3574 = root || request.c( 'UnityEngine.JointLimits' )
  var i3575 = data
  i3574.m_Min = i3575[0]
  i3574.m_Max = i3575[1]
  i3574.m_Bounciness = i3575[2]
  i3574.m_BounceMinVelocity = i3575[3]
  i3574.m_ContactDistance = i3575[4]
  i3574.minBounce = i3575[5]
  i3574.maxBounce = i3575[6]
  return i3574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3576 = root || request.c( 'UnityEngine.JointDrive' )
  var i3577 = data
  i3576.m_PositionSpring = i3577[0]
  i3576.m_PositionDamper = i3577[1]
  i3576.m_MaximumForce = i3577[2]
  i3576.m_UseAcceleration = i3577[3]
  return i3576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3579 = data
  i3578.m_Spring = i3579[0]
  i3578.m_Damper = i3579[1]
  return i3578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3581 = data
  i3580.m_Limit = i3581[0]
  i3580.m_Bounciness = i3581[1]
  i3580.m_ContactDistance = i3581[2]
  return i3580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3583 = data
  i3582.m_ExtremumSlip = i3583[0]
  i3582.m_ExtremumValue = i3583[1]
  i3582.m_AsymptoteSlip = i3583[2]
  i3582.m_AsymptoteValue = i3583[3]
  i3582.m_Stiffness = i3583[4]
  return i3582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3585 = data
  i3584.m_LowerAngle = i3585[0]
  i3584.m_UpperAngle = i3585[1]
  return i3584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3587 = data
  i3586.m_MotorSpeed = i3587[0]
  i3586.m_MaximumMotorTorque = i3587[1]
  return i3586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3589 = data
  i3588.m_DampingRatio = i3589[0]
  i3588.m_Frequency = i3589[1]
  i3588.m_Angle = i3589[2]
  return i3588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3591 = data
  i3590.m_LowerTranslation = i3591[0]
  i3590.m_UpperTranslation = i3591[1]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3592 = root || new pc.UnityMaterial()
  var i3593 = data
  i3592.name = i3593[0]
  request.r(i3593[1], i3593[2], 0, i3592, 'shader')
  i3592.renderQueue = i3593[3]
  i3592.enableInstancing = !!i3593[4]
  var i3595 = i3593[5]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3595[i + 0]) );
  }
  i3592.floatParameters = i3594
  var i3597 = i3593[6]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3597[i + 0]) );
  }
  i3592.colorParameters = i3596
  var i3599 = i3593[7]
  var i3598 = []
  for(var i = 0; i < i3599.length; i += 1) {
    i3598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3599[i + 0]) );
  }
  i3592.vectorParameters = i3598
  var i3601 = i3593[8]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3601[i + 0]) );
  }
  i3592.textureParameters = i3600
  var i3603 = i3593[9]
  var i3602 = []
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3603[i + 0]) );
  }
  i3592.materialFlags = i3602
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3607 = data
  i3606.name = i3607[0]
  i3606.value = i3607[1]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3611 = data
  i3610.name = i3611[0]
  i3610.value = new pc.Color(i3611[1], i3611[2], i3611[3], i3611[4])
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3615 = data
  i3614.name = i3615[0]
  i3614.value = new pc.Vec4( i3615[1], i3615[2], i3615[3], i3615[4] )
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3619 = data
  i3618.name = i3619[0]
  request.r(i3619[1], i3619[2], 0, i3618, 'value')
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3623 = data
  i3622.name = i3623[0]
  i3622.enabled = !!i3623[1]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3625 = data
  i3624.name = i3625[0]
  i3624.width = i3625[1]
  i3624.height = i3625[2]
  i3624.mipmapCount = i3625[3]
  i3624.anisoLevel = i3625[4]
  i3624.filterMode = i3625[5]
  i3624.hdr = !!i3625[6]
  i3624.format = i3625[7]
  i3624.wrapMode = i3625[8]
  i3624.alphaIsTransparency = !!i3625[9]
  i3624.alphaSource = i3625[10]
  i3624.graphicsFormat = i3625[11]
  i3624.sRGBTexture = !!i3625[12]
  i3624.desiredColorSpace = i3625[13]
  i3624.wrapU = i3625[14]
  i3624.wrapV = i3625[15]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3627 = data
  i3626.position = new pc.Vec3( i3627[0], i3627[1], i3627[2] )
  i3626.scale = new pc.Vec3( i3627[3], i3627[4], i3627[5] )
  i3626.rotation = new pc.Quat(i3627[6], i3627[7], i3627[8], i3627[9])
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3629 = data
  i3628.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3629[0], i3628.main)
  i3628.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3629[1], i3628.colorBySpeed)
  i3628.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3629[2], i3628.colorOverLifetime)
  i3628.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3629[3], i3628.emission)
  i3628.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3629[4], i3628.rotationBySpeed)
  i3628.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3629[5], i3628.rotationOverLifetime)
  i3628.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3629[6], i3628.shape)
  i3628.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3629[7], i3628.sizeBySpeed)
  i3628.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3629[8], i3628.sizeOverLifetime)
  i3628.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3629[9], i3628.textureSheetAnimation)
  i3628.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3629[10], i3628.velocityOverLifetime)
  i3628.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3629[11], i3628.noise)
  i3628.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3629[12], i3628.inheritVelocity)
  i3628.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3629[13], i3628.forceOverLifetime)
  i3628.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3629[14], i3628.limitVelocityOverLifetime)
  i3628.useAutoRandomSeed = !!i3629[15]
  i3628.randomSeed = i3629[16]
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3630 = root || new pc.ParticleSystemMain()
  var i3631 = data
  i3630.duration = i3631[0]
  i3630.loop = !!i3631[1]
  i3630.prewarm = !!i3631[2]
  i3630.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[3], i3630.startDelay)
  i3630.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[4], i3630.startLifetime)
  i3630.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[5], i3630.startSpeed)
  i3630.startSize3D = !!i3631[6]
  i3630.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[7], i3630.startSizeX)
  i3630.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[8], i3630.startSizeY)
  i3630.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[9], i3630.startSizeZ)
  i3630.startRotation3D = !!i3631[10]
  i3630.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[11], i3630.startRotationX)
  i3630.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[12], i3630.startRotationY)
  i3630.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[13], i3630.startRotationZ)
  i3630.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3631[14], i3630.startColor)
  i3630.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[15], i3630.gravityModifier)
  i3630.simulationSpace = i3631[16]
  request.r(i3631[17], i3631[18], 0, i3630, 'customSimulationSpace')
  i3630.simulationSpeed = i3631[19]
  i3630.useUnscaledTime = !!i3631[20]
  i3630.scalingMode = i3631[21]
  i3630.playOnAwake = !!i3631[22]
  i3630.maxParticles = i3631[23]
  i3630.emitterVelocityMode = i3631[24]
  i3630.stopAction = i3631[25]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3632 = root || new pc.MinMaxCurve()
  var i3633 = data
  i3632.mode = i3633[0]
  i3632.curveMin = new pc.AnimationCurve( { keys_flow: i3633[1] } )
  i3632.curveMax = new pc.AnimationCurve( { keys_flow: i3633[2] } )
  i3632.curveMultiplier = i3633[3]
  i3632.constantMin = i3633[4]
  i3632.constantMax = i3633[5]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3634 = root || new pc.MinMaxGradient()
  var i3635 = data
  i3634.mode = i3635[0]
  i3634.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3635[1], i3634.gradientMin)
  i3634.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3635[2], i3634.gradientMax)
  i3634.colorMin = new pc.Color(i3635[3], i3635[4], i3635[5], i3635[6])
  i3634.colorMax = new pc.Color(i3635[7], i3635[8], i3635[9], i3635[10])
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3637 = data
  i3636.mode = i3637[0]
  var i3639 = i3637[1]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3639[i + 0]) );
  }
  i3636.colorKeys = i3638
  var i3641 = i3637[2]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3641[i + 0]) );
  }
  i3636.alphaKeys = i3640
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3642 = root || new pc.ParticleSystemColorBySpeed()
  var i3643 = data
  i3642.enabled = !!i3643[0]
  i3642.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3643[1], i3642.color)
  i3642.range = new pc.Vec2( i3643[2], i3643[3] )
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3647 = data
  i3646.color = new pc.Color(i3647[0], i3647[1], i3647[2], i3647[3])
  i3646.time = i3647[4]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3651 = data
  i3650.alpha = i3651[0]
  i3650.time = i3651[1]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3652 = root || new pc.ParticleSystemColorOverLifetime()
  var i3653 = data
  i3652.enabled = !!i3653[0]
  i3652.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3653[1], i3652.color)
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3654 = root || new pc.ParticleSystemEmitter()
  var i3655 = data
  i3654.enabled = !!i3655[0]
  i3654.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[1], i3654.rateOverTime)
  i3654.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[2], i3654.rateOverDistance)
  var i3657 = i3655[3]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3657[i + 0]) );
  }
  i3654.bursts = i3656
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3660 = root || new pc.ParticleSystemBurst()
  var i3661 = data
  i3660.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[0], i3660.count)
  i3660.cycleCount = i3661[1]
  i3660.minCount = i3661[2]
  i3660.maxCount = i3661[3]
  i3660.repeatInterval = i3661[4]
  i3660.time = i3661[5]
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3662 = root || new pc.ParticleSystemRotationBySpeed()
  var i3663 = data
  i3662.enabled = !!i3663[0]
  i3662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[1], i3662.x)
  i3662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[2], i3662.y)
  i3662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[3], i3662.z)
  i3662.separateAxes = !!i3663[4]
  i3662.range = new pc.Vec2( i3663[5], i3663[6] )
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3664 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3665 = data
  i3664.enabled = !!i3665[0]
  i3664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3665[1], i3664.x)
  i3664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3665[2], i3664.y)
  i3664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3665[3], i3664.z)
  i3664.separateAxes = !!i3665[4]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3666 = root || new pc.ParticleSystemShape()
  var i3667 = data
  i3666.enabled = !!i3667[0]
  i3666.shapeType = i3667[1]
  i3666.randomDirectionAmount = i3667[2]
  i3666.sphericalDirectionAmount = i3667[3]
  i3666.randomPositionAmount = i3667[4]
  i3666.alignToDirection = !!i3667[5]
  i3666.radius = i3667[6]
  i3666.radiusMode = i3667[7]
  i3666.radiusSpread = i3667[8]
  i3666.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[9], i3666.radiusSpeed)
  i3666.radiusThickness = i3667[10]
  i3666.angle = i3667[11]
  i3666.length = i3667[12]
  i3666.boxThickness = new pc.Vec3( i3667[13], i3667[14], i3667[15] )
  i3666.meshShapeType = i3667[16]
  request.r(i3667[17], i3667[18], 0, i3666, 'mesh')
  request.r(i3667[19], i3667[20], 0, i3666, 'meshRenderer')
  request.r(i3667[21], i3667[22], 0, i3666, 'skinnedMeshRenderer')
  i3666.useMeshMaterialIndex = !!i3667[23]
  i3666.meshMaterialIndex = i3667[24]
  i3666.useMeshColors = !!i3667[25]
  i3666.normalOffset = i3667[26]
  i3666.arc = i3667[27]
  i3666.arcMode = i3667[28]
  i3666.arcSpread = i3667[29]
  i3666.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[30], i3666.arcSpeed)
  i3666.donutRadius = i3667[31]
  i3666.position = new pc.Vec3( i3667[32], i3667[33], i3667[34] )
  i3666.rotation = new pc.Vec3( i3667[35], i3667[36], i3667[37] )
  i3666.scale = new pc.Vec3( i3667[38], i3667[39], i3667[40] )
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3668 = root || new pc.ParticleSystemSizeBySpeed()
  var i3669 = data
  i3668.enabled = !!i3669[0]
  i3668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3669[1], i3668.x)
  i3668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3669[2], i3668.y)
  i3668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3669[3], i3668.z)
  i3668.separateAxes = !!i3669[4]
  i3668.range = new pc.Vec2( i3669[5], i3669[6] )
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3670 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3671 = data
  i3670.enabled = !!i3671[0]
  i3670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3671[1], i3670.x)
  i3670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3671[2], i3670.y)
  i3670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3671[3], i3670.z)
  i3670.separateAxes = !!i3671[4]
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3672 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3673 = data
  i3672.enabled = !!i3673[0]
  i3672.mode = i3673[1]
  i3672.animation = i3673[2]
  i3672.numTilesX = i3673[3]
  i3672.numTilesY = i3673[4]
  i3672.useRandomRow = !!i3673[5]
  i3672.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3673[6], i3672.frameOverTime)
  i3672.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3673[7], i3672.startFrame)
  i3672.cycleCount = i3673[8]
  i3672.rowIndex = i3673[9]
  i3672.flipU = i3673[10]
  i3672.flipV = i3673[11]
  i3672.spriteCount = i3673[12]
  var i3675 = i3673[13]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 2) {
  request.r(i3675[i + 0], i3675[i + 1], 2, i3674, '')
  }
  i3672.sprites = i3674
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3678 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3679 = data
  i3678.enabled = !!i3679[0]
  i3678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[1], i3678.x)
  i3678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[2], i3678.y)
  i3678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[3], i3678.z)
  i3678.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[4], i3678.radial)
  i3678.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[5], i3678.speedModifier)
  i3678.space = i3679[6]
  i3678.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[7], i3678.orbitalX)
  i3678.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[8], i3678.orbitalY)
  i3678.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[9], i3678.orbitalZ)
  i3678.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[10], i3678.orbitalOffsetX)
  i3678.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[11], i3678.orbitalOffsetY)
  i3678.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[12], i3678.orbitalOffsetZ)
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3680 = root || new pc.ParticleSystemNoise()
  var i3681 = data
  i3680.enabled = !!i3681[0]
  i3680.separateAxes = !!i3681[1]
  i3680.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[2], i3680.strengthX)
  i3680.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[3], i3680.strengthY)
  i3680.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[4], i3680.strengthZ)
  i3680.frequency = i3681[5]
  i3680.damping = !!i3681[6]
  i3680.octaveCount = i3681[7]
  i3680.octaveMultiplier = i3681[8]
  i3680.octaveScale = i3681[9]
  i3680.quality = i3681[10]
  i3680.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[11], i3680.scrollSpeed)
  i3680.scrollSpeedMultiplier = i3681[12]
  i3680.remapEnabled = !!i3681[13]
  i3680.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[14], i3680.remapX)
  i3680.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[15], i3680.remapY)
  i3680.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[16], i3680.remapZ)
  i3680.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[17], i3680.positionAmount)
  i3680.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[18], i3680.rotationAmount)
  i3680.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[19], i3680.sizeAmount)
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3682 = root || new pc.ParticleSystemInheritVelocity()
  var i3683 = data
  i3682.enabled = !!i3683[0]
  i3682.mode = i3683[1]
  i3682.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[2], i3682.curve)
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3684 = root || new pc.ParticleSystemForceOverLifetime()
  var i3685 = data
  i3684.enabled = !!i3685[0]
  i3684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[1], i3684.x)
  i3684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[2], i3684.y)
  i3684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[3], i3684.z)
  i3684.space = i3685[4]
  i3684.randomized = !!i3685[5]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3686 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3687 = data
  i3686.enabled = !!i3687[0]
  i3686.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[1], i3686.limit)
  i3686.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[2], i3686.limitX)
  i3686.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[3], i3686.limitY)
  i3686.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[4], i3686.limitZ)
  i3686.dampen = i3687[5]
  i3686.separateAxes = !!i3687[6]
  i3686.space = i3687[7]
  i3686.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[8], i3686.drag)
  i3686.multiplyDragByParticleSize = !!i3687[9]
  i3686.multiplyDragByParticleVelocity = !!i3687[10]
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3689 = data
  request.r(i3689[0], i3689[1], 0, i3688, 'mesh')
  i3688.meshCount = i3689[2]
  i3688.activeVertexStreamsCount = i3689[3]
  i3688.alignment = i3689[4]
  i3688.renderMode = i3689[5]
  i3688.sortMode = i3689[6]
  i3688.lengthScale = i3689[7]
  i3688.velocityScale = i3689[8]
  i3688.cameraVelocityScale = i3689[9]
  i3688.normalDirection = i3689[10]
  i3688.sortingFudge = i3689[11]
  i3688.minParticleSize = i3689[12]
  i3688.maxParticleSize = i3689[13]
  i3688.pivot = new pc.Vec3( i3689[14], i3689[15], i3689[16] )
  request.r(i3689[17], i3689[18], 0, i3688, 'trailMaterial')
  i3688.applyActiveColorSpace = !!i3689[19]
  i3688.enabled = !!i3689[20]
  request.r(i3689[21], i3689[22], 0, i3688, 'sharedMaterial')
  var i3691 = i3689[23]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 2) {
  request.r(i3691[i + 0], i3691[i + 1], 2, i3690, '')
  }
  i3688.sharedMaterials = i3690
  i3688.receiveShadows = !!i3689[24]
  i3688.shadowCastingMode = i3689[25]
  i3688.sortingLayerID = i3689[26]
  i3688.sortingOrder = i3689[27]
  i3688.lightmapIndex = i3689[28]
  i3688.lightmapSceneIndex = i3689[29]
  i3688.lightmapScaleOffset = new pc.Vec4( i3689[30], i3689[31], i3689[32], i3689[33] )
  i3688.lightProbeUsage = i3689[34]
  i3688.reflectionProbeUsage = i3689[35]
  return i3688
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i3694 = root || request.c( 'MergeEffect' )
  var i3695 = data
  request.r(i3695[0], i3695[1], 0, i3694, 'tf')
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3697 = data
  i3696.name = i3697[0]
  i3696.tagId = i3697[1]
  i3696.enabled = !!i3697[2]
  i3696.isStatic = !!i3697[3]
  i3696.layer = i3697[4]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3699 = data
  i3698.name = i3699[0]
  i3698.halfPrecision = !!i3699[1]
  i3698.useSimplification = !!i3699[2]
  i3698.useUInt32IndexFormat = !!i3699[3]
  i3698.vertexCount = i3699[4]
  i3698.aabb = i3699[5]
  var i3701 = i3699[6]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( !!i3701[i + 0] );
  }
  i3698.streams = i3700
  i3698.vertices = i3699[7]
  var i3703 = i3699[8]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3703[i + 0]) );
  }
  i3698.subMeshes = i3702
  var i3705 = i3699[9]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 16) {
    i3704.push( new pc.Mat4().setData(i3705[i + 0], i3705[i + 1], i3705[i + 2], i3705[i + 3],  i3705[i + 4], i3705[i + 5], i3705[i + 6], i3705[i + 7],  i3705[i + 8], i3705[i + 9], i3705[i + 10], i3705[i + 11],  i3705[i + 12], i3705[i + 13], i3705[i + 14], i3705[i + 15]) );
  }
  i3698.bindposes = i3704
  var i3707 = i3699[10]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3707[i + 0]) );
  }
  i3698.blendShapes = i3706
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3713 = data
  i3712.triangles = i3713[0]
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3719 = data
  i3718.name = i3719[0]
  var i3721 = i3719[1]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3721[i + 0]) );
  }
  i3718.frames = i3720
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3723 = data
  i3722.name = i3723[0]
  i3722.index = i3723[1]
  i3722.startup = !!i3723[2]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3725 = data
  i3724.pivot = new pc.Vec2( i3725[0], i3725[1] )
  i3724.anchorMin = new pc.Vec2( i3725[2], i3725[3] )
  i3724.anchorMax = new pc.Vec2( i3725[4], i3725[5] )
  i3724.sizeDelta = new pc.Vec2( i3725[6], i3725[7] )
  i3724.anchoredPosition3D = new pc.Vec3( i3725[8], i3725[9], i3725[10] )
  i3724.rotation = new pc.Quat(i3725[11], i3725[12], i3725[13], i3725[14])
  i3724.scale = new pc.Vec3( i3725[15], i3725[16], i3725[17] )
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3727 = data
  i3726.planeDistance = i3727[0]
  i3726.referencePixelsPerUnit = i3727[1]
  i3726.isFallbackOverlay = !!i3727[2]
  i3726.renderMode = i3727[3]
  i3726.renderOrder = i3727[4]
  i3726.sortingLayerName = i3727[5]
  i3726.sortingOrder = i3727[6]
  i3726.scaleFactor = i3727[7]
  request.r(i3727[8], i3727[9], 0, i3726, 'worldCamera')
  i3726.overrideSorting = !!i3727[10]
  i3726.pixelPerfect = !!i3727[11]
  i3726.targetDisplay = i3727[12]
  i3726.overridePixelPerfect = !!i3727[13]
  i3726.enabled = !!i3727[14]
  return i3726
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3728 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3729 = data
  i3728.m_UiScaleMode = i3729[0]
  i3728.m_ReferencePixelsPerUnit = i3729[1]
  i3728.m_ScaleFactor = i3729[2]
  i3728.m_ReferenceResolution = new pc.Vec2( i3729[3], i3729[4] )
  i3728.m_ScreenMatchMode = i3729[5]
  i3728.m_MatchWidthOrHeight = i3729[6]
  i3728.m_PhysicalUnit = i3729[7]
  i3728.m_FallbackScreenDPI = i3729[8]
  i3728.m_DefaultSpriteDPI = i3729[9]
  i3728.m_DynamicPixelsPerUnit = i3729[10]
  i3728.m_PresetInfoIsWorld = !!i3729[11]
  return i3728
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3730 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3731 = data
  i3730.m_IgnoreReversedGraphics = !!i3731[0]
  i3730.m_BlockingObjects = i3731[1]
  i3730.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3731[2] )
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'animatorController')
  request.r(i3733[2], i3733[3], 0, i3732, 'avatar')
  i3732.updateMode = i3733[4]
  i3732.hasTransformHierarchy = !!i3733[5]
  i3732.applyRootMotion = !!i3733[6]
  var i3735 = i3733[7]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 2) {
  request.r(i3735[i + 0], i3735[i + 1], 2, i3734, '')
  }
  i3732.humanBones = i3734
  i3732.enabled = !!i3733[8]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3739 = data
  i3738.cullTransparentMesh = !!i3739[0]
  return i3738
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3740 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3741 = data
  i3740.m_hasFontAssetChanged = !!i3741[0]
  request.r(i3741[1], i3741[2], 0, i3740, 'm_baseMaterial')
  i3740.m_maskOffset = new pc.Vec4( i3741[3], i3741[4], i3741[5], i3741[6] )
  i3740.m_text = i3741[7]
  i3740.m_isRightToLeft = !!i3741[8]
  request.r(i3741[9], i3741[10], 0, i3740, 'm_fontAsset')
  request.r(i3741[11], i3741[12], 0, i3740, 'm_sharedMaterial')
  var i3743 = i3741[13]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 2) {
  request.r(i3743[i + 0], i3743[i + 1], 2, i3742, '')
  }
  i3740.m_fontSharedMaterials = i3742
  request.r(i3741[14], i3741[15], 0, i3740, 'm_fontMaterial')
  var i3745 = i3741[16]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 2) {
  request.r(i3745[i + 0], i3745[i + 1], 2, i3744, '')
  }
  i3740.m_fontMaterials = i3744
  i3740.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3741[17], i3741[18], i3741[19], i3741[20])
  i3740.m_fontColor = new pc.Color(i3741[21], i3741[22], i3741[23], i3741[24])
  i3740.m_enableVertexGradient = !!i3741[25]
  i3740.m_colorMode = i3741[26]
  i3740.m_fontColorGradient = request.d('TMPro.VertexGradient', i3741[27], i3740.m_fontColorGradient)
  request.r(i3741[28], i3741[29], 0, i3740, 'm_fontColorGradientPreset')
  request.r(i3741[30], i3741[31], 0, i3740, 'm_spriteAsset')
  i3740.m_tintAllSprites = !!i3741[32]
  request.r(i3741[33], i3741[34], 0, i3740, 'm_StyleSheet')
  i3740.m_TextStyleHashCode = i3741[35]
  i3740.m_overrideHtmlColors = !!i3741[36]
  i3740.m_faceColor = UnityEngine.Color32.ConstructColor(i3741[37], i3741[38], i3741[39], i3741[40])
  i3740.m_fontSize = i3741[41]
  i3740.m_fontSizeBase = i3741[42]
  i3740.m_fontWeight = i3741[43]
  i3740.m_enableAutoSizing = !!i3741[44]
  i3740.m_fontSizeMin = i3741[45]
  i3740.m_fontSizeMax = i3741[46]
  i3740.m_fontStyle = i3741[47]
  i3740.m_HorizontalAlignment = i3741[48]
  i3740.m_VerticalAlignment = i3741[49]
  i3740.m_textAlignment = i3741[50]
  i3740.m_characterSpacing = i3741[51]
  i3740.m_wordSpacing = i3741[52]
  i3740.m_lineSpacing = i3741[53]
  i3740.m_lineSpacingMax = i3741[54]
  i3740.m_paragraphSpacing = i3741[55]
  i3740.m_charWidthMaxAdj = i3741[56]
  i3740.m_TextWrappingMode = i3741[57]
  i3740.m_wordWrappingRatios = i3741[58]
  i3740.m_overflowMode = i3741[59]
  request.r(i3741[60], i3741[61], 0, i3740, 'm_linkedTextComponent')
  request.r(i3741[62], i3741[63], 0, i3740, 'parentLinkedComponent')
  i3740.m_enableKerning = !!i3741[64]
  var i3747 = i3741[65]
  var i3746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.add(i3747[i + 0]);
  }
  i3740.m_ActiveFontFeatures = i3746
  i3740.m_enableExtraPadding = !!i3741[66]
  i3740.checkPaddingRequired = !!i3741[67]
  i3740.m_isRichText = !!i3741[68]
  i3740.m_parseCtrlCharacters = !!i3741[69]
  i3740.m_isOrthographic = !!i3741[70]
  i3740.m_isCullingEnabled = !!i3741[71]
  i3740.m_horizontalMapping = i3741[72]
  i3740.m_verticalMapping = i3741[73]
  i3740.m_uvLineOffset = i3741[74]
  i3740.m_geometrySortingOrder = i3741[75]
  i3740.m_IsTextObjectScaleStatic = !!i3741[76]
  i3740.m_VertexBufferAutoSizeReduction = !!i3741[77]
  i3740.m_useMaxVisibleDescender = !!i3741[78]
  i3740.m_pageToDisplay = i3741[79]
  i3740.m_margin = new pc.Vec4( i3741[80], i3741[81], i3741[82], i3741[83] )
  i3740.m_isUsingLegacyAnimationComponent = !!i3741[84]
  i3740.m_isVolumetricText = !!i3741[85]
  request.r(i3741[86], i3741[87], 0, i3740, 'm_Material')
  i3740.m_EmojiFallbackSupport = !!i3741[88]
  i3740.m_Maskable = !!i3741[89]
  i3740.m_Color = new pc.Color(i3741[90], i3741[91], i3741[92], i3741[93])
  i3740.m_RaycastTarget = !!i3741[94]
  i3740.m_RaycastPadding = new pc.Vec4( i3741[95], i3741[96], i3741[97], i3741[98] )
  return i3740
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3748 = root || request.c( 'TMPro.VertexGradient' )
  var i3749 = data
  i3748.topLeft = new pc.Color(i3749[0], i3749[1], i3749[2], i3749[3])
  i3748.topRight = new pc.Color(i3749[4], i3749[5], i3749[6], i3749[7])
  i3748.bottomLeft = new pc.Color(i3749[8], i3749[9], i3749[10], i3749[11])
  i3748.bottomRight = new pc.Color(i3749[12], i3749[13], i3749[14], i3749[15])
  return i3748
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3752 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, 'm_FillRect')
  request.r(i3753[2], i3753[3], 0, i3752, 'm_HandleRect')
  i3752.m_Direction = i3753[4]
  i3752.m_MinValue = i3753[5]
  i3752.m_MaxValue = i3753[6]
  i3752.m_WholeNumbers = !!i3753[7]
  i3752.m_Value = i3753[8]
  i3752.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3753[9], i3752.m_OnValueChanged)
  i3752.m_Navigation = request.d('UnityEngine.UI.Navigation', i3753[10], i3752.m_Navigation)
  i3752.m_Transition = i3753[11]
  i3752.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3753[12], i3752.m_Colors)
  i3752.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3753[13], i3752.m_SpriteState)
  i3752.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3753[14], i3752.m_AnimationTriggers)
  i3752.m_Interactable = !!i3753[15]
  request.r(i3753[16], i3753[17], 0, i3752, 'm_TargetGraphic')
  return i3752
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3754 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3755 = data
  i3754.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3755[0], i3754.m_PersistentCalls)
  return i3754
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3756 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3757 = data
  var i3759 = i3757[0]
  var i3758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.add(request.d('UnityEngine.Events.PersistentCall', i3759[i + 0]));
  }
  i3756.m_Calls = i3758
  return i3756
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3762 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3763 = data
  request.r(i3763[0], i3763[1], 0, i3762, 'm_Target')
  i3762.m_TargetAssemblyTypeName = i3763[2]
  i3762.m_MethodName = i3763[3]
  i3762.m_Mode = i3763[4]
  i3762.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3763[5], i3762.m_Arguments)
  i3762.m_CallState = i3763[6]
  return i3762
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3764 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3765 = data
  i3764.m_Mode = i3765[0]
  i3764.m_WrapAround = !!i3765[1]
  request.r(i3765[2], i3765[3], 0, i3764, 'm_SelectOnUp')
  request.r(i3765[4], i3765[5], 0, i3764, 'm_SelectOnDown')
  request.r(i3765[6], i3765[7], 0, i3764, 'm_SelectOnLeft')
  request.r(i3765[8], i3765[9], 0, i3764, 'm_SelectOnRight')
  return i3764
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3766 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3767 = data
  i3766.m_NormalColor = new pc.Color(i3767[0], i3767[1], i3767[2], i3767[3])
  i3766.m_HighlightedColor = new pc.Color(i3767[4], i3767[5], i3767[6], i3767[7])
  i3766.m_PressedColor = new pc.Color(i3767[8], i3767[9], i3767[10], i3767[11])
  i3766.m_SelectedColor = new pc.Color(i3767[12], i3767[13], i3767[14], i3767[15])
  i3766.m_DisabledColor = new pc.Color(i3767[16], i3767[17], i3767[18], i3767[19])
  i3766.m_ColorMultiplier = i3767[20]
  i3766.m_FadeDuration = i3767[21]
  return i3766
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3768 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3769 = data
  request.r(i3769[0], i3769[1], 0, i3768, 'm_HighlightedSprite')
  request.r(i3769[2], i3769[3], 0, i3768, 'm_PressedSprite')
  request.r(i3769[4], i3769[5], 0, i3768, 'm_SelectedSprite')
  request.r(i3769[6], i3769[7], 0, i3768, 'm_DisabledSprite')
  return i3768
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3770 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3771 = data
  i3770.m_NormalTrigger = i3771[0]
  i3770.m_HighlightedTrigger = i3771[1]
  i3770.m_PressedTrigger = i3771[2]
  i3770.m_SelectedTrigger = i3771[3]
  i3770.m_DisabledTrigger = i3771[4]
  return i3770
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3772 = root || request.c( 'UnityEngine.UI.Image' )
  var i3773 = data
  request.r(i3773[0], i3773[1], 0, i3772, 'm_Sprite')
  i3772.m_Type = i3773[2]
  i3772.m_PreserveAspect = !!i3773[3]
  i3772.m_FillCenter = !!i3773[4]
  i3772.m_FillMethod = i3773[5]
  i3772.m_FillAmount = i3773[6]
  i3772.m_FillClockwise = !!i3773[7]
  i3772.m_FillOrigin = i3773[8]
  i3772.m_UseSpriteMesh = !!i3773[9]
  i3772.m_PixelsPerUnitMultiplier = i3773[10]
  request.r(i3773[11], i3773[12], 0, i3772, 'm_Material')
  i3772.m_Maskable = !!i3773[13]
  i3772.m_Color = new pc.Color(i3773[14], i3773[15], i3773[16], i3773[17])
  i3772.m_RaycastTarget = !!i3773[18]
  i3772.m_RaycastPadding = new pc.Vec4( i3773[19], i3773[20], i3773[21], i3773[22] )
  return i3772
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3774 = root || request.c( 'UnityEngine.UI.Button' )
  var i3775 = data
  i3774.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3775[0], i3774.m_OnClick)
  i3774.m_Navigation = request.d('UnityEngine.UI.Navigation', i3775[1], i3774.m_Navigation)
  i3774.m_Transition = i3775[2]
  i3774.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3775[3], i3774.m_Colors)
  i3774.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3775[4], i3774.m_SpriteState)
  i3774.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3775[5], i3774.m_AnimationTriggers)
  i3774.m_Interactable = !!i3775[6]
  request.r(i3775[7], i3775[8], 0, i3774, 'm_TargetGraphic')
  return i3774
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3776 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3777 = data
  i3776.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3777[0], i3776.m_PersistentCalls)
  return i3776
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3778 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3779 = data
  request.r(i3779[0], i3779[1], 0, i3778, 'm_ObjectArgument')
  i3778.m_ObjectArgumentAssemblyTypeName = i3779[2]
  i3778.m_IntArgument = i3779[3]
  i3778.m_FloatArgument = i3779[4]
  i3778.m_StringArgument = i3779[5]
  i3778.m_BoolArgument = !!i3779[6]
  return i3778
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i3780 = root || request.c( 'Ply_Pool' )
  var i3781 = data
  var i3783 = i3781[0]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Ply_Pool+PoolAmount', i3783[i + 0]) );
  }
  i3780.poolAmounts = i3782
  request.r(i3781[1], i3781[2], 0, i3780, 'poolHolder')
  return i3780
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i3786 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i3787 = data
  i3786.type = i3787[0]
  i3786.amount = i3787[1]
  request.r(i3787[2], i3787[3], 0, i3786, 'gameUnit')
  return i3786
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i3788 = root || request.c( 'Ply_SoundManager' )
  var i3789 = data
  var i3791 = i3789[0]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 2) {
  request.r(i3791[i + 0], i3791[i + 1], 2, i3790, '')
  }
  i3788.audioClips = i3790
  request.r(i3789[1], i3789[2], 0, i3788, 'sound')
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3795 = data
  request.r(i3795[0], i3795[1], 0, i3794, 'clip')
  request.r(i3795[2], i3795[3], 0, i3794, 'outputAudioMixerGroup')
  i3794.playOnAwake = !!i3795[4]
  i3794.loop = !!i3795[5]
  i3794.time = i3795[6]
  i3794.volume = i3795[7]
  i3794.pitch = i3795[8]
  i3794.enabled = !!i3795[9]
  return i3794
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3796 = root || request.c( 'GameManager' )
  var i3797 = data
  i3796.isPlaying = !!i3797[0]
  i3796.isTutorial = !!i3797[1]
  i3796.isGotoStore = !!i3797[2]
  i3796.countMove = i3797[3]
  i3796.maxMove = i3797[4]
  i3796.startLayer = i3797[5]
  i3796.currentLayer = i3797[6]
  request.r(i3797[7], i3797[8], 0, i3796, 'mainBox')
  request.r(i3797[9], i3797[10], 0, i3796, 'handTutorial')
  i3796.tutorialDelay = i3797[11]
  return i3796
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3798 = root || request.c( 'UIManager' )
  var i3799 = data
  request.r(i3799[0], i3799[1], 0, i3798, 'winUI')
  request.r(i3799[2], i3799[3], 0, i3798, 'loseUI')
  request.r(i3799[4], i3799[5], 0, i3798, 'tutorial')
  request.r(i3799[6], i3799[7], 0, i3798, 'verticalUI')
  request.r(i3799[8], i3799[9], 0, i3798, 'horizontalUI')
  request.r(i3799[10], i3799[11], 0, i3798, 'downloadBtnVertical')
  request.r(i3799[12], i3799[13], 0, i3798, 'dowloadBtnHorizontal')
  request.r(i3799[14], i3799[15], 0, i3798, 'progressSlider')
  request.r(i3799[16], i3799[17], 0, i3798, 'progressText')
  i3798.maxProgressItems = i3799[18]
  i3798.startProgressItems = i3799[19]
  i3798.screenWidth = i3799[20]
  i3798.screenHeight = i3799[21]
  i3798.scaleHeightOnWidth = i3799[22]
  i3798.isVertical = !!i3799[23]
  request.r(i3799[24], i3799[25], 0, i3798, 'cam')
  i3798.introZoomOutMultiplier = i3799[26]
  i3798.cameraZoomDuration = i3799[27]
  i3798.useContinuousScaling = !!i3799[28]
  i3798.baseOrthographicSize = i3799[29]
  i3798.baseAspect = i3799[30]
  i3798.landscapeSize = i3799[31]
  i3798.defaultPortraitSize = i3799[32]
  var i3801 = i3799[33]
  var i3800 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.add(request.d('ScreenScaleStep', i3801[i + 0]));
  }
  i3798.discreteScaleSteps = i3800
  i3798.usePerspectiveCamera = !!i3799[34]
  request.r(i3799[35], i3799[36], 0, i3798, 'perspectiveFocus')
  i3798.perspectiveFocusDistance = i3799[37]
  i3798.perspectivePadding = i3799[38]
  i3798.fitRendererBounds = !!i3799[39]
  request.r(i3799[40], i3799[41], 0, i3798, 'boundsRoot')
  var i3803 = i3799[42]
  var i3802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i3803.length; i += 2) {
  request.r(i3803[i + 0], i3803[i + 1], 1, i3802, '')
  }
  i3798.boundsRenderers = i3802
  return i3798
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i3806 = root || request.c( 'ScreenScaleStep' )
  var i3807 = data
  i3806.heightOnWidthRatio = i3807[0]
  i3806.orthographicSize = i3807[1]
  return i3806
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3810 = root || request.c( 'InputManager' )
  var i3811 = data
  i3810.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i3811[0] )
  i3810.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i3811[1] )
  i3810.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i3811[2] )
  i3810.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i3811[3] )
  i3810.isDragging = !!i3811[4]
  request.r(i3811[5], i3811[6], 0, i3810, 'mainCamera')
  return i3810
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i3812 = root || request.c( 'ItemSetupTool' )
  var i3813 = data
  request.r(i3813[0], i3813[1], 0, i3812, 'spritesParent')
  request.r(i3813[2], i3813[3], 0, i3812, 'holdersParent')
  i3812.shadowSuffix = i3813[4]
  i3812.holderPrefix = i3813[5]
  i3812.holdersParentName = i3813[6]
  i3812.colliderDepth = i3813[7]
  i3812.colliderSizeMultiplier = i3813[8]
  i3812.generatedShadowColor = new pc.Color(i3813[9], i3813[10], i3813[11], i3813[12])
  i3812.fadedBlackShadowColor = new pc.Color(i3813[13], i3813[14], i3813[15], i3813[16])
  i3812.generatedShadowLocalOffset = new pc.Vec3( i3813[17], i3813[18], i3813[19] )
  i3812.itemLayerName = i3813[20]
  i3812.holderLayerName = i3813[21]
  return i3812
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3814 = root || request.c( 'CameraController' )
  var i3815 = data
  request.r(i3815[0], i3815[1], 0, i3814, 'targetCamera')
  i3814.enableZoom = !!i3815[2]
  i3814.minZoomRatio = i3815[3]
  i3814.maxZoomRatio = i3815[4]
  i3814.mouseWheelZoomSpeed = i3815[5]
  i3814.pinchZoomSpeed = i3815[6]
  i3814.enableDrag = !!i3815[7]
  i3814.horizontalOnly = !!i3815[8]
  i3814.dragSensitivity = i3815[9]
  i3814.maxHorizontalOffset = i3815[10]
  i3814.maxVerticalOffset = i3815[11]
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3817 = data
  i3816.aspect = i3817[0]
  i3816.orthographic = !!i3817[1]
  i3816.orthographicSize = i3817[2]
  i3816.backgroundColor = new pc.Color(i3817[3], i3817[4], i3817[5], i3817[6])
  i3816.nearClipPlane = i3817[7]
  i3816.farClipPlane = i3817[8]
  i3816.fieldOfView = i3817[9]
  i3816.depth = i3817[10]
  i3816.clearFlags = i3817[11]
  i3816.cullingMask = i3817[12]
  i3816.rect = i3817[13]
  request.r(i3817[14], i3817[15], 0, i3816, 'targetTexture')
  i3816.usePhysicalProperties = !!i3817[16]
  i3816.focalLength = i3817[17]
  i3816.sensorSize = new pc.Vec2( i3817[18], i3817[19] )
  i3816.lensShift = new pc.Vec2( i3817[20], i3817[21] )
  i3816.gateFit = i3817[22]
  i3816.commandBufferCount = i3817[23]
  i3816.cameraType = i3817[24]
  i3816.enabled = !!i3817[25]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3819 = data
  i3818.type = i3819[0]
  i3818.color = new pc.Color(i3819[1], i3819[2], i3819[3], i3819[4])
  i3818.cullingMask = i3819[5]
  i3818.intensity = i3819[6]
  i3818.range = i3819[7]
  i3818.spotAngle = i3819[8]
  i3818.shadows = i3819[9]
  i3818.shadowNormalBias = i3819[10]
  i3818.shadowBias = i3819[11]
  i3818.shadowStrength = i3819[12]
  i3818.shadowResolution = i3819[13]
  i3818.lightmapBakeType = i3819[14]
  i3818.renderMode = i3819[15]
  request.r(i3819[16], i3819[17], 0, i3818, 'cookie')
  i3818.cookieSize = i3819[18]
  i3818.shadowNearPlane = i3819[19]
  i3818.occlusionMaskChannel = i3819[20]
  i3818.enabled = !!i3819[21]
  return i3818
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3820 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3821 = data
  request.r(i3821[0], i3821[1], 0, i3820, 'm_FirstSelected')
  i3820.m_sendNavigationEvents = !!i3821[2]
  i3820.m_DragThreshold = i3821[3]
  return i3820
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3822 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3823 = data
  i3822.m_HorizontalAxis = i3823[0]
  i3822.m_VerticalAxis = i3823[1]
  i3822.m_SubmitButton = i3823[2]
  i3822.m_CancelButton = i3823[3]
  i3822.m_InputActionsPerSecond = i3823[4]
  i3822.m_RepeatDelay = i3823[5]
  i3822.m_ForceModuleActive = !!i3823[6]
  i3822.m_SendPointerHoverToParent = !!i3823[7]
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3825 = data
  i3824.color = new pc.Color(i3825[0], i3825[1], i3825[2], i3825[3])
  request.r(i3825[4], i3825[5], 0, i3824, 'sprite')
  i3824.flipX = !!i3825[6]
  i3824.flipY = !!i3825[7]
  i3824.drawMode = i3825[8]
  i3824.size = new pc.Vec2( i3825[9], i3825[10] )
  i3824.tileMode = i3825[11]
  i3824.adaptiveModeThreshold = i3825[12]
  i3824.maskInteraction = i3825[13]
  i3824.spriteSortPoint = i3825[14]
  i3824.enabled = !!i3825[15]
  request.r(i3825[16], i3825[17], 0, i3824, 'sharedMaterial')
  var i3827 = i3825[18]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 2) {
  request.r(i3827[i + 0], i3827[i + 1], 2, i3826, '')
  }
  i3824.sharedMaterials = i3826
  i3824.receiveShadows = !!i3825[19]
  i3824.shadowCastingMode = i3825[20]
  i3824.sortingLayerID = i3825[21]
  i3824.sortingOrder = i3825[22]
  i3824.lightmapIndex = i3825[23]
  i3824.lightmapSceneIndex = i3825[24]
  i3824.lightmapScaleOffset = new pc.Vec4( i3825[25], i3825[26], i3825[27], i3825[28] )
  i3824.lightProbeUsage = i3825[29]
  i3824.reflectionProbeUsage = i3825[30]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3829 = data
  i3828.center = new pc.Vec3( i3829[0], i3829[1], i3829[2] )
  i3828.radius = i3829[3]
  i3828.enabled = !!i3829[4]
  i3828.isTrigger = !!i3829[5]
  request.r(i3829[6], i3829[7], 0, i3828, 'material')
  return i3828
}

Deserializers["Box"] = function (request, data, root) {
  var i3830 = root || request.c( 'Box' )
  var i3831 = data
  i3830.useBox = !!i3831[0]
  i3830.spawnMode = i3831[1]
  var i3833 = i3831[2]
  var i3832 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i3833.length; i += 2) {
  request.r(i3833[i + 0], i3833[i + 1], 1, i3832, '')
  }
  i3830.dynamicItems = i3832
  var i3835 = i3831[3]
  var i3834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3835.length; i += 2) {
  request.r(i3835[i + 0], i3835[i + 1], 1, i3834, '')
  }
  i3830.spawnTargets = i3834
  i3830.initialSpawnCount = i3831[4]
  i3830.revealDuration = i3831[5]
  i3830.showInitialBatchShadowsOnSpawn = !!i3831[6]
  request.r(i3831[7], i3831[8], 0, i3830, 'graphicController')
  return i3830
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i3840 = root || request.c( 'BoxGraphicController' )
  var i3841 = data
  request.r(i3841[0], i3841[1], 0, i3840, 'skeletonAnimation')
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3843 = data
  request.r(i3843[0], i3843[1], 0, i3842, 'sharedMesh')
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3845 = data
  request.r(i3845[0], i3845[1], 0, i3844, 'additionalVertexStreams')
  i3844.enabled = !!i3845[2]
  request.r(i3845[3], i3845[4], 0, i3844, 'sharedMaterial')
  var i3847 = i3845[5]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 2) {
  request.r(i3847[i + 0], i3847[i + 1], 2, i3846, '')
  }
  i3844.sharedMaterials = i3846
  i3844.receiveShadows = !!i3845[6]
  i3844.shadowCastingMode = i3845[7]
  i3844.sortingLayerID = i3845[8]
  i3844.sortingOrder = i3845[9]
  i3844.lightmapIndex = i3845[10]
  i3844.lightmapSceneIndex = i3845[11]
  i3844.lightmapScaleOffset = new pc.Vec4( i3845[12], i3845[13], i3845[14], i3845[15] )
  i3844.lightProbeUsage = i3845[16]
  i3844.reflectionProbeUsage = i3845[17]
  return i3844
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i3848 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i3849 = data
  i3848.loop = !!i3849[0]
  i3848.timeScale = i3849[1]
  request.r(i3849[2], i3849[3], 0, i3848, 'skeletonDataAsset')
  i3848.initialSkinName = i3849[4]
  i3848.fixPrefabOverrideViaMeshFilter = i3849[5]
  i3848.initialFlipX = !!i3849[6]
  i3848.initialFlipY = !!i3849[7]
  i3848.updateWhenInvisible = i3849[8]
  i3848.zSpacing = i3849[9]
  i3848.useClipping = !!i3849[10]
  i3848.immutableTriangles = !!i3849[11]
  i3848.pmaVertexColors = !!i3849[12]
  i3848.clearStateOnDisable = !!i3849[13]
  i3848.tintBlack = !!i3849[14]
  i3848.singleSubmesh = !!i3849[15]
  i3848.fixDrawOrder = !!i3849[16]
  i3848.addNormals = !!i3849[17]
  i3848.calculateTangents = !!i3849[18]
  i3848.maskInteraction = i3849[19]
  i3848.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i3849[20], i3848.maskMaterials)
  i3848.disableRenderingOnOverride = !!i3849[21]
  i3848._animationName = i3849[22]
  var i3851 = i3849[23]
  var i3850 = []
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.push( i3851[i + 0] );
  }
  i3848.separatorSlotNames = i3850
  return i3848
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i3852 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i3853 = data
  var i3855 = i3853[0]
  var i3854 = []
  for(var i = 0; i < i3855.length; i += 2) {
  request.r(i3855[i + 0], i3855[i + 1], 2, i3854, '')
  }
  i3852.materialsMaskDisabled = i3854
  var i3857 = i3853[1]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 2) {
  request.r(i3857[i + 0], i3857[i + 1], 2, i3856, '')
  }
  i3852.materialsInsideMask = i3856
  var i3859 = i3853[2]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 2) {
  request.r(i3859[i + 0], i3859[i + 1], 2, i3858, '')
  }
  i3852.materialsOutsideMask = i3858
  return i3852
}

Deserializers["Item"] = function (request, data, root) {
  var i3862 = root || request.c( 'Item' )
  var i3863 = data
  i3862.placeSoundType = i3863[0]
  i3862.id = i3863[1]
  i3862.currentState = i3863[2]
  i3862.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i3863[3] )
  i3862.scaleOnSpawn = !!i3863[4]
  i3862.spawnScaleMultiplier = i3863[5]
  request.r(i3863[6], i3863[7], 0, i3862, 'correctHolderTransform')
  request.r(i3863[8], i3863[9], 0, i3862, 'shadowOnHolder')
  i3862.canShowShadowHint = !!i3863[10]
  i3862.waitingPosition = new pc.Vec3( i3863[11], i3863[12], i3863[13] )
  request.r(i3863[14], i3863[15], 0, i3862, 'spriteRenderer')
  return i3862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3865 = data
  i3864.center = new pc.Vec3( i3865[0], i3865[1], i3865[2] )
  i3864.size = new pc.Vec3( i3865[3], i3865[4], i3865[5] )
  i3864.enabled = !!i3865[6]
  i3864.isTrigger = !!i3865[7]
  request.r(i3865[8], i3865[9], 0, i3864, 'material')
  return i3864
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i3866 = root || request.c( 'PSD_Tool' )
  var i3867 = data
  var i3869 = i3867[0]
  var i3868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3869.length; i += 2) {
  request.r(i3869[i + 0], i3869[i + 1], 1, i3868, '')
  }
  i3866.sprites = i3868
  request.r(i3867[1], i3867[2], 0, i3866, 'holder')
  var i3871 = i3867[3]
  var i3870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3871.length; i += 2) {
  request.r(i3871[i + 0], i3871[i + 1], 1, i3870, '')
  }
  i3866.childGameObjects = i3870
  return i3866
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i3876 = root || request.c( 'ItemHolder' )
  var i3877 = data
  i3876.id = i3877[0]
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3879 = data
  i3878.ambientIntensity = i3879[0]
  i3878.reflectionIntensity = i3879[1]
  i3878.ambientMode = i3879[2]
  i3878.ambientLight = new pc.Color(i3879[3], i3879[4], i3879[5], i3879[6])
  i3878.ambientSkyColor = new pc.Color(i3879[7], i3879[8], i3879[9], i3879[10])
  i3878.ambientGroundColor = new pc.Color(i3879[11], i3879[12], i3879[13], i3879[14])
  i3878.ambientEquatorColor = new pc.Color(i3879[15], i3879[16], i3879[17], i3879[18])
  i3878.fogColor = new pc.Color(i3879[19], i3879[20], i3879[21], i3879[22])
  i3878.fogEndDistance = i3879[23]
  i3878.fogStartDistance = i3879[24]
  i3878.fogDensity = i3879[25]
  i3878.fog = !!i3879[26]
  request.r(i3879[27], i3879[28], 0, i3878, 'skybox')
  i3878.fogMode = i3879[29]
  var i3881 = i3879[30]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3881[i + 0]) );
  }
  i3878.lightmaps = i3880
  i3878.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3879[31], i3878.lightProbes)
  i3878.lightmapsMode = i3879[32]
  i3878.mixedBakeMode = i3879[33]
  i3878.environmentLightingMode = i3879[34]
  i3878.ambientProbe = new pc.SphericalHarmonicsL2(i3879[35])
  i3878.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3879[36])
  i3878.useReferenceAmbientProbe = !!i3879[37]
  request.r(i3879[38], i3879[39], 0, i3878, 'customReflection')
  request.r(i3879[40], i3879[41], 0, i3878, 'defaultReflection')
  i3878.defaultReflectionMode = i3879[42]
  i3878.defaultReflectionResolution = i3879[43]
  i3878.sunLightObjectId = i3879[44]
  i3878.pixelLightCount = i3879[45]
  i3878.defaultReflectionHDR = !!i3879[46]
  i3878.hasLightDataAsset = !!i3879[47]
  i3878.hasManualGenerate = !!i3879[48]
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3885 = data
  request.r(i3885[0], i3885[1], 0, i3884, 'lightmapColor')
  request.r(i3885[2], i3885[3], 0, i3884, 'lightmapDirection')
  request.r(i3885[4], i3885[5], 0, i3884, 'shadowMask')
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3886 = root || new UnityEngine.LightProbes()
  var i3887 = data
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3895 = data
  var i3897 = i3895[0]
  var i3896 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3897[i + 0]));
  }
  i3894.ShaderCompilationErrors = i3896
  i3894.name = i3895[1]
  i3894.guid = i3895[2]
  var i3899 = i3895[3]
  var i3898 = []
  for(var i = 0; i < i3899.length; i += 1) {
    i3898.push( i3899[i + 0] );
  }
  i3894.shaderDefinedKeywords = i3898
  var i3901 = i3895[4]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3901[i + 0]) );
  }
  i3894.passes = i3900
  var i3903 = i3895[5]
  var i3902 = []
  for(var i = 0; i < i3903.length; i += 1) {
    i3902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3903[i + 0]) );
  }
  i3894.usePasses = i3902
  var i3905 = i3895[6]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 1) {
    i3904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3905[i + 0]) );
  }
  i3894.defaultParameterValues = i3904
  request.r(i3895[7], i3895[8], 0, i3894, 'unityFallbackShader')
  i3894.readDepth = !!i3895[9]
  i3894.hasDepthOnlyPass = !!i3895[10]
  i3894.isCreatedByShaderGraph = !!i3895[11]
  i3894.disableBatching = !!i3895[12]
  i3894.compiled = !!i3895[13]
  return i3894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3909 = data
  i3908.shaderName = i3909[0]
  i3908.errorMessage = i3909[1]
  return i3908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3912 = root || new pc.UnityShaderPass()
  var i3913 = data
  i3912.id = i3913[0]
  i3912.subShaderIndex = i3913[1]
  i3912.name = i3913[2]
  i3912.passType = i3913[3]
  i3912.grabPassTextureName = i3913[4]
  i3912.usePass = !!i3913[5]
  i3912.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[6], i3912.zTest)
  i3912.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[7], i3912.zWrite)
  i3912.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[8], i3912.culling)
  i3912.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3913[9], i3912.blending)
  i3912.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3913[10], i3912.alphaBlending)
  i3912.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[11], i3912.colorWriteMask)
  i3912.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[12], i3912.offsetUnits)
  i3912.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[13], i3912.offsetFactor)
  i3912.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[14], i3912.stencilRef)
  i3912.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[15], i3912.stencilReadMask)
  i3912.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3913[16], i3912.stencilWriteMask)
  i3912.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3913[17], i3912.stencilOp)
  i3912.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3913[18], i3912.stencilOpFront)
  i3912.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3913[19], i3912.stencilOpBack)
  var i3915 = i3913[20]
  var i3914 = []
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3915[i + 0]) );
  }
  i3912.tags = i3914
  var i3917 = i3913[21]
  var i3916 = []
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.push( i3917[i + 0] );
  }
  i3912.passDefinedKeywords = i3916
  var i3919 = i3913[22]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3919[i + 0]) );
  }
  i3912.passDefinedKeywordGroups = i3918
  var i3921 = i3913[23]
  var i3920 = []
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3921[i + 0]) );
  }
  i3912.variants = i3920
  var i3923 = i3913[24]
  var i3922 = []
  for(var i = 0; i < i3923.length; i += 1) {
    i3922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3923[i + 0]) );
  }
  i3912.excludedVariants = i3922
  i3912.hasDepthReader = !!i3913[25]
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3925 = data
  i3924.val = i3925[0]
  i3924.name = i3925[1]
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3927 = data
  i3926.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3927[0], i3926.src)
  i3926.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3927[1], i3926.dst)
  i3926.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3927[2], i3926.op)
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3929 = data
  i3928.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3929[0], i3928.pass)
  i3928.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3929[1], i3928.fail)
  i3928.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3929[2], i3928.zFail)
  i3928.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3929[3], i3928.comp)
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3933 = data
  i3932.name = i3933[0]
  i3932.value = i3933[1]
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3937 = data
  var i3939 = i3937[0]
  var i3938 = []
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.push( i3939[i + 0] );
  }
  i3936.keywords = i3938
  i3936.hasDiscard = !!i3937[1]
  return i3936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3943 = data
  i3942.passId = i3943[0]
  i3942.subShaderIndex = i3943[1]
  var i3945 = i3943[2]
  var i3944 = []
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.push( i3945[i + 0] );
  }
  i3942.keywords = i3944
  i3942.vertexProgram = i3943[3]
  i3942.fragmentProgram = i3943[4]
  i3942.exportedForWebGl2 = !!i3943[5]
  i3942.readDepth = !!i3943[6]
  return i3942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3949 = data
  request.r(i3949[0], i3949[1], 0, i3948, 'shader')
  i3948.pass = i3949[2]
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3953 = data
  i3952.name = i3953[0]
  i3952.type = i3953[1]
  i3952.value = new pc.Vec4( i3953[2], i3953[3], i3953[4], i3953[5] )
  i3952.textureValue = i3953[6]
  i3952.shaderPropertyFlag = i3953[7]
  return i3952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3955 = data
  i3954.name = i3955[0]
  request.r(i3955[1], i3955[2], 0, i3954, 'texture')
  i3954.aabb = i3955[3]
  i3954.vertices = i3955[4]
  i3954.triangles = i3955[5]
  i3954.textureRect = UnityEngine.Rect.MinMaxRect(i3955[6], i3955[7], i3955[8], i3955[9])
  i3954.packedRect = UnityEngine.Rect.MinMaxRect(i3955[10], i3955[11], i3955[12], i3955[13])
  i3954.border = new pc.Vec4( i3955[14], i3955[15], i3955[16], i3955[17] )
  i3954.transparency = i3955[18]
  i3954.bounds = i3955[19]
  i3954.pixelsPerUnit = i3955[20]
  i3954.textureWidth = i3955[21]
  i3954.textureHeight = i3955[22]
  i3954.nativeSize = new pc.Vec2( i3955[23], i3955[24] )
  i3954.pivot = new pc.Vec2( i3955[25], i3955[26] )
  i3954.textureRectOffset = new pc.Vec2( i3955[27], i3955[28] )
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3957 = data
  i3956.name = i3957[0]
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3959 = data
  i3958.name = i3959[0]
  i3958.wrapMode = i3959[1]
  i3958.isLooping = !!i3959[2]
  i3958.length = i3959[3]
  var i3961 = i3959[4]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3961[i + 0]) );
  }
  i3958.curves = i3960
  var i3963 = i3959[5]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3963[i + 0]) );
  }
  i3958.events = i3962
  i3958.halfPrecision = !!i3959[6]
  i3958._frameRate = i3959[7]
  i3958.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3959[8], i3958.localBounds)
  i3958.hasMuscleCurves = !!i3959[9]
  var i3965 = i3959[10]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( i3965[i + 0] );
  }
  i3958.clipMuscleConstant = i3964
  i3958.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3959[11], i3958.clipBindingConstant)
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3969 = data
  i3968.path = i3969[0]
  i3968.hash = i3969[1]
  i3968.componentType = i3969[2]
  i3968.property = i3969[3]
  i3968.keys = i3969[4]
  var i3971 = i3969[5]
  var i3970 = []
  for(var i = 0; i < i3971.length; i += 1) {
    i3970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3971[i + 0]) );
  }
  i3968.objectReferenceKeys = i3970
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3975 = data
  i3974.time = i3975[0]
  request.r(i3975[1], i3975[2], 0, i3974, 'value')
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3979 = data
  i3978.functionName = i3979[0]
  i3978.floatParameter = i3979[1]
  i3978.intParameter = i3979[2]
  i3978.stringParameter = i3979[3]
  request.r(i3979[4], i3979[5], 0, i3978, 'objectReferenceParameter')
  i3978.time = i3979[6]
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3981 = data
  i3980.center = new pc.Vec3( i3981[0], i3981[1], i3981[2] )
  i3980.extends = new pc.Vec3( i3981[3], i3981[4], i3981[5] )
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3985 = data
  var i3987 = i3985[0]
  var i3986 = []
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.push( i3987[i + 0] );
  }
  i3984.genericBindings = i3986
  var i3989 = i3985[1]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( i3989[i + 0] );
  }
  i3984.pptrCurveMapping = i3988
  return i3984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3991 = data
  i3990.name = i3991[0]
  var i3993 = i3991[1]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3993[i + 0]) );
  }
  i3990.layers = i3992
  var i3995 = i3991[2]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3995[i + 0]) );
  }
  i3990.parameters = i3994
  i3990.animationClips = i3991[3]
  i3990.avatarUnsupported = i3991[4]
  return i3990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3999 = data
  i3998.name = i3999[0]
  i3998.defaultWeight = i3999[1]
  i3998.blendingMode = i3999[2]
  i3998.avatarMask = i3999[3]
  i3998.syncedLayerIndex = i3999[4]
  i3998.syncedLayerAffectsTiming = !!i3999[5]
  i3998.syncedLayers = i3999[6]
  i3998.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3999[7], i3998.stateMachine)
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4001 = data
  i4000.id = i4001[0]
  i4000.name = i4001[1]
  i4000.path = i4001[2]
  var i4003 = i4001[3]
  var i4002 = []
  for(var i = 0; i < i4003.length; i += 1) {
    i4002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4003[i + 0]) );
  }
  i4000.states = i4002
  var i4005 = i4001[4]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4005[i + 0]) );
  }
  i4000.machines = i4004
  var i4007 = i4001[5]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4007[i + 0]) );
  }
  i4000.entryStateTransitions = i4006
  var i4009 = i4001[6]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4009[i + 0]) );
  }
  i4000.exitStateTransitions = i4008
  var i4011 = i4001[7]
  var i4010 = []
  for(var i = 0; i < i4011.length; i += 1) {
    i4010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4011[i + 0]) );
  }
  i4000.anyStateTransitions = i4010
  i4000.defaultStateId = i4001[8]
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4015 = data
  i4014.id = i4015[0]
  i4014.name = i4015[1]
  i4014.cycleOffset = i4015[2]
  i4014.cycleOffsetParameter = i4015[3]
  i4014.cycleOffsetParameterActive = !!i4015[4]
  i4014.mirror = !!i4015[5]
  i4014.mirrorParameter = i4015[6]
  i4014.mirrorParameterActive = !!i4015[7]
  i4014.motionId = i4015[8]
  i4014.nameHash = i4015[9]
  i4014.fullPathHash = i4015[10]
  i4014.speed = i4015[11]
  i4014.speedParameter = i4015[12]
  i4014.speedParameterActive = !!i4015[13]
  i4014.tag = i4015[14]
  i4014.tagHash = i4015[15]
  i4014.writeDefaultValues = !!i4015[16]
  var i4017 = i4015[17]
  var i4016 = []
  for(var i = 0; i < i4017.length; i += 2) {
  request.r(i4017[i + 0], i4017[i + 1], 2, i4016, '')
  }
  i4014.behaviours = i4016
  var i4019 = i4015[18]
  var i4018 = []
  for(var i = 0; i < i4019.length; i += 1) {
    i4018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4019[i + 0]) );
  }
  i4014.transitions = i4018
  return i4014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4025 = data
  i4024.fullPath = i4025[0]
  i4024.canTransitionToSelf = !!i4025[1]
  i4024.duration = i4025[2]
  i4024.exitTime = i4025[3]
  i4024.hasExitTime = !!i4025[4]
  i4024.hasFixedDuration = !!i4025[5]
  i4024.interruptionSource = i4025[6]
  i4024.offset = i4025[7]
  i4024.orderedInterruption = !!i4025[8]
  i4024.destinationStateId = i4025[9]
  i4024.isExit = !!i4025[10]
  i4024.mute = !!i4025[11]
  i4024.solo = !!i4025[12]
  var i4027 = i4025[13]
  var i4026 = []
  for(var i = 0; i < i4027.length; i += 1) {
    i4026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4027[i + 0]) );
  }
  i4024.conditions = i4026
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4033 = data
  i4032.destinationStateId = i4033[0]
  i4032.isExit = !!i4033[1]
  i4032.mute = !!i4033[2]
  i4032.solo = !!i4033[3]
  var i4035 = i4033[4]
  var i4034 = []
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4035[i + 0]) );
  }
  i4032.conditions = i4034
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4039 = data
  i4038.defaultBool = !!i4039[0]
  i4038.defaultFloat = i4039[1]
  i4038.defaultInt = i4039[2]
  i4038.name = i4039[3]
  i4038.nameHash = i4039[4]
  i4038.type = i4039[5]
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4041 = data
  i4040.name = i4041[0]
  i4040.bytes64 = i4041[1]
  i4040.data = i4041[2]
  return i4040
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4042 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4043 = data
  i4042.normalStyle = i4043[0]
  i4042.normalSpacingOffset = i4043[1]
  i4042.boldStyle = i4043[2]
  i4042.boldSpacing = i4043[3]
  i4042.italicStyle = i4043[4]
  i4042.tabSize = i4043[5]
  request.r(i4043[6], i4043[7], 0, i4042, 'atlas')
  i4042.m_SourceFontFileGUID = i4043[8]
  i4042.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4043[9], i4042.m_CreationSettings)
  request.r(i4043[10], i4043[11], 0, i4042, 'm_SourceFontFile')
  i4042.m_SourceFontFilePath = i4043[12]
  i4042.m_AtlasPopulationMode = i4043[13]
  i4042.InternalDynamicOS = !!i4043[14]
  var i4045 = i4043[15]
  var i4044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.add(request.d('UnityEngine.TextCore.Glyph', i4045[i + 0]));
  }
  i4042.m_GlyphTable = i4044
  var i4047 = i4043[16]
  var i4046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.add(request.d('TMPro.TMP_Character', i4047[i + 0]));
  }
  i4042.m_CharacterTable = i4046
  var i4049 = i4043[17]
  var i4048 = []
  for(var i = 0; i < i4049.length; i += 2) {
  request.r(i4049[i + 0], i4049[i + 1], 2, i4048, '')
  }
  i4042.m_AtlasTextures = i4048
  i4042.m_AtlasTextureIndex = i4043[18]
  i4042.m_IsMultiAtlasTexturesEnabled = !!i4043[19]
  i4042.m_GetFontFeatures = !!i4043[20]
  i4042.m_ClearDynamicDataOnBuild = !!i4043[21]
  i4042.m_AtlasWidth = i4043[22]
  i4042.m_AtlasHeight = i4043[23]
  i4042.m_AtlasPadding = i4043[24]
  i4042.m_AtlasRenderMode = i4043[25]
  var i4051 = i4043[26]
  var i4050 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.add(request.d('UnityEngine.TextCore.GlyphRect', i4051[i + 0]));
  }
  i4042.m_UsedGlyphRects = i4050
  var i4053 = i4043[27]
  var i4052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.add(request.d('UnityEngine.TextCore.GlyphRect', i4053[i + 0]));
  }
  i4042.m_FreeGlyphRects = i4052
  i4042.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4043[28], i4042.m_FontFeatureTable)
  i4042.m_ShouldReimportFontFeatures = !!i4043[29]
  var i4055 = i4043[30]
  var i4054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4055.length; i += 2) {
  request.r(i4055[i + 0], i4055[i + 1], 1, i4054, '')
  }
  i4042.m_FallbackFontAssetTable = i4054
  var i4057 = i4043[31]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.push( request.d('TMPro.TMP_FontWeightPair', i4057[i + 0]) );
  }
  i4042.m_FontWeightTable = i4056
  var i4059 = i4043[32]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.push( request.d('TMPro.TMP_FontWeightPair', i4059[i + 0]) );
  }
  i4042.fontWeights = i4058
  i4042.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4043[33], i4042.m_fontInfo)
  var i4061 = i4043[34]
  var i4060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.add(request.d('TMPro.TMP_Glyph', i4061[i + 0]));
  }
  i4042.m_glyphInfoList = i4060
  i4042.m_KerningTable = request.d('TMPro.KerningTable', i4043[35], i4042.m_KerningTable)
  var i4063 = i4043[36]
  var i4062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4063.length; i += 2) {
  request.r(i4063[i + 0], i4063[i + 1], 1, i4062, '')
  }
  i4042.fallbackFontAssets = i4062
  i4042.m_Version = i4043[37]
  i4042.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4043[38], i4042.m_FaceInfo)
  request.r(i4043[39], i4043[40], 0, i4042, 'm_Material')
  return i4042
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4064 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4065 = data
  i4064.sourceFontFileName = i4065[0]
  i4064.sourceFontFileGUID = i4065[1]
  i4064.faceIndex = i4065[2]
  i4064.pointSizeSamplingMode = i4065[3]
  i4064.pointSize = i4065[4]
  i4064.padding = i4065[5]
  i4064.paddingMode = i4065[6]
  i4064.packingMode = i4065[7]
  i4064.atlasWidth = i4065[8]
  i4064.atlasHeight = i4065[9]
  i4064.characterSetSelectionMode = i4065[10]
  i4064.characterSequence = i4065[11]
  i4064.referencedFontAssetGUID = i4065[12]
  i4064.referencedTextAssetGUID = i4065[13]
  i4064.fontStyle = i4065[14]
  i4064.fontStyleModifier = i4065[15]
  i4064.renderMode = i4065[16]
  i4064.includeFontFeatures = !!i4065[17]
  return i4064
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4068 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4069 = data
  i4068.m_Index = i4069[0]
  i4068.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4069[1], i4068.m_Metrics)
  i4068.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4069[2], i4068.m_GlyphRect)
  i4068.m_Scale = i4069[3]
  i4068.m_AtlasIndex = i4069[4]
  i4068.m_ClassDefinitionType = i4069[5]
  return i4068
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4070 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4071 = data
  i4070.m_Width = i4071[0]
  i4070.m_Height = i4071[1]
  i4070.m_HorizontalBearingX = i4071[2]
  i4070.m_HorizontalBearingY = i4071[3]
  i4070.m_HorizontalAdvance = i4071[4]
  return i4070
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4072 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4073 = data
  i4072.m_X = i4073[0]
  i4072.m_Y = i4073[1]
  i4072.m_Width = i4073[2]
  i4072.m_Height = i4073[3]
  return i4072
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4076 = root || request.c( 'TMPro.TMP_Character' )
  var i4077 = data
  i4076.m_ElementType = i4077[0]
  i4076.m_Unicode = i4077[1]
  i4076.m_GlyphIndex = i4077[2]
  i4076.m_Scale = i4077[3]
  return i4076
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4082 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4083 = data
  var i4085 = i4083[0]
  var i4084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.add(request.d('TMPro.MultipleSubstitutionRecord', i4085[i + 0]));
  }
  i4082.m_MultipleSubstitutionRecords = i4084
  var i4087 = i4083[1]
  var i4086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i4087.length; i += 1) {
    i4086.add(request.d('TMPro.LigatureSubstitutionRecord', i4087[i + 0]));
  }
  i4082.m_LigatureSubstitutionRecords = i4086
  var i4089 = i4083[2]
  var i4088 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i4089[i + 0]));
  }
  i4082.m_GlyphPairAdjustmentRecords = i4088
  var i4091 = i4083[3]
  var i4090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i4091.length; i += 1) {
    i4090.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i4091[i + 0]));
  }
  i4082.m_MarkToBaseAdjustmentRecords = i4090
  var i4093 = i4083[4]
  var i4092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i4093.length; i += 1) {
    i4092.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i4093[i + 0]));
  }
  i4082.m_MarkToMarkAdjustmentRecords = i4092
  return i4082
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i4096 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i4097 = data
  i4096.m_TargetGlyphID = i4097[0]
  i4096.m_SubstituteGlyphIDs = i4097[1]
  return i4096
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i4100 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i4101 = data
  i4100.m_ComponentGlyphIDs = i4101[0]
  i4100.m_LigatureGlyphID = i4101[1]
  return i4100
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4104 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i4105 = data
  i4104.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4105[0], i4104.m_FirstAdjustmentRecord)
  i4104.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i4105[1], i4104.m_SecondAdjustmentRecord)
  i4104.m_FeatureLookupFlags = i4105[2]
  return i4104
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i4108 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i4109 = data
  i4108.m_BaseGlyphID = i4109[0]
  i4108.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4109[1], i4108.m_BaseGlyphAnchorPoint)
  i4108.m_MarkGlyphID = i4109[2]
  i4108.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4109[3], i4108.m_MarkPositionAdjustment)
  return i4108
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i4112 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i4113 = data
  i4112.m_BaseMarkGlyphID = i4113[0]
  i4112.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i4113[1], i4112.m_BaseMarkGlyphAnchorPoint)
  i4112.m_CombiningMarkGlyphID = i4113[2]
  i4112.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i4113[3], i4112.m_CombiningMarkPositionAdjustment)
  return i4112
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4118 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4119 = data
  request.r(i4119[0], i4119[1], 0, i4118, 'regularTypeface')
  request.r(i4119[2], i4119[3], 0, i4118, 'italicTypeface')
  return i4118
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4120 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4121 = data
  i4120.Name = i4121[0]
  i4120.PointSize = i4121[1]
  i4120.Scale = i4121[2]
  i4120.CharacterCount = i4121[3]
  i4120.LineHeight = i4121[4]
  i4120.Baseline = i4121[5]
  i4120.Ascender = i4121[6]
  i4120.CapHeight = i4121[7]
  i4120.Descender = i4121[8]
  i4120.CenterLine = i4121[9]
  i4120.SuperscriptOffset = i4121[10]
  i4120.SubscriptOffset = i4121[11]
  i4120.SubSize = i4121[12]
  i4120.Underline = i4121[13]
  i4120.UnderlineThickness = i4121[14]
  i4120.strikethrough = i4121[15]
  i4120.strikethroughThickness = i4121[16]
  i4120.TabWidth = i4121[17]
  i4120.Padding = i4121[18]
  i4120.AtlasWidth = i4121[19]
  i4120.AtlasHeight = i4121[20]
  return i4120
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4124 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4125 = data
  i4124.id = i4125[0]
  i4124.x = i4125[1]
  i4124.y = i4125[2]
  i4124.width = i4125[3]
  i4124.height = i4125[4]
  i4124.xOffset = i4125[5]
  i4124.yOffset = i4125[6]
  i4124.xAdvance = i4125[7]
  i4124.scale = i4125[8]
  return i4124
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4126 = root || request.c( 'TMPro.KerningTable' )
  var i4127 = data
  var i4129 = i4127[0]
  var i4128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.add(request.d('TMPro.KerningPair', i4129[i + 0]));
  }
  i4126.kerningPairs = i4128
  return i4126
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4132 = root || request.c( 'TMPro.KerningPair' )
  var i4133 = data
  i4132.xOffset = i4133[0]
  i4132.m_FirstGlyph = i4133[1]
  i4132.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4133[2], i4132.m_FirstGlyphAdjustments)
  i4132.m_SecondGlyph = i4133[3]
  i4132.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4133[4], i4132.m_SecondGlyphAdjustments)
  i4132.m_IgnoreSpacingAdjustments = !!i4133[5]
  return i4132
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4134 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4135 = data
  i4134.m_FaceIndex = i4135[0]
  i4134.m_FamilyName = i4135[1]
  i4134.m_StyleName = i4135[2]
  i4134.m_PointSize = i4135[3]
  i4134.m_Scale = i4135[4]
  i4134.m_UnitsPerEM = i4135[5]
  i4134.m_LineHeight = i4135[6]
  i4134.m_AscentLine = i4135[7]
  i4134.m_CapLine = i4135[8]
  i4134.m_MeanLine = i4135[9]
  i4134.m_Baseline = i4135[10]
  i4134.m_DescentLine = i4135[11]
  i4134.m_SuperscriptOffset = i4135[12]
  i4134.m_SuperscriptSize = i4135[13]
  i4134.m_SubscriptOffset = i4135[14]
  i4134.m_SubscriptSize = i4135[15]
  i4134.m_UnderlineOffset = i4135[16]
  i4134.m_UnderlineThickness = i4135[17]
  i4134.m_StrikethroughOffset = i4135[18]
  i4134.m_StrikethroughThickness = i4135[19]
  i4134.m_TabWidth = i4135[20]
  return i4134
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4136 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4137 = data
  var i4139 = i4137[0]
  var i4138 = []
  for(var i = 0; i < i4139.length; i += 2) {
  request.r(i4139[i + 0], i4139[i + 1], 2, i4138, '')
  }
  i4136.atlasAssets = i4138
  i4136.scale = i4137[1]
  request.r(i4137[2], i4137[3], 0, i4136, 'skeletonJSON')
  i4136.isUpgradingBlendModeMaterials = !!i4137[4]
  i4136.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4137[5], i4136.blendModeMaterials)
  var i4141 = i4137[6]
  var i4140 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4141.length; i += 2) {
  request.r(i4141[i + 0], i4141[i + 1], 1, i4140, '')
  }
  i4136.skeletonDataModifiers = i4140
  var i4143 = i4137[7]
  var i4142 = []
  for(var i = 0; i < i4143.length; i += 1) {
    i4142.push( i4143[i + 0] );
  }
  i4136.fromAnimation = i4142
  var i4145 = i4137[8]
  var i4144 = []
  for(var i = 0; i < i4145.length; i += 1) {
    i4144.push( i4145[i + 0] );
  }
  i4136.toAnimation = i4144
  i4136.duration = i4137[9]
  i4136.defaultMix = i4137[10]
  request.r(i4137[11], i4137[12], 0, i4136, 'controller')
  return i4136
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4148 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4149 = data
  i4148.applyAdditiveMaterial = !!i4149[0]
  var i4151 = i4149[1]
  var i4150 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4151.length; i += 1) {
    i4150.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4151[i + 0]));
  }
  i4148.additiveMaterials = i4150
  var i4153 = i4149[2]
  var i4152 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4153.length; i += 1) {
    i4152.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4153[i + 0]));
  }
  i4148.multiplyMaterials = i4152
  var i4155 = i4149[3]
  var i4154 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4155[i + 0]));
  }
  i4148.screenMaterials = i4154
  i4148.requiresBlendModeMaterials = !!i4149[4]
  return i4148
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4158 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4159 = data
  i4158.pageName = i4159[0]
  request.r(i4159[1], i4159[2], 0, i4158, 'material')
  return i4158
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4162 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4163 = data
  request.r(i4163[0], i4163[1], 0, i4162, 'atlasFile')
  var i4165 = i4163[2]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 2) {
  request.r(i4165[i + 0], i4165[i + 1], 2, i4164, '')
  }
  i4162.materials = i4164
  return i4162
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4166 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4167 = data
  i4166.useSafeMode = !!i4167[0]
  i4166.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4167[1], i4166.safeModeOptions)
  i4166.timeScale = i4167[2]
  i4166.unscaledTimeScale = i4167[3]
  i4166.useSmoothDeltaTime = !!i4167[4]
  i4166.maxSmoothUnscaledTime = i4167[5]
  i4166.rewindCallbackMode = i4167[6]
  i4166.showUnityEditorReport = !!i4167[7]
  i4166.logBehaviour = i4167[8]
  i4166.drawGizmos = !!i4167[9]
  i4166.defaultRecyclable = !!i4167[10]
  i4166.defaultAutoPlay = i4167[11]
  i4166.defaultUpdateType = i4167[12]
  i4166.defaultTimeScaleIndependent = !!i4167[13]
  i4166.defaultEaseType = i4167[14]
  i4166.defaultEaseOvershootOrAmplitude = i4167[15]
  i4166.defaultEasePeriod = i4167[16]
  i4166.defaultAutoKill = !!i4167[17]
  i4166.defaultLoopType = i4167[18]
  i4166.debugMode = !!i4167[19]
  i4166.debugStoreTargetId = !!i4167[20]
  i4166.showPreviewPanel = !!i4167[21]
  i4166.storeSettingsLocation = i4167[22]
  i4166.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4167[23], i4166.modules)
  i4166.createASMDEF = !!i4167[24]
  i4166.showPlayingTweens = !!i4167[25]
  i4166.showPausedTweens = !!i4167[26]
  return i4166
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4168 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4169 = data
  i4168.logBehaviour = i4169[0]
  i4168.nestedTweenFailureBehaviour = i4169[1]
  return i4168
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4170 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4171 = data
  i4170.showPanel = !!i4171[0]
  i4170.audioEnabled = !!i4171[1]
  i4170.physicsEnabled = !!i4171[2]
  i4170.physics2DEnabled = !!i4171[3]
  i4170.spriteEnabled = !!i4171[4]
  i4170.uiEnabled = !!i4171[5]
  i4170.uiToolkitEnabled = !!i4171[6]
  i4170.textMeshProEnabled = !!i4171[7]
  i4170.tk2DEnabled = !!i4171[8]
  i4170.deAudioEnabled = !!i4171[9]
  i4170.deUnityExtendedEnabled = !!i4171[10]
  i4170.epoOutlineEnabled = !!i4171[11]
  return i4170
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4172 = root || request.c( 'TMPro.TMP_Settings' )
  var i4173 = data
  i4172.assetVersion = i4173[0]
  i4172.m_TextWrappingMode = i4173[1]
  i4172.m_enableKerning = !!i4173[2]
  var i4175 = i4173[3]
  var i4174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i4175.length; i += 1) {
    i4174.add(i4175[i + 0]);
  }
  i4172.m_ActiveFontFeatures = i4174
  i4172.m_enableExtraPadding = !!i4173[4]
  i4172.m_enableTintAllSprites = !!i4173[5]
  i4172.m_enableParseEscapeCharacters = !!i4173[6]
  i4172.m_EnableRaycastTarget = !!i4173[7]
  i4172.m_GetFontFeaturesAtRuntime = !!i4173[8]
  i4172.m_missingGlyphCharacter = i4173[9]
  i4172.m_ClearDynamicDataOnBuild = !!i4173[10]
  i4172.m_warningsDisabled = !!i4173[11]
  request.r(i4173[12], i4173[13], 0, i4172, 'm_defaultFontAsset')
  i4172.m_defaultFontAssetPath = i4173[14]
  i4172.m_defaultFontSize = i4173[15]
  i4172.m_defaultAutoSizeMinRatio = i4173[16]
  i4172.m_defaultAutoSizeMaxRatio = i4173[17]
  i4172.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4173[18], i4173[19] )
  i4172.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4173[20], i4173[21] )
  i4172.m_autoSizeTextContainer = !!i4173[22]
  i4172.m_IsTextObjectScaleStatic = !!i4173[23]
  var i4177 = i4173[24]
  var i4176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4177.length; i += 2) {
  request.r(i4177[i + 0], i4177[i + 1], 1, i4176, '')
  }
  i4172.m_fallbackFontAssets = i4176
  i4172.m_matchMaterialPreset = !!i4173[25]
  i4172.m_HideSubTextObjects = !!i4173[26]
  request.r(i4173[27], i4173[28], 0, i4172, 'm_defaultSpriteAsset')
  i4172.m_defaultSpriteAssetPath = i4173[29]
  i4172.m_enableEmojiSupport = !!i4173[30]
  i4172.m_MissingCharacterSpriteUnicode = i4173[31]
  var i4179 = i4173[32]
  var i4178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i4179.length; i += 2) {
  request.r(i4179[i + 0], i4179[i + 1], 1, i4178, '')
  }
  i4172.m_EmojiFallbackTextAssets = i4178
  i4172.m_defaultColorGradientPresetsPath = i4173[33]
  request.r(i4173[34], i4173[35], 0, i4172, 'm_defaultStyleSheet')
  i4172.m_StyleSheetsResourcePath = i4173[36]
  request.r(i4173[37], i4173[38], 0, i4172, 'm_leadingCharacters')
  request.r(i4173[39], i4173[40], 0, i4172, 'm_followingCharacters')
  i4172.m_UseModernHangulLineBreakingRules = !!i4173[41]
  return i4172
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4182 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4183 = data
  request.r(i4183[0], i4183[1], 0, i4182, 'spriteSheet')
  var i4185 = i4183[2]
  var i4184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.add(request.d('TMPro.TMP_Sprite', i4185[i + 0]));
  }
  i4182.spriteInfoList = i4184
  var i4187 = i4183[3]
  var i4186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4187.length; i += 2) {
  request.r(i4187[i + 0], i4187[i + 1], 1, i4186, '')
  }
  i4182.fallbackSpriteAssets = i4186
  var i4189 = i4183[4]
  var i4188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4189.length; i += 1) {
    i4188.add(request.d('TMPro.TMP_SpriteCharacter', i4189[i + 0]));
  }
  i4182.m_SpriteCharacterTable = i4188
  var i4191 = i4183[5]
  var i4190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4191.length; i += 1) {
    i4190.add(request.d('TMPro.TMP_SpriteGlyph', i4191[i + 0]));
  }
  i4182.m_GlyphTable = i4190
  i4182.m_Version = i4183[6]
  i4182.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4183[7], i4182.m_FaceInfo)
  request.r(i4183[8], i4183[9], 0, i4182, 'm_Material')
  return i4182
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4194 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4195 = data
  i4194.name = i4195[0]
  i4194.hashCode = i4195[1]
  i4194.unicode = i4195[2]
  i4194.pivot = new pc.Vec2( i4195[3], i4195[4] )
  request.r(i4195[5], i4195[6], 0, i4194, 'sprite')
  i4194.id = i4195[7]
  i4194.x = i4195[8]
  i4194.y = i4195[9]
  i4194.width = i4195[10]
  i4194.height = i4195[11]
  i4194.xOffset = i4195[12]
  i4194.yOffset = i4195[13]
  i4194.xAdvance = i4195[14]
  i4194.scale = i4195[15]
  return i4194
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4200 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4201 = data
  i4200.m_Name = i4201[0]
  i4200.m_ElementType = i4201[1]
  i4200.m_Unicode = i4201[2]
  i4200.m_GlyphIndex = i4201[3]
  i4200.m_Scale = i4201[4]
  return i4200
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4204 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4205 = data
  request.r(i4205[0], i4205[1], 0, i4204, 'sprite')
  i4204.m_Index = i4205[2]
  i4204.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4205[3], i4204.m_Metrics)
  i4204.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4205[4], i4204.m_GlyphRect)
  i4204.m_Scale = i4205[5]
  i4204.m_AtlasIndex = i4205[6]
  i4204.m_ClassDefinitionType = i4205[7]
  return i4204
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4206 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4207 = data
  var i4209 = i4207[0]
  var i4208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.add(request.d('TMPro.TMP_Style', i4209[i + 0]));
  }
  i4206.m_StyleList = i4208
  return i4206
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4212 = root || request.c( 'TMPro.TMP_Style' )
  var i4213 = data
  i4212.m_Name = i4213[0]
  i4212.m_HashCode = i4213[1]
  i4212.m_OpeningDefinition = i4213[2]
  i4212.m_ClosingDefinition = i4213[3]
  i4212.m_OpeningTagArray = i4213[4]
  i4212.m_ClosingTagArray = i4213[5]
  return i4212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4215 = data
  var i4217 = i4215[0]
  var i4216 = []
  for(var i = 0; i < i4217.length; i += 1) {
    i4216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4217[i + 0]) );
  }
  i4214.files = i4216
  i4214.componentToPrefabIds = i4215[1]
  return i4214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4221 = data
  i4220.path = i4221[0]
  request.r(i4221[1], i4221[2], 0, i4220, 'unityObject')
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4223 = data
  var i4225 = i4223[0]
  var i4224 = []
  for(var i = 0; i < i4225.length; i += 1) {
    i4224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4225[i + 0]) );
  }
  i4222.scriptsExecutionOrder = i4224
  var i4227 = i4223[1]
  var i4226 = []
  for(var i = 0; i < i4227.length; i += 1) {
    i4226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4227[i + 0]) );
  }
  i4222.sortingLayers = i4226
  var i4229 = i4223[2]
  var i4228 = []
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4229[i + 0]) );
  }
  i4222.cullingLayers = i4228
  i4222.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4223[3], i4222.timeSettings)
  i4222.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4223[4], i4222.physicsSettings)
  i4222.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4223[5], i4222.physics2DSettings)
  i4222.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4223[6], i4222.qualitySettings)
  i4222.enableRealtimeShadows = !!i4223[7]
  i4222.enableAutoInstancing = !!i4223[8]
  i4222.enableStaticBatching = !!i4223[9]
  i4222.enableDynamicBatching = !!i4223[10]
  i4222.lightmapEncodingQuality = i4223[11]
  i4222.desiredColorSpace = i4223[12]
  var i4231 = i4223[13]
  var i4230 = []
  for(var i = 0; i < i4231.length; i += 1) {
    i4230.push( i4231[i + 0] );
  }
  i4222.allTags = i4230
  return i4222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4235 = data
  i4234.name = i4235[0]
  i4234.value = i4235[1]
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4239 = data
  i4238.id = i4239[0]
  i4238.name = i4239[1]
  i4238.value = i4239[2]
  return i4238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4243 = data
  i4242.id = i4243[0]
  i4242.name = i4243[1]
  return i4242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4245 = data
  i4244.fixedDeltaTime = i4245[0]
  i4244.maximumDeltaTime = i4245[1]
  i4244.timeScale = i4245[2]
  i4244.maximumParticleTimestep = i4245[3]
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4247 = data
  i4246.gravity = new pc.Vec3( i4247[0], i4247[1], i4247[2] )
  i4246.defaultSolverIterations = i4247[3]
  i4246.bounceThreshold = i4247[4]
  i4246.autoSyncTransforms = !!i4247[5]
  i4246.autoSimulation = !!i4247[6]
  var i4249 = i4247[7]
  var i4248 = []
  for(var i = 0; i < i4249.length; i += 1) {
    i4248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4249[i + 0]) );
  }
  i4246.collisionMatrix = i4248
  return i4246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4253 = data
  i4252.enabled = !!i4253[0]
  i4252.layerId = i4253[1]
  i4252.otherLayerId = i4253[2]
  return i4252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4255 = data
  request.r(i4255[0], i4255[1], 0, i4254, 'material')
  i4254.gravity = new pc.Vec2( i4255[2], i4255[3] )
  i4254.positionIterations = i4255[4]
  i4254.velocityIterations = i4255[5]
  i4254.velocityThreshold = i4255[6]
  i4254.maxLinearCorrection = i4255[7]
  i4254.maxAngularCorrection = i4255[8]
  i4254.maxTranslationSpeed = i4255[9]
  i4254.maxRotationSpeed = i4255[10]
  i4254.baumgarteScale = i4255[11]
  i4254.baumgarteTOIScale = i4255[12]
  i4254.timeToSleep = i4255[13]
  i4254.linearSleepTolerance = i4255[14]
  i4254.angularSleepTolerance = i4255[15]
  i4254.defaultContactOffset = i4255[16]
  i4254.autoSimulation = !!i4255[17]
  i4254.queriesHitTriggers = !!i4255[18]
  i4254.queriesStartInColliders = !!i4255[19]
  i4254.callbacksOnDisable = !!i4255[20]
  i4254.reuseCollisionCallbacks = !!i4255[21]
  i4254.autoSyncTransforms = !!i4255[22]
  var i4257 = i4255[23]
  var i4256 = []
  for(var i = 0; i < i4257.length; i += 1) {
    i4256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4257[i + 0]) );
  }
  i4254.collisionMatrix = i4256
  return i4254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4261 = data
  i4260.enabled = !!i4261[0]
  i4260.layerId = i4261[1]
  i4260.otherLayerId = i4261[2]
  return i4260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4263 = data
  var i4265 = i4263[0]
  var i4264 = []
  for(var i = 0; i < i4265.length; i += 1) {
    i4264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4265[i + 0]) );
  }
  i4262.qualityLevels = i4264
  var i4267 = i4263[1]
  var i4266 = []
  for(var i = 0; i < i4267.length; i += 1) {
    i4266.push( i4267[i + 0] );
  }
  i4262.names = i4266
  i4262.shadows = i4263[2]
  i4262.anisotropicFiltering = i4263[3]
  i4262.antiAliasing = i4263[4]
  i4262.lodBias = i4263[5]
  i4262.shadowCascades = i4263[6]
  i4262.shadowDistance = i4263[7]
  i4262.shadowmaskMode = i4263[8]
  i4262.shadowProjection = i4263[9]
  i4262.shadowResolution = i4263[10]
  i4262.softParticles = !!i4263[11]
  i4262.softVegetation = !!i4263[12]
  i4262.activeColorSpace = i4263[13]
  i4262.desiredColorSpace = i4263[14]
  i4262.masterTextureLimit = i4263[15]
  i4262.maxQueuedFrames = i4263[16]
  i4262.particleRaycastBudget = i4263[17]
  i4262.pixelLightCount = i4263[18]
  i4262.realtimeReflectionProbes = !!i4263[19]
  i4262.shadowCascade2Split = i4263[20]
  i4262.shadowCascade4Split = new pc.Vec3( i4263[21], i4263[22], i4263[23] )
  i4262.streamingMipmapsActive = !!i4263[24]
  i4262.vSyncCount = i4263[25]
  i4262.asyncUploadBufferSize = i4263[26]
  i4262.asyncUploadTimeSlice = i4263[27]
  i4262.billboardsFaceCameraPosition = !!i4263[28]
  i4262.shadowNearPlaneOffset = i4263[29]
  i4262.streamingMipmapsMemoryBudget = i4263[30]
  i4262.maximumLODLevel = i4263[31]
  i4262.streamingMipmapsAddAllCameras = !!i4263[32]
  i4262.streamingMipmapsMaxLevelReduction = i4263[33]
  i4262.streamingMipmapsRenderersPerFrame = i4263[34]
  i4262.resolutionScalingFixedDPIFactor = i4263[35]
  i4262.streamingMipmapsMaxFileIORequests = i4263[36]
  i4262.currentQualityLevel = i4263[37]
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4273 = data
  i4272.weight = i4273[0]
  i4272.vertices = i4273[1]
  i4272.normals = i4273[2]
  i4272.tangents = i4273[3]
  return i4272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4277 = data
  i4276.mode = i4277[0]
  i4276.parameter = i4277[1]
  i4276.threshold = i4277[2]
  return i4276
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4278 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i4279 = data
  i4278.m_GlyphIndex = i4279[0]
  i4278.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i4279[1], i4278.m_GlyphValueRecord)
  return i4278
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i4280 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i4281 = data
  i4280.m_XCoordinate = i4281[0]
  i4280.m_YCoordinate = i4281[1]
  return i4280
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i4282 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i4283 = data
  i4282.m_XPositionAdjustment = i4283[0]
  i4282.m_YPositionAdjustment = i4283[1]
  return i4282
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4284 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4285 = data
  i4284.xPlacement = i4285[0]
  i4284.yPlacement = i4285[1]
  i4284.xAdvance = i4285[2]
  i4284.yAdvance = i4285[3]
  return i4284
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i4286 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i4287 = data
  i4286.m_XPlacement = i4287[0]
  i4286.m_YPlacement = i4287[1]
  i4286.m_XAdvance = i4287[2]
  i4286.m_YAdvance = i4287[3]
  return i4286
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

Deserializers.buildID = "81319a7b-cabe-4919-9774-26cab55cab77";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

