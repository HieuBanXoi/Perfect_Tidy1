var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointSpring' )
  var i675 = data
  i674.spring = i675[0]
  i674.damper = i675[1]
  i674.targetPosition = i675[2]
  return i674
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointMotor' )
  var i677 = data
  i676.m_TargetVelocity = i677[0]
  i676.m_Force = i677[1]
  i676.m_FreeSpin = i677[2]
  return i676
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointLimits' )
  var i679 = data
  i678.m_Min = i679[0]
  i678.m_Max = i679[1]
  i678.m_Bounciness = i679[2]
  i678.m_BounceMinVelocity = i679[3]
  i678.m_ContactDistance = i679[4]
  i678.minBounce = i679[5]
  i678.maxBounce = i679[6]
  return i678
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointDrive' )
  var i681 = data
  i680.m_PositionSpring = i681[0]
  i680.m_PositionDamper = i681[1]
  i680.m_MaximumForce = i681[2]
  i680.m_UseAcceleration = i681[3]
  return i680
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i683 = data
  i682.m_Spring = i683[0]
  i682.m_Damper = i683[1]
  return i682
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i685 = data
  i684.m_Limit = i685[0]
  i684.m_Bounciness = i685[1]
  i684.m_ContactDistance = i685[2]
  return i684
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i687 = data
  i686.m_ExtremumSlip = i687[0]
  i686.m_ExtremumValue = i687[1]
  i686.m_AsymptoteSlip = i687[2]
  i686.m_AsymptoteValue = i687[3]
  i686.m_Stiffness = i687[4]
  return i686
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i689 = data
  i688.m_LowerAngle = i689[0]
  i688.m_UpperAngle = i689[1]
  return i688
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i691 = data
  i690.m_MotorSpeed = i691[0]
  i690.m_MaximumMotorTorque = i691[1]
  return i690
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i693 = data
  i692.m_DampingRatio = i693[0]
  i692.m_Frequency = i693[1]
  i692.m_Angle = i693[2]
  return i692
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i695 = data
  i694.m_LowerTranslation = i695[0]
  i694.m_UpperTranslation = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i696 = root || new pc.UnityMaterial()
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'shader')
  i696.renderQueue = i697[3]
  i696.enableInstancing = !!i697[4]
  var i699 = i697[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i699[i + 0]) );
  }
  i696.floatParameters = i698
  var i701 = i697[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i701[i + 0]) );
  }
  i696.colorParameters = i700
  var i703 = i697[7]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i703[i + 0]) );
  }
  i696.vectorParameters = i702
  var i705 = i697[8]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i705[i + 0]) );
  }
  i696.textureParameters = i704
  var i707 = i697[9]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i707[i + 0]) );
  }
  i696.materialFlags = i706
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i711 = data
  i710.name = i711[0]
  i710.value = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i715 = data
  i714.name = i715[0]
  i714.value = new pc.Color(i715[1], i715[2], i715[3], i715[4])
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i719 = data
  i718.name = i719[0]
  i718.value = new pc.Vec4( i719[1], i719[2], i719[3], i719[4] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'value')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i727 = data
  i726.name = i727[0]
  i726.enabled = !!i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i729 = data
  i728.name = i729[0]
  i728.width = i729[1]
  i728.height = i729[2]
  i728.mipmapCount = i729[3]
  i728.anisoLevel = i729[4]
  i728.filterMode = i729[5]
  i728.hdr = !!i729[6]
  i728.format = i729[7]
  i728.wrapMode = i729[8]
  i728.alphaIsTransparency = !!i729[9]
  i728.alphaSource = i729[10]
  i728.graphicsFormat = i729[11]
  i728.sRGBTexture = !!i729[12]
  i728.desiredColorSpace = i729[13]
  i728.wrapU = i729[14]
  i728.wrapV = i729[15]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i731 = data
  i730.position = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.scale = new pc.Vec3( i731[3], i731[4], i731[5] )
  i730.rotation = new pc.Quat(i731[6], i731[7], i731[8], i731[9])
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i733 = data
  i732.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i733[0], i732.main)
  i732.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i733[1], i732.colorBySpeed)
  i732.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i733[2], i732.colorOverLifetime)
  i732.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i733[3], i732.emission)
  i732.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i733[4], i732.rotationBySpeed)
  i732.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i733[5], i732.rotationOverLifetime)
  i732.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i733[6], i732.shape)
  i732.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i733[7], i732.sizeBySpeed)
  i732.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i733[8], i732.sizeOverLifetime)
  i732.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i733[9], i732.textureSheetAnimation)
  i732.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i733[10], i732.velocityOverLifetime)
  i732.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i733[11], i732.noise)
  i732.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i733[12], i732.inheritVelocity)
  i732.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i733[13], i732.forceOverLifetime)
  i732.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i733[14], i732.limitVelocityOverLifetime)
  i732.useAutoRandomSeed = !!i733[15]
  i732.randomSeed = i733[16]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemMain()
  var i735 = data
  i734.duration = i735[0]
  i734.loop = !!i735[1]
  i734.prewarm = !!i735[2]
  i734.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.startDelay)
  i734.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[4], i734.startLifetime)
  i734.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[5], i734.startSpeed)
  i734.startSize3D = !!i735[6]
  i734.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[7], i734.startSizeX)
  i734.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[8], i734.startSizeY)
  i734.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[9], i734.startSizeZ)
  i734.startRotation3D = !!i735[10]
  i734.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[11], i734.startRotationX)
  i734.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[12], i734.startRotationY)
  i734.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[13], i734.startRotationZ)
  i734.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i735[14], i734.startColor)
  i734.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[15], i734.gravityModifier)
  i734.simulationSpace = i735[16]
  request.r(i735[17], i735[18], 0, i734, 'customSimulationSpace')
  i734.simulationSpeed = i735[19]
  i734.useUnscaledTime = !!i735[20]
  i734.scalingMode = i735[21]
  i734.playOnAwake = !!i735[22]
  i734.maxParticles = i735[23]
  i734.emitterVelocityMode = i735[24]
  i734.stopAction = i735[25]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i736 = root || new pc.MinMaxCurve()
  var i737 = data
  i736.mode = i737[0]
  i736.curveMin = new pc.AnimationCurve( { keys_flow: i737[1] } )
  i736.curveMax = new pc.AnimationCurve( { keys_flow: i737[2] } )
  i736.curveMultiplier = i737[3]
  i736.constantMin = i737[4]
  i736.constantMax = i737[5]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i738 = root || new pc.MinMaxGradient()
  var i739 = data
  i738.mode = i739[0]
  i738.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i739[1], i738.gradientMin)
  i738.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i739[2], i738.gradientMax)
  i738.colorMin = new pc.Color(i739[3], i739[4], i739[5], i739[6])
  i738.colorMax = new pc.Color(i739[7], i739[8], i739[9], i739[10])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i741 = data
  i740.mode = i741[0]
  var i743 = i741[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i743[i + 0]) );
  }
  i740.colorKeys = i742
  var i745 = i741[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i745[i + 0]) );
  }
  i740.alphaKeys = i744
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemColorBySpeed()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i747[1], i746.color)
  i746.range = new pc.Vec2( i747[2], i747[3] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i751 = data
  i750.color = new pc.Color(i751[0], i751[1], i751[2], i751[3])
  i750.time = i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i755 = data
  i754.alpha = i755[0]
  i754.time = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemColorOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[1], i756.color)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemEmitter()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.rateOverTime)
  i758.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.rateOverDistance)
  var i761 = i759[3]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i761[i + 0]) );
  }
  i758.bursts = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemBurst()
  var i765 = data
  i764.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[0], i764.count)
  i764.cycleCount = i765[1]
  i764.minCount = i765[2]
  i764.maxCount = i765[3]
  i764.repeatInterval = i765[4]
  i764.time = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemRotationBySpeed()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.separateAxes = !!i767[4]
  i766.range = new pc.Vec2( i767[5], i767[6] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemRotationOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.separateAxes = !!i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemShape()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.shapeType = i771[1]
  i770.randomDirectionAmount = i771[2]
  i770.sphericalDirectionAmount = i771[3]
  i770.randomPositionAmount = i771[4]
  i770.alignToDirection = !!i771[5]
  i770.radius = i771[6]
  i770.radiusMode = i771[7]
  i770.radiusSpread = i771[8]
  i770.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[9], i770.radiusSpeed)
  i770.radiusThickness = i771[10]
  i770.angle = i771[11]
  i770.length = i771[12]
  i770.boxThickness = new pc.Vec3( i771[13], i771[14], i771[15] )
  i770.meshShapeType = i771[16]
  request.r(i771[17], i771[18], 0, i770, 'mesh')
  request.r(i771[19], i771[20], 0, i770, 'meshRenderer')
  request.r(i771[21], i771[22], 0, i770, 'skinnedMeshRenderer')
  i770.useMeshMaterialIndex = !!i771[23]
  i770.meshMaterialIndex = i771[24]
  i770.useMeshColors = !!i771[25]
  i770.normalOffset = i771[26]
  i770.arc = i771[27]
  i770.arcMode = i771[28]
  i770.arcSpread = i771[29]
  i770.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[30], i770.arcSpeed)
  i770.donutRadius = i771[31]
  i770.position = new pc.Vec3( i771[32], i771[33], i771[34] )
  i770.rotation = new pc.Vec3( i771[35], i771[36], i771[37] )
  i770.scale = new pc.Vec3( i771[38], i771[39], i771[40] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemSizeBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  i772.range = new pc.Vec2( i773[5], i773[6] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemSizeOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.separateAxes = !!i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.mode = i777[1]
  i776.animation = i777[2]
  i776.numTilesX = i777[3]
  i776.numTilesY = i777[4]
  i776.useRandomRow = !!i777[5]
  i776.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[6], i776.frameOverTime)
  i776.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[7], i776.startFrame)
  i776.cycleCount = i777[8]
  i776.rowIndex = i777[9]
  i776.flipU = i777[10]
  i776.flipV = i777[11]
  i776.spriteCount = i777[12]
  var i779 = i777[13]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.sprites = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[4], i782.radial)
  i782.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[5], i782.speedModifier)
  i782.space = i783[6]
  i782.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[7], i782.orbitalX)
  i782.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[8], i782.orbitalY)
  i782.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[9], i782.orbitalZ)
  i782.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[10], i782.orbitalOffsetX)
  i782.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[11], i782.orbitalOffsetY)
  i782.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[12], i782.orbitalOffsetZ)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemNoise()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.separateAxes = !!i785[1]
  i784.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.strengthX)
  i784.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.strengthY)
  i784.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[4], i784.strengthZ)
  i784.frequency = i785[5]
  i784.damping = !!i785[6]
  i784.octaveCount = i785[7]
  i784.octaveMultiplier = i785[8]
  i784.octaveScale = i785[9]
  i784.quality = i785[10]
  i784.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[11], i784.scrollSpeed)
  i784.scrollSpeedMultiplier = i785[12]
  i784.remapEnabled = !!i785[13]
  i784.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[14], i784.remapX)
  i784.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[15], i784.remapY)
  i784.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[16], i784.remapZ)
  i784.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[17], i784.positionAmount)
  i784.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[18], i784.rotationAmount)
  i784.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[19], i784.sizeAmount)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemInheritVelocity()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.mode = i787[1]
  i786.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.curve)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemForceOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.space = i789[4]
  i788.randomized = !!i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.limit)
  i790.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.limitX)
  i790.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.limitY)
  i790.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.limitZ)
  i790.dampen = i791[5]
  i790.separateAxes = !!i791[6]
  i790.space = i791[7]
  i790.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[8], i790.drag)
  i790.multiplyDragByParticleSize = !!i791[9]
  i790.multiplyDragByParticleVelocity = !!i791[10]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'mesh')
  i792.meshCount = i793[2]
  i792.activeVertexStreamsCount = i793[3]
  i792.alignment = i793[4]
  i792.renderMode = i793[5]
  i792.sortMode = i793[6]
  i792.lengthScale = i793[7]
  i792.velocityScale = i793[8]
  i792.cameraVelocityScale = i793[9]
  i792.normalDirection = i793[10]
  i792.sortingFudge = i793[11]
  i792.minParticleSize = i793[12]
  i792.maxParticleSize = i793[13]
  i792.pivot = new pc.Vec3( i793[14], i793[15], i793[16] )
  request.r(i793[17], i793[18], 0, i792, 'trailMaterial')
  i792.applyActiveColorSpace = !!i793[19]
  i792.enabled = !!i793[20]
  request.r(i793[21], i793[22], 0, i792, 'sharedMaterial')
  var i795 = i793[23]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.sharedMaterials = i794
  i792.receiveShadows = !!i793[24]
  i792.shadowCastingMode = i793[25]
  i792.sortingLayerID = i793[26]
  i792.sortingOrder = i793[27]
  i792.lightmapIndex = i793[28]
  i792.lightmapSceneIndex = i793[29]
  i792.lightmapScaleOffset = new pc.Vec4( i793[30], i793[31], i793[32], i793[33] )
  i792.lightProbeUsage = i793[34]
  i792.reflectionProbeUsage = i793[35]
  return i792
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i798 = root || request.c( 'MergeEffect' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'tf')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i801 = data
  i800.name = i801[0]
  i800.tagId = i801[1]
  i800.enabled = !!i801[2]
  i800.isStatic = !!i801[3]
  i800.layer = i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i803 = data
  i802.name = i803[0]
  i802.halfPrecision = !!i803[1]
  i802.useSimplification = !!i803[2]
  i802.useUInt32IndexFormat = !!i803[3]
  i802.vertexCount = i803[4]
  i802.aabb = i803[5]
  var i805 = i803[6]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( !!i805[i + 0] );
  }
  i802.streams = i804
  i802.vertices = i803[7]
  var i807 = i803[8]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i807[i + 0]) );
  }
  i802.subMeshes = i806
  var i809 = i803[9]
  var i808 = []
  for(var i = 0; i < i809.length; i += 16) {
    i808.push( new pc.Mat4().setData(i809[i + 0], i809[i + 1], i809[i + 2], i809[i + 3],  i809[i + 4], i809[i + 5], i809[i + 6], i809[i + 7],  i809[i + 8], i809[i + 9], i809[i + 10], i809[i + 11],  i809[i + 12], i809[i + 13], i809[i + 14], i809[i + 15]) );
  }
  i802.bindposes = i808
  var i811 = i803[10]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i811[i + 0]) );
  }
  i802.blendShapes = i810
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i817 = data
  i816.triangles = i817[0]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i823 = data
  i822.name = i823[0]
  var i825 = i823[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i825[i + 0]) );
  }
  i822.frames = i824
  return i822
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i826 = root || request.c( 'BlinkEffect' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'tf')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i829 = data
  i828.name = i829[0]
  i828.index = i829[1]
  i828.startup = !!i829[2]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i831 = data
  i830.pivot = new pc.Vec2( i831[0], i831[1] )
  i830.anchorMin = new pc.Vec2( i831[2], i831[3] )
  i830.anchorMax = new pc.Vec2( i831[4], i831[5] )
  i830.sizeDelta = new pc.Vec2( i831[6], i831[7] )
  i830.anchoredPosition3D = new pc.Vec3( i831[8], i831[9], i831[10] )
  i830.rotation = new pc.Quat(i831[11], i831[12], i831[13], i831[14])
  i830.scale = new pc.Vec3( i831[15], i831[16], i831[17] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i833 = data
  i832.planeDistance = i833[0]
  i832.referencePixelsPerUnit = i833[1]
  i832.isFallbackOverlay = !!i833[2]
  i832.renderMode = i833[3]
  i832.renderOrder = i833[4]
  i832.sortingLayerName = i833[5]
  i832.sortingOrder = i833[6]
  i832.scaleFactor = i833[7]
  request.r(i833[8], i833[9], 0, i832, 'worldCamera')
  i832.overrideSorting = !!i833[10]
  i832.pixelPerfect = !!i833[11]
  i832.targetDisplay = i833[12]
  i832.overridePixelPerfect = !!i833[13]
  i832.enabled = !!i833[14]
  return i832
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i835 = data
  i834.m_UiScaleMode = i835[0]
  i834.m_ReferencePixelsPerUnit = i835[1]
  i834.m_ScaleFactor = i835[2]
  i834.m_ReferenceResolution = new pc.Vec2( i835[3], i835[4] )
  i834.m_ScreenMatchMode = i835[5]
  i834.m_MatchWidthOrHeight = i835[6]
  i834.m_PhysicalUnit = i835[7]
  i834.m_FallbackScreenDPI = i835[8]
  i834.m_DefaultSpriteDPI = i835[9]
  i834.m_DynamicPixelsPerUnit = i835[10]
  i834.m_PresetInfoIsWorld = !!i835[11]
  return i834
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i837 = data
  i836.m_IgnoreReversedGraphics = !!i837[0]
  i836.m_BlockingObjects = i837[1]
  i836.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i837[2] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'animatorController')
  request.r(i839[2], i839[3], 0, i838, 'avatar')
  i838.updateMode = i839[4]
  i838.hasTransformHierarchy = !!i839[5]
  i838.applyRootMotion = !!i839[6]
  var i841 = i839[7]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.humanBones = i840
  i838.enabled = !!i839[8]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i845 = data
  i844.cullTransparentMesh = !!i845[0]
  return i844
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i847 = data
  i846.m_hasFontAssetChanged = !!i847[0]
  request.r(i847[1], i847[2], 0, i846, 'm_baseMaterial')
  i846.m_maskOffset = new pc.Vec4( i847[3], i847[4], i847[5], i847[6] )
  i846.m_text = i847[7]
  i846.m_isRightToLeft = !!i847[8]
  request.r(i847[9], i847[10], 0, i846, 'm_fontAsset')
  request.r(i847[11], i847[12], 0, i846, 'm_sharedMaterial')
  var i849 = i847[13]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.m_fontSharedMaterials = i848
  request.r(i847[14], i847[15], 0, i846, 'm_fontMaterial')
  var i851 = i847[16]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i846.m_fontMaterials = i850
  i846.m_fontColor32 = UnityEngine.Color32.ConstructColor(i847[17], i847[18], i847[19], i847[20])
  i846.m_fontColor = new pc.Color(i847[21], i847[22], i847[23], i847[24])
  i846.m_enableVertexGradient = !!i847[25]
  i846.m_colorMode = i847[26]
  i846.m_fontColorGradient = request.d('TMPro.VertexGradient', i847[27], i846.m_fontColorGradient)
  request.r(i847[28], i847[29], 0, i846, 'm_fontColorGradientPreset')
  request.r(i847[30], i847[31], 0, i846, 'm_spriteAsset')
  i846.m_tintAllSprites = !!i847[32]
  request.r(i847[33], i847[34], 0, i846, 'm_StyleSheet')
  i846.m_TextStyleHashCode = i847[35]
  i846.m_overrideHtmlColors = !!i847[36]
  i846.m_faceColor = UnityEngine.Color32.ConstructColor(i847[37], i847[38], i847[39], i847[40])
  i846.m_fontSize = i847[41]
  i846.m_fontSizeBase = i847[42]
  i846.m_fontWeight = i847[43]
  i846.m_enableAutoSizing = !!i847[44]
  i846.m_fontSizeMin = i847[45]
  i846.m_fontSizeMax = i847[46]
  i846.m_fontStyle = i847[47]
  i846.m_HorizontalAlignment = i847[48]
  i846.m_VerticalAlignment = i847[49]
  i846.m_textAlignment = i847[50]
  i846.m_characterSpacing = i847[51]
  i846.m_wordSpacing = i847[52]
  i846.m_lineSpacing = i847[53]
  i846.m_lineSpacingMax = i847[54]
  i846.m_paragraphSpacing = i847[55]
  i846.m_charWidthMaxAdj = i847[56]
  i846.m_TextWrappingMode = i847[57]
  i846.m_wordWrappingRatios = i847[58]
  i846.m_overflowMode = i847[59]
  request.r(i847[60], i847[61], 0, i846, 'm_linkedTextComponent')
  request.r(i847[62], i847[63], 0, i846, 'parentLinkedComponent')
  i846.m_enableKerning = !!i847[64]
  var i853 = i847[65]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(i853[i + 0]);
  }
  i846.m_ActiveFontFeatures = i852
  i846.m_enableExtraPadding = !!i847[66]
  i846.checkPaddingRequired = !!i847[67]
  i846.m_isRichText = !!i847[68]
  i846.m_parseCtrlCharacters = !!i847[69]
  i846.m_isOrthographic = !!i847[70]
  i846.m_isCullingEnabled = !!i847[71]
  i846.m_horizontalMapping = i847[72]
  i846.m_verticalMapping = i847[73]
  i846.m_uvLineOffset = i847[74]
  i846.m_geometrySortingOrder = i847[75]
  i846.m_IsTextObjectScaleStatic = !!i847[76]
  i846.m_VertexBufferAutoSizeReduction = !!i847[77]
  i846.m_useMaxVisibleDescender = !!i847[78]
  i846.m_pageToDisplay = i847[79]
  i846.m_margin = new pc.Vec4( i847[80], i847[81], i847[82], i847[83] )
  i846.m_isUsingLegacyAnimationComponent = !!i847[84]
  i846.m_isVolumetricText = !!i847[85]
  request.r(i847[86], i847[87], 0, i846, 'm_Material')
  i846.m_EmojiFallbackSupport = !!i847[88]
  i846.m_Maskable = !!i847[89]
  i846.m_Color = new pc.Color(i847[90], i847[91], i847[92], i847[93])
  i846.m_RaycastTarget = !!i847[94]
  i846.m_RaycastPadding = new pc.Vec4( i847[95], i847[96], i847[97], i847[98] )
  return i846
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.VertexGradient' )
  var i855 = data
  i854.topLeft = new pc.Color(i855[0], i855[1], i855[2], i855[3])
  i854.topRight = new pc.Color(i855[4], i855[5], i855[6], i855[7])
  i854.bottomLeft = new pc.Color(i855[8], i855[9], i855[10], i855[11])
  i854.bottomRight = new pc.Color(i855[12], i855[13], i855[14], i855[15])
  return i854
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.Slider' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'm_FillRect')
  request.r(i859[2], i859[3], 0, i858, 'm_HandleRect')
  i858.m_Direction = i859[4]
  i858.m_MinValue = i859[5]
  i858.m_MaxValue = i859[6]
  i858.m_WholeNumbers = !!i859[7]
  i858.m_Value = i859[8]
  i858.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i859[9], i858.m_OnValueChanged)
  i858.m_Navigation = request.d('UnityEngine.UI.Navigation', i859[10], i858.m_Navigation)
  i858.m_Transition = i859[11]
  i858.m_Colors = request.d('UnityEngine.UI.ColorBlock', i859[12], i858.m_Colors)
  i858.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i859[13], i858.m_SpriteState)
  i858.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i859[14], i858.m_AnimationTriggers)
  i858.m_Interactable = !!i859[15]
  request.r(i859[16], i859[17], 0, i858, 'm_TargetGraphic')
  return i858
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i861 = data
  i860.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i861[0], i860.m_PersistentCalls)
  return i860
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i863 = data
  var i865 = i863[0]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('UnityEngine.Events.PersistentCall', i865[i + 0]));
  }
  i862.m_Calls = i864
  return i862
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'm_Target')
  i868.m_TargetAssemblyTypeName = i869[2]
  i868.m_MethodName = i869[3]
  i868.m_Mode = i869[4]
  i868.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i869[5], i868.m_Arguments)
  i868.m_CallState = i869[6]
  return i868
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i871 = data
  i870.m_Mode = i871[0]
  i870.m_WrapAround = !!i871[1]
  request.r(i871[2], i871[3], 0, i870, 'm_SelectOnUp')
  request.r(i871[4], i871[5], 0, i870, 'm_SelectOnDown')
  request.r(i871[6], i871[7], 0, i870, 'm_SelectOnLeft')
  request.r(i871[8], i871[9], 0, i870, 'm_SelectOnRight')
  return i870
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i873 = data
  i872.m_NormalColor = new pc.Color(i873[0], i873[1], i873[2], i873[3])
  i872.m_HighlightedColor = new pc.Color(i873[4], i873[5], i873[6], i873[7])
  i872.m_PressedColor = new pc.Color(i873[8], i873[9], i873[10], i873[11])
  i872.m_SelectedColor = new pc.Color(i873[12], i873[13], i873[14], i873[15])
  i872.m_DisabledColor = new pc.Color(i873[16], i873[17], i873[18], i873[19])
  i872.m_ColorMultiplier = i873[20]
  i872.m_FadeDuration = i873[21]
  return i872
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'm_HighlightedSprite')
  request.r(i875[2], i875[3], 0, i874, 'm_PressedSprite')
  request.r(i875[4], i875[5], 0, i874, 'm_SelectedSprite')
  request.r(i875[6], i875[7], 0, i874, 'm_DisabledSprite')
  return i874
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i877 = data
  i876.m_NormalTrigger = i877[0]
  i876.m_HighlightedTrigger = i877[1]
  i876.m_PressedTrigger = i877[2]
  i876.m_SelectedTrigger = i877[3]
  i876.m_DisabledTrigger = i877[4]
  return i876
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.Image' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_Sprite')
  i878.m_Type = i879[2]
  i878.m_PreserveAspect = !!i879[3]
  i878.m_FillCenter = !!i879[4]
  i878.m_FillMethod = i879[5]
  i878.m_FillAmount = i879[6]
  i878.m_FillClockwise = !!i879[7]
  i878.m_FillOrigin = i879[8]
  i878.m_UseSpriteMesh = !!i879[9]
  i878.m_PixelsPerUnitMultiplier = i879[10]
  request.r(i879[11], i879[12], 0, i878, 'm_Material')
  i878.m_Maskable = !!i879[13]
  i878.m_Color = new pc.Color(i879[14], i879[15], i879[16], i879[17])
  i878.m_RaycastTarget = !!i879[18]
  i878.m_RaycastPadding = new pc.Vec4( i879[19], i879[20], i879[21], i879[22] )
  return i878
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.Button' )
  var i881 = data
  i880.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i881[0], i880.m_OnClick)
  i880.m_Navigation = request.d('UnityEngine.UI.Navigation', i881[1], i880.m_Navigation)
  i880.m_Transition = i881[2]
  i880.m_Colors = request.d('UnityEngine.UI.ColorBlock', i881[3], i880.m_Colors)
  i880.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i881[4], i880.m_SpriteState)
  i880.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i881[5], i880.m_AnimationTriggers)
  i880.m_Interactable = !!i881[6]
  request.r(i881[7], i881[8], 0, i880, 'm_TargetGraphic')
  return i880
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i883 = data
  i882.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i883[0], i882.m_PersistentCalls)
  return i882
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_ObjectArgument')
  i884.m_ObjectArgumentAssemblyTypeName = i885[2]
  i884.m_IntArgument = i885[3]
  i884.m_FloatArgument = i885[4]
  i884.m_StringArgument = i885[5]
  i884.m_BoolArgument = !!i885[6]
  return i884
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i886 = root || request.c( 'Ply_Pool' )
  var i887 = data
  var i889 = i887[0]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Ply_Pool+PoolAmount', i889[i + 0]) );
  }
  i886.poolAmounts = i888
  request.r(i887[1], i887[2], 0, i886, 'poolHolder')
  return i886
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i892 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i893 = data
  i892.type = i893[0]
  i892.amount = i893[1]
  request.r(i893[2], i893[3], 0, i892, 'gameUnit')
  return i892
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i894 = root || request.c( 'Ply_SoundManager' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Ply_SoundManager+FxAudio', i897[i + 0]) );
  }
  i894.fxAudios = i896
  var i899 = i895[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i894.audioClips = i898
  request.r(i895[2], i895[3], 0, i894, 'sound')
  return i894
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i902 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i903 = data
  i902.fxType = i903[0]
  request.r(i903[1], i903[2], 0, i902, 'audioClip')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'clip')
  request.r(i907[2], i907[3], 0, i906, 'outputAudioMixerGroup')
  i906.playOnAwake = !!i907[4]
  i906.loop = !!i907[5]
  i906.time = i907[6]
  i906.volume = i907[7]
  i906.pitch = i907[8]
  i906.enabled = !!i907[9]
  return i906
}

Deserializers["GameManager"] = function (request, data, root) {
  var i908 = root || request.c( 'GameManager' )
  var i909 = data
  i908.isPlaying = !!i909[0]
  i908.isTutorial = !!i909[1]
  i908.isGotoStore = !!i909[2]
  i908.isDraggingConveyor = !!i909[3]
  i908.countMove = i909[4]
  i908.maxMove = i909[5]
  i908.startLayer = i909[6]
  i908.currentLayer = i909[7]
  request.r(i909[8], i909[9], 0, i908, 'mainBox')
  request.r(i909[10], i909[11], 0, i908, 'itemConveyor')
  i908.useTimer = !!i909[12]
  i908.gameDuration = i909[13]
  request.r(i909[14], i909[15], 0, i908, 'handTutorial')
  i908.tutorialDelay = i909[16]
  i908.maxTutorialPlacements = i909[17]
  return i908
}

Deserializers["UIManager"] = function (request, data, root) {
  var i910 = root || request.c( 'UIManager' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'winUI')
  request.r(i911[2], i911[3], 0, i910, 'loseUI')
  request.r(i911[4], i911[5], 0, i910, 'tutorial')
  request.r(i911[6], i911[7], 0, i910, 'verticalUI')
  request.r(i911[8], i911[9], 0, i910, 'horizontalUI')
  request.r(i911[10], i911[11], 0, i910, 'downloadBtnVertical')
  request.r(i911[12], i911[13], 0, i910, 'dowloadBtnHorizontal')
  request.r(i911[14], i911[15], 0, i910, 'textAnim')
  i910.isGoogleBuild = !!i911[16]
  request.r(i911[17], i911[18], 0, i910, 'progressSlider')
  request.r(i911[19], i911[20], 0, i910, 'progressText')
  i910.maxProgressItems = i911[21]
  i910.startProgressItems = i911[22]
  i910.screenWidth = i911[23]
  i910.screenHeight = i911[24]
  i910.scaleHeightOnWidth = i911[25]
  i910.isVertical = !!i911[26]
  i910.isScreenVertical = !!i911[27]
  request.r(i911[28], i911[29], 0, i910, 'cam')
  i910.verticalUIHeightOnWidthRatio = i911[30]
  i910.screenVerticalHeightOnWidthRatio = i911[31]
  i910.introZoomOutMultiplier = i911[32]
  i910.cameraZoomDuration = i911[33]
  i910.useContinuousScaling = !!i911[34]
  i910.baseOrthographicSize = i911[35]
  i910.baseAspect = i911[36]
  i910.landscapeSize = i911[37]
  i910.defaultPortraitSize = i911[38]
  var i913 = i911[39]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('ScreenScaleStep', i913[i + 0]));
  }
  i910.discreteScaleSteps = i912
  i910.usePerspectiveCamera = !!i911[40]
  request.r(i911[41], i911[42], 0, i910, 'perspectiveFocus')
  i910.perspectiveFocusDistance = i911[43]
  i910.perspectivePadding = i911[44]
  i910.fitRendererBounds = !!i911[45]
  request.r(i911[46], i911[47], 0, i910, 'boundsRoot')
  var i915 = i911[48]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i910.boundsRenderers = i914
  return i910
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i918 = root || request.c( 'ScreenScaleStep' )
  var i919 = data
  i918.heightOnWidthRatio = i919[0]
  i918.orthographicSize = i919[1]
  return i918
}

Deserializers["InputManager"] = function (request, data, root) {
  var i922 = root || request.c( 'InputManager' )
  var i923 = data
  i922.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i923[0] )
  i922.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i923[1] )
  i922.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i923[2] )
  i922.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i923[3] )
  i922.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i923[4] )
  i922.isDragging = !!i923[5]
  request.r(i923[6], i923[7], 0, i922, 'mainCamera')
  return i922
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i924 = root || request.c( 'ItemSetupTool' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'spritesParent')
  request.r(i925[2], i925[3], 0, i924, 'holdersParent')
  i924.shadowSuffix = i925[4]
  i924.holderPrefix = i925[5]
  i924.holdersParentName = i925[6]
  i924.colliderDepth = i925[7]
  i924.colliderSizeMultiplier = i925[8]
  i924.minColliderSize = new pc.Vec2( i925[9], i925[10] )
  i924.generatedShadowColor = new pc.Color(i925[11], i925[12], i925[13], i925[14])
  i924.fadedBlackShadowColor = new pc.Color(i925[15], i925[16], i925[17], i925[18])
  i924.generatedShadowLocalOffset = new pc.Vec3( i925[19], i925[20], i925[21] )
  i924.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i925[22] )
  i924.holderLayer = UnityEngine.LayerMask.FromIntegerValue( i925[23] )
  return i924
}

Deserializers["CameraController"] = function (request, data, root) {
  var i926 = root || request.c( 'CameraController' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'targetCamera')
  i926.enableZoom = !!i927[2]
  i926.minZoomRatio = i927[3]
  i926.maxZoomRatio = i927[4]
  i926.mouseWheelZoomSpeed = i927[5]
  i926.pinchZoomSpeed = i927[6]
  request.r(i927[7], i927[8], 0, i926, 'conveyor')
  i926.enableDrag = !!i927[9]
  i926.horizontalOnly = !!i927[10]
  i926.dragSensitivity = i927[11]
  i926.maxHorizontalOffset = i927[12]
  i926.maxVerticalOffset = i927[13]
  return i926
}

Deserializers["ItemSpawnManager"] = function (request, data, root) {
  var i928 = root || request.c( 'ItemSpawnManager' )
  var i929 = data
  i928.spawnInRandomArea = !!i929[0]
  i928.spawnTargetMode = i929[1]
  var i931 = i929[2]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 1, i930, '')
  }
  i928.dynamicItems = i930
  var i933 = i929[3]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 1, i932, '')
  }
  i928.spawnTargets = i932
  i928.initialSpawnCount = i929[4]
  i928.revealDuration = i929[5]
  i928.showInitialBatchShadowsOnSpawn = !!i929[6]
  i928.spawnAreaSize = new pc.Vec2( i929[7], i929[8] )
  i928.spawnAreaOffset = new pc.Vec3( i929[9], i929[10], i929[11] )
  request.r(i929[12], i929[13], 0, i928, 'randomSpawnParent')
  i928.showShadowOnDragCount = i929[14]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i939 = data
  i938.aspect = i939[0]
  i938.orthographic = !!i939[1]
  i938.orthographicSize = i939[2]
  i938.backgroundColor = new pc.Color(i939[3], i939[4], i939[5], i939[6])
  i938.nearClipPlane = i939[7]
  i938.farClipPlane = i939[8]
  i938.fieldOfView = i939[9]
  i938.depth = i939[10]
  i938.clearFlags = i939[11]
  i938.cullingMask = i939[12]
  i938.rect = i939[13]
  request.r(i939[14], i939[15], 0, i938, 'targetTexture')
  i938.usePhysicalProperties = !!i939[16]
  i938.focalLength = i939[17]
  i938.sensorSize = new pc.Vec2( i939[18], i939[19] )
  i938.lensShift = new pc.Vec2( i939[20], i939[21] )
  i938.gateFit = i939[22]
  i938.commandBufferCount = i939[23]
  i938.cameraType = i939[24]
  i938.enabled = !!i939[25]
  return i938
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'm_FirstSelected')
  i940.m_sendNavigationEvents = !!i941[2]
  i940.m_DragThreshold = i941[3]
  return i940
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i943 = data
  i942.m_HorizontalAxis = i943[0]
  i942.m_VerticalAxis = i943[1]
  i942.m_SubmitButton = i943[2]
  i942.m_CancelButton = i943[3]
  i942.m_InputActionsPerSecond = i943[4]
  i942.m_RepeatDelay = i943[5]
  i942.m_ForceModuleActive = !!i943[6]
  i942.m_SendPointerHoverToParent = !!i943[7]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i945 = data
  i944.color = new pc.Color(i945[0], i945[1], i945[2], i945[3])
  request.r(i945[4], i945[5], 0, i944, 'sprite')
  i944.flipX = !!i945[6]
  i944.flipY = !!i945[7]
  i944.drawMode = i945[8]
  i944.size = new pc.Vec2( i945[9], i945[10] )
  i944.tileMode = i945[11]
  i944.adaptiveModeThreshold = i945[12]
  i944.maskInteraction = i945[13]
  i944.spriteSortPoint = i945[14]
  i944.enabled = !!i945[15]
  request.r(i945[16], i945[17], 0, i944, 'sharedMaterial')
  var i947 = i945[18]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.sharedMaterials = i946
  i944.receiveShadows = !!i945[19]
  i944.shadowCastingMode = i945[20]
  i944.sortingLayerID = i945[21]
  i944.sortingOrder = i945[22]
  i944.lightmapIndex = i945[23]
  i944.lightmapSceneIndex = i945[24]
  i944.lightmapScaleOffset = new pc.Vec4( i945[25], i945[26], i945[27], i945[28] )
  i944.lightProbeUsage = i945[29]
  i944.reflectionProbeUsage = i945[30]
  return i944
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i948 = root || request.c( 'ItemHolder' )
  var i949 = data
  i948.id = i949[0]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i951 = data
  i950.center = new pc.Vec3( i951[0], i951[1], i951[2] )
  i950.size = new pc.Vec3( i951[3], i951[4], i951[5] )
  i950.enabled = !!i951[6]
  i950.isTrigger = !!i951[7]
  request.r(i951[8], i951[9], 0, i950, 'material')
  return i950
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i952 = root || request.c( 'PSD_Tool' )
  var i953 = data
  var i955 = i953[0]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i952.sprites = i954
  request.r(i953[1], i953[2], 0, i952, 'holder')
  var i957 = i953[3]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 1, i956, '')
  }
  i952.childGameObjects = i956
  return i952
}

Deserializers["Item"] = function (request, data, root) {
  var i962 = root || request.c( 'Item' )
  var i963 = data
  i962.fxTypeOnPlace = i963[0]
  i962.id = i963[1]
  i962.currentState = i963[2]
  i962.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i963[3] )
  request.r(i963[4], i963[5], 0, i962, 'defaultShadow')
  i962.returnToSlotOnMiss = !!i963[6]
  i962.hideShadowOnDrop = !!i963[7]
  i962.scaleOnSpawn = !!i963[8]
  i962.spawnScaleMultiplier = i963[9]
  var i965 = i963[10]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i962.requiredItems = i964
  request.r(i963[11], i963[12], 0, i962, 'correctHolderTransform')
  request.r(i963[13], i963[14], 0, i962, 'shadowOnHolder')
  i962.canShowShadowHint = !!i963[15]
  request.r(i963[16], i963[17], 0, i962, 'homeSlot')
  i962.waitingPosition = new pc.Vec3( i963[18], i963[19], i963[20] )
  request.r(i963[21], i963[22], 0, i962, 'spriteRenderer')
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i967 = data
  i966.ambientIntensity = i967[0]
  i966.reflectionIntensity = i967[1]
  i966.ambientMode = i967[2]
  i966.ambientLight = new pc.Color(i967[3], i967[4], i967[5], i967[6])
  i966.ambientSkyColor = new pc.Color(i967[7], i967[8], i967[9], i967[10])
  i966.ambientGroundColor = new pc.Color(i967[11], i967[12], i967[13], i967[14])
  i966.ambientEquatorColor = new pc.Color(i967[15], i967[16], i967[17], i967[18])
  i966.fogColor = new pc.Color(i967[19], i967[20], i967[21], i967[22])
  i966.fogEndDistance = i967[23]
  i966.fogStartDistance = i967[24]
  i966.fogDensity = i967[25]
  i966.fog = !!i967[26]
  request.r(i967[27], i967[28], 0, i966, 'skybox')
  i966.fogMode = i967[29]
  var i969 = i967[30]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i969[i + 0]) );
  }
  i966.lightmaps = i968
  i966.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i967[31], i966.lightProbes)
  i966.lightmapsMode = i967[32]
  i966.mixedBakeMode = i967[33]
  i966.environmentLightingMode = i967[34]
  i966.ambientProbe = new pc.SphericalHarmonicsL2(i967[35])
  i966.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i967[36])
  i966.useReferenceAmbientProbe = !!i967[37]
  request.r(i967[38], i967[39], 0, i966, 'customReflection')
  request.r(i967[40], i967[41], 0, i966, 'defaultReflection')
  i966.defaultReflectionMode = i967[42]
  i966.defaultReflectionResolution = i967[43]
  i966.sunLightObjectId = i967[44]
  i966.pixelLightCount = i967[45]
  i966.defaultReflectionHDR = !!i967[46]
  i966.hasLightDataAsset = !!i967[47]
  i966.hasManualGenerate = !!i967[48]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'lightmapColor')
  request.r(i973[2], i973[3], 0, i972, 'lightmapDirection')
  request.r(i973[4], i973[5], 0, i972, 'shadowMask')
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i974 = root || new UnityEngine.LightProbes()
  var i975 = data
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i983 = data
  var i985 = i983[0]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i985[i + 0]));
  }
  i982.ShaderCompilationErrors = i984
  i982.name = i983[1]
  i982.guid = i983[2]
  var i987 = i983[3]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i982.shaderDefinedKeywords = i986
  var i989 = i983[4]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i989[i + 0]) );
  }
  i982.passes = i988
  var i991 = i983[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i991[i + 0]) );
  }
  i982.usePasses = i990
  var i993 = i983[6]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i993[i + 0]) );
  }
  i982.defaultParameterValues = i992
  request.r(i983[7], i983[8], 0, i982, 'unityFallbackShader')
  i982.readDepth = !!i983[9]
  i982.hasDepthOnlyPass = !!i983[10]
  i982.isCreatedByShaderGraph = !!i983[11]
  i982.disableBatching = !!i983[12]
  i982.compiled = !!i983[13]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i997 = data
  i996.shaderName = i997[0]
  i996.errorMessage = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1002 = root || new pc.UnityShaderPass()
  var i1003 = data
  i1002.id = i1003[0]
  i1002.subShaderIndex = i1003[1]
  i1002.name = i1003[2]
  i1002.passType = i1003[3]
  i1002.grabPassTextureName = i1003[4]
  i1002.usePass = !!i1003[5]
  i1002.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[6], i1002.zTest)
  i1002.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[7], i1002.zWrite)
  i1002.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[8], i1002.culling)
  i1002.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1003[9], i1002.blending)
  i1002.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1003[10], i1002.alphaBlending)
  i1002.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[11], i1002.colorWriteMask)
  i1002.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[12], i1002.offsetUnits)
  i1002.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[13], i1002.offsetFactor)
  i1002.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[14], i1002.stencilRef)
  i1002.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[15], i1002.stencilReadMask)
  i1002.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[16], i1002.stencilWriteMask)
  i1002.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1003[17], i1002.stencilOp)
  i1002.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1003[18], i1002.stencilOpFront)
  i1002.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1003[19], i1002.stencilOpBack)
  var i1005 = i1003[20]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1005[i + 0]) );
  }
  i1002.tags = i1004
  var i1007 = i1003[21]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1002.passDefinedKeywords = i1006
  var i1009 = i1003[22]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1009[i + 0]) );
  }
  i1002.passDefinedKeywordGroups = i1008
  var i1011 = i1003[23]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1011[i + 0]) );
  }
  i1002.variants = i1010
  var i1013 = i1003[24]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1013[i + 0]) );
  }
  i1002.excludedVariants = i1012
  i1002.hasDepthReader = !!i1003[25]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1015 = data
  i1014.val = i1015[0]
  i1014.name = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1017 = data
  i1016.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1017[0], i1016.src)
  i1016.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1017[1], i1016.dst)
  i1016.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1017[2], i1016.op)
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1019 = data
  i1018.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[0], i1018.pass)
  i1018.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[1], i1018.fail)
  i1018.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[2], i1018.zFail)
  i1018.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1019[3], i1018.comp)
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.value = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1026.keywords = i1028
  i1026.hasDiscard = !!i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1033 = data
  i1032.passId = i1033[0]
  i1032.subShaderIndex = i1033[1]
  var i1035 = i1033[2]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1032.keywords = i1034
  i1032.vertexProgram = i1033[3]
  i1032.fragmentProgram = i1033[4]
  i1032.exportedForWebGl2 = !!i1033[5]
  i1032.readDepth = !!i1033[6]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'shader')
  i1038.pass = i1039[2]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.type = i1043[1]
  i1042.value = new pc.Vec4( i1043[2], i1043[3], i1043[4], i1043[5] )
  i1042.textureValue = i1043[6]
  i1042.shaderPropertyFlag = i1043[7]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1045 = data
  i1044.name = i1045[0]
  request.r(i1045[1], i1045[2], 0, i1044, 'texture')
  i1044.aabb = i1045[3]
  i1044.vertices = i1045[4]
  i1044.triangles = i1045[5]
  i1044.textureRect = UnityEngine.Rect.MinMaxRect(i1045[6], i1045[7], i1045[8], i1045[9])
  i1044.packedRect = UnityEngine.Rect.MinMaxRect(i1045[10], i1045[11], i1045[12], i1045[13])
  i1044.border = new pc.Vec4( i1045[14], i1045[15], i1045[16], i1045[17] )
  i1044.transparency = i1045[18]
  i1044.bounds = i1045[19]
  i1044.pixelsPerUnit = i1045[20]
  i1044.textureWidth = i1045[21]
  i1044.textureHeight = i1045[22]
  i1044.nativeSize = new pc.Vec2( i1045[23], i1045[24] )
  i1044.pivot = new pc.Vec2( i1045[25], i1045[26] )
  i1044.textureRectOffset = new pc.Vec2( i1045[27], i1045[28] )
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1047 = data
  i1046.name = i1047[0]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.wrapMode = i1049[1]
  i1048.isLooping = !!i1049[2]
  i1048.length = i1049[3]
  var i1051 = i1049[4]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1051[i + 0]) );
  }
  i1048.curves = i1050
  var i1053 = i1049[5]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1053[i + 0]) );
  }
  i1048.events = i1052
  i1048.halfPrecision = !!i1049[6]
  i1048._frameRate = i1049[7]
  i1048.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1049[8], i1048.localBounds)
  i1048.hasMuscleCurves = !!i1049[9]
  var i1055 = i1049[10]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1048.clipMuscleConstant = i1054
  i1048.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1049[11], i1048.clipBindingConstant)
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1059 = data
  i1058.path = i1059[0]
  i1058.hash = i1059[1]
  i1058.componentType = i1059[2]
  i1058.property = i1059[3]
  i1058.keys = i1059[4]
  var i1061 = i1059[5]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1061[i + 0]) );
  }
  i1058.objectReferenceKeys = i1060
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1065 = data
  i1064.time = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'value')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1069 = data
  i1068.functionName = i1069[0]
  i1068.floatParameter = i1069[1]
  i1068.intParameter = i1069[2]
  i1068.stringParameter = i1069[3]
  request.r(i1069[4], i1069[5], 0, i1068, 'objectReferenceParameter')
  i1068.time = i1069[6]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1071 = data
  i1070.center = new pc.Vec3( i1071[0], i1071[1], i1071[2] )
  i1070.extends = new pc.Vec3( i1071[3], i1071[4], i1071[5] )
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( i1077[i + 0] );
  }
  i1074.genericBindings = i1076
  var i1079 = i1075[1]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1074.pptrCurveMapping = i1078
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1081 = data
  i1080.name = i1081[0]
  var i1083 = i1081[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1083[i + 0]) );
  }
  i1080.layers = i1082
  var i1085 = i1081[2]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1085[i + 0]) );
  }
  i1080.parameters = i1084
  i1080.animationClips = i1081[3]
  i1080.avatarUnsupported = i1081[4]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.defaultWeight = i1089[1]
  i1088.blendingMode = i1089[2]
  i1088.avatarMask = i1089[3]
  i1088.syncedLayerIndex = i1089[4]
  i1088.syncedLayerAffectsTiming = !!i1089[5]
  i1088.syncedLayers = i1089[6]
  i1088.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1089[7], i1088.stateMachine)
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1091 = data
  i1090.id = i1091[0]
  i1090.name = i1091[1]
  i1090.path = i1091[2]
  var i1093 = i1091[3]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1093[i + 0]) );
  }
  i1090.states = i1092
  var i1095 = i1091[4]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1095[i + 0]) );
  }
  i1090.machines = i1094
  var i1097 = i1091[5]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1097[i + 0]) );
  }
  i1090.entryStateTransitions = i1096
  var i1099 = i1091[6]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1099[i + 0]) );
  }
  i1090.exitStateTransitions = i1098
  var i1101 = i1091[7]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1101[i + 0]) );
  }
  i1090.anyStateTransitions = i1100
  i1090.defaultStateId = i1091[8]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1105 = data
  i1104.id = i1105[0]
  i1104.name = i1105[1]
  i1104.cycleOffset = i1105[2]
  i1104.cycleOffsetParameter = i1105[3]
  i1104.cycleOffsetParameterActive = !!i1105[4]
  i1104.mirror = !!i1105[5]
  i1104.mirrorParameter = i1105[6]
  i1104.mirrorParameterActive = !!i1105[7]
  i1104.motionId = i1105[8]
  i1104.nameHash = i1105[9]
  i1104.fullPathHash = i1105[10]
  i1104.speed = i1105[11]
  i1104.speedParameter = i1105[12]
  i1104.speedParameterActive = !!i1105[13]
  i1104.tag = i1105[14]
  i1104.tagHash = i1105[15]
  i1104.writeDefaultValues = !!i1105[16]
  var i1107 = i1105[17]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 2, i1106, '')
  }
  i1104.behaviours = i1106
  var i1109 = i1105[18]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1109[i + 0]) );
  }
  i1104.transitions = i1108
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1115 = data
  i1114.fullPath = i1115[0]
  i1114.canTransitionToSelf = !!i1115[1]
  i1114.duration = i1115[2]
  i1114.exitTime = i1115[3]
  i1114.hasExitTime = !!i1115[4]
  i1114.hasFixedDuration = !!i1115[5]
  i1114.interruptionSource = i1115[6]
  i1114.offset = i1115[7]
  i1114.orderedInterruption = !!i1115[8]
  i1114.destinationStateId = i1115[9]
  i1114.isExit = !!i1115[10]
  i1114.mute = !!i1115[11]
  i1114.solo = !!i1115[12]
  var i1117 = i1115[13]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1117[i + 0]) );
  }
  i1114.conditions = i1116
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1123 = data
  i1122.destinationStateId = i1123[0]
  i1122.isExit = !!i1123[1]
  i1122.mute = !!i1123[2]
  i1122.solo = !!i1123[3]
  var i1125 = i1123[4]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1125[i + 0]) );
  }
  i1122.conditions = i1124
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1129 = data
  i1128.defaultBool = !!i1129[0]
  i1128.defaultFloat = i1129[1]
  i1128.defaultInt = i1129[2]
  i1128.name = i1129[3]
  i1128.nameHash = i1129[4]
  i1128.type = i1129[5]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.bytes64 = i1131[1]
  i1130.data = i1131[2]
  return i1130
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1133 = data
  i1132.normalStyle = i1133[0]
  i1132.normalSpacingOffset = i1133[1]
  i1132.boldStyle = i1133[2]
  i1132.boldSpacing = i1133[3]
  i1132.italicStyle = i1133[4]
  i1132.tabSize = i1133[5]
  request.r(i1133[6], i1133[7], 0, i1132, 'atlas')
  i1132.m_SourceFontFileGUID = i1133[8]
  i1132.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1133[9], i1132.m_CreationSettings)
  request.r(i1133[10], i1133[11], 0, i1132, 'm_SourceFontFile')
  i1132.m_SourceFontFilePath = i1133[12]
  i1132.m_AtlasPopulationMode = i1133[13]
  i1132.InternalDynamicOS = !!i1133[14]
  var i1135 = i1133[15]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('UnityEngine.TextCore.Glyph', i1135[i + 0]));
  }
  i1132.m_GlyphTable = i1134
  var i1137 = i1133[16]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('TMPro.TMP_Character', i1137[i + 0]));
  }
  i1132.m_CharacterTable = i1136
  var i1139 = i1133[17]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 2, i1138, '')
  }
  i1132.m_AtlasTextures = i1138
  i1132.m_AtlasTextureIndex = i1133[18]
  i1132.m_IsMultiAtlasTexturesEnabled = !!i1133[19]
  i1132.m_GetFontFeatures = !!i1133[20]
  i1132.m_ClearDynamicDataOnBuild = !!i1133[21]
  i1132.m_AtlasWidth = i1133[22]
  i1132.m_AtlasHeight = i1133[23]
  i1132.m_AtlasPadding = i1133[24]
  i1132.m_AtlasRenderMode = i1133[25]
  var i1141 = i1133[26]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('UnityEngine.TextCore.GlyphRect', i1141[i + 0]));
  }
  i1132.m_UsedGlyphRects = i1140
  var i1143 = i1133[27]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('UnityEngine.TextCore.GlyphRect', i1143[i + 0]));
  }
  i1132.m_FreeGlyphRects = i1142
  i1132.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1133[28], i1132.m_FontFeatureTable)
  i1132.m_ShouldReimportFontFeatures = !!i1133[29]
  var i1145 = i1133[30]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1145.length; i += 2) {
  request.r(i1145[i + 0], i1145[i + 1], 1, i1144, '')
  }
  i1132.m_FallbackFontAssetTable = i1144
  var i1147 = i1133[31]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('TMPro.TMP_FontWeightPair', i1147[i + 0]) );
  }
  i1132.m_FontWeightTable = i1146
  var i1149 = i1133[32]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('TMPro.TMP_FontWeightPair', i1149[i + 0]) );
  }
  i1132.fontWeights = i1148
  i1132.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1133[33], i1132.m_fontInfo)
  var i1151 = i1133[34]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('TMPro.TMP_Glyph', i1151[i + 0]));
  }
  i1132.m_glyphInfoList = i1150
  i1132.m_KerningTable = request.d('TMPro.KerningTable', i1133[35], i1132.m_KerningTable)
  var i1153 = i1133[36]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 1, i1152, '')
  }
  i1132.fallbackFontAssets = i1152
  i1132.m_Version = i1133[37]
  i1132.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1133[38], i1132.m_FaceInfo)
  request.r(i1133[39], i1133[40], 0, i1132, 'm_Material')
  return i1132
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1155 = data
  i1154.sourceFontFileName = i1155[0]
  i1154.sourceFontFileGUID = i1155[1]
  i1154.faceIndex = i1155[2]
  i1154.pointSizeSamplingMode = i1155[3]
  i1154.pointSize = i1155[4]
  i1154.padding = i1155[5]
  i1154.paddingMode = i1155[6]
  i1154.packingMode = i1155[7]
  i1154.atlasWidth = i1155[8]
  i1154.atlasHeight = i1155[9]
  i1154.characterSetSelectionMode = i1155[10]
  i1154.characterSequence = i1155[11]
  i1154.referencedFontAssetGUID = i1155[12]
  i1154.referencedTextAssetGUID = i1155[13]
  i1154.fontStyle = i1155[14]
  i1154.fontStyleModifier = i1155[15]
  i1154.renderMode = i1155[16]
  i1154.includeFontFeatures = !!i1155[17]
  return i1154
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1159 = data
  i1158.m_Index = i1159[0]
  i1158.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1159[1], i1158.m_Metrics)
  i1158.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1159[2], i1158.m_GlyphRect)
  i1158.m_Scale = i1159[3]
  i1158.m_AtlasIndex = i1159[4]
  i1158.m_ClassDefinitionType = i1159[5]
  return i1158
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1161 = data
  i1160.m_Width = i1161[0]
  i1160.m_Height = i1161[1]
  i1160.m_HorizontalBearingX = i1161[2]
  i1160.m_HorizontalBearingY = i1161[3]
  i1160.m_HorizontalAdvance = i1161[4]
  return i1160
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1163 = data
  i1162.m_X = i1163[0]
  i1162.m_Y = i1163[1]
  i1162.m_Width = i1163[2]
  i1162.m_Height = i1163[3]
  return i1162
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_Character' )
  var i1167 = data
  i1166.m_ElementType = i1167[0]
  i1166.m_Unicode = i1167[1]
  i1166.m_GlyphIndex = i1167[2]
  i1166.m_Scale = i1167[3]
  return i1166
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.MultipleSubstitutionRecord', i1175[i + 0]));
  }
  i1172.m_MultipleSubstitutionRecords = i1174
  var i1177 = i1173[1]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.LigatureSubstitutionRecord', i1177[i + 0]));
  }
  i1172.m_LigatureSubstitutionRecords = i1176
  var i1179 = i1173[2]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1179[i + 0]));
  }
  i1172.m_GlyphPairAdjustmentRecords = i1178
  var i1181 = i1173[3]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1181[i + 0]));
  }
  i1172.m_MarkToBaseAdjustmentRecords = i1180
  var i1183 = i1173[4]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1183[i + 0]));
  }
  i1172.m_MarkToMarkAdjustmentRecords = i1182
  return i1172
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1187 = data
  i1186.m_TargetGlyphID = i1187[0]
  i1186.m_SubstituteGlyphIDs = i1187[1]
  return i1186
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1191 = data
  i1190.m_ComponentGlyphIDs = i1191[0]
  i1190.m_LigatureGlyphID = i1191[1]
  return i1190
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1195 = data
  i1194.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1195[0], i1194.m_FirstAdjustmentRecord)
  i1194.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1195[1], i1194.m_SecondAdjustmentRecord)
  i1194.m_FeatureLookupFlags = i1195[2]
  return i1194
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1199 = data
  i1198.m_BaseGlyphID = i1199[0]
  i1198.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1199[1], i1198.m_BaseGlyphAnchorPoint)
  i1198.m_MarkGlyphID = i1199[2]
  i1198.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1199[3], i1198.m_MarkPositionAdjustment)
  return i1198
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1203 = data
  i1202.m_BaseMarkGlyphID = i1203[0]
  i1202.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1203[1], i1202.m_BaseMarkGlyphAnchorPoint)
  i1202.m_CombiningMarkGlyphID = i1203[2]
  i1202.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1203[3], i1202.m_CombiningMarkPositionAdjustment)
  return i1202
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'regularTypeface')
  request.r(i1209[2], i1209[3], 0, i1208, 'italicTypeface')
  return i1208
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1211 = data
  i1210.Name = i1211[0]
  i1210.PointSize = i1211[1]
  i1210.Scale = i1211[2]
  i1210.CharacterCount = i1211[3]
  i1210.LineHeight = i1211[4]
  i1210.Baseline = i1211[5]
  i1210.Ascender = i1211[6]
  i1210.CapHeight = i1211[7]
  i1210.Descender = i1211[8]
  i1210.CenterLine = i1211[9]
  i1210.SuperscriptOffset = i1211[10]
  i1210.SubscriptOffset = i1211[11]
  i1210.SubSize = i1211[12]
  i1210.Underline = i1211[13]
  i1210.UnderlineThickness = i1211[14]
  i1210.strikethrough = i1211[15]
  i1210.strikethroughThickness = i1211[16]
  i1210.TabWidth = i1211[17]
  i1210.Padding = i1211[18]
  i1210.AtlasWidth = i1211[19]
  i1210.AtlasHeight = i1211[20]
  return i1210
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1215 = data
  i1214.id = i1215[0]
  i1214.x = i1215[1]
  i1214.y = i1215[2]
  i1214.width = i1215[3]
  i1214.height = i1215[4]
  i1214.xOffset = i1215[5]
  i1214.yOffset = i1215[6]
  i1214.xAdvance = i1215[7]
  i1214.scale = i1215[8]
  return i1214
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.KerningTable' )
  var i1217 = data
  var i1219 = i1217[0]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('TMPro.KerningPair', i1219[i + 0]));
  }
  i1216.kerningPairs = i1218
  return i1216
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.KerningPair' )
  var i1223 = data
  i1222.xOffset = i1223[0]
  i1222.m_FirstGlyph = i1223[1]
  i1222.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1223[2], i1222.m_FirstGlyphAdjustments)
  i1222.m_SecondGlyph = i1223[3]
  i1222.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1223[4], i1222.m_SecondGlyphAdjustments)
  i1222.m_IgnoreSpacingAdjustments = !!i1223[5]
  return i1222
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1225 = data
  i1224.m_FaceIndex = i1225[0]
  i1224.m_FamilyName = i1225[1]
  i1224.m_StyleName = i1225[2]
  i1224.m_PointSize = i1225[3]
  i1224.m_Scale = i1225[4]
  i1224.m_UnitsPerEM = i1225[5]
  i1224.m_LineHeight = i1225[6]
  i1224.m_AscentLine = i1225[7]
  i1224.m_CapLine = i1225[8]
  i1224.m_MeanLine = i1225[9]
  i1224.m_Baseline = i1225[10]
  i1224.m_DescentLine = i1225[11]
  i1224.m_SuperscriptOffset = i1225[12]
  i1224.m_SuperscriptSize = i1225[13]
  i1224.m_SubscriptOffset = i1225[14]
  i1224.m_SubscriptSize = i1225[15]
  i1224.m_UnderlineOffset = i1225[16]
  i1224.m_UnderlineThickness = i1225[17]
  i1224.m_StrikethroughOffset = i1225[18]
  i1224.m_StrikethroughThickness = i1225[19]
  i1224.m_TabWidth = i1225[20]
  return i1224
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1226 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1227 = data
  i1226.useSafeMode = !!i1227[0]
  i1226.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1227[1], i1226.safeModeOptions)
  i1226.timeScale = i1227[2]
  i1226.unscaledTimeScale = i1227[3]
  i1226.useSmoothDeltaTime = !!i1227[4]
  i1226.maxSmoothUnscaledTime = i1227[5]
  i1226.rewindCallbackMode = i1227[6]
  i1226.showUnityEditorReport = !!i1227[7]
  i1226.logBehaviour = i1227[8]
  i1226.drawGizmos = !!i1227[9]
  i1226.defaultRecyclable = !!i1227[10]
  i1226.defaultAutoPlay = i1227[11]
  i1226.defaultUpdateType = i1227[12]
  i1226.defaultTimeScaleIndependent = !!i1227[13]
  i1226.defaultEaseType = i1227[14]
  i1226.defaultEaseOvershootOrAmplitude = i1227[15]
  i1226.defaultEasePeriod = i1227[16]
  i1226.defaultAutoKill = !!i1227[17]
  i1226.defaultLoopType = i1227[18]
  i1226.debugMode = !!i1227[19]
  i1226.debugStoreTargetId = !!i1227[20]
  i1226.showPreviewPanel = !!i1227[21]
  i1226.storeSettingsLocation = i1227[22]
  i1226.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1227[23], i1226.modules)
  i1226.createASMDEF = !!i1227[24]
  i1226.showPlayingTweens = !!i1227[25]
  i1226.showPausedTweens = !!i1227[26]
  return i1226
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1228 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1229 = data
  i1228.logBehaviour = i1229[0]
  i1228.nestedTweenFailureBehaviour = i1229[1]
  return i1228
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1230 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1231 = data
  i1230.showPanel = !!i1231[0]
  i1230.audioEnabled = !!i1231[1]
  i1230.physicsEnabled = !!i1231[2]
  i1230.physics2DEnabled = !!i1231[3]
  i1230.spriteEnabled = !!i1231[4]
  i1230.uiEnabled = !!i1231[5]
  i1230.uiToolkitEnabled = !!i1231[6]
  i1230.textMeshProEnabled = !!i1231[7]
  i1230.tk2DEnabled = !!i1231[8]
  i1230.deAudioEnabled = !!i1231[9]
  i1230.deUnityExtendedEnabled = !!i1231[10]
  i1230.epoOutlineEnabled = !!i1231[11]
  return i1230
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_Settings' )
  var i1233 = data
  i1232.assetVersion = i1233[0]
  i1232.m_TextWrappingMode = i1233[1]
  i1232.m_enableKerning = !!i1233[2]
  var i1235 = i1233[3]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(i1235[i + 0]);
  }
  i1232.m_ActiveFontFeatures = i1234
  i1232.m_enableExtraPadding = !!i1233[4]
  i1232.m_enableTintAllSprites = !!i1233[5]
  i1232.m_enableParseEscapeCharacters = !!i1233[6]
  i1232.m_EnableRaycastTarget = !!i1233[7]
  i1232.m_GetFontFeaturesAtRuntime = !!i1233[8]
  i1232.m_missingGlyphCharacter = i1233[9]
  i1232.m_ClearDynamicDataOnBuild = !!i1233[10]
  i1232.m_warningsDisabled = !!i1233[11]
  request.r(i1233[12], i1233[13], 0, i1232, 'm_defaultFontAsset')
  i1232.m_defaultFontAssetPath = i1233[14]
  i1232.m_defaultFontSize = i1233[15]
  i1232.m_defaultAutoSizeMinRatio = i1233[16]
  i1232.m_defaultAutoSizeMaxRatio = i1233[17]
  i1232.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1233[18], i1233[19] )
  i1232.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1233[20], i1233[21] )
  i1232.m_autoSizeTextContainer = !!i1233[22]
  i1232.m_IsTextObjectScaleStatic = !!i1233[23]
  var i1237 = i1233[24]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 1, i1236, '')
  }
  i1232.m_fallbackFontAssets = i1236
  i1232.m_matchMaterialPreset = !!i1233[25]
  i1232.m_HideSubTextObjects = !!i1233[26]
  request.r(i1233[27], i1233[28], 0, i1232, 'm_defaultSpriteAsset')
  i1232.m_defaultSpriteAssetPath = i1233[29]
  i1232.m_enableEmojiSupport = !!i1233[30]
  i1232.m_MissingCharacterSpriteUnicode = i1233[31]
  var i1239 = i1233[32]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1232.m_EmojiFallbackTextAssets = i1238
  i1232.m_defaultColorGradientPresetsPath = i1233[33]
  request.r(i1233[34], i1233[35], 0, i1232, 'm_defaultStyleSheet')
  i1232.m_StyleSheetsResourcePath = i1233[36]
  request.r(i1233[37], i1233[38], 0, i1232, 'm_leadingCharacters')
  request.r(i1233[39], i1233[40], 0, i1232, 'm_followingCharacters')
  i1232.m_UseModernHangulLineBreakingRules = !!i1233[41]
  return i1232
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'spriteSheet')
  var i1245 = i1243[2]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_Sprite', i1245[i + 0]));
  }
  i1242.spriteInfoList = i1244
  var i1247 = i1243[3]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1242.fallbackSpriteAssets = i1246
  var i1249 = i1243[4]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('TMPro.TMP_SpriteCharacter', i1249[i + 0]));
  }
  i1242.m_SpriteCharacterTable = i1248
  var i1251 = i1243[5]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('TMPro.TMP_SpriteGlyph', i1251[i + 0]));
  }
  i1242.m_GlyphTable = i1250
  i1242.m_Version = i1243[6]
  i1242.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1243[7], i1242.m_FaceInfo)
  request.r(i1243[8], i1243[9], 0, i1242, 'm_Material')
  return i1242
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1255 = data
  i1254.name = i1255[0]
  i1254.hashCode = i1255[1]
  i1254.unicode = i1255[2]
  i1254.pivot = new pc.Vec2( i1255[3], i1255[4] )
  request.r(i1255[5], i1255[6], 0, i1254, 'sprite')
  i1254.id = i1255[7]
  i1254.x = i1255[8]
  i1254.y = i1255[9]
  i1254.width = i1255[10]
  i1254.height = i1255[11]
  i1254.xOffset = i1255[12]
  i1254.yOffset = i1255[13]
  i1254.xAdvance = i1255[14]
  i1254.scale = i1255[15]
  return i1254
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1261 = data
  i1260.m_Name = i1261[0]
  i1260.m_ElementType = i1261[1]
  i1260.m_Unicode = i1261[2]
  i1260.m_GlyphIndex = i1261[3]
  i1260.m_Scale = i1261[4]
  return i1260
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'sprite')
  i1264.m_Index = i1265[2]
  i1264.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1265[3], i1264.m_Metrics)
  i1264.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1265[4], i1264.m_GlyphRect)
  i1264.m_Scale = i1265[5]
  i1264.m_AtlasIndex = i1265[6]
  i1264.m_ClassDefinitionType = i1265[7]
  return i1264
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.TMP_Style', i1269[i + 0]));
  }
  i1266.m_StyleList = i1268
  return i1266
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_Style' )
  var i1273 = data
  i1272.m_Name = i1273[0]
  i1272.m_HashCode = i1273[1]
  i1272.m_OpeningDefinition = i1273[2]
  i1272.m_ClosingDefinition = i1273[3]
  i1272.m_OpeningTagArray = i1273[4]
  i1272.m_ClosingTagArray = i1273[5]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1277[i + 0]) );
  }
  i1274.files = i1276
  i1274.componentToPrefabIds = i1275[1]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1281 = data
  i1280.path = i1281[0]
  request.r(i1281[1], i1281[2], 0, i1280, 'unityObject')
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1285[i + 0]) );
  }
  i1282.scriptsExecutionOrder = i1284
  var i1287 = i1283[1]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1287[i + 0]) );
  }
  i1282.sortingLayers = i1286
  var i1289 = i1283[2]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1289[i + 0]) );
  }
  i1282.cullingLayers = i1288
  i1282.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1283[3], i1282.timeSettings)
  i1282.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1283[4], i1282.physicsSettings)
  i1282.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1283[5], i1282.physics2DSettings)
  i1282.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1283[6], i1282.qualitySettings)
  i1282.enableRealtimeShadows = !!i1283[7]
  i1282.enableAutoInstancing = !!i1283[8]
  i1282.enableStaticBatching = !!i1283[9]
  i1282.enableDynamicBatching = !!i1283[10]
  i1282.lightmapEncodingQuality = i1283[11]
  i1282.desiredColorSpace = i1283[12]
  var i1291 = i1283[13]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1282.allTags = i1290
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1295 = data
  i1294.name = i1295[0]
  i1294.value = i1295[1]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1299 = data
  i1298.id = i1299[0]
  i1298.name = i1299[1]
  i1298.value = i1299[2]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1303 = data
  i1302.id = i1303[0]
  i1302.name = i1303[1]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1305 = data
  i1304.fixedDeltaTime = i1305[0]
  i1304.maximumDeltaTime = i1305[1]
  i1304.timeScale = i1305[2]
  i1304.maximumParticleTimestep = i1305[3]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1307 = data
  i1306.gravity = new pc.Vec3( i1307[0], i1307[1], i1307[2] )
  i1306.defaultSolverIterations = i1307[3]
  i1306.bounceThreshold = i1307[4]
  i1306.autoSyncTransforms = !!i1307[5]
  i1306.autoSimulation = !!i1307[6]
  var i1309 = i1307[7]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1309[i + 0]) );
  }
  i1306.collisionMatrix = i1308
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1313 = data
  i1312.enabled = !!i1313[0]
  i1312.layerId = i1313[1]
  i1312.otherLayerId = i1313[2]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'material')
  i1314.gravity = new pc.Vec2( i1315[2], i1315[3] )
  i1314.positionIterations = i1315[4]
  i1314.velocityIterations = i1315[5]
  i1314.velocityThreshold = i1315[6]
  i1314.maxLinearCorrection = i1315[7]
  i1314.maxAngularCorrection = i1315[8]
  i1314.maxTranslationSpeed = i1315[9]
  i1314.maxRotationSpeed = i1315[10]
  i1314.baumgarteScale = i1315[11]
  i1314.baumgarteTOIScale = i1315[12]
  i1314.timeToSleep = i1315[13]
  i1314.linearSleepTolerance = i1315[14]
  i1314.angularSleepTolerance = i1315[15]
  i1314.defaultContactOffset = i1315[16]
  i1314.autoSimulation = !!i1315[17]
  i1314.queriesHitTriggers = !!i1315[18]
  i1314.queriesStartInColliders = !!i1315[19]
  i1314.callbacksOnDisable = !!i1315[20]
  i1314.reuseCollisionCallbacks = !!i1315[21]
  i1314.autoSyncTransforms = !!i1315[22]
  var i1317 = i1315[23]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1317[i + 0]) );
  }
  i1314.collisionMatrix = i1316
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1321 = data
  i1320.enabled = !!i1321[0]
  i1320.layerId = i1321[1]
  i1320.otherLayerId = i1321[2]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1325[i + 0]) );
  }
  i1322.qualityLevels = i1324
  var i1327 = i1323[1]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( i1327[i + 0] );
  }
  i1322.names = i1326
  i1322.shadows = i1323[2]
  i1322.anisotropicFiltering = i1323[3]
  i1322.antiAliasing = i1323[4]
  i1322.lodBias = i1323[5]
  i1322.shadowCascades = i1323[6]
  i1322.shadowDistance = i1323[7]
  i1322.shadowmaskMode = i1323[8]
  i1322.shadowProjection = i1323[9]
  i1322.shadowResolution = i1323[10]
  i1322.softParticles = !!i1323[11]
  i1322.softVegetation = !!i1323[12]
  i1322.activeColorSpace = i1323[13]
  i1322.desiredColorSpace = i1323[14]
  i1322.masterTextureLimit = i1323[15]
  i1322.maxQueuedFrames = i1323[16]
  i1322.particleRaycastBudget = i1323[17]
  i1322.pixelLightCount = i1323[18]
  i1322.realtimeReflectionProbes = !!i1323[19]
  i1322.shadowCascade2Split = i1323[20]
  i1322.shadowCascade4Split = new pc.Vec3( i1323[21], i1323[22], i1323[23] )
  i1322.streamingMipmapsActive = !!i1323[24]
  i1322.vSyncCount = i1323[25]
  i1322.asyncUploadBufferSize = i1323[26]
  i1322.asyncUploadTimeSlice = i1323[27]
  i1322.billboardsFaceCameraPosition = !!i1323[28]
  i1322.shadowNearPlaneOffset = i1323[29]
  i1322.streamingMipmapsMemoryBudget = i1323[30]
  i1322.maximumLODLevel = i1323[31]
  i1322.streamingMipmapsAddAllCameras = !!i1323[32]
  i1322.streamingMipmapsMaxLevelReduction = i1323[33]
  i1322.streamingMipmapsRenderersPerFrame = i1323[34]
  i1322.resolutionScalingFixedDPIFactor = i1323[35]
  i1322.streamingMipmapsMaxFileIORequests = i1323[36]
  i1322.currentQualityLevel = i1323[37]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1333 = data
  i1332.weight = i1333[0]
  i1332.vertices = i1333[1]
  i1332.normals = i1333[2]
  i1332.tangents = i1333[3]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1337 = data
  i1336.mode = i1337[0]
  i1336.parameter = i1337[1]
  i1336.threshold = i1337[2]
  return i1336
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1339 = data
  i1338.m_GlyphIndex = i1339[0]
  i1338.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1339[1], i1338.m_GlyphValueRecord)
  return i1338
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1341 = data
  i1340.m_XCoordinate = i1341[0]
  i1340.m_YCoordinate = i1341[1]
  return i1340
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1343 = data
  i1342.m_XPositionAdjustment = i1343[0]
  i1342.m_YPositionAdjustment = i1343[1]
  return i1342
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1345 = data
  i1344.xPlacement = i1345[0]
  i1344.yPlacement = i1345[1]
  i1344.xAdvance = i1345[2]
  i1344.yAdvance = i1345[3]
  return i1344
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1347 = data
  i1346.m_XPlacement = i1347[0]
  i1346.m_YPlacement = i1347[1]
  i1346.m_XAdvance = i1347[2]
  i1346.m_YAdvance = i1347[3]
  return i1346
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[33],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[33],"82":[83],"84":[85],"86":[85],"11":[10],"87":[88],"89":[90],"91":[83,92],"93":[90],"94":[93],"95":[90],"96":[90],"97":[98],"99":[98],"100":[90],"101":[10],"102":[17,10],"103":[83],"104":[17,10],"105":[15,83],"90":[83],"106":[83,92],"107":[61],"108":[68],"109":[110],"111":[98],"112":[41],"113":[33],"114":[115],"116":[39],"117":[11],"118":[10],"119":[83,10],"18":[10,17],"120":[10],"121":[17,10],"122":[83],"123":[17,10],"124":[10],"125":[126],"127":[126],"128":[126],"129":[10],"130":[10],"14":[11],"21":[17,10],"131":[10],"13":[11],"132":[10],"133":[10],"134":[10],"135":[10],"136":[10],"137":[10],"138":[10],"139":[10],"140":[10],"141":[17,10],"142":[10],"143":[10],"144":[10],"20":[10],"145":[17,10],"146":[10],"147":[39],"148":[39],"40":[39],"149":[39],"150":[33],"151":[33]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","ItemSpawnManager","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","Item","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","ItemHolder","UnityEngine.BoxCollider","PSD_Tool","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "07/17/2026 09:46:11";

Deserializers.lunaDaysRunning = "2.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_PerfectTidy_V132";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5173";

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

Deserializers.buildID = "34a66e98-256f-41a9-be9d-64937707a3d5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

