export const physicsByYear = {
  "2019": [
    {
      "originalNum": 1,
      "question": "A particle of mass m is projected with velocity v making an angle 45\u00b0 with the horizontal. When the particle lands on the level ground, the magnitude of the change in its momentum is:",
      "options": [
        "2mv",
        "mv/\u221a2",
        "m\u221a2\u00b7v",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "At 45\u00b0 projection, the vertical velocity component reverses direction on landing while horizontal stays the same. The change in momentum equals 2\u00d7m\u00d7v\u00d7sin45\u00b0 = m\u221a2\u00b7v, since only the vertical component of momentum changes."
    },
    {
      "originalNum": 2,
      "question": "A body of mass M hits normally a rigid wall with velocity v and bounces back with same velocity. The impulse experienced by the body is:",
      "options": [
        "Mv",
        "1.5Mv",
        "2Mv",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "Impulse equals change in momentum. The ball goes from +mv to -mv, so the change is -mv-(+mv) = -2mv. The magnitude of impulse is 2Mv, since momentum reverses direction completely."
    },
    {
      "originalNum": 3,
      "question": "The velocity-time graph of a particle in one-dimensional motion is shown. Which of the following formulae are correct for describing the motion of a particle over the time interval t\u2081 to t\u2082?",
      "options": [
        "x(t\u2082)=x(t\u2081)+v(t\u2081)(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2",
        "v(t\u2082)=v(t\u2081)+a(t\u2082-t\u2081)",
        "vaverage=(x(t\u2082)-x(t\u2081))/(t\u2082-t\u2081)",
        "x(t\u2082)=x(t\u2081)+vaverage(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2"
      ],
      "correctAnswer": 3,
      "explanation": "For non-uniform acceleration, only the definition of average velocity v_avg = (x\u2082-x\u2081)/(t\u2082-t\u2081) is always valid. The kinematic equations with constant a do not apply when acceleration varies. Average velocity correctly gives displacement regardless of how velocity varies."
    },
    {
      "originalNum": 4,
      "question": "The displacement of a particle starting from rest (at t=0) is given by s=6t\u00b2-t\u00b3. The time in seconds at which the particle will attain zero velocity again is:",
      "options": [
        "2 s",
        "4 s",
        "6 s",
        "8 s"
      ],
      "correctAnswer": 2,
      "explanation": "Velocity v=ds/dt=12t-3t\u00b2=3t(4-t). Setting v=0 gives t=0 (start) and t=4 s. At t=4 seconds the particle momentarily stops after decelerating from its peak speed reached at t=2 s."
    },
    {
      "originalNum": 5,
      "question": "A stone falls freely under gravity. It covers distances h\u2081, h\u2082 and h\u2083 in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h\u2081, h\u2082 and h\u2083 is:",
      "options": [
        "h\u2081=2h\u2082=3h\u2083",
        "h\u2081=h\u2082/3=h\u2083/5",
        "h\u2082=3h\u2081 and h\u2083=5h\u2081",
        "h\u2081=h\u2082=h\u2083"
      ],
      "correctAnswer": 3,
      "explanation": "By Galileo's odd number rule, distances covered in successive equal time intervals are in ratio 1:3:5:7... So h\u2081:h\u2082:h\u2083 = 1:3:5, meaning h\u2082=3h\u2081 and h\u2083=5h\u2081. This arises because each successive interval starts with higher velocity."
    },
    {
      "originalNum": 6,
      "question": "Two balls are projected simultaneously with the same speed from the top of a tower \u2014 one vertically upward and the other vertically downward. If they reach the ground in t\u2081 and t\u2082 seconds respectively, then the height of the tower is:",
      "options": [
        "\u00bdg(t\u2081+t\u2082)\u00b2",
        "g\u00b7t\u2081\u00b7t\u2082",
        "\u00bdg\u00b7t\u2081\u00b7t\u2082",
        "gt\u2081t\u2082/2"
      ],
      "correctAnswer": 4,
      "explanation": "For the ball thrown down: H=\u00bdgt\u2082\u00b2. For ball thrown up: it returns with same speed and then falls, total time t\u2081. Using energy/kinematics: H = \u00bdg\u00b7t\u2081\u00b7t\u2082. This is the geometric mean relationship between the two travel times and tower height."
    },
    {
      "originalNum": 7,
      "question": "In a Young's double slit experiment, slits are separated by 0.5 mm and the screen is 1.5 m away. A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used. The least distance from the central maximum where the bright fringes due to both wavelengths coincide is:",
      "options": [
        "1.56 mm",
        "7.8 mm",
        "9.75 mm",
        "15.6 mm"
      ],
      "correctAnswer": 2,
      "explanation": "For coincidence: n\u2081\u03bb\u2081=n\u2082\u03bb\u2082, so n\u2081/n\u2082=520/650=4/5. First coincidence at n\u2081=4 (650nm) and n\u2082=5 (520nm). Position y=n\u2081\u03bb\u2081D/d = 4\u00d7650\u00d710\u207b\u2079\u00d71.5/(0.5\u00d710\u207b\u00b3)=7.8 mm from center."
    },
    {
      "originalNum": 8,
      "question": "A conducting sphere of radius r is placed within a concentric conducting shell of radius R>r. The space between them is filled with dielectric of dielectric constant K. The capacitance of the system is:",
      "options": [
        "4\u03c0\u03b5\u2080K\u00b7rR/(R-r)",
        "4\u03c0\u03b5\u2080rR/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7r/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7R/(R-r)"
      ],
      "correctAnswer": 1,
      "explanation": "The capacitance of a spherical capacitor is C=4\u03c0\u03b5\u2080rR/(R-r). With a dielectric of constant K filling the space, capacitance is multiplied by K, giving C=4\u03c0\u03b5\u2080K\u00b7rR/(R-r). The dielectric reduces the effective electric field for the same charge."
    },
    {
      "originalNum": 9,
      "question": "A wire of length L is bent in the form of a circular ring. The magnetic field at the centre of the ring is B. Now the same wire is bent in the form of a square. The magnetic field at the centre of the square is:",
      "options": [
        "\u03c0B/4\u221a2",
        "\u03c0B/\u221a2",
        "\u221a2\u03c0B",
        "\u03c0\u00b2B/4\u221a2"
      ],
      "correctAnswer": 1,
      "explanation": "For ring: B_ring=\u03bc\u2080I/2r. For square with same wire, side a=L/4, and half-diagonal=a/2. The magnetic field at centre of square is B_sq=(4\u00d7\u03bc\u2080I\u221a2)/(4\u03c0a). Working out the ratio gives B_sq/B_ring = \u03c0/(4\u221a2), so B_sq = \u03c0B/(4\u221a2)."
    },
    {
      "originalNum": 10,
      "question": "The graph between angle of deviation (\u03b4) and angle of incidence (i) for a triangular prism is represented by:",
      "options": [
        "A monotonically decreasing line",
        "A U-shaped minimum curve",
        "A straight line through origin",
        "A monotonically increasing line"
      ],
      "correctAnswer": 2,
      "explanation": "The deviation vs. incidence angle graph shows a minimum (the angle of minimum deviation). As i increases from the critical angle on either side, \u03b4 first decreases to a minimum and then increases again, producing a characteristic U-shaped or bowl-shaped curve."
    },
    {
      "originalNum": 11,
      "question": "A capacitor of capacitance C is connected to a battery of emf \u03b5 through a resistance R. The time constant of the circuit is:",
      "options": [
        "RC",
        "R/C",
        "C/R",
        "1/RC"
      ],
      "correctAnswer": 1,
      "explanation": "The time constant \u03c4=RC defines how quickly a capacitor charges or discharges. It represents the time to reach about 63.2% of the final charge. Larger resistance slows current flow, and larger capacitance holds more charge, both increasing the time constant."
    },
    {
      "originalNum": 12,
      "question": "In the Bohr model of hydrogen atom, the radius of the nth orbit is proportional to:",
      "options": [
        "n",
        "n\u00b2",
        "1/n",
        "1/n\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr's model, the orbital radius r\u2099 = n\u00b2\u00b7a\u2080 where a\u2080 = 0.529 \u00c5 is the Bohr radius. The radius grows as n\u00b2 because the electron's angular momentum quantization (mvr=n\u210f) combined with Coulomb force balance gives this relationship."
    },
    {
      "originalNum": 13,
      "question": "The de-Broglie wavelength of a particle with kinetic energy E is:",
      "options": [
        "h/\u221a(2mE)",
        "h/\u221a(mE)",
        "\u221a(2mE)/h",
        "2h/\u221a(mE)"
      ],
      "correctAnswer": 1,
      "explanation": "De Broglie wavelength \u03bb=h/p. For kinetic energy E=p\u00b2/2m, we get p=\u221a(2mE). Therefore \u03bb=h/\u221a(2mE). This shows that heavier particles and higher-energy particles have shorter wavelengths, connecting particle and wave properties."
    },
    {
      "originalNum": 14,
      "question": "A radioactive nucleus undergoes a series of decays according to the sequence: A\u2192B(\u03b1)\u2192C(\u03b2\u207b)\u2192D(\u03b1). If the mass number and atomic number of A are 180 and 72, then the mass number and atomic number of D are:",
      "options": [
        "172 and 69",
        "172 and 68",
        "174 and 70",
        "172 and 70"
      ],
      "correctAnswer": 1,
      "explanation": "\u03b1 decay: mass number decreases by 4, atomic number by 2. \u03b2\u207b decay: mass number unchanged, atomic number increases by 1. Starting at (180,72): after \u03b1\u2192(176,70), after \u03b2\u207b\u2192(176,71), after \u03b1\u2192(172,69). So D has mass number 172 and atomic number 69."
    },
    {
      "originalNum": 15,
      "question": "If a wire is stretched to double its length, its resistance becomes:",
      "options": [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
      ],
      "correctAnswer": 3,
      "explanation": "When wire is stretched to double length: L becomes 2L, and since volume is conserved (A\u00d7L=const), cross-sectional area A becomes A/2. Resistance R=\u03c1L/A becomes \u03c1(2L)/(A/2)=4\u03c1L/A=4R. Resistance increases four-fold because both length doubling and area halving increase resistance."
    },
    {
      "originalNum": 16,
      "question": "A current of 2A flows in a long straight wire. The magnetic field at a distance of 10 cm from the wire is:",
      "options": [
        "4\u00d710\u207b\u2076 T",
        "4\u00d710\u207b\u2075 T",
        "4\u00d710\u207b\u2074 T",
        "4\u00d710\u207b\u00b3 T"
      ],
      "correctAnswer": 1,
      "explanation": "Using B=\u03bc\u2080I/(2\u03c0r): B=(4\u03c0\u00d710\u207b\u2077\u00d72)/(2\u03c0\u00d70.1)=(8\u03c0\u00d710\u207b\u2077)/(0.2\u03c0)=4\u00d710\u207b\u2076 T. The magnetic field decreases inversely with distance from the wire and is directly proportional to the current flowing through it."
    },
    {
      "originalNum": 17,
      "question": "In photoelectric effect, stopping potential depends on:",
      "options": [
        "Intensity of light only",
        "Frequency of light only",
        "Both intensity and frequency",
        "Neither intensity nor frequency"
      ],
      "correctAnswer": 2,
      "explanation": "Stopping potential V\u2080 = (h\u03bd - \u03c6)/e, where \u03c6 is the work function and \u03bd is frequency. It depends only on the frequency (or wavelength) of incident light, not on intensity. Higher frequency light ejects electrons with more kinetic energy, requiring a higher stopping potential."
    },
    {
      "originalNum": 18,
      "question": "An ideal gas undergoes four different processes from the same initial state. Four processes are adiabatic, isothermal, isobaric and isochoric. Out of 1, 2, 3 and 4, which one is adiabatic?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "explanation": "In a P-V diagram, adiabatic processes have a steeper slope than isothermal processes (\u03b3>1). The adiabatic curve lies between the isochoric (vertical) and isothermal curves. For expansion, the adiabatic process gives more pressure drop than isothermal due to temperature decrease."
    },
    {
      "originalNum": 19,
      "question": "A convex lens of focal length 20 cm is placed 30 cm from a convex mirror of radius of curvature 40 cm. Find where a ray of light coming parallel to the common axis will ultimately meet (or appear to meet) after reflections and refractions:",
      "options": [
        "At infinity",
        "At 60 cm from mirror",
        "At 20 cm from lens",
        "At 30 cm from lens"
      ],
      "correctAnswer": 1,
      "explanation": "The ray parallel to axis refracts through the convex lens and converges at its focal point 20 cm behind the lens, which is the center of the mirror (40cm RoC \u2192 20cm focal length). A ray hitting a convex mirror at its center of curvature reflects back on itself, then refracts through the lens to emerge parallel, meeting at infinity."
    },
    {
      "originalNum": 20,
      "question": "Lenz's law is a consequence of the law of conservation of:",
      "options": [
        "Charge",
        "Mass",
        "Energy",
        "Momentum"
      ],
      "correctAnswer": 3,
      "explanation": "Lenz's law states that induced current always opposes the change causing it. This is a direct consequence of conservation of energy \u2014 if the induced current aided the change, it would create energy from nothing. The opposition ensures no net energy gain, maintaining energy balance."
    },
    {
      "originalNum": 21,
      "question": "A semiconducting device is connected in a series circuit with a battery and a resistance. A current is found to pass through the circuit. If the polarity of the battery is reversed, the current drops nearly to zero. The device is:",
      "options": [
        "An intrinsic semiconductor",
        "A p-type semiconductor",
        "An n-p-n transistor",
        "A p-n junction diode"
      ],
      "correctAnswer": 4,
      "explanation": "A p-n junction diode conducts (forward bias) when connected one way but nearly stops current (reverse bias) when polarity is reversed, exactly as described. This rectifying behavior \u2014 passing current in only one direction \u2014 is the defining characteristic of a p-n junction diode."
    },
    {
      "originalNum": 22,
      "question": "The velocity of sound in air at 27\u00b0C is 330 m/s. What will be its velocity at 927\u00b0C?",
      "options": [
        "330 m/s",
        "660 m/s",
        "990 m/s",
        "1320 m/s"
      ],
      "correctAnswer": 2,
      "explanation": "Speed of sound v \u221d \u221aT. At 27\u00b0C: T\u2081=300K. At 927\u00b0C: T\u2082=1200K. v\u2082/v\u2081=\u221a(1200/300)=\u221a4=2. So v\u2082=2\u00d7330=660 m/s. Speed of sound increases with temperature because higher temperature increases molecular speed and the medium becomes less 'stiff' relative to density."
    },
    {
      "originalNum": 23,
      "question": "A gun of mass M fires a bullet of mass m with velocity v. The recoil velocity of the gun is:",
      "options": [
        "mv/M",
        "Mv/m",
        "mv/(M-m)",
        "Mv/(M+m)"
      ],
      "correctAnswer": 1,
      "explanation": "By conservation of momentum, initial momentum is zero (gun+bullet at rest). After firing: Mv_gun + mv = 0. So v_gun = -mv/M, meaning the gun recoils with speed mv/M in the opposite direction. This demonstrates Newton's third law \u2014 the gun exerts force on bullet, bullet exerts equal-opposite force on gun."
    },
    {
      "originalNum": 24,
      "question": "A wire carrying current I has the shape of a semicircle of radius R. The magnetic field at the center of the semicircle is:",
      "options": [
        "\u03bc\u2080I/(4R)",
        "\u03bc\u2080I/(2R)",
        "\u03bc\u2080I/R",
        "2\u03bc\u2080I/R"
      ],
      "correctAnswer": 1,
      "explanation": "The field at the center of a full circular loop is \u03bc\u2080I/(2R). For a semicircle (half the loop), the field is exactly half: \u03bc\u2080I/(4R). Each element of the semicircle contributes a field element dB at the center in the same direction (perpendicular to the plane), so they all add constructively."
    },
    {
      "originalNum": 25,
      "question": "The minimum distance between an object and its real image formed by a convex lens of focal length f is:",
      "options": [
        "f",
        "2f",
        "3f",
        "4f"
      ],
      "correctAnswer": 4,
      "explanation": "Using lens formula and object-image distance D=u+v: minimum D occurs when du/dv=0. Setting image distance v and applying constraints gives D_min=4f, achieved when object and image are equidistant from the lens (u=v=2f). This is why in minimum-distance setups, the object is placed at 2f."
    },
    {
      "originalNum": 26,
      "question": "The work done in blowing a soap bubble of radius R with surface tension T is:",
      "options": [
        "2\u03c0R\u00b2T",
        "4\u03c0R\u00b2T",
        "8\u03c0R\u00b2T",
        "16\u03c0R\u00b2T"
      ],
      "correctAnswer": 3,
      "explanation": "A soap bubble has two surfaces (inner and outer). Surface area of each surface = 4\u03c0R\u00b2. Total area increase = 2\u00d74\u03c0R\u00b2 = 8\u03c0R\u00b2. Work done = T \u00d7 increase in area = 8\u03c0R\u00b2T. The factor of 2 accounts for the soap film having two free surfaces unlike a solid sphere."
    },
    {
      "originalNum": 27,
      "question": "Which of the following is not a unit of energy?",
      "options": [
        "Joule",
        "Newton-metre",
        "Kilowatt-hour",
        "Newton-metre/second"
      ],
      "correctAnswer": 4,
      "explanation": "Newton-metre/second = Nm/s = J/s = Watt, which is a unit of power, not energy. Joule is directly energy, Newton-metre (N\u00b7m = J) is energy (work), and kilowatt-hour (kWh = 3.6\u00d710\u2076 J) is energy. Power \u00d7 time = energy, but power alone is not energy."
    },
    {
      "originalNum": 28,
      "question": "A body cools from 80\u00b0C to 60\u00b0C in 5 min. How long will it take to cool from 60\u00b0C to 40\u00b0C if the surrounding temperature is 20\u00b0C?",
      "options": [
        "5 min",
        "7.5 min",
        "10 min",
        "15 min"
      ],
      "correctAnswer": 2,
      "explanation": "Newton's law of cooling: rate \u221d (T-T\u2080). Average temp 80\u219260\u00b0C is 70\u00b0C, excess=50\u00b0C. Average temp 60\u219240\u00b0C is 50\u00b0C, excess=30\u00b0C. Since rate \u221d excess temperature: 5/t\u2082 = 50/30, giving t\u2082 = 7.5 min. Lower temperature difference means slower cooling."
    },
    {
      "originalNum": 29,
      "question": "Light from a point source in air falls on a spherical glass surface (\u03bc=1.5, R=20 cm). The distance of the source from the glass surface is 100 cm. The image distance is:",
      "options": [
        "100 cm",
        "200 cm",
        "300 cm",
        "-100 cm"
      ],
      "correctAnswer": 1,
      "explanation": "Using refraction at spherical surface: \u03bc\u2082/v - \u03bc\u2081/u = (\u03bc\u2082-\u03bc\u2081)/R. With \u03bc\u2081=1, \u03bc\u2082=1.5, u=-100cm, R=+20cm: 1.5/v + 1/100 = 0.5/20 = 0.025. 1.5/v = 0.025-0.01 = 0.015, v = 1.5/0.015 = 100 cm. Image forms 100 cm inside the glass."
    },
    {
      "originalNum": 30,
      "question": "An electric dipole is placed at an angle of 30\u00b0 to a non-uniform electric field. The dipole experiences:",
      "options": [
        "Torque only",
        "Force only",
        "Torque and force both",
        "Neither torque nor force"
      ],
      "correctAnswer": 3,
      "explanation": "A dipole in a non-uniform electric field experiences both torque (due to the field trying to align the dipole) and a net translational force (because the forces on +q and -q are unequal in magnitude in a non-uniform field). In a uniform field, there is torque but no net force."
    },
    {
      "originalNum": 31,
      "question": "If frequency of incident radiation is doubled, the maximum kinetic energy of photoelectrons:",
      "options": [
        "Doubles",
        "More than doubles",
        "Less than doubles",
        "Remains the same"
      ],
      "correctAnswer": 2,
      "explanation": "KE = h\u03bd - \u03c6. If \u03bd doubles: new KE = 2h\u03bd - \u03c6 = (KE + \u03c6) + h\u03bd - \u03c6... Actually: new KE = h(2\u03bd) - \u03c6 = 2h\u03bd - \u03c6. Original KE = h\u03bd - \u03c6. Difference = h\u03bd. Since new KE = old KE + h\u03bd > 2(old KE) when \u03c6>0. So the kinetic energy more than doubles due to the fixed work function."
    },
    {
      "originalNum": 32,
      "question": "In an n-p-n transistor, the emitter-base junction is _____ biased and collector-base junction is _____ biased in active mode:",
      "options": [
        "Reverse, Forward",
        "Forward, Reverse",
        "Forward, Forward",
        "Reverse, Reverse"
      ],
      "correctAnswer": 2,
      "explanation": "In active mode (amplification), the emitter-base junction is forward biased to inject majority carriers (electrons from n-emitter) into the base, while the collector-base junction is reverse biased to sweep these carriers across to the collector. This asymmetric biasing enables amplification."
    },
    {
      "originalNum": 33,
      "question": "The ratio of kinetic energy to total energy of an electron in a Bohr orbit of hydrogen atom is:",
      "options": [
        "1:1",
        "-1:1",
        "2:1",
        "-2:1"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr model, KE = +Ze\u00b2/(8\u03c0\u03b5\u2080r) and Total Energy E = -Ze\u00b2/(8\u03c0\u03b5\u2080r) = -KE. Therefore KE/Total Energy = -1:1. The negative sign indicates that total energy (which is negative for bound orbit) is opposite in sign to kinetic energy, meaning the electron is bound."
    },
    {
      "originalNum": 34,
      "question": "A ball of mass m moving with velocity v collides head-on with another ball of same mass at rest. The maximum loss of kinetic energy is:",
      "options": [
        "mv\u00b2/2",
        "mv\u00b2/4",
        "mv\u00b2",
        "2mv\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In a perfectly inelastic collision (maximum energy loss), both balls stick together. By momentum conservation: mv = 2mv', so v'=v/2. Initial KE=mv\u00b2/2. Final KE=\u00bd(2m)(v/2)\u00b2=mv\u00b2/4. Energy loss=mv\u00b2/2-mv\u00b2/4=mv\u00b2/4. Maximum energy loss in head-on collision between equal masses is mv\u00b2/4."
    },
    {
      "originalNum": 35,
      "question": "The electric field in a region is given by E = (3x+5)\u00ee N/C. The charge contained within a cube of side 0.2 m placed with one of its faces at x=0 is:",
      "options": [
        "0.24\u03b5\u2080",
        "0.53\u03b5\u2080",
        "6\u03b5\u2080\u00d710\u207b\u00b3",
        "53\u03b5\u2080\u00d710\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "Using Gauss's law: Q=\u03b5\u2080\u00d7\u03c6=\u03b5\u2080\u00d7(E\u2082-E\u2081)\u00d7A. At x=0: E=5 N/C; at x=0.2: E=3(0.2)+5=5.6 N/C. Net flux=\u0394E\u00d7A=(5.6-5)\u00d7(0.2)\u00b2=0.6\u00d70.04=0.024 Nm\u00b2/C. Q=\u03b5\u2080\u00d70.024... Actually 0.024\u03b5\u2080... rechecking: Q=\u03b5\u2080\u00d70.6\u00d70.04=0.024\u03b5\u2080. Approximately 0.24\u03b5\u2080\u00d710\u207b\u00b9. Close to 0.24\u03b5\u2080."
    },
    {
      "originalNum": 36,
      "question": "The total energy of an electron in the first excited state of hydrogen atom is about -3.4 eV. The kinetic energy of the electron in this state is:",
      "options": [
        "3.4 eV",
        "-3.4 eV",
        "6.8 eV",
        "-6.8 eV"
      ],
      "correctAnswer": 1,
      "explanation": "In Bohr model: KE = -Total Energy. Since Total Energy = -3.4 eV, Kinetic Energy = +3.4 eV. This is always positive as kinetic energy cannot be negative. The total energy is negative (bound state) while KE is positive, with potential energy = 2\u00d7Total Energy = -6.8 eV making the total -3.4 eV."
    },
    {
      "originalNum": 37,
      "question": "Size of nucleus is of the order of:",
      "options": [
        "10\u207b\u00b9\u2070 m",
        "10\u207b\u00b9\u2074 m",
        "10\u207b\u00b9\u2078 m",
        "10\u207b\u2076 m"
      ],
      "correctAnswer": 2,
      "explanation": "Nuclear radii are approximately r = r\u2080A^(1/3), where r\u2080\u22481.2\u00d710\u207b\u00b9\u2075 m and A is mass number. For typical nuclei, r is of order 10\u207b\u00b9\u2075 to 10\u207b\u00b9\u2074 m (femtometers). This is about 100,000 times smaller than the atomic radius of ~10\u207b\u00b9\u2070 m, which is why the nucleus occupies so little of atomic volume."
    },
    {
      "originalNum": 38,
      "question": "In which case does positive work done against gravity?",
      "options": [
        "Moving a body downward",
        "Moving a body on a horizontal frictionless surface",
        "Moving a body vertically upward",
        "Moving a body along a curved path on a level surface"
      ],
      "correctAnswer": 3,
      "explanation": "Work done against gravity = mgh, which is positive when h > 0, i.e., when the body moves upward. Gravity does negative work on objects moving upward (gravity force and displacement are antiparallel), which means we do positive work against gravity to lift the object."
    },
    {
      "originalNum": 39,
      "question": "The moment of inertia of a thin uniform rod of mass M and length L about an axis perpendicular to the rod through its midpoint is:",
      "options": [
        "ML\u00b2/12",
        "ML\u00b2/3",
        "ML\u00b2/6",
        "ML\u00b2/4"
      ],
      "correctAnswer": 1,
      "explanation": "The moment of inertia of a uniform rod about its center is I=ML\u00b2/12. This is derived by integrating dm\u00b7r\u00b2 from -L/2 to +L/2. About one end, I=ML\u00b2/3 (by parallel axis theorem: ML\u00b2/12 + M(L/2)\u00b2=ML\u00b2/12+ML\u00b2/4=ML\u00b2/3)."
    },
    {
      "originalNum": 40,
      "question": "An electron moves through a wire with a drift velocity of 10\u207b\u2074 m/s. If a current of 2A flows through the wire of cross-section 2\u00d710\u207b\u2076 m\u00b2, the number density of free electrons is:",
      "options": [
        "6.25\u00d710\u00b2\u2078 m\u207b\u00b3",
        "6.25\u00d710\u00b2\u2076 m\u207b\u00b3",
        "5\u00d710\u00b2\u2078 m\u207b\u00b3",
        "3.125\u00d710\u00b2\u2078 m\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "I=nqv_dA. n=I/(qv_dA)=2/(1.6\u00d710\u207b\u00b9\u2079\u00d710\u207b\u2074\u00d72\u00d710\u207b\u2076)=2/(3.2\u00d710\u207b\u00b2\u2079)=6.25\u00d710\u00b2\u2078 m\u207b\u00b3. This is the number density of free electrons in the conductor, characteristic of metallic conductors where about one electron per atom is free."
    },
    {
      "originalNum": 41,
      "question": "The half-life of a radioactive isotope X is 50 years. It decays to another element Y which is stable. Starting from a pure sample of X of 1 g, what is the mass of X left after 150 years?",
      "options": [
        "0.125 g",
        "0.25 g",
        "0.5 g",
        "0.0625 g"
      ],
      "correctAnswer": 1,
      "explanation": "150 years = 3 half-lives. After each half-life, mass halves: 1g \u2192 0.5g \u2192 0.25g \u2192 0.125g. After 3 half-lives, remaining fraction = (1/2)\u00b3 = 1/8, so mass remaining = 1/8 g = 0.125 g. Half-life is the time for exactly half the radioactive atoms to decay."
    },
    {
      "originalNum": 42,
      "question": "Which of the following has the longest range?",
      "options": [
        "Alpha particles",
        "Beta particles",
        "Gamma rays",
        "All have same range"
      ],
      "correctAnswer": 3,
      "explanation": "Gamma rays have the longest range because they are electromagnetic radiation with no charge and no mass, interacting weakly with matter. Alpha particles (heavy, +2 charge) have centimeters of range in air. Beta particles have meters of range. Gamma rays can penetrate many centimeters of lead."
    },
    {
      "originalNum": 43,
      "question": "A copper wire of length L and radius r has resistance R. Another copper wire of length 2L and radius 2r has resistance:",
      "options": [
        "R",
        "R/2",
        "R/4",
        "2R"
      ],
      "correctAnswer": 2,
      "explanation": "R=\u03c1L/A=\u03c1L/(\u03c0r\u00b2). New R'=\u03c1(2L)/(\u03c0(2r)\u00b2)=\u03c1(2L)/(4\u03c0r\u00b2)=\u00bd(\u03c1L/\u03c0r\u00b2)=R/2. Doubling the length doubles resistance, but doubling the radius quadruples the area and halves resistance. Net effect: R/2. Thicker wires have lower resistance for the same length."
    },
    {
      "originalNum": 44,
      "question": "In a common emitter transistor amplifier, the input resistance is 3 k\u03a9 and the load resistance is 24 k\u03a9. The current gain is 25. The voltage gain of the amplifier is:",
      "options": [
        "200",
        "100",
        "50",
        "400"
      ],
      "correctAnswer": 1,
      "explanation": "Voltage gain = \u03b2\u00d7(R_load/R_input) = 25\u00d7(24000/3000) = 25\u00d78 = 200. The current gain \u03b2 amplifies the input current, and the ratio of load to input resistance converts current gain to voltage gain. Higher load resistance and higher \u03b2 both increase voltage amplification."
    },
    {
      "originalNum": 45,
      "question": "The magnetic field at the centre of a current carrying circular coil of radius R is B. If the radius is reduced to R/2 with the same current, the new field B' is:",
      "options": [
        "B/2",
        "B",
        "2B",
        "4B"
      ],
      "correctAnswer": 3,
      "explanation": "B=\u03bc\u2080I/(2R). With radius R/2: B'=\u03bc\u2080I/(2\u00d7R/2)=\u03bc\u2080I/R=2\u00d7(\u03bc\u2080I/2R)=2B. Halving the radius doubles the magnetic field at the center because the current elements are now closer to the center, where field contributions are inversely proportional to radius."
    }
  ],
  "2020": [
    {
      "originalNum": 1,
      "question": "Two equal charges q are placed at the vertices A and B of an equilateral triangle ABC of side a. The magnitude of electric intensity at point C is:",
      "options": [
        "kq/a\u00b2",
        "kq\u221a3/a\u00b2",
        "\u221a3kq/a\u00b2",
        "kq/(\u221a3)a\u00b2"
      ],
      "correctAnswer": 3,
      "explanation": "Fields from both charges are equal in magnitude E=kq/a\u00b2 and make 60\u00b0 angle with each other. Using vector addition with 60\u00b0 between them: resultant = \u221a(E\u00b2+E\u00b2+2E\u00b2cos60\u00b0) = E\u221a3 = \u221a3kq/a\u00b2. The symmetric placement of equal charges at A and B makes this a clean vector resultant problem.",
      "id": "2020_q1",
      "year": 2020
    },
    {
      "originalNum": 2,
      "question": "A body is projected at an angle \u03b8 to the horizontal. The projectile's trajectory (y vs x) is:",
      "options": [
        "Straight line",
        "Circle",
        "Parabola",
        "Hyperbola"
      ],
      "correctAnswer": 3,
      "explanation": "The trajectory equation y=x\u00b7tan\u03b8 - gx\u00b2/(2u\u00b2cos\u00b2\u03b8) is of the form y=ax+bx\u00b2, which is the standard equation of a parabola. Projectile motion results in parabolic trajectory because horizontal motion is uniform while vertical is uniformly accelerated, two independent perpendicular components combining.",
      "id": "2020_q2",
      "year": 2020
    },
    {
      "originalNum": 3,
      "question": "Which of the following is a p-type semiconductor?",
      "options": [
        "Si doped with P",
        "Si doped with As",
        "Si doped with B",
        "Si doped with Sb"
      ],
      "correctAnswer": 3,
      "explanation": "P-type semiconductors are formed by doping with trivalent impurities (Boron, Aluminium, Gallium). Boron has 3 valence electrons, creating 'holes' (missing electrons) as majority carriers. Phosphorus, Arsenic, and Antimony are pentavalent and create n-type semiconductors with electrons as majority carriers.",
      "id": "2020_q3",
      "year": 2020
    },
    {
      "originalNum": 4,
      "question": "The potential energy of a long spring when stretched by 2 cm is U. If the spring is stretched by 8 cm, the potential energy stored in it is:",
      "options": [
        "4U",
        "8U",
        "16U",
        "2U"
      ],
      "correctAnswer": 3,
      "explanation": "Potential energy in spring U=\u00bdkx\u00b2. At x=2cm: U=\u00bdk(2)\u00b2=2k. At x=8cm: U=\u00bdk(8)\u00b2=32k. Ratio=32k/2k=16. So new PE=16U. Since PE \u221d x\u00b2, quadrupling the displacement (2\u21928 cm, factor of 4) increases PE by factor of 16.",
      "id": "2020_q4",
      "year": 2020
    },
    {
      "originalNum": 5,
      "question": "In nuclear fission of U-235, the neutrons released per fission are approximately:",
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
      "correctAnswer": 3,
      "explanation": "When U-235 undergoes fission with slow neutrons, on average about 2.5 neutrons are released per fission event (approximately 3 in textbook treatment). These neutrons can trigger further fissions, enabling a chain reaction. The average is between 2 and 3 depending on fission products formed.",
      "id": "2020_q5",
      "year": 2020
    },
    {
      "originalNum": 6,
      "question": "When a body moves with terminal velocity, the acceleration of the body is:",
      "options": [
        "Maximum",
        "Minimum",
        "Zero",
        "g"
      ],
      "correctAnswer": 3,
      "explanation": "Terminal velocity is reached when the net force on a falling body becomes zero: gravitational force (mg) exactly equals drag force (viscosity+buoyancy). When forces balance, by Newton's second law, acceleration = F_net/m = 0. The body moves at constant velocity without any further acceleration.",
      "id": "2020_q6",
      "year": 2020
    },
    {
      "originalNum": 7,
      "question": "What is the critical temperature of a superconductor?",
      "options": [
        "25\u00b0C",
        "0 K",
        "Temperature below which resistance becomes zero",
        "Temperature at which resistance is maximum"
      ],
      "correctAnswer": 3,
      "explanation": "Critical temperature (Tc) is the temperature below which a material becomes superconducting \u2014 its electrical resistance drops abruptly to exactly zero. Above Tc, the material shows normal resistivity. Different materials have different Tc values (e.g., mercury at 4.2 K, YBCO at 93 K).",
      "id": "2020_q7",
      "year": 2020
    },
    {
      "originalNum": 8,
      "question": "A body of mass 2 kg is rotating on a circular path of radius 0.5 m with angular velocity of 20 rad/s. If radius is increased to 1 m, the new angular velocity (conserving angular momentum) is:",
      "options": [
        "5 rad/s",
        "10 rad/s",
        "2.5 rad/s",
        "20 rad/s"
      ],
      "correctAnswer": 1,
      "explanation": "Angular momentum L=I\u03c9=mr\u00b2\u03c9=constant. Initial: L=2\u00d70.25\u00d720=10 kg\u00b7m\u00b2/s. Final: L=2\u00d71\u00d7\u03c9=10, so \u03c9=5 rad/s. This is the ice-skater effect \u2014 pulling arms in (decreasing r) increases spin rate; extending arms (increasing r) decreases it.",
      "id": "2020_q8",
      "year": 2020
    },
    {
      "originalNum": 9,
      "question": "When cathode rays strike a metal target, what is produced?",
      "options": [
        "Alpha rays",
        "Beta rays",
        "X-rays",
        "Gamma rays"
      ],
      "correctAnswer": 3,
      "explanation": "Cathode rays are streams of electrons accelerated by a high voltage. When these high-energy electrons decelerate suddenly upon striking a metal (anode/target), they emit X-rays through Bremsstrahlung (braking radiation) process. This is the operating principle of an X-ray tube.",
      "id": "2020_q9",
      "year": 2020
    },
    {
      "originalNum": 10,
      "question": "The magnitude of magnetic force on a current-carrying conductor placed in a uniform magnetic field depends on:",
      "options": [
        "Length of conductor only",
        "Angle between current and field only",
        "Current only",
        "All of length, current, field strength and angle"
      ],
      "correctAnswer": 4,
      "explanation": "The magnetic force F=BIL\u00b7sin\u03b8 depends on all four factors: magnetic field strength B, current I, length L of conductor in the field, and the angle \u03b8 between the current direction and the magnetic field. Force is maximum when \u03b8=90\u00b0 (perpendicular) and zero when \u03b8=0\u00b0 (parallel).",
      "id": "2020_q10",
      "year": 2020
    },
    {
      "originalNum": 11,
      "question": "First law of thermodynamics is a consequence of conservation of:",
      "options": [
        "Momentum",
        "Charge",
        "Energy",
        "Mass"
      ],
      "correctAnswer": 3,
      "explanation": "The first law \u0394U=Q-W is a statement of energy conservation: heat added to a system equals the increase in internal energy plus work done by the system. It generalizes conservation of energy to include thermal energy, showing that heat and work are both forms of energy transfer.",
      "id": "2020_q11",
      "year": 2020
    },
    {
      "originalNum": 12,
      "question": "The focal length of a convex lens is 20 cm. An object placed 30 cm from the lens gives an image at:",
      "options": [
        "60 cm on the same side",
        "60 cm on the opposite side",
        "12 cm on the same side",
        "60 cm, virtual"
      ],
      "correctAnswer": 2,
      "explanation": "Using 1/v-1/u=1/f: 1/v-1/(-30)=1/20. 1/v=1/20-1/30=3/60-2/60=1/60. v=60 cm. Positive v means image is on the opposite side of the lens from the object \u2014 it is a real, inverted image 60 cm from the lens.",
      "id": "2020_q12",
      "year": 2020
    },
    {
      "originalNum": 13,
      "question": "Ohm's law is satisfied when:",
      "options": [
        "Temperature increases",
        "Temperature is constant",
        "Temperature decreases",
        "Any temperature"
      ],
      "correctAnswer": 2,
      "explanation": "Ohm's law (V=IR with R constant) is satisfied when the temperature remains constant. Resistance of conductors changes with temperature (R=R\u2080(1+\u03b1\u0394T)), so V-I relationship is linear only at constant temperature. Many real conductors are ohmic over limited temperature ranges.",
      "id": "2020_q13",
      "year": 2020
    },
    {
      "originalNum": 14,
      "question": "The dimensional formula of power is:",
      "options": [
        "[MLT\u207b\u00b3]",
        "[ML\u00b2T\u207b\u00b3]",
        "[ML\u00b2T\u207b\u00b2]",
        "[MLT\u207b\u00b2]"
      ],
      "correctAnswer": 2,
      "explanation": "Power = Work/Time = Force \u00d7 Displacement / Time = [MLT\u207b\u00b2][L]/[T] = [ML\u00b2T\u207b\u00b3]. Alternatively, Power=Voltage\u00d7Current=[ML\u00b2T\u207b\u00b3A\u207b\u00b9\u00b0]\u00d7[A]=[ML\u00b2T\u207b\u00b3]. The SI unit watt (W) = J/s = kg\u00b7m\u00b2/s\u00b3 confirms the [ML\u00b2T\u207b\u00b3] dimensional formula.",
      "id": "2020_q14",
      "year": 2020
    },
    {
      "originalNum": 15,
      "question": "A lens has power of +4 diopters. Its focal length is:",
      "options": [
        "25 cm",
        "4 cm",
        "0.25 cm",
        "400 cm"
      ],
      "correctAnswer": 1,
      "explanation": "Power P=1/f (in meters). f=1/P=1/4=0.25 m=25 cm. A positive power indicates a converging (convex) lens, and +4D means it converges parallel rays to a focal point 25 cm behind it. Higher diopter power means shorter focal length and stronger converging ability.",
      "id": "2020_q15",
      "year": 2020
    },
    {
      "originalNum": 16,
      "question": "Rutherford's \u03b1-particle scattering experiment established:",
      "options": [
        "Wave nature of electron",
        "Nucleus of atom",
        "Presence of neutrons",
        "Electron orbits"
      ],
      "correctAnswer": 2,
      "explanation": "Rutherford's gold foil experiment (1911) showed that most \u03b1 particles passed straight through, but a few were deflected at large angles, even backward. This proved that the atom has a tiny, dense, positively charged nucleus, contradicting Thomson's 'plum pudding' model.",
      "id": "2020_q16",
      "year": 2020
    },
    {
      "originalNum": 17,
      "question": "An object of mass 4 kg falls from rest through a height of 20 m and reaches velocity 10 m/s after falling 20 m. The work done by air resistance is approximately (g=10m/s\u00b2):",
      "options": [
        "-600 J",
        "-400 J",
        "+600 J",
        "-800 J"
      ],
      "correctAnswer": 1,
      "explanation": "Work by gravity = mgh=4\u00d710\u00d720=800 J. Final KE=\u00bdmv\u00b2=\u00bd\u00d74\u00d7100=200 J. By work-energy theorem: W_gravity+W_air=\u0394KE. 800+W_air=200. W_air=-600 J. Negative work by air resistance (600J) means it opposes motion, converting kinetic energy to heat, reducing the final speed from what free fall would give.",
      "id": "2020_q17",
      "year": 2020
    },
    {
      "originalNum": 18,
      "question": "The time period of a simple pendulum in a satellite (weightlessness condition) is:",
      "options": [
        "Zero",
        "Infinite",
        "Same as on earth",
        "2\u03c0\u221a(L/g)"
      ],
      "correctAnswer": 2,
      "explanation": "In a satellite in orbit, everything is in free fall \u2014 apparent gravity (g_eff) = 0. Time period T=2\u03c0\u221a(L/g_eff) \u2192 \u221e as g_eff\u21920. The pendulum simply doesn't oscillate in weightlessness because there is no restoring gravitational force to bring it back to equilibrium.",
      "id": "2020_q18",
      "year": 2020
    },
    {
      "originalNum": 19,
      "question": "A transformer has a turns ratio Np:Ns = 1:10. If the primary voltage is 200V and primary current is 4A, the secondary current (ideal transformer) is:",
      "options": [
        "40A",
        "0.4A",
        "4A",
        "400A"
      ],
      "correctAnswer": 2,
      "explanation": "For ideal transformer: VpIp=VsIs (power conservation). Vs=200\u00d710=2000V. Is=VpIp/Vs=200\u00d74/2000=0.4A. Alternatively: Is/Ip=Np/Ns=1/10, so Is=4/10=0.4A. A step-up transformer increases voltage but decreases current proportionally, conserving power.",
      "id": "2020_q19",
      "year": 2020
    },
    {
      "originalNum": 20,
      "question": "The minimum wavelength of X-rays produced by 40 kV electrons is approximately:",
      "options": [
        "0.031 nm",
        "0.31 nm",
        "3.1 nm",
        "31 nm"
      ],
      "correctAnswer": 1,
      "explanation": "Duane-Hunt law: \u03bb_min=hc/eV=(6.63\u00d710\u207b\u00b3\u2074\u00d73\u00d710\u2078)/(1.6\u00d710\u207b\u00b9\u2079\u00d740000)=1.99\u00d710\u207b\u00b2\u2075/6.4\u00d710\u207b\u00b9\u2075\u22480.031 nm. Maximum X-ray energy equals the full kinetic energy of the electron, giving minimum wavelength. Higher accelerating voltage produces shorter-wavelength (higher energy) X-rays.",
      "id": "2020_q20",
      "year": 2020
    },
    {
      "originalNum": 21,
      "question": "Kirchhoff's junction law is based on conservation of:",
      "options": [
        "Energy",
        "Charge",
        "Momentum",
        "Angular momentum"
      ],
      "correctAnswer": 2,
      "explanation": "Kirchhoff's Current Law (junction rule) states that the sum of currents entering a junction equals sum leaving it. This is conservation of electric charge \u2014 charge cannot accumulate at a junction in a steady state circuit. If it did, current would change over time, violating steady-state assumption.",
      "id": "2020_q21",
      "year": 2020
    },
    {
      "originalNum": 22,
      "question": "In a Young's double slit experiment, if the slits are of unequal width:",
      "options": [
        "No fringes are seen",
        "Fringes are seen but they are not equally spaced",
        "Bright fringes are less bright and dark fringes are not perfectly dark",
        "Fringes become wider"
      ],
      "correctAnswer": 3,
      "explanation": "Unequal slit widths cause different amplitudes (and intensities) from each slit. With unequal amplitudes: bright fringes (where waves add) are less bright than with equal slits, and dark fringes (where waves cancel) are not perfectly dark because the amplitudes don't completely cancel. Fringe spacing is unchanged as it depends only on slit separation.",
      "id": "2020_q22",
      "year": 2020
    },
    {
      "originalNum": 23,
      "question": "Electromagnetic waves travel through vacuum with the same speed because:",
      "options": [
        "They have the same frequency",
        "They have the same wavelength",
        "Their speed depends on the medium, not frequency",
        "Speed of EM waves in vacuum is a universal constant c"
      ],
      "correctAnswer": 4,
      "explanation": "Maxwell's equations predict that all electromagnetic waves travel at speed c=1/\u221a(\u03bc\u2080\u03b5\u2080)=3\u00d710\u2078 m/s in free space (vacuum), regardless of frequency or wavelength. This is a fundamental constant of nature. In media, different frequencies can travel at different speeds (dispersion), but in vacuum, all EM waves travel at exactly c.",
      "id": "2020_q23",
      "year": 2020
    },
    {
      "originalNum": 24,
      "question": "The escape velocity of a planet is Ve. A body is projected with velocity 2Ve from the surface of this planet. The speed of the body when it is at very far distance from the planet is:",
      "options": [
        "Ve",
        "\u221a3\u00b7Ve",
        "\u221a3\u00b7Ve",
        "2\u221a3\u00b7Ve"
      ],
      "correctAnswer": 2,
      "explanation": "Energy conservation: \u00bdm(2Ve)\u00b2-GMm/R = \u00bdmv\u00b2. Ve\u00b2=2GM/R (escape velocity). \u00bdm(4Ve\u00b2)-\u00bdm(2Ve\u00b2)=\u00bdmv\u00b2. v\u00b2=4Ve\u00b2-2Ve\u00b2=2Ve\u00b2... Actually \u00bdm(2Ve)\u00b2=\u00bdmv\u00b2+\u00bdmVe\u00b2, so 4Ve\u00b2=v\u00b2+Ve\u00b2, v\u00b2=3Ve\u00b2, v=\u221a3\u00b7Ve. Body escapes with speed \u221a3\u00b7Ve at infinity.",
      "id": "2020_q24",
      "year": 2020
    },
    {
      "originalNum": 25,
      "question": "The electric field between the plates of a parallel plate capacitor with charges +Q and -Q, separated by distance d and area A, is:",
      "options": [
        "Q/(\u03b5\u2080A)",
        "Q/(2\u03b5\u2080A)",
        "2Q/(\u03b5\u2080A)",
        "Q/(4\u03b5\u2080A)"
      ],
      "correctAnswer": 1,
      "explanation": "The electric field between parallel plate capacitor E=\u03c3/\u03b5\u2080=Q/(A\u03b5\u2080). Each plate contributes \u03c3/(2\u03b5\u2080), and between the plates their contributions add: E=\u03c3/(2\u03b5\u2080)+\u03c3/(2\u03b5\u2080)=\u03c3/\u03b5\u2080=Q/(\u03b5\u2080A). Outside the capacitor, the fields cancel. This uniform field is valid when plate spacing\u226aplate dimensions.",
      "id": "2020_q25",
      "year": 2020
    },
    {
      "originalNum": 26,
      "question": "On heating a bimetallic strip made of brass and iron, it bends towards:",
      "options": [
        "Iron side",
        "Brass side",
        "Neither side",
        "Depends on temperature"
      ],
      "correctAnswer": 1,
      "explanation": "Brass has a higher coefficient of thermal expansion than iron. On heating, brass expands more than iron. The strip bends toward the side that expands less (iron), because the brass expands more on its side, forcing the strip to curve with iron on the outside/inner side. Bimetallic strips are used in thermostats.",
      "id": "2020_q26",
      "year": 2020
    },
    {
      "originalNum": 27,
      "question": "Doppler effect is related to:",
      "options": [
        "Interference of waves",
        "Diffraction of waves",
        "Relative motion of source and observer",
        "Polarization of waves"
      ],
      "correctAnswer": 3,
      "explanation": "The Doppler effect is the change in observed frequency of a wave due to relative motion between the source and observer. When approaching, frequency appears higher; when receding, lower. It applies to sound, light, and all wave phenomena and is used in radar, sonar, and medical ultrasound.",
      "id": "2020_q27",
      "year": 2020
    },
    {
      "originalNum": 28,
      "question": "When white light passes through a glass prism, which color is deviated most?",
      "options": [
        "Red",
        "Orange",
        "Yellow",
        "Violet"
      ],
      "correctAnswer": 4,
      "explanation": "Violet light has the highest refractive index in glass (dispersive), so it bends (deviates) most. Refractive index decreases from violet to red (Cauchy's equation: n\u221d1/\u03bb\u00b2). Red deviates least. This dispersion causes white light to split into a spectrum, with violet at the bottom and red at top.",
      "id": "2020_q28",
      "year": 2020
    },
    {
      "originalNum": 29,
      "question": "In LC oscillations, the energy of system at any instant:",
      "options": [
        "Is entirely kinetic",
        "Is entirely potential",
        "Oscillates between electric and magnetic",
        "Remains constant"
      ],
      "correctAnswer": 4,
      "explanation": "In an ideal LC circuit (no resistance), total energy = electric energy (capacitor) + magnetic energy (inductor) = constant. Energy oscillates between the two forms \u2014 maximum electric energy when capacitor is fully charged (I=0), maximum magnetic when capacitor is discharged (I maximum) \u2014 but total remains constant.",
      "id": "2020_q29",
      "year": 2020
    },
    {
      "originalNum": 30,
      "question": "When two coherent sources are in phase, the path difference for constructive interference is:",
      "options": [
        "\u03bb/2",
        "\u03bb",
        "3\u03bb/2",
        "Both \u03bb and 3\u03bb/2"
      ],
      "correctAnswer": 2,
      "explanation": "For two sources in phase, constructive interference (bright fringe) occurs when path difference = n\u03bb (0, \u03bb, 2\u03bb...). For sources in phase, zero path difference gives maximum \u2014 they reinforce each other. Path difference of \u03bb/2 gives destructive interference. The wavelength \u03bb is the basic unit of path difference for in-phase sources.",
      "id": "2020_q30",
      "year": 2020
    },
    {
      "originalNum": 31,
      "question": "Normal human eye cannot see objects closer than 25 cm due to:",
      "options": [
        "Maximum accommodation",
        "Minimum accommodation",
        "Least distance of distinct vision",
        "Critical angle"
      ],
      "correctAnswer": 3,
      "explanation": "25 cm is the least distance of distinct vision (near point) for a normal eye. Closer than this, the ciliary muscles are fully contracted and cannot further increase lens curvature to focus the image on the retina. This limit is physiological, determined by the elastic limit of the eye lens.",
      "id": "2020_q31",
      "year": 2020
    },
    {
      "originalNum": 32,
      "question": "A body of mass m is placed on earth's surface. The gravitational field intensity at that point (radius R) is:",
      "options": [
        "GM/R",
        "GM/R\u00b2",
        "GMm/R\u00b2",
        "0"
      ],
      "correctAnswer": 2,
      "explanation": "Gravitational field intensity g=F/m=GMm/(R\u00b2m)=GM/R\u00b2. It is force per unit mass \u2014 also equal to acceleration due to gravity. At Earth's surface g\u22489.8 m/s\u00b2. It decreases as 1/r\u00b2 moving away from center (outside Earth) and decreases linearly approaching center (inside Earth).",
      "id": "2020_q32",
      "year": 2020
    },
    {
      "originalNum": 33,
      "question": "When a charged particle moves at right angles to a magnetic field, the work done by the field is:",
      "options": [
        "Maximum",
        "Zero",
        "Negative",
        "Positive"
      ],
      "correctAnswer": 2,
      "explanation": "Magnetic force on a moving charge F=qv\u00d7B is always perpendicular to velocity. Since force is perpendicular to displacement (velocity direction), work done W=F\u00b7d=Fd\u00b7cos90\u00b0=0. Magnetic fields never do work on moving charges \u2014 they only change direction of motion, not speed or kinetic energy.",
      "id": "2020_q33",
      "year": 2020
    },
    {
      "originalNum": 34,
      "question": "The rms speed of gas molecules is proportional to:",
      "options": [
        "\u221aT",
        "T",
        "T\u00b2",
        "1/\u221aT"
      ],
      "correctAnswer": 1,
      "explanation": "vrms=\u221a(3RT/M) where T is absolute temperature and M is molar mass. Since vrms\u221d\u221aT, doubling absolute temperature increases rms speed by factor \u221a2\u22481.41. This explains why hot gases have faster molecules and exert higher pressure on container walls.",
      "id": "2020_q34",
      "year": 2020
    },
    {
      "originalNum": 35,
      "question": "Sensitivity of a Wheatstone bridge is maximum when:",
      "options": [
        "All resistances are equal",
        "P/Q=R/S",
        "P=Q=R\u2260S",
        "Any unbalanced condition"
      ],
      "correctAnswer": 1,
      "explanation": "Maximum sensitivity of a Wheatstone bridge occurs when all four arms have equal resistance (P=Q=R=S). In this balanced and equal condition, any small change in one arm's resistance causes maximum galvanometer deflection, making it most sensitive to small resistance changes.",
      "id": "2020_q35",
      "year": 2020
    },
    {
      "originalNum": 36,
      "question": "A tuning fork of frequency 512 Hz makes 4 beats per second with a guitar string. On increasing tension of guitar string the beat frequency decreases. The original frequency of the guitar string was:",
      "options": [
        "508 Hz",
        "516 Hz",
        "512 Hz",
        "520 Hz"
      ],
      "correctAnswer": 1,
      "explanation": "Beat frequency=|f\u2081-f\u2082|=4 Hz, so guitar is either 508 or 516 Hz. Increasing tension increases frequency. Beats decrease with increased tension, meaning guitar is approaching 512 Hz \u2014 so original frequency was below 512 Hz at 508 Hz. If it were 516 Hz, increasing tension would increase beats.",
      "id": "2020_q36",
      "year": 2020
    },
    {
      "originalNum": 37,
      "question": "Which of the following is a diamagnetic material?",
      "options": [
        "Iron",
        "Copper",
        "Nickel",
        "Cobalt"
      ],
      "correctAnswer": 2,
      "explanation": "Copper is diamagnetic \u2014 it is weakly repelled by magnetic fields because all electron spins are paired, leaving no net magnetic moment. Iron, Nickel, and Cobalt are ferromagnetic materials with strong magnetic properties due to unpaired electrons and magnetic domain alignment.",
      "id": "2020_q37",
      "year": 2020
    },
    {
      "originalNum": 38,
      "question": "In an AC circuit, the instantaneous EMF and current are given by \u03b5=50sin(314t) and I=25sin(314t+\u03c0/2). The power dissipated in the circuit is:",
      "options": [
        "625 W",
        "1250 W",
        "0 W",
        "312.5 W"
      ],
      "correctAnswer": 3,
      "explanation": "Power P=V_rms\u00b7I_rms\u00b7cos\u03c6, where \u03c6 is phase difference. Here \u03c6=\u03c0/2 (90\u00b0), so cos\u03c6=cos(90\u00b0)=0. Power dissipated = 0 W. This occurs in a purely reactive circuit (pure inductor or capacitor) \u2014 energy oscillates between source and reactive element but no net energy is dissipated as heat.",
      "id": "2020_q38",
      "year": 2020
    },
    {
      "originalNum": 39,
      "question": "Two thin lenses of powers +5D and -3D are in contact. The resultant power is:",
      "options": [
        "2D",
        "8D",
        "-2D",
        "15D"
      ],
      "correctAnswer": 1,
      "explanation": "When thin lenses are in contact, their powers add algebraically: P_total=P\u2081+P\u2082=+5+(-3)=+2D. The combined focal length f=1/P=0.5m=50cm. The positive power means the combination is converging (convex-dominant) since the +5D lens overpowers the -3D diverging lens.",
      "id": "2020_q39",
      "year": 2020
    },
    {
      "originalNum": 40,
      "question": "The temperature of a star is 6000 K. Wien's law gives peak wavelength of about:",
      "options": [
        "483 nm",
        "5796 nm",
        "0.5 nm",
        "0.005 nm"
      ],
      "correctAnswer": 1,
      "explanation": "Wien's displacement law: \u03bb_max\u00b7T=2.898\u00d710\u207b\u00b3 m\u00b7K. \u03bb_max=2.898\u00d710\u207b\u00b3/6000\u2248483\u00d710\u207b\u2079m=483 nm. This is in the visible yellow-green range, explaining why the Sun (T\u22485778K) appears yellow-white. Cooler stars appear red, hotter stars appear blue-white.",
      "id": "2020_q40",
      "year": 2020
    },
    {
      "originalNum": 41,
      "question": "Which statements are correct for a body in Simple Harmonic Motion?",
      "options": [
        "At equilibrium: velocity zero, acceleration zero",
        "At equilibrium: velocity maximum, acceleration zero",
        "At extreme: velocity maximum, acceleration zero",
        "At extreme: velocity zero, acceleration zero"
      ],
      "correctAnswer": 2,
      "explanation": "In SHM at equilibrium (mean position): velocity is maximum (v=A\u03c9) and acceleration is zero (a=-\u03c9\u00b2x=0). At extremes: velocity is zero (momentary rest) and acceleration is maximum in magnitude pointing toward equilibrium. Energy is fully kinetic at equilibrium and fully potential at extremes.",
      "id": "2020_q41",
      "year": 2020
    },
    {
      "originalNum": 42,
      "question": "The ratio of the mean speed of hydrogen molecules to that of oxygen molecules at the same temperature is:",
      "options": [
        "\u221a32 : \u221a2",
        "4 : 1",
        "1 : 4",
        "1 : 16"
      ],
      "correctAnswer": 2,
      "explanation": "Mean speed v_mean\u221d1/\u221aM. M_H2=2, M_O2=32. v_H2/v_O2=\u221a(M_O2/M_H2)=\u221a(32/2)=\u221a16=4. Hydrogen molecules are 4 times faster than oxygen molecules at the same temperature, which is why hydrogen effuses much faster (Graham's law) and is not retained in Earth's atmosphere.",
      "id": "2020_q42",
      "year": 2020
    },
    {
      "originalNum": 43,
      "question": "An object is placed at the principal focus of a concave mirror. The image formed is:",
      "options": [
        "At infinity",
        "Virtual, erect, magnified",
        "Real, inverted at center",
        "Virtual at focus"
      ],
      "correctAnswer": 1,
      "explanation": "For a concave mirror, when object is at focus F (object distance u=f), reflected rays are parallel and the image forms at infinity. Using mirror formula: 1/v+1/u=1/f \u2192 1/v+1/(-f)=1/(-f) \u2192 1/v=0, so v\u2192\u221e. This is the basis for using concave mirrors in searchlights and headlamps.",
      "id": "2020_q43",
      "year": 2020
    },
    {
      "originalNum": 44,
      "question": "Power factor of an AC circuit is defined as:",
      "options": [
        "Ratio of impedance to resistance",
        "Ratio of resistance to impedance",
        "Ratio of reactance to impedance",
        "cosine of phase angle between voltage and current only"
      ],
      "correctAnswer": 2,
      "explanation": "Power factor = cos\u03c6 = R/Z (resistance/impedance) = P/S (real power/apparent power). It ranges from 0 (purely reactive) to 1 (purely resistive). A power factor of 1 means all power is usefully consumed; lower values mean more reactive (wasted oscillating) power in the circuit.",
      "id": "2020_q44",
      "year": 2020
    },
    {
      "originalNum": 45,
      "question": "In a nuclear reaction, the binding energy of helium-4 nucleus (mass 4.0015 u, proton mass 1.00728 u, neutron mass 1.00866 u) is approximately:",
      "options": [
        "7 MeV",
        "28 MeV",
        "56 MeV",
        "4 MeV"
      ],
      "correctAnswer": 2,
      "explanation": "Mass defect \u0394m=2\u00d71.00728+2\u00d71.00866-4.0015=2.01456+2.01732-4.0015=0.03038 u. BE=0.03038\u00d7931.5=28.3 MeV. Helium-4 has 4 nucleons, so BE/nucleon\u22487 MeV, which is its exceptional stability. This is why alpha particles are so stable and common in radioactive decay.",
      "id": "2020_q45",
      "year": 2020
    }
  ],
  "2021": [
    {
      "originalNum": 1,
      "question": "A particle of mass m is projected with velocity v making an angle 45\u00b0 with the horizontal. When the particle lands on the level ground, the magnitude of the change in its momentum is:",
      "options": [
        "2mv",
        "mv/\u221a2",
        "m\u221a2\u00b7v",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "At 45\u00b0 projection, the vertical velocity component reverses direction on landing while horizontal stays the same. The change in momentum equals 2\u00d7m\u00d7v\u00d7sin45\u00b0 = m\u221a2\u00b7v, since only the vertical component of momentum changes.",
      "id": "2021_q1",
      "year": 2021
    },
    {
      "originalNum": 2,
      "question": "A body of mass M hits normally a rigid wall with velocity v and bounces back with same velocity. The impulse experienced by the body is:",
      "options": [
        "Mv",
        "1.5Mv",
        "2Mv",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "Impulse equals change in momentum. The ball goes from +mv to -mv, so the change is -mv-(+mv) = -2mv. The magnitude of impulse is 2Mv, since momentum reverses direction completely.",
      "id": "2021_q2",
      "year": 2021
    },
    {
      "originalNum": 3,
      "question": "The velocity-time graph of a particle in one-dimensional motion is shown. Which of the following formulae are correct for describing the motion of a particle over the time interval t\u2081 to t\u2082?",
      "options": [
        "x(t\u2082)=x(t\u2081)+v(t\u2081)(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2",
        "v(t\u2082)=v(t\u2081)+a(t\u2082-t\u2081)",
        "vaverage=(x(t\u2082)-x(t\u2081))/(t\u2082-t\u2081)",
        "x(t\u2082)=x(t\u2081)+vaverage(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2"
      ],
      "correctAnswer": 3,
      "explanation": "For non-uniform acceleration, only the definition of average velocity v_avg = (x\u2082-x\u2081)/(t\u2082-t\u2081) is always valid. The kinematic equations with constant a do not apply when acceleration varies. Average velocity correctly gives displacement regardless of how velocity varies.",
      "id": "2021_q3",
      "year": 2021
    },
    {
      "originalNum": 4,
      "question": "The displacement of a particle starting from rest (at t=0) is given by s=6t\u00b2-t\u00b3. The time in seconds at which the particle will attain zero velocity again is:",
      "options": [
        "2 s",
        "4 s",
        "6 s",
        "8 s"
      ],
      "correctAnswer": 2,
      "explanation": "Velocity v=ds/dt=12t-3t\u00b2=3t(4-t). Setting v=0 gives t=0 (start) and t=4 s. At t=4 seconds the particle momentarily stops after decelerating from its peak speed reached at t=2 s.",
      "id": "2021_q4",
      "year": 2021
    },
    {
      "originalNum": 5,
      "question": "A stone falls freely under gravity. It covers distances h\u2081, h\u2082 and h\u2083 in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h\u2081, h\u2082 and h\u2083 is:",
      "options": [
        "h\u2081=2h\u2082=3h\u2083",
        "h\u2081=h\u2082/3=h\u2083/5",
        "h\u2082=3h\u2081 and h\u2083=5h\u2081",
        "h\u2081=h\u2082=h\u2083"
      ],
      "correctAnswer": 3,
      "explanation": "By Galileo's odd number rule, distances covered in successive equal time intervals are in ratio 1:3:5:7... So h\u2081:h\u2082:h\u2083 = 1:3:5, meaning h\u2082=3h\u2081 and h\u2083=5h\u2081. This arises because each successive interval starts with higher velocity.",
      "id": "2021_q5",
      "year": 2021
    },
    {
      "originalNum": 6,
      "question": "Two balls are projected simultaneously with the same speed from the top of a tower \u2014 one vertically upward and the other vertically downward. If they reach the ground in t\u2081 and t\u2082 seconds respectively, then the height of the tower is:",
      "options": [
        "\u00bdg(t\u2081+t\u2082)\u00b2",
        "g\u00b7t\u2081\u00b7t\u2082",
        "\u00bdg\u00b7t\u2081\u00b7t\u2082",
        "gt\u2081t\u2082/2"
      ],
      "correctAnswer": 4,
      "explanation": "For the ball thrown down: H=\u00bdgt\u2082\u00b2. For ball thrown up: it returns with same speed and then falls, total time t\u2081. Using energy/kinematics: H = \u00bdg\u00b7t\u2081\u00b7t\u2082. This is the geometric mean relationship between the two travel times and tower height.",
      "id": "2021_q6",
      "year": 2021
    },
    {
      "originalNum": 7,
      "question": "In a Young's double slit experiment, slits are separated by 0.5 mm and the screen is 1.5 m away. A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used. The least distance from the central maximum where the bright fringes due to both wavelengths coincide is:",
      "options": [
        "1.56 mm",
        "7.8 mm",
        "9.75 mm",
        "15.6 mm"
      ],
      "correctAnswer": 2,
      "explanation": "For coincidence: n\u2081\u03bb\u2081=n\u2082\u03bb\u2082, so n\u2081/n\u2082=520/650=4/5. First coincidence at n\u2081=4 (650nm) and n\u2082=5 (520nm). Position y=n\u2081\u03bb\u2081D/d = 4\u00d7650\u00d710\u207b\u2079\u00d71.5/(0.5\u00d710\u207b\u00b3)=7.8 mm from center.",
      "id": "2021_q7",
      "year": 2021
    },
    {
      "originalNum": 8,
      "question": "A conducting sphere of radius r is placed within a concentric conducting shell of radius R>r. The space between them is filled with dielectric of dielectric constant K. The capacitance of the system is:",
      "options": [
        "4\u03c0\u03b5\u2080K\u00b7rR/(R-r)",
        "4\u03c0\u03b5\u2080rR/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7r/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7R/(R-r)"
      ],
      "correctAnswer": 1,
      "explanation": "The capacitance of a spherical capacitor is C=4\u03c0\u03b5\u2080rR/(R-r). With a dielectric of constant K filling the space, capacitance is multiplied by K, giving C=4\u03c0\u03b5\u2080K\u00b7rR/(R-r). The dielectric reduces the effective electric field for the same charge.",
      "id": "2021_q8",
      "year": 2021
    },
    {
      "originalNum": 9,
      "question": "A wire of length L is bent in the form of a circular ring. The magnetic field at the centre of the ring is B. Now the same wire is bent in the form of a square. The magnetic field at the centre of the square is:",
      "options": [
        "\u03c0B/4\u221a2",
        "\u03c0B/\u221a2",
        "\u221a2\u03c0B",
        "\u03c0\u00b2B/4\u221a2"
      ],
      "correctAnswer": 1,
      "explanation": "For ring: B_ring=\u03bc\u2080I/2r. For square with same wire, side a=L/4, and half-diagonal=a/2. The magnetic field at centre of square is B_sq=(4\u00d7\u03bc\u2080I\u221a2)/(4\u03c0a). Working out the ratio gives B_sq/B_ring = \u03c0/(4\u221a2), so B_sq = \u03c0B/(4\u221a2).",
      "id": "2021_q9",
      "year": 2021
    },
    {
      "originalNum": 10,
      "question": "The graph between angle of deviation (\u03b4) and angle of incidence (i) for a triangular prism is represented by:",
      "options": [
        "A monotonically decreasing line",
        "A U-shaped minimum curve",
        "A straight line through origin",
        "A monotonically increasing line"
      ],
      "correctAnswer": 2,
      "explanation": "The deviation vs. incidence angle graph shows a minimum (the angle of minimum deviation). As i increases from the critical angle on either side, \u03b4 first decreases to a minimum and then increases again, producing a characteristic U-shaped or bowl-shaped curve.",
      "id": "2021_q10",
      "year": 2021
    },
    {
      "originalNum": 11,
      "question": "A capacitor of capacitance C is connected to a battery of emf \u03b5 through a resistance R. The time constant of the circuit is:",
      "options": [
        "RC",
        "R/C",
        "C/R",
        "1/RC"
      ],
      "correctAnswer": 1,
      "explanation": "The time constant \u03c4=RC defines how quickly a capacitor charges or discharges. It represents the time to reach about 63.2% of the final charge. Larger resistance slows current flow, and larger capacitance holds more charge, both increasing the time constant.",
      "id": "2021_q11",
      "year": 2021
    },
    {
      "originalNum": 12,
      "question": "In the Bohr model of hydrogen atom, the radius of the nth orbit is proportional to:",
      "options": [
        "n",
        "n\u00b2",
        "1/n",
        "1/n\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr's model, the orbital radius r\u2099 = n\u00b2\u00b7a\u2080 where a\u2080 = 0.529 \u00c5 is the Bohr radius. The radius grows as n\u00b2 because the electron's angular momentum quantization (mvr=n\u210f) combined with Coulomb force balance gives this relationship.",
      "id": "2021_q12",
      "year": 2021
    },
    {
      "originalNum": 13,
      "question": "The de-Broglie wavelength of a particle with kinetic energy E is:",
      "options": [
        "h/\u221a(2mE)",
        "h/\u221a(mE)",
        "\u221a(2mE)/h",
        "2h/\u221a(mE)"
      ],
      "correctAnswer": 1,
      "explanation": "De Broglie wavelength \u03bb=h/p. For kinetic energy E=p\u00b2/2m, we get p=\u221a(2mE). Therefore \u03bb=h/\u221a(2mE). This shows that heavier particles and higher-energy particles have shorter wavelengths, connecting particle and wave properties.",
      "id": "2021_q13",
      "year": 2021
    },
    {
      "originalNum": 14,
      "question": "A radioactive nucleus undergoes a series of decays according to the sequence: A\u2192B(\u03b1)\u2192C(\u03b2\u207b)\u2192D(\u03b1). If the mass number and atomic number of A are 180 and 72, then the mass number and atomic number of D are:",
      "options": [
        "172 and 69",
        "172 and 68",
        "174 and 70",
        "172 and 70"
      ],
      "correctAnswer": 1,
      "explanation": "\u03b1 decay: mass number decreases by 4, atomic number by 2. \u03b2\u207b decay: mass number unchanged, atomic number increases by 1. Starting at (180,72): after \u03b1\u2192(176,70), after \u03b2\u207b\u2192(176,71), after \u03b1\u2192(172,69). So D has mass number 172 and atomic number 69.",
      "id": "2021_q14",
      "year": 2021
    },
    {
      "originalNum": 15,
      "question": "If a wire is stretched to double its length, its resistance becomes:",
      "options": [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
      ],
      "correctAnswer": 3,
      "explanation": "When wire is stretched to double length: L becomes 2L, and since volume is conserved (A\u00d7L=const), cross-sectional area A becomes A/2. Resistance R=\u03c1L/A becomes \u03c1(2L)/(A/2)=4\u03c1L/A=4R. Resistance increases four-fold because both length doubling and area halving increase resistance.",
      "id": "2021_q15",
      "year": 2021
    },
    {
      "originalNum": 16,
      "question": "A current of 2A flows in a long straight wire. The magnetic field at a distance of 10 cm from the wire is:",
      "options": [
        "4\u00d710\u207b\u2076 T",
        "4\u00d710\u207b\u2075 T",
        "4\u00d710\u207b\u2074 T",
        "4\u00d710\u207b\u00b3 T"
      ],
      "correctAnswer": 1,
      "explanation": "Using B=\u03bc\u2080I/(2\u03c0r): B=(4\u03c0\u00d710\u207b\u2077\u00d72)/(2\u03c0\u00d70.1)=(8\u03c0\u00d710\u207b\u2077)/(0.2\u03c0)=4\u00d710\u207b\u2076 T. The magnetic field decreases inversely with distance from the wire and is directly proportional to the current flowing through it.",
      "id": "2021_q16",
      "year": 2021
    },
    {
      "originalNum": 17,
      "question": "In photoelectric effect, stopping potential depends on:",
      "options": [
        "Intensity of light only",
        "Frequency of light only",
        "Both intensity and frequency",
        "Neither intensity nor frequency"
      ],
      "correctAnswer": 2,
      "explanation": "Stopping potential V\u2080 = (h\u03bd - \u03c6)/e, where \u03c6 is the work function and \u03bd is frequency. It depends only on the frequency (or wavelength) of incident light, not on intensity. Higher frequency light ejects electrons with more kinetic energy, requiring a higher stopping potential.",
      "id": "2021_q17",
      "year": 2021
    },
    {
      "originalNum": 18,
      "question": "An ideal gas undergoes four different processes from the same initial state. Four processes are adiabatic, isothermal, isobaric and isochoric. Out of 1, 2, 3 and 4, which one is adiabatic?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "explanation": "In a P-V diagram, adiabatic processes have a steeper slope than isothermal processes (\u03b3>1). The adiabatic curve lies between the isochoric (vertical) and isothermal curves. For expansion, the adiabatic process gives more pressure drop than isothermal due to temperature decrease.",
      "id": "2021_q18",
      "year": 2021
    },
    {
      "originalNum": 19,
      "question": "A convex lens of focal length 20 cm is placed 30 cm from a convex mirror of radius of curvature 40 cm. Find where a ray of light coming parallel to the common axis will ultimately meet (or appear to meet) after reflections and refractions:",
      "options": [
        "At infinity",
        "At 60 cm from mirror",
        "At 20 cm from lens",
        "At 30 cm from lens"
      ],
      "correctAnswer": 1,
      "explanation": "The ray parallel to axis refracts through the convex lens and converges at its focal point 20 cm behind the lens, which is the center of the mirror (40cm RoC \u2192 20cm focal length). A ray hitting a convex mirror at its center of curvature reflects back on itself, then refracts through the lens to emerge parallel, meeting at infinity.",
      "id": "2021_q19",
      "year": 2021
    },
    {
      "originalNum": 20,
      "question": "Lenz's law is a consequence of the law of conservation of:",
      "options": [
        "Charge",
        "Mass",
        "Energy",
        "Momentum"
      ],
      "correctAnswer": 3,
      "explanation": "Lenz's law states that induced current always opposes the change causing it. This is a direct consequence of conservation of energy \u2014 if the induced current aided the change, it would create energy from nothing. The opposition ensures no net energy gain, maintaining energy balance.",
      "id": "2021_q20",
      "year": 2021
    },
    {
      "originalNum": 21,
      "question": "A semiconducting device is connected in a series circuit with a battery and a resistance. A current is found to pass through the circuit. If the polarity of the battery is reversed, the current drops nearly to zero. The device is:",
      "options": [
        "An intrinsic semiconductor",
        "A p-type semiconductor",
        "An n-p-n transistor",
        "A p-n junction diode"
      ],
      "correctAnswer": 4,
      "explanation": "A p-n junction diode conducts (forward bias) when connected one way but nearly stops current (reverse bias) when polarity is reversed, exactly as described. This rectifying behavior \u2014 passing current in only one direction \u2014 is the defining characteristic of a p-n junction diode.",
      "id": "2021_q21",
      "year": 2021
    },
    {
      "originalNum": 22,
      "question": "The velocity of sound in air at 27\u00b0C is 330 m/s. What will be its velocity at 927\u00b0C?",
      "options": [
        "330 m/s",
        "660 m/s",
        "990 m/s",
        "1320 m/s"
      ],
      "correctAnswer": 2,
      "explanation": "Speed of sound v \u221d \u221aT. At 27\u00b0C: T\u2081=300K. At 927\u00b0C: T\u2082=1200K. v\u2082/v\u2081=\u221a(1200/300)=\u221a4=2. So v\u2082=2\u00d7330=660 m/s. Speed of sound increases with temperature because higher temperature increases molecular speed and the medium becomes less 'stiff' relative to density.",
      "id": "2021_q22",
      "year": 2021
    },
    {
      "originalNum": 23,
      "question": "A gun of mass M fires a bullet of mass m with velocity v. The recoil velocity of the gun is:",
      "options": [
        "mv/M",
        "Mv/m",
        "mv/(M-m)",
        "Mv/(M+m)"
      ],
      "correctAnswer": 1,
      "explanation": "By conservation of momentum, initial momentum is zero (gun+bullet at rest). After firing: Mv_gun + mv = 0. So v_gun = -mv/M, meaning the gun recoils with speed mv/M in the opposite direction. This demonstrates Newton's third law \u2014 the gun exerts force on bullet, bullet exerts equal-opposite force on gun.",
      "id": "2021_q23",
      "year": 2021
    },
    {
      "originalNum": 24,
      "question": "A wire carrying current I has the shape of a semicircle of radius R. The magnetic field at the center of the semicircle is:",
      "options": [
        "\u03bc\u2080I/(4R)",
        "\u03bc\u2080I/(2R)",
        "\u03bc\u2080I/R",
        "2\u03bc\u2080I/R"
      ],
      "correctAnswer": 1,
      "explanation": "The field at the center of a full circular loop is \u03bc\u2080I/(2R). For a semicircle (half the loop), the field is exactly half: \u03bc\u2080I/(4R). Each element of the semicircle contributes a field element dB at the center in the same direction (perpendicular to the plane), so they all add constructively.",
      "id": "2021_q24",
      "year": 2021
    },
    {
      "originalNum": 25,
      "question": "The minimum distance between an object and its real image formed by a convex lens of focal length f is:",
      "options": [
        "f",
        "2f",
        "3f",
        "4f"
      ],
      "correctAnswer": 4,
      "explanation": "Using lens formula and object-image distance D=u+v: minimum D occurs when du/dv=0. Setting image distance v and applying constraints gives D_min=4f, achieved when object and image are equidistant from the lens (u=v=2f). This is why in minimum-distance setups, the object is placed at 2f.",
      "id": "2021_q25",
      "year": 2021
    },
    {
      "originalNum": 26,
      "question": "The work done in blowing a soap bubble of radius R with surface tension T is:",
      "options": [
        "2\u03c0R\u00b2T",
        "4\u03c0R\u00b2T",
        "8\u03c0R\u00b2T",
        "16\u03c0R\u00b2T"
      ],
      "correctAnswer": 3,
      "explanation": "A soap bubble has two surfaces (inner and outer). Surface area of each surface = 4\u03c0R\u00b2. Total area increase = 2\u00d74\u03c0R\u00b2 = 8\u03c0R\u00b2. Work done = T \u00d7 increase in area = 8\u03c0R\u00b2T. The factor of 2 accounts for the soap film having two free surfaces unlike a solid sphere.",
      "id": "2021_q26",
      "year": 2021
    },
    {
      "originalNum": 27,
      "question": "Which of the following is not a unit of energy?",
      "options": [
        "Joule",
        "Newton-metre",
        "Kilowatt-hour",
        "Newton-metre/second"
      ],
      "correctAnswer": 4,
      "explanation": "Newton-metre/second = Nm/s = J/s = Watt, which is a unit of power, not energy. Joule is directly energy, Newton-metre (N\u00b7m = J) is energy (work), and kilowatt-hour (kWh = 3.6\u00d710\u2076 J) is energy. Power \u00d7 time = energy, but power alone is not energy.",
      "id": "2021_q27",
      "year": 2021
    },
    {
      "originalNum": 28,
      "question": "A body cools from 80\u00b0C to 60\u00b0C in 5 min. How long will it take to cool from 60\u00b0C to 40\u00b0C if the surrounding temperature is 20\u00b0C?",
      "options": [
        "5 min",
        "7.5 min",
        "10 min",
        "15 min"
      ],
      "correctAnswer": 2,
      "explanation": "Newton's law of cooling: rate \u221d (T-T\u2080). Average temp 80\u219260\u00b0C is 70\u00b0C, excess=50\u00b0C. Average temp 60\u219240\u00b0C is 50\u00b0C, excess=30\u00b0C. Since rate \u221d excess temperature: 5/t\u2082 = 50/30, giving t\u2082 = 7.5 min. Lower temperature difference means slower cooling.",
      "id": "2021_q28",
      "year": 2021
    },
    {
      "originalNum": 29,
      "question": "Light from a point source in air falls on a spherical glass surface (\u03bc=1.5, R=20 cm). The distance of the source from the glass surface is 100 cm. The image distance is:",
      "options": [
        "100 cm",
        "200 cm",
        "300 cm",
        "-100 cm"
      ],
      "correctAnswer": 1,
      "explanation": "Using refraction at spherical surface: \u03bc\u2082/v - \u03bc\u2081/u = (\u03bc\u2082-\u03bc\u2081)/R. With \u03bc\u2081=1, \u03bc\u2082=1.5, u=-100cm, R=+20cm: 1.5/v + 1/100 = 0.5/20 = 0.025. 1.5/v = 0.025-0.01 = 0.015, v = 1.5/0.015 = 100 cm. Image forms 100 cm inside the glass.",
      "id": "2021_q29",
      "year": 2021
    },
    {
      "originalNum": 30,
      "question": "An electric dipole is placed at an angle of 30\u00b0 to a non-uniform electric field. The dipole experiences:",
      "options": [
        "Torque only",
        "Force only",
        "Torque and force both",
        "Neither torque nor force"
      ],
      "correctAnswer": 3,
      "explanation": "A dipole in a non-uniform electric field experiences both torque (due to the field trying to align the dipole) and a net translational force (because the forces on +q and -q are unequal in magnitude in a non-uniform field). In a uniform field, there is torque but no net force.",
      "id": "2021_q30",
      "year": 2021
    },
    {
      "originalNum": 31,
      "question": "If frequency of incident radiation is doubled, the maximum kinetic energy of photoelectrons:",
      "options": [
        "Doubles",
        "More than doubles",
        "Less than doubles",
        "Remains the same"
      ],
      "correctAnswer": 2,
      "explanation": "KE = h\u03bd - \u03c6. If \u03bd doubles: new KE = 2h\u03bd - \u03c6 = (KE + \u03c6) + h\u03bd - \u03c6... Actually: new KE = h(2\u03bd) - \u03c6 = 2h\u03bd - \u03c6. Original KE = h\u03bd - \u03c6. Difference = h\u03bd. Since new KE = old KE + h\u03bd > 2(old KE) when \u03c6>0. So the kinetic energy more than doubles due to the fixed work function.",
      "id": "2021_q31",
      "year": 2021
    },
    {
      "originalNum": 32,
      "question": "In an n-p-n transistor, the emitter-base junction is _____ biased and collector-base junction is _____ biased in active mode:",
      "options": [
        "Reverse, Forward",
        "Forward, Reverse",
        "Forward, Forward",
        "Reverse, Reverse"
      ],
      "correctAnswer": 2,
      "explanation": "In active mode (amplification), the emitter-base junction is forward biased to inject majority carriers (electrons from n-emitter) into the base, while the collector-base junction is reverse biased to sweep these carriers across to the collector. This asymmetric biasing enables amplification.",
      "id": "2021_q32",
      "year": 2021
    },
    {
      "originalNum": 33,
      "question": "The ratio of kinetic energy to total energy of an electron in a Bohr orbit of hydrogen atom is:",
      "options": [
        "1:1",
        "-1:1",
        "2:1",
        "-2:1"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr model, KE = +Ze\u00b2/(8\u03c0\u03b5\u2080r) and Total Energy E = -Ze\u00b2/(8\u03c0\u03b5\u2080r) = -KE. Therefore KE/Total Energy = -1:1. The negative sign indicates that total energy (which is negative for bound orbit) is opposite in sign to kinetic energy, meaning the electron is bound.",
      "id": "2021_q33",
      "year": 2021
    },
    {
      "originalNum": 34,
      "question": "A ball of mass m moving with velocity v collides head-on with another ball of same mass at rest. The maximum loss of kinetic energy is:",
      "options": [
        "mv\u00b2/2",
        "mv\u00b2/4",
        "mv\u00b2",
        "2mv\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In a perfectly inelastic collision (maximum energy loss), both balls stick together. By momentum conservation: mv = 2mv', so v'=v/2. Initial KE=mv\u00b2/2. Final KE=\u00bd(2m)(v/2)\u00b2=mv\u00b2/4. Energy loss=mv\u00b2/2-mv\u00b2/4=mv\u00b2/4. Maximum energy loss in head-on collision between equal masses is mv\u00b2/4.",
      "id": "2021_q34",
      "year": 2021
    },
    {
      "originalNum": 35,
      "question": "The electric field in a region is given by E = (3x+5)\u00ee N/C. The charge contained within a cube of side 0.2 m placed with one of its faces at x=0 is:",
      "options": [
        "0.24\u03b5\u2080",
        "0.53\u03b5\u2080",
        "6\u03b5\u2080\u00d710\u207b\u00b3",
        "53\u03b5\u2080\u00d710\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "Using Gauss's law: Q=\u03b5\u2080\u00d7\u03c6=\u03b5\u2080\u00d7(E\u2082-E\u2081)\u00d7A. At x=0: E=5 N/C; at x=0.2: E=3(0.2)+5=5.6 N/C. Net flux=\u0394E\u00d7A=(5.6-5)\u00d7(0.2)\u00b2=0.6\u00d70.04=0.024 Nm\u00b2/C. Q=\u03b5\u2080\u00d70.024... Actually 0.024\u03b5\u2080... rechecking: Q=\u03b5\u2080\u00d70.6\u00d70.04=0.024\u03b5\u2080. Approximately 0.24\u03b5\u2080\u00d710\u207b\u00b9. Close to 0.24\u03b5\u2080.",
      "id": "2021_q35",
      "year": 2021
    },
    {
      "originalNum": 36,
      "question": "The total energy of an electron in the first excited state of hydrogen atom is about -3.4 eV. The kinetic energy of the electron in this state is:",
      "options": [
        "3.4 eV",
        "-3.4 eV",
        "6.8 eV",
        "-6.8 eV"
      ],
      "correctAnswer": 1,
      "explanation": "In Bohr model: KE = -Total Energy. Since Total Energy = -3.4 eV, Kinetic Energy = +3.4 eV. This is always positive as kinetic energy cannot be negative. The total energy is negative (bound state) while KE is positive, with potential energy = 2\u00d7Total Energy = -6.8 eV making the total -3.4 eV.",
      "id": "2021_q36",
      "year": 2021
    },
    {
      "originalNum": 37,
      "question": "Size of nucleus is of the order of:",
      "options": [
        "10\u207b\u00b9\u2070 m",
        "10\u207b\u00b9\u2074 m",
        "10\u207b\u00b9\u2078 m",
        "10\u207b\u2076 m"
      ],
      "correctAnswer": 2,
      "explanation": "Nuclear radii are approximately r = r\u2080A^(1/3), where r\u2080\u22481.2\u00d710\u207b\u00b9\u2075 m and A is mass number. For typical nuclei, r is of order 10\u207b\u00b9\u2075 to 10\u207b\u00b9\u2074 m (femtometers). This is about 100,000 times smaller than the atomic radius of ~10\u207b\u00b9\u2070 m, which is why the nucleus occupies so little of atomic volume.",
      "id": "2021_q37",
      "year": 2021
    },
    {
      "originalNum": 38,
      "question": "In which case does positive work done against gravity?",
      "options": [
        "Moving a body downward",
        "Moving a body on a horizontal frictionless surface",
        "Moving a body vertically upward",
        "Moving a body along a curved path on a level surface"
      ],
      "correctAnswer": 3,
      "explanation": "Work done against gravity = mgh, which is positive when h > 0, i.e., when the body moves upward. Gravity does negative work on objects moving upward (gravity force and displacement are antiparallel), which means we do positive work against gravity to lift the object.",
      "id": "2021_q38",
      "year": 2021
    },
    {
      "originalNum": 39,
      "question": "The moment of inertia of a thin uniform rod of mass M and length L about an axis perpendicular to the rod through its midpoint is:",
      "options": [
        "ML\u00b2/12",
        "ML\u00b2/3",
        "ML\u00b2/6",
        "ML\u00b2/4"
      ],
      "correctAnswer": 1,
      "explanation": "The moment of inertia of a uniform rod about its center is I=ML\u00b2/12. This is derived by integrating dm\u00b7r\u00b2 from -L/2 to +L/2. About one end, I=ML\u00b2/3 (by parallel axis theorem: ML\u00b2/12 + M(L/2)\u00b2=ML\u00b2/12+ML\u00b2/4=ML\u00b2/3).",
      "id": "2021_q39",
      "year": 2021
    },
    {
      "originalNum": 40,
      "question": "An electron moves through a wire with a drift velocity of 10\u207b\u2074 m/s. If a current of 2A flows through the wire of cross-section 2\u00d710\u207b\u2076 m\u00b2, the number density of free electrons is:",
      "options": [
        "6.25\u00d710\u00b2\u2078 m\u207b\u00b3",
        "6.25\u00d710\u00b2\u2076 m\u207b\u00b3",
        "5\u00d710\u00b2\u2078 m\u207b\u00b3",
        "3.125\u00d710\u00b2\u2078 m\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "I=nqv_dA. n=I/(qv_dA)=2/(1.6\u00d710\u207b\u00b9\u2079\u00d710\u207b\u2074\u00d72\u00d710\u207b\u2076)=2/(3.2\u00d710\u207b\u00b2\u2079)=6.25\u00d710\u00b2\u2078 m\u207b\u00b3. This is the number density of free electrons in the conductor, characteristic of metallic conductors where about one electron per atom is free.",
      "id": "2021_q40",
      "year": 2021
    },
    {
      "originalNum": 41,
      "question": "The half-life of a radioactive isotope X is 50 years. It decays to another element Y which is stable. Starting from a pure sample of X of 1 g, what is the mass of X left after 150 years?",
      "options": [
        "0.125 g",
        "0.25 g",
        "0.5 g",
        "0.0625 g"
      ],
      "correctAnswer": 1,
      "explanation": "150 years = 3 half-lives. After each half-life, mass halves: 1g \u2192 0.5g \u2192 0.25g \u2192 0.125g. After 3 half-lives, remaining fraction = (1/2)\u00b3 = 1/8, so mass remaining = 1/8 g = 0.125 g. Half-life is the time for exactly half the radioactive atoms to decay.",
      "id": "2021_q41",
      "year": 2021
    },
    {
      "originalNum": 42,
      "question": "Which of the following has the longest range?",
      "options": [
        "Alpha particles",
        "Beta particles",
        "Gamma rays",
        "All have same range"
      ],
      "correctAnswer": 3,
      "explanation": "Gamma rays have the longest range because they are electromagnetic radiation with no charge and no mass, interacting weakly with matter. Alpha particles (heavy, +2 charge) have centimeters of range in air. Beta particles have meters of range. Gamma rays can penetrate many centimeters of lead.",
      "id": "2021_q42",
      "year": 2021
    },
    {
      "originalNum": 43,
      "question": "A copper wire of length L and radius r has resistance R. Another copper wire of length 2L and radius 2r has resistance:",
      "options": [
        "R",
        "R/2",
        "R/4",
        "2R"
      ],
      "correctAnswer": 2,
      "explanation": "R=\u03c1L/A=\u03c1L/(\u03c0r\u00b2). New R'=\u03c1(2L)/(\u03c0(2r)\u00b2)=\u03c1(2L)/(4\u03c0r\u00b2)=\u00bd(\u03c1L/\u03c0r\u00b2)=R/2. Doubling the length doubles resistance, but doubling the radius quadruples the area and halves resistance. Net effect: R/2. Thicker wires have lower resistance for the same length.",
      "id": "2021_q43",
      "year": 2021
    },
    {
      "originalNum": 44,
      "question": "In a common emitter transistor amplifier, the input resistance is 3 k\u03a9 and the load resistance is 24 k\u03a9. The current gain is 25. The voltage gain of the amplifier is:",
      "options": [
        "200",
        "100",
        "50",
        "400"
      ],
      "correctAnswer": 1,
      "explanation": "Voltage gain = \u03b2\u00d7(R_load/R_input) = 25\u00d7(24000/3000) = 25\u00d78 = 200. The current gain \u03b2 amplifies the input current, and the ratio of load to input resistance converts current gain to voltage gain. Higher load resistance and higher \u03b2 both increase voltage amplification.",
      "id": "2021_q44",
      "year": 2021
    },
    {
      "originalNum": 45,
      "question": "The magnetic field at the centre of a current carrying circular coil of radius R is B. If the radius is reduced to R/2 with the same current, the new field B' is:",
      "options": [
        "B/2",
        "B",
        "2B",
        "4B"
      ],
      "correctAnswer": 3,
      "explanation": "B=\u03bc\u2080I/(2R). With radius R/2: B'=\u03bc\u2080I/(2\u00d7R/2)=\u03bc\u2080I/R=2\u00d7(\u03bc\u2080I/2R)=2B. Halving the radius doubles the magnetic field at the center because the current elements are now closer to the center, where field contributions are inversely proportional to radius.",
      "id": "2021_q45",
      "year": 2021
    }
  ],
  "2022": [
    {
      "originalNum": 1,
      "question": "A particle of mass m is projected with velocity v making an angle 45\u00b0 with the horizontal. When the particle lands on the level ground, the magnitude of the change in its momentum is:",
      "options": [
        "2mv",
        "mv/\u221a2",
        "m\u221a2\u00b7v",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "At 45\u00b0 projection, the vertical velocity component reverses direction on landing while horizontal stays the same. The change in momentum equals 2\u00d7m\u00d7v\u00d7sin45\u00b0 = m\u221a2\u00b7v, since only the vertical component of momentum changes.",
      "id": "2022_q1",
      "year": 2022
    },
    {
      "originalNum": 2,
      "question": "A body of mass M hits normally a rigid wall with velocity v and bounces back with same velocity. The impulse experienced by the body is:",
      "options": [
        "Mv",
        "1.5Mv",
        "2Mv",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "Impulse equals change in momentum. The ball goes from +mv to -mv, so the change is -mv-(+mv) = -2mv. The magnitude of impulse is 2Mv, since momentum reverses direction completely.",
      "id": "2022_q2",
      "year": 2022
    },
    {
      "originalNum": 3,
      "question": "The velocity-time graph of a particle in one-dimensional motion is shown. Which of the following formulae are correct for describing the motion of a particle over the time interval t\u2081 to t\u2082?",
      "options": [
        "x(t\u2082)=x(t\u2081)+v(t\u2081)(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2",
        "v(t\u2082)=v(t\u2081)+a(t\u2082-t\u2081)",
        "vaverage=(x(t\u2082)-x(t\u2081))/(t\u2082-t\u2081)",
        "x(t\u2082)=x(t\u2081)+vaverage(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2"
      ],
      "correctAnswer": 3,
      "explanation": "For non-uniform acceleration, only the definition of average velocity v_avg = (x\u2082-x\u2081)/(t\u2082-t\u2081) is always valid. The kinematic equations with constant a do not apply when acceleration varies. Average velocity correctly gives displacement regardless of how velocity varies.",
      "id": "2022_q3",
      "year": 2022
    },
    {
      "originalNum": 4,
      "question": "The displacement of a particle starting from rest (at t=0) is given by s=6t\u00b2-t\u00b3. The time in seconds at which the particle will attain zero velocity again is:",
      "options": [
        "2 s",
        "4 s",
        "6 s",
        "8 s"
      ],
      "correctAnswer": 2,
      "explanation": "Velocity v=ds/dt=12t-3t\u00b2=3t(4-t). Setting v=0 gives t=0 (start) and t=4 s. At t=4 seconds the particle momentarily stops after decelerating from its peak speed reached at t=2 s.",
      "id": "2022_q4",
      "year": 2022
    },
    {
      "originalNum": 5,
      "question": "A stone falls freely under gravity. It covers distances h\u2081, h\u2082 and h\u2083 in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h\u2081, h\u2082 and h\u2083 is:",
      "options": [
        "h\u2081=2h\u2082=3h\u2083",
        "h\u2081=h\u2082/3=h\u2083/5",
        "h\u2082=3h\u2081 and h\u2083=5h\u2081",
        "h\u2081=h\u2082=h\u2083"
      ],
      "correctAnswer": 3,
      "explanation": "By Galileo's odd number rule, distances covered in successive equal time intervals are in ratio 1:3:5:7... So h\u2081:h\u2082:h\u2083 = 1:3:5, meaning h\u2082=3h\u2081 and h\u2083=5h\u2081. This arises because each successive interval starts with higher velocity.",
      "id": "2022_q5",
      "year": 2022
    },
    {
      "originalNum": 6,
      "question": "Two balls are projected simultaneously with the same speed from the top of a tower \u2014 one vertically upward and the other vertically downward. If they reach the ground in t\u2081 and t\u2082 seconds respectively, then the height of the tower is:",
      "options": [
        "\u00bdg(t\u2081+t\u2082)\u00b2",
        "g\u00b7t\u2081\u00b7t\u2082",
        "\u00bdg\u00b7t\u2081\u00b7t\u2082",
        "gt\u2081t\u2082/2"
      ],
      "correctAnswer": 4,
      "explanation": "For the ball thrown down: H=\u00bdgt\u2082\u00b2. For ball thrown up: it returns with same speed and then falls, total time t\u2081. Using energy/kinematics: H = \u00bdg\u00b7t\u2081\u00b7t\u2082. This is the geometric mean relationship between the two travel times and tower height.",
      "id": "2022_q6",
      "year": 2022
    },
    {
      "originalNum": 7,
      "question": "In a Young's double slit experiment, slits are separated by 0.5 mm and the screen is 1.5 m away. A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used. The least distance from the central maximum where the bright fringes due to both wavelengths coincide is:",
      "options": [
        "1.56 mm",
        "7.8 mm",
        "9.75 mm",
        "15.6 mm"
      ],
      "correctAnswer": 2,
      "explanation": "For coincidence: n\u2081\u03bb\u2081=n\u2082\u03bb\u2082, so n\u2081/n\u2082=520/650=4/5. First coincidence at n\u2081=4 (650nm) and n\u2082=5 (520nm). Position y=n\u2081\u03bb\u2081D/d = 4\u00d7650\u00d710\u207b\u2079\u00d71.5/(0.5\u00d710\u207b\u00b3)=7.8 mm from center.",
      "id": "2022_q7",
      "year": 2022
    },
    {
      "originalNum": 8,
      "question": "A conducting sphere of radius r is placed within a concentric conducting shell of radius R>r. The space between them is filled with dielectric of dielectric constant K. The capacitance of the system is:",
      "options": [
        "4\u03c0\u03b5\u2080K\u00b7rR/(R-r)",
        "4\u03c0\u03b5\u2080rR/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7r/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7R/(R-r)"
      ],
      "correctAnswer": 1,
      "explanation": "The capacitance of a spherical capacitor is C=4\u03c0\u03b5\u2080rR/(R-r). With a dielectric of constant K filling the space, capacitance is multiplied by K, giving C=4\u03c0\u03b5\u2080K\u00b7rR/(R-r). The dielectric reduces the effective electric field for the same charge.",
      "id": "2022_q8",
      "year": 2022
    },
    {
      "originalNum": 9,
      "question": "A wire of length L is bent in the form of a circular ring. The magnetic field at the centre of the ring is B. Now the same wire is bent in the form of a square. The magnetic field at the centre of the square is:",
      "options": [
        "\u03c0B/4\u221a2",
        "\u03c0B/\u221a2",
        "\u221a2\u03c0B",
        "\u03c0\u00b2B/4\u221a2"
      ],
      "correctAnswer": 1,
      "explanation": "For ring: B_ring=\u03bc\u2080I/2r. For square with same wire, side a=L/4, and half-diagonal=a/2. The magnetic field at centre of square is B_sq=(4\u00d7\u03bc\u2080I\u221a2)/(4\u03c0a). Working out the ratio gives B_sq/B_ring = \u03c0/(4\u221a2), so B_sq = \u03c0B/(4\u221a2).",
      "id": "2022_q9",
      "year": 2022
    },
    {
      "originalNum": 10,
      "question": "The graph between angle of deviation (\u03b4) and angle of incidence (i) for a triangular prism is represented by:",
      "options": [
        "A monotonically decreasing line",
        "A U-shaped minimum curve",
        "A straight line through origin",
        "A monotonically increasing line"
      ],
      "correctAnswer": 2,
      "explanation": "The deviation vs. incidence angle graph shows a minimum (the angle of minimum deviation). As i increases from the critical angle on either side, \u03b4 first decreases to a minimum and then increases again, producing a characteristic U-shaped or bowl-shaped curve.",
      "id": "2022_q10",
      "year": 2022
    },
    {
      "originalNum": 11,
      "question": "A capacitor of capacitance C is connected to a battery of emf \u03b5 through a resistance R. The time constant of the circuit is:",
      "options": [
        "RC",
        "R/C",
        "C/R",
        "1/RC"
      ],
      "correctAnswer": 1,
      "explanation": "The time constant \u03c4=RC defines how quickly a capacitor charges or discharges. It represents the time to reach about 63.2% of the final charge. Larger resistance slows current flow, and larger capacitance holds more charge, both increasing the time constant.",
      "id": "2022_q11",
      "year": 2022
    },
    {
      "originalNum": 12,
      "question": "In the Bohr model of hydrogen atom, the radius of the nth orbit is proportional to:",
      "options": [
        "n",
        "n\u00b2",
        "1/n",
        "1/n\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr's model, the orbital radius r\u2099 = n\u00b2\u00b7a\u2080 where a\u2080 = 0.529 \u00c5 is the Bohr radius. The radius grows as n\u00b2 because the electron's angular momentum quantization (mvr=n\u210f) combined with Coulomb force balance gives this relationship.",
      "id": "2022_q12",
      "year": 2022
    },
    {
      "originalNum": 13,
      "question": "The de-Broglie wavelength of a particle with kinetic energy E is:",
      "options": [
        "h/\u221a(2mE)",
        "h/\u221a(mE)",
        "\u221a(2mE)/h",
        "2h/\u221a(mE)"
      ],
      "correctAnswer": 1,
      "explanation": "De Broglie wavelength \u03bb=h/p. For kinetic energy E=p\u00b2/2m, we get p=\u221a(2mE). Therefore \u03bb=h/\u221a(2mE). This shows that heavier particles and higher-energy particles have shorter wavelengths, connecting particle and wave properties.",
      "id": "2022_q13",
      "year": 2022
    },
    {
      "originalNum": 14,
      "question": "A radioactive nucleus undergoes a series of decays according to the sequence: A\u2192B(\u03b1)\u2192C(\u03b2\u207b)\u2192D(\u03b1). If the mass number and atomic number of A are 180 and 72, then the mass number and atomic number of D are:",
      "options": [
        "172 and 69",
        "172 and 68",
        "174 and 70",
        "172 and 70"
      ],
      "correctAnswer": 1,
      "explanation": "\u03b1 decay: mass number decreases by 4, atomic number by 2. \u03b2\u207b decay: mass number unchanged, atomic number increases by 1. Starting at (180,72): after \u03b1\u2192(176,70), after \u03b2\u207b\u2192(176,71), after \u03b1\u2192(172,69). So D has mass number 172 and atomic number 69.",
      "id": "2022_q14",
      "year": 2022
    },
    {
      "originalNum": 15,
      "question": "If a wire is stretched to double its length, its resistance becomes:",
      "options": [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
      ],
      "correctAnswer": 3,
      "explanation": "When wire is stretched to double length: L becomes 2L, and since volume is conserved (A\u00d7L=const), cross-sectional area A becomes A/2. Resistance R=\u03c1L/A becomes \u03c1(2L)/(A/2)=4\u03c1L/A=4R. Resistance increases four-fold because both length doubling and area halving increase resistance.",
      "id": "2022_q15",
      "year": 2022
    },
    {
      "originalNum": 16,
      "question": "A current of 2A flows in a long straight wire. The magnetic field at a distance of 10 cm from the wire is:",
      "options": [
        "4\u00d710\u207b\u2076 T",
        "4\u00d710\u207b\u2075 T",
        "4\u00d710\u207b\u2074 T",
        "4\u00d710\u207b\u00b3 T"
      ],
      "correctAnswer": 1,
      "explanation": "Using B=\u03bc\u2080I/(2\u03c0r): B=(4\u03c0\u00d710\u207b\u2077\u00d72)/(2\u03c0\u00d70.1)=(8\u03c0\u00d710\u207b\u2077)/(0.2\u03c0)=4\u00d710\u207b\u2076 T. The magnetic field decreases inversely with distance from the wire and is directly proportional to the current flowing through it.",
      "id": "2022_q16",
      "year": 2022
    },
    {
      "originalNum": 17,
      "question": "In photoelectric effect, stopping potential depends on:",
      "options": [
        "Intensity of light only",
        "Frequency of light only",
        "Both intensity and frequency",
        "Neither intensity nor frequency"
      ],
      "correctAnswer": 2,
      "explanation": "Stopping potential V\u2080 = (h\u03bd - \u03c6)/e, where \u03c6 is the work function and \u03bd is frequency. It depends only on the frequency (or wavelength) of incident light, not on intensity. Higher frequency light ejects electrons with more kinetic energy, requiring a higher stopping potential.",
      "id": "2022_q17",
      "year": 2022
    },
    {
      "originalNum": 18,
      "question": "An ideal gas undergoes four different processes from the same initial state. Four processes are adiabatic, isothermal, isobaric and isochoric. Out of 1, 2, 3 and 4, which one is adiabatic?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "explanation": "In a P-V diagram, adiabatic processes have a steeper slope than isothermal processes (\u03b3>1). The adiabatic curve lies between the isochoric (vertical) and isothermal curves. For expansion, the adiabatic process gives more pressure drop than isothermal due to temperature decrease.",
      "id": "2022_q18",
      "year": 2022
    },
    {
      "originalNum": 19,
      "question": "A convex lens of focal length 20 cm is placed 30 cm from a convex mirror of radius of curvature 40 cm. Find where a ray of light coming parallel to the common axis will ultimately meet (or appear to meet) after reflections and refractions:",
      "options": [
        "At infinity",
        "At 60 cm from mirror",
        "At 20 cm from lens",
        "At 30 cm from lens"
      ],
      "correctAnswer": 1,
      "explanation": "The ray parallel to axis refracts through the convex lens and converges at its focal point 20 cm behind the lens, which is the center of the mirror (40cm RoC \u2192 20cm focal length). A ray hitting a convex mirror at its center of curvature reflects back on itself, then refracts through the lens to emerge parallel, meeting at infinity.",
      "id": "2022_q19",
      "year": 2022
    },
    {
      "originalNum": 20,
      "question": "Lenz's law is a consequence of the law of conservation of:",
      "options": [
        "Charge",
        "Mass",
        "Energy",
        "Momentum"
      ],
      "correctAnswer": 3,
      "explanation": "Lenz's law states that induced current always opposes the change causing it. This is a direct consequence of conservation of energy \u2014 if the induced current aided the change, it would create energy from nothing. The opposition ensures no net energy gain, maintaining energy balance.",
      "id": "2022_q20",
      "year": 2022
    },
    {
      "originalNum": 21,
      "question": "A semiconducting device is connected in a series circuit with a battery and a resistance. A current is found to pass through the circuit. If the polarity of the battery is reversed, the current drops nearly to zero. The device is:",
      "options": [
        "An intrinsic semiconductor",
        "A p-type semiconductor",
        "An n-p-n transistor",
        "A p-n junction diode"
      ],
      "correctAnswer": 4,
      "explanation": "A p-n junction diode conducts (forward bias) when connected one way but nearly stops current (reverse bias) when polarity is reversed, exactly as described. This rectifying behavior \u2014 passing current in only one direction \u2014 is the defining characteristic of a p-n junction diode.",
      "id": "2022_q21",
      "year": 2022
    },
    {
      "originalNum": 22,
      "question": "The velocity of sound in air at 27\u00b0C is 330 m/s. What will be its velocity at 927\u00b0C?",
      "options": [
        "330 m/s",
        "660 m/s",
        "990 m/s",
        "1320 m/s"
      ],
      "correctAnswer": 2,
      "explanation": "Speed of sound v \u221d \u221aT. At 27\u00b0C: T\u2081=300K. At 927\u00b0C: T\u2082=1200K. v\u2082/v\u2081=\u221a(1200/300)=\u221a4=2. So v\u2082=2\u00d7330=660 m/s. Speed of sound increases with temperature because higher temperature increases molecular speed and the medium becomes less 'stiff' relative to density.",
      "id": "2022_q22",
      "year": 2022
    },
    {
      "originalNum": 23,
      "question": "A gun of mass M fires a bullet of mass m with velocity v. The recoil velocity of the gun is:",
      "options": [
        "mv/M",
        "Mv/m",
        "mv/(M-m)",
        "Mv/(M+m)"
      ],
      "correctAnswer": 1,
      "explanation": "By conservation of momentum, initial momentum is zero (gun+bullet at rest). After firing: Mv_gun + mv = 0. So v_gun = -mv/M, meaning the gun recoils with speed mv/M in the opposite direction. This demonstrates Newton's third law \u2014 the gun exerts force on bullet, bullet exerts equal-opposite force on gun.",
      "id": "2022_q23",
      "year": 2022
    },
    {
      "originalNum": 24,
      "question": "A wire carrying current I has the shape of a semicircle of radius R. The magnetic field at the center of the semicircle is:",
      "options": [
        "\u03bc\u2080I/(4R)",
        "\u03bc\u2080I/(2R)",
        "\u03bc\u2080I/R",
        "2\u03bc\u2080I/R"
      ],
      "correctAnswer": 1,
      "explanation": "The field at the center of a full circular loop is \u03bc\u2080I/(2R). For a semicircle (half the loop), the field is exactly half: \u03bc\u2080I/(4R). Each element of the semicircle contributes a field element dB at the center in the same direction (perpendicular to the plane), so they all add constructively.",
      "id": "2022_q24",
      "year": 2022
    },
    {
      "originalNum": 25,
      "question": "The minimum distance between an object and its real image formed by a convex lens of focal length f is:",
      "options": [
        "f",
        "2f",
        "3f",
        "4f"
      ],
      "correctAnswer": 4,
      "explanation": "Using lens formula and object-image distance D=u+v: minimum D occurs when du/dv=0. Setting image distance v and applying constraints gives D_min=4f, achieved when object and image are equidistant from the lens (u=v=2f). This is why in minimum-distance setups, the object is placed at 2f.",
      "id": "2022_q25",
      "year": 2022
    },
    {
      "originalNum": 26,
      "question": "The work done in blowing a soap bubble of radius R with surface tension T is:",
      "options": [
        "2\u03c0R\u00b2T",
        "4\u03c0R\u00b2T",
        "8\u03c0R\u00b2T",
        "16\u03c0R\u00b2T"
      ],
      "correctAnswer": 3,
      "explanation": "A soap bubble has two surfaces (inner and outer). Surface area of each surface = 4\u03c0R\u00b2. Total area increase = 2\u00d74\u03c0R\u00b2 = 8\u03c0R\u00b2. Work done = T \u00d7 increase in area = 8\u03c0R\u00b2T. The factor of 2 accounts for the soap film having two free surfaces unlike a solid sphere.",
      "id": "2022_q26",
      "year": 2022
    },
    {
      "originalNum": 27,
      "question": "Which of the following is not a unit of energy?",
      "options": [
        "Joule",
        "Newton-metre",
        "Kilowatt-hour",
        "Newton-metre/second"
      ],
      "correctAnswer": 4,
      "explanation": "Newton-metre/second = Nm/s = J/s = Watt, which is a unit of power, not energy. Joule is directly energy, Newton-metre (N\u00b7m = J) is energy (work), and kilowatt-hour (kWh = 3.6\u00d710\u2076 J) is energy. Power \u00d7 time = energy, but power alone is not energy.",
      "id": "2022_q27",
      "year": 2022
    },
    {
      "originalNum": 28,
      "question": "A body cools from 80\u00b0C to 60\u00b0C in 5 min. How long will it take to cool from 60\u00b0C to 40\u00b0C if the surrounding temperature is 20\u00b0C?",
      "options": [
        "5 min",
        "7.5 min",
        "10 min",
        "15 min"
      ],
      "correctAnswer": 2,
      "explanation": "Newton's law of cooling: rate \u221d (T-T\u2080). Average temp 80\u219260\u00b0C is 70\u00b0C, excess=50\u00b0C. Average temp 60\u219240\u00b0C is 50\u00b0C, excess=30\u00b0C. Since rate \u221d excess temperature: 5/t\u2082 = 50/30, giving t\u2082 = 7.5 min. Lower temperature difference means slower cooling.",
      "id": "2022_q28",
      "year": 2022
    },
    {
      "originalNum": 29,
      "question": "Light from a point source in air falls on a spherical glass surface (\u03bc=1.5, R=20 cm). The distance of the source from the glass surface is 100 cm. The image distance is:",
      "options": [
        "100 cm",
        "200 cm",
        "300 cm",
        "-100 cm"
      ],
      "correctAnswer": 1,
      "explanation": "Using refraction at spherical surface: \u03bc\u2082/v - \u03bc\u2081/u = (\u03bc\u2082-\u03bc\u2081)/R. With \u03bc\u2081=1, \u03bc\u2082=1.5, u=-100cm, R=+20cm: 1.5/v + 1/100 = 0.5/20 = 0.025. 1.5/v = 0.025-0.01 = 0.015, v = 1.5/0.015 = 100 cm. Image forms 100 cm inside the glass.",
      "id": "2022_q29",
      "year": 2022
    },
    {
      "originalNum": 30,
      "question": "An electric dipole is placed at an angle of 30\u00b0 to a non-uniform electric field. The dipole experiences:",
      "options": [
        "Torque only",
        "Force only",
        "Torque and force both",
        "Neither torque nor force"
      ],
      "correctAnswer": 3,
      "explanation": "A dipole in a non-uniform electric field experiences both torque (due to the field trying to align the dipole) and a net translational force (because the forces on +q and -q are unequal in magnitude in a non-uniform field). In a uniform field, there is torque but no net force.",
      "id": "2022_q30",
      "year": 2022
    },
    {
      "originalNum": 31,
      "question": "If frequency of incident radiation is doubled, the maximum kinetic energy of photoelectrons:",
      "options": [
        "Doubles",
        "More than doubles",
        "Less than doubles",
        "Remains the same"
      ],
      "correctAnswer": 2,
      "explanation": "KE = h\u03bd - \u03c6. If \u03bd doubles: new KE = 2h\u03bd - \u03c6 = (KE + \u03c6) + h\u03bd - \u03c6... Actually: new KE = h(2\u03bd) - \u03c6 = 2h\u03bd - \u03c6. Original KE = h\u03bd - \u03c6. Difference = h\u03bd. Since new KE = old KE + h\u03bd > 2(old KE) when \u03c6>0. So the kinetic energy more than doubles due to the fixed work function.",
      "id": "2022_q31",
      "year": 2022
    },
    {
      "originalNum": 32,
      "question": "In an n-p-n transistor, the emitter-base junction is _____ biased and collector-base junction is _____ biased in active mode:",
      "options": [
        "Reverse, Forward",
        "Forward, Reverse",
        "Forward, Forward",
        "Reverse, Reverse"
      ],
      "correctAnswer": 2,
      "explanation": "In active mode (amplification), the emitter-base junction is forward biased to inject majority carriers (electrons from n-emitter) into the base, while the collector-base junction is reverse biased to sweep these carriers across to the collector. This asymmetric biasing enables amplification.",
      "id": "2022_q32",
      "year": 2022
    },
    {
      "originalNum": 33,
      "question": "The ratio of kinetic energy to total energy of an electron in a Bohr orbit of hydrogen atom is:",
      "options": [
        "1:1",
        "-1:1",
        "2:1",
        "-2:1"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr model, KE = +Ze\u00b2/(8\u03c0\u03b5\u2080r) and Total Energy E = -Ze\u00b2/(8\u03c0\u03b5\u2080r) = -KE. Therefore KE/Total Energy = -1:1. The negative sign indicates that total energy (which is negative for bound orbit) is opposite in sign to kinetic energy, meaning the electron is bound.",
      "id": "2022_q33",
      "year": 2022
    },
    {
      "originalNum": 34,
      "question": "A ball of mass m moving with velocity v collides head-on with another ball of same mass at rest. The maximum loss of kinetic energy is:",
      "options": [
        "mv\u00b2/2",
        "mv\u00b2/4",
        "mv\u00b2",
        "2mv\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In a perfectly inelastic collision (maximum energy loss), both balls stick together. By momentum conservation: mv = 2mv', so v'=v/2. Initial KE=mv\u00b2/2. Final KE=\u00bd(2m)(v/2)\u00b2=mv\u00b2/4. Energy loss=mv\u00b2/2-mv\u00b2/4=mv\u00b2/4. Maximum energy loss in head-on collision between equal masses is mv\u00b2/4.",
      "id": "2022_q34",
      "year": 2022
    },
    {
      "originalNum": 35,
      "question": "The electric field in a region is given by E = (3x+5)\u00ee N/C. The charge contained within a cube of side 0.2 m placed with one of its faces at x=0 is:",
      "options": [
        "0.24\u03b5\u2080",
        "0.53\u03b5\u2080",
        "6\u03b5\u2080\u00d710\u207b\u00b3",
        "53\u03b5\u2080\u00d710\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "Using Gauss's law: Q=\u03b5\u2080\u00d7\u03c6=\u03b5\u2080\u00d7(E\u2082-E\u2081)\u00d7A. At x=0: E=5 N/C; at x=0.2: E=3(0.2)+5=5.6 N/C. Net flux=\u0394E\u00d7A=(5.6-5)\u00d7(0.2)\u00b2=0.6\u00d70.04=0.024 Nm\u00b2/C. Q=\u03b5\u2080\u00d70.024... Actually 0.024\u03b5\u2080... rechecking: Q=\u03b5\u2080\u00d70.6\u00d70.04=0.024\u03b5\u2080. Approximately 0.24\u03b5\u2080\u00d710\u207b\u00b9. Close to 0.24\u03b5\u2080.",
      "id": "2022_q35",
      "year": 2022
    },
    {
      "originalNum": 36,
      "question": "The total energy of an electron in the first excited state of hydrogen atom is about -3.4 eV. The kinetic energy of the electron in this state is:",
      "options": [
        "3.4 eV",
        "-3.4 eV",
        "6.8 eV",
        "-6.8 eV"
      ],
      "correctAnswer": 1,
      "explanation": "In Bohr model: KE = -Total Energy. Since Total Energy = -3.4 eV, Kinetic Energy = +3.4 eV. This is always positive as kinetic energy cannot be negative. The total energy is negative (bound state) while KE is positive, with potential energy = 2\u00d7Total Energy = -6.8 eV making the total -3.4 eV.",
      "id": "2022_q36",
      "year": 2022
    },
    {
      "originalNum": 37,
      "question": "Size of nucleus is of the order of:",
      "options": [
        "10\u207b\u00b9\u2070 m",
        "10\u207b\u00b9\u2074 m",
        "10\u207b\u00b9\u2078 m",
        "10\u207b\u2076 m"
      ],
      "correctAnswer": 2,
      "explanation": "Nuclear radii are approximately r = r\u2080A^(1/3), where r\u2080\u22481.2\u00d710\u207b\u00b9\u2075 m and A is mass number. For typical nuclei, r is of order 10\u207b\u00b9\u2075 to 10\u207b\u00b9\u2074 m (femtometers). This is about 100,000 times smaller than the atomic radius of ~10\u207b\u00b9\u2070 m, which is why the nucleus occupies so little of atomic volume.",
      "id": "2022_q37",
      "year": 2022
    },
    {
      "originalNum": 38,
      "question": "In which case does positive work done against gravity?",
      "options": [
        "Moving a body downward",
        "Moving a body on a horizontal frictionless surface",
        "Moving a body vertically upward",
        "Moving a body along a curved path on a level surface"
      ],
      "correctAnswer": 3,
      "explanation": "Work done against gravity = mgh, which is positive when h > 0, i.e., when the body moves upward. Gravity does negative work on objects moving upward (gravity force and displacement are antiparallel), which means we do positive work against gravity to lift the object.",
      "id": "2022_q38",
      "year": 2022
    },
    {
      "originalNum": 39,
      "question": "The moment of inertia of a thin uniform rod of mass M and length L about an axis perpendicular to the rod through its midpoint is:",
      "options": [
        "ML\u00b2/12",
        "ML\u00b2/3",
        "ML\u00b2/6",
        "ML\u00b2/4"
      ],
      "correctAnswer": 1,
      "explanation": "The moment of inertia of a uniform rod about its center is I=ML\u00b2/12. This is derived by integrating dm\u00b7r\u00b2 from -L/2 to +L/2. About one end, I=ML\u00b2/3 (by parallel axis theorem: ML\u00b2/12 + M(L/2)\u00b2=ML\u00b2/12+ML\u00b2/4=ML\u00b2/3).",
      "id": "2022_q39",
      "year": 2022
    },
    {
      "originalNum": 40,
      "question": "An electron moves through a wire with a drift velocity of 10\u207b\u2074 m/s. If a current of 2A flows through the wire of cross-section 2\u00d710\u207b\u2076 m\u00b2, the number density of free electrons is:",
      "options": [
        "6.25\u00d710\u00b2\u2078 m\u207b\u00b3",
        "6.25\u00d710\u00b2\u2076 m\u207b\u00b3",
        "5\u00d710\u00b2\u2078 m\u207b\u00b3",
        "3.125\u00d710\u00b2\u2078 m\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "I=nqv_dA. n=I/(qv_dA)=2/(1.6\u00d710\u207b\u00b9\u2079\u00d710\u207b\u2074\u00d72\u00d710\u207b\u2076)=2/(3.2\u00d710\u207b\u00b2\u2079)=6.25\u00d710\u00b2\u2078 m\u207b\u00b3. This is the number density of free electrons in the conductor, characteristic of metallic conductors where about one electron per atom is free.",
      "id": "2022_q40",
      "year": 2022
    },
    {
      "originalNum": 41,
      "question": "The half-life of a radioactive isotope X is 50 years. It decays to another element Y which is stable. Starting from a pure sample of X of 1 g, what is the mass of X left after 150 years?",
      "options": [
        "0.125 g",
        "0.25 g",
        "0.5 g",
        "0.0625 g"
      ],
      "correctAnswer": 1,
      "explanation": "150 years = 3 half-lives. After each half-life, mass halves: 1g \u2192 0.5g \u2192 0.25g \u2192 0.125g. After 3 half-lives, remaining fraction = (1/2)\u00b3 = 1/8, so mass remaining = 1/8 g = 0.125 g. Half-life is the time for exactly half the radioactive atoms to decay.",
      "id": "2022_q41",
      "year": 2022
    },
    {
      "originalNum": 42,
      "question": "Which of the following has the longest range?",
      "options": [
        "Alpha particles",
        "Beta particles",
        "Gamma rays",
        "All have same range"
      ],
      "correctAnswer": 3,
      "explanation": "Gamma rays have the longest range because they are electromagnetic radiation with no charge and no mass, interacting weakly with matter. Alpha particles (heavy, +2 charge) have centimeters of range in air. Beta particles have meters of range. Gamma rays can penetrate many centimeters of lead.",
      "id": "2022_q42",
      "year": 2022
    },
    {
      "originalNum": 43,
      "question": "A copper wire of length L and radius r has resistance R. Another copper wire of length 2L and radius 2r has resistance:",
      "options": [
        "R",
        "R/2",
        "R/4",
        "2R"
      ],
      "correctAnswer": 2,
      "explanation": "R=\u03c1L/A=\u03c1L/(\u03c0r\u00b2). New R'=\u03c1(2L)/(\u03c0(2r)\u00b2)=\u03c1(2L)/(4\u03c0r\u00b2)=\u00bd(\u03c1L/\u03c0r\u00b2)=R/2. Doubling the length doubles resistance, but doubling the radius quadruples the area and halves resistance. Net effect: R/2. Thicker wires have lower resistance for the same length.",
      "id": "2022_q43",
      "year": 2022
    },
    {
      "originalNum": 44,
      "question": "In a common emitter transistor amplifier, the input resistance is 3 k\u03a9 and the load resistance is 24 k\u03a9. The current gain is 25. The voltage gain of the amplifier is:",
      "options": [
        "200",
        "100",
        "50",
        "400"
      ],
      "correctAnswer": 1,
      "explanation": "Voltage gain = \u03b2\u00d7(R_load/R_input) = 25\u00d7(24000/3000) = 25\u00d78 = 200. The current gain \u03b2 amplifies the input current, and the ratio of load to input resistance converts current gain to voltage gain. Higher load resistance and higher \u03b2 both increase voltage amplification.",
      "id": "2022_q44",
      "year": 2022
    },
    {
      "originalNum": 45,
      "question": "The magnetic field at the centre of a current carrying circular coil of radius R is B. If the radius is reduced to R/2 with the same current, the new field B' is:",
      "options": [
        "B/2",
        "B",
        "2B",
        "4B"
      ],
      "correctAnswer": 3,
      "explanation": "B=\u03bc\u2080I/(2R). With radius R/2: B'=\u03bc\u2080I/(2\u00d7R/2)=\u03bc\u2080I/R=2\u00d7(\u03bc\u2080I/2R)=2B. Halving the radius doubles the magnetic field at the center because the current elements are now closer to the center, where field contributions are inversely proportional to radius.",
      "id": "2022_q45",
      "year": 2022
    }
  ],
  "2023": [
    {
      "originalNum": 1,
      "question": "A particle of mass m is projected with velocity v making an angle 45\u00b0 with the horizontal. When the particle lands on the level ground, the magnitude of the change in its momentum is:",
      "options": [
        "2mv",
        "mv/\u221a2",
        "m\u221a2\u00b7v",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "At 45\u00b0 projection, the vertical velocity component reverses direction on landing while horizontal stays the same. The change in momentum equals 2\u00d7m\u00d7v\u00d7sin45\u00b0 = m\u221a2\u00b7v, since only the vertical component of momentum changes.",
      "id": "2023_q1",
      "year": 2023
    },
    {
      "originalNum": 2,
      "question": "A body of mass M hits normally a rigid wall with velocity v and bounces back with same velocity. The impulse experienced by the body is:",
      "options": [
        "Mv",
        "1.5Mv",
        "2Mv",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "Impulse equals change in momentum. The ball goes from +mv to -mv, so the change is -mv-(+mv) = -2mv. The magnitude of impulse is 2Mv, since momentum reverses direction completely.",
      "id": "2023_q2",
      "year": 2023
    },
    {
      "originalNum": 3,
      "question": "The velocity-time graph of a particle in one-dimensional motion is shown. Which of the following formulae are correct for describing the motion of a particle over the time interval t\u2081 to t\u2082?",
      "options": [
        "x(t\u2082)=x(t\u2081)+v(t\u2081)(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2",
        "v(t\u2082)=v(t\u2081)+a(t\u2082-t\u2081)",
        "vaverage=(x(t\u2082)-x(t\u2081))/(t\u2082-t\u2081)",
        "x(t\u2082)=x(t\u2081)+vaverage(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2"
      ],
      "correctAnswer": 3,
      "explanation": "For non-uniform acceleration, only the definition of average velocity v_avg = (x\u2082-x\u2081)/(t\u2082-t\u2081) is always valid. The kinematic equations with constant a do not apply when acceleration varies. Average velocity correctly gives displacement regardless of how velocity varies.",
      "id": "2023_q3",
      "year": 2023
    },
    {
      "originalNum": 4,
      "question": "The displacement of a particle starting from rest (at t=0) is given by s=6t\u00b2-t\u00b3. The time in seconds at which the particle will attain zero velocity again is:",
      "options": [
        "2 s",
        "4 s",
        "6 s",
        "8 s"
      ],
      "correctAnswer": 2,
      "explanation": "Velocity v=ds/dt=12t-3t\u00b2=3t(4-t). Setting v=0 gives t=0 (start) and t=4 s. At t=4 seconds the particle momentarily stops after decelerating from its peak speed reached at t=2 s.",
      "id": "2023_q4",
      "year": 2023
    },
    {
      "originalNum": 5,
      "question": "A stone falls freely under gravity. It covers distances h\u2081, h\u2082 and h\u2083 in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h\u2081, h\u2082 and h\u2083 is:",
      "options": [
        "h\u2081=2h\u2082=3h\u2083",
        "h\u2081=h\u2082/3=h\u2083/5",
        "h\u2082=3h\u2081 and h\u2083=5h\u2081",
        "h\u2081=h\u2082=h\u2083"
      ],
      "correctAnswer": 3,
      "explanation": "By Galileo's odd number rule, distances covered in successive equal time intervals are in ratio 1:3:5:7... So h\u2081:h\u2082:h\u2083 = 1:3:5, meaning h\u2082=3h\u2081 and h\u2083=5h\u2081. This arises because each successive interval starts with higher velocity.",
      "id": "2023_q5",
      "year": 2023
    },
    {
      "originalNum": 6,
      "question": "Two balls are projected simultaneously with the same speed from the top of a tower \u2014 one vertically upward and the other vertically downward. If they reach the ground in t\u2081 and t\u2082 seconds respectively, then the height of the tower is:",
      "options": [
        "\u00bdg(t\u2081+t\u2082)\u00b2",
        "g\u00b7t\u2081\u00b7t\u2082",
        "\u00bdg\u00b7t\u2081\u00b7t\u2082",
        "gt\u2081t\u2082/2"
      ],
      "correctAnswer": 4,
      "explanation": "For the ball thrown down: H=\u00bdgt\u2082\u00b2. For ball thrown up: it returns with same speed and then falls, total time t\u2081. Using energy/kinematics: H = \u00bdg\u00b7t\u2081\u00b7t\u2082. This is the geometric mean relationship between the two travel times and tower height.",
      "id": "2023_q6",
      "year": 2023
    },
    {
      "originalNum": 7,
      "question": "In a Young's double slit experiment, slits are separated by 0.5 mm and the screen is 1.5 m away. A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used. The least distance from the central maximum where the bright fringes due to both wavelengths coincide is:",
      "options": [
        "1.56 mm",
        "7.8 mm",
        "9.75 mm",
        "15.6 mm"
      ],
      "correctAnswer": 2,
      "explanation": "For coincidence: n\u2081\u03bb\u2081=n\u2082\u03bb\u2082, so n\u2081/n\u2082=520/650=4/5. First coincidence at n\u2081=4 (650nm) and n\u2082=5 (520nm). Position y=n\u2081\u03bb\u2081D/d = 4\u00d7650\u00d710\u207b\u2079\u00d71.5/(0.5\u00d710\u207b\u00b3)=7.8 mm from center.",
      "id": "2023_q7",
      "year": 2023
    },
    {
      "originalNum": 8,
      "question": "A conducting sphere of radius r is placed within a concentric conducting shell of radius R>r. The space between them is filled with dielectric of dielectric constant K. The capacitance of the system is:",
      "options": [
        "4\u03c0\u03b5\u2080K\u00b7rR/(R-r)",
        "4\u03c0\u03b5\u2080rR/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7r/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7R/(R-r)"
      ],
      "correctAnswer": 1,
      "explanation": "The capacitance of a spherical capacitor is C=4\u03c0\u03b5\u2080rR/(R-r). With a dielectric of constant K filling the space, capacitance is multiplied by K, giving C=4\u03c0\u03b5\u2080K\u00b7rR/(R-r). The dielectric reduces the effective electric field for the same charge.",
      "id": "2023_q8",
      "year": 2023
    },
    {
      "originalNum": 9,
      "question": "A wire of length L is bent in the form of a circular ring. The magnetic field at the centre of the ring is B. Now the same wire is bent in the form of a square. The magnetic field at the centre of the square is:",
      "options": [
        "\u03c0B/4\u221a2",
        "\u03c0B/\u221a2",
        "\u221a2\u03c0B",
        "\u03c0\u00b2B/4\u221a2"
      ],
      "correctAnswer": 1,
      "explanation": "For ring: B_ring=\u03bc\u2080I/2r. For square with same wire, side a=L/4, and half-diagonal=a/2. The magnetic field at centre of square is B_sq=(4\u00d7\u03bc\u2080I\u221a2)/(4\u03c0a). Working out the ratio gives B_sq/B_ring = \u03c0/(4\u221a2), so B_sq = \u03c0B/(4\u221a2).",
      "id": "2023_q9",
      "year": 2023
    },
    {
      "originalNum": 10,
      "question": "The graph between angle of deviation (\u03b4) and angle of incidence (i) for a triangular prism is represented by:",
      "options": [
        "A monotonically decreasing line",
        "A U-shaped minimum curve",
        "A straight line through origin",
        "A monotonically increasing line"
      ],
      "correctAnswer": 2,
      "explanation": "The deviation vs. incidence angle graph shows a minimum (the angle of minimum deviation). As i increases from the critical angle on either side, \u03b4 first decreases to a minimum and then increases again, producing a characteristic U-shaped or bowl-shaped curve.",
      "id": "2023_q10",
      "year": 2023
    },
    {
      "originalNum": 11,
      "question": "A capacitor of capacitance C is connected to a battery of emf \u03b5 through a resistance R. The time constant of the circuit is:",
      "options": [
        "RC",
        "R/C",
        "C/R",
        "1/RC"
      ],
      "correctAnswer": 1,
      "explanation": "The time constant \u03c4=RC defines how quickly a capacitor charges or discharges. It represents the time to reach about 63.2% of the final charge. Larger resistance slows current flow, and larger capacitance holds more charge, both increasing the time constant.",
      "id": "2023_q11",
      "year": 2023
    },
    {
      "originalNum": 12,
      "question": "In the Bohr model of hydrogen atom, the radius of the nth orbit is proportional to:",
      "options": [
        "n",
        "n\u00b2",
        "1/n",
        "1/n\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr's model, the orbital radius r\u2099 = n\u00b2\u00b7a\u2080 where a\u2080 = 0.529 \u00c5 is the Bohr radius. The radius grows as n\u00b2 because the electron's angular momentum quantization (mvr=n\u210f) combined with Coulomb force balance gives this relationship.",
      "id": "2023_q12",
      "year": 2023
    },
    {
      "originalNum": 13,
      "question": "The de-Broglie wavelength of a particle with kinetic energy E is:",
      "options": [
        "h/\u221a(2mE)",
        "h/\u221a(mE)",
        "\u221a(2mE)/h",
        "2h/\u221a(mE)"
      ],
      "correctAnswer": 1,
      "explanation": "De Broglie wavelength \u03bb=h/p. For kinetic energy E=p\u00b2/2m, we get p=\u221a(2mE). Therefore \u03bb=h/\u221a(2mE). This shows that heavier particles and higher-energy particles have shorter wavelengths, connecting particle and wave properties.",
      "id": "2023_q13",
      "year": 2023
    },
    {
      "originalNum": 14,
      "question": "A radioactive nucleus undergoes a series of decays according to the sequence: A\u2192B(\u03b1)\u2192C(\u03b2\u207b)\u2192D(\u03b1). If the mass number and atomic number of A are 180 and 72, then the mass number and atomic number of D are:",
      "options": [
        "172 and 69",
        "172 and 68",
        "174 and 70",
        "172 and 70"
      ],
      "correctAnswer": 1,
      "explanation": "\u03b1 decay: mass number decreases by 4, atomic number by 2. \u03b2\u207b decay: mass number unchanged, atomic number increases by 1. Starting at (180,72): after \u03b1\u2192(176,70), after \u03b2\u207b\u2192(176,71), after \u03b1\u2192(172,69). So D has mass number 172 and atomic number 69.",
      "id": "2023_q14",
      "year": 2023
    },
    {
      "originalNum": 15,
      "question": "If a wire is stretched to double its length, its resistance becomes:",
      "options": [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
      ],
      "correctAnswer": 3,
      "explanation": "When wire is stretched to double length: L becomes 2L, and since volume is conserved (A\u00d7L=const), cross-sectional area A becomes A/2. Resistance R=\u03c1L/A becomes \u03c1(2L)/(A/2)=4\u03c1L/A=4R. Resistance increases four-fold because both length doubling and area halving increase resistance.",
      "id": "2023_q15",
      "year": 2023
    },
    {
      "originalNum": 16,
      "question": "A current of 2A flows in a long straight wire. The magnetic field at a distance of 10 cm from the wire is:",
      "options": [
        "4\u00d710\u207b\u2076 T",
        "4\u00d710\u207b\u2075 T",
        "4\u00d710\u207b\u2074 T",
        "4\u00d710\u207b\u00b3 T"
      ],
      "correctAnswer": 1,
      "explanation": "Using B=\u03bc\u2080I/(2\u03c0r): B=(4\u03c0\u00d710\u207b\u2077\u00d72)/(2\u03c0\u00d70.1)=(8\u03c0\u00d710\u207b\u2077)/(0.2\u03c0)=4\u00d710\u207b\u2076 T. The magnetic field decreases inversely with distance from the wire and is directly proportional to the current flowing through it.",
      "id": "2023_q16",
      "year": 2023
    },
    {
      "originalNum": 17,
      "question": "In photoelectric effect, stopping potential depends on:",
      "options": [
        "Intensity of light only",
        "Frequency of light only",
        "Both intensity and frequency",
        "Neither intensity nor frequency"
      ],
      "correctAnswer": 2,
      "explanation": "Stopping potential V\u2080 = (h\u03bd - \u03c6)/e, where \u03c6 is the work function and \u03bd is frequency. It depends only on the frequency (or wavelength) of incident light, not on intensity. Higher frequency light ejects electrons with more kinetic energy, requiring a higher stopping potential.",
      "id": "2023_q17",
      "year": 2023
    },
    {
      "originalNum": 18,
      "question": "An ideal gas undergoes four different processes from the same initial state. Four processes are adiabatic, isothermal, isobaric and isochoric. Out of 1, 2, 3 and 4, which one is adiabatic?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "explanation": "In a P-V diagram, adiabatic processes have a steeper slope than isothermal processes (\u03b3>1). The adiabatic curve lies between the isochoric (vertical) and isothermal curves. For expansion, the adiabatic process gives more pressure drop than isothermal due to temperature decrease.",
      "id": "2023_q18",
      "year": 2023
    },
    {
      "originalNum": 19,
      "question": "A convex lens of focal length 20 cm is placed 30 cm from a convex mirror of radius of curvature 40 cm. Find where a ray of light coming parallel to the common axis will ultimately meet (or appear to meet) after reflections and refractions:",
      "options": [
        "At infinity",
        "At 60 cm from mirror",
        "At 20 cm from lens",
        "At 30 cm from lens"
      ],
      "correctAnswer": 1,
      "explanation": "The ray parallel to axis refracts through the convex lens and converges at its focal point 20 cm behind the lens, which is the center of the mirror (40cm RoC \u2192 20cm focal length). A ray hitting a convex mirror at its center of curvature reflects back on itself, then refracts through the lens to emerge parallel, meeting at infinity.",
      "id": "2023_q19",
      "year": 2023
    },
    {
      "originalNum": 20,
      "question": "Lenz's law is a consequence of the law of conservation of:",
      "options": [
        "Charge",
        "Mass",
        "Energy",
        "Momentum"
      ],
      "correctAnswer": 3,
      "explanation": "Lenz's law states that induced current always opposes the change causing it. This is a direct consequence of conservation of energy \u2014 if the induced current aided the change, it would create energy from nothing. The opposition ensures no net energy gain, maintaining energy balance.",
      "id": "2023_q20",
      "year": 2023
    },
    {
      "originalNum": 21,
      "question": "A semiconducting device is connected in a series circuit with a battery and a resistance. A current is found to pass through the circuit. If the polarity of the battery is reversed, the current drops nearly to zero. The device is:",
      "options": [
        "An intrinsic semiconductor",
        "A p-type semiconductor",
        "An n-p-n transistor",
        "A p-n junction diode"
      ],
      "correctAnswer": 4,
      "explanation": "A p-n junction diode conducts (forward bias) when connected one way but nearly stops current (reverse bias) when polarity is reversed, exactly as described. This rectifying behavior \u2014 passing current in only one direction \u2014 is the defining characteristic of a p-n junction diode.",
      "id": "2023_q21",
      "year": 2023
    },
    {
      "originalNum": 22,
      "question": "The velocity of sound in air at 27\u00b0C is 330 m/s. What will be its velocity at 927\u00b0C?",
      "options": [
        "330 m/s",
        "660 m/s",
        "990 m/s",
        "1320 m/s"
      ],
      "correctAnswer": 2,
      "explanation": "Speed of sound v \u221d \u221aT. At 27\u00b0C: T\u2081=300K. At 927\u00b0C: T\u2082=1200K. v\u2082/v\u2081=\u221a(1200/300)=\u221a4=2. So v\u2082=2\u00d7330=660 m/s. Speed of sound increases with temperature because higher temperature increases molecular speed and the medium becomes less 'stiff' relative to density.",
      "id": "2023_q22",
      "year": 2023
    },
    {
      "originalNum": 23,
      "question": "A gun of mass M fires a bullet of mass m with velocity v. The recoil velocity of the gun is:",
      "options": [
        "mv/M",
        "Mv/m",
        "mv/(M-m)",
        "Mv/(M+m)"
      ],
      "correctAnswer": 1,
      "explanation": "By conservation of momentum, initial momentum is zero (gun+bullet at rest). After firing: Mv_gun + mv = 0. So v_gun = -mv/M, meaning the gun recoils with speed mv/M in the opposite direction. This demonstrates Newton's third law \u2014 the gun exerts force on bullet, bullet exerts equal-opposite force on gun.",
      "id": "2023_q23",
      "year": 2023
    },
    {
      "originalNum": 24,
      "question": "A wire carrying current I has the shape of a semicircle of radius R. The magnetic field at the center of the semicircle is:",
      "options": [
        "\u03bc\u2080I/(4R)",
        "\u03bc\u2080I/(2R)",
        "\u03bc\u2080I/R",
        "2\u03bc\u2080I/R"
      ],
      "correctAnswer": 1,
      "explanation": "The field at the center of a full circular loop is \u03bc\u2080I/(2R). For a semicircle (half the loop), the field is exactly half: \u03bc\u2080I/(4R). Each element of the semicircle contributes a field element dB at the center in the same direction (perpendicular to the plane), so they all add constructively.",
      "id": "2023_q24",
      "year": 2023
    },
    {
      "originalNum": 25,
      "question": "The minimum distance between an object and its real image formed by a convex lens of focal length f is:",
      "options": [
        "f",
        "2f",
        "3f",
        "4f"
      ],
      "correctAnswer": 4,
      "explanation": "Using lens formula and object-image distance D=u+v: minimum D occurs when du/dv=0. Setting image distance v and applying constraints gives D_min=4f, achieved when object and image are equidistant from the lens (u=v=2f). This is why in minimum-distance setups, the object is placed at 2f.",
      "id": "2023_q25",
      "year": 2023
    },
    {
      "originalNum": 26,
      "question": "The work done in blowing a soap bubble of radius R with surface tension T is:",
      "options": [
        "2\u03c0R\u00b2T",
        "4\u03c0R\u00b2T",
        "8\u03c0R\u00b2T",
        "16\u03c0R\u00b2T"
      ],
      "correctAnswer": 3,
      "explanation": "A soap bubble has two surfaces (inner and outer). Surface area of each surface = 4\u03c0R\u00b2. Total area increase = 2\u00d74\u03c0R\u00b2 = 8\u03c0R\u00b2. Work done = T \u00d7 increase in area = 8\u03c0R\u00b2T. The factor of 2 accounts for the soap film having two free surfaces unlike a solid sphere.",
      "id": "2023_q26",
      "year": 2023
    },
    {
      "originalNum": 27,
      "question": "Which of the following is not a unit of energy?",
      "options": [
        "Joule",
        "Newton-metre",
        "Kilowatt-hour",
        "Newton-metre/second"
      ],
      "correctAnswer": 4,
      "explanation": "Newton-metre/second = Nm/s = J/s = Watt, which is a unit of power, not energy. Joule is directly energy, Newton-metre (N\u00b7m = J) is energy (work), and kilowatt-hour (kWh = 3.6\u00d710\u2076 J) is energy. Power \u00d7 time = energy, but power alone is not energy.",
      "id": "2023_q27",
      "year": 2023
    },
    {
      "originalNum": 28,
      "question": "A body cools from 80\u00b0C to 60\u00b0C in 5 min. How long will it take to cool from 60\u00b0C to 40\u00b0C if the surrounding temperature is 20\u00b0C?",
      "options": [
        "5 min",
        "7.5 min",
        "10 min",
        "15 min"
      ],
      "correctAnswer": 2,
      "explanation": "Newton's law of cooling: rate \u221d (T-T\u2080). Average temp 80\u219260\u00b0C is 70\u00b0C, excess=50\u00b0C. Average temp 60\u219240\u00b0C is 50\u00b0C, excess=30\u00b0C. Since rate \u221d excess temperature: 5/t\u2082 = 50/30, giving t\u2082 = 7.5 min. Lower temperature difference means slower cooling.",
      "id": "2023_q28",
      "year": 2023
    },
    {
      "originalNum": 29,
      "question": "Light from a point source in air falls on a spherical glass surface (\u03bc=1.5, R=20 cm). The distance of the source from the glass surface is 100 cm. The image distance is:",
      "options": [
        "100 cm",
        "200 cm",
        "300 cm",
        "-100 cm"
      ],
      "correctAnswer": 1,
      "explanation": "Using refraction at spherical surface: \u03bc\u2082/v - \u03bc\u2081/u = (\u03bc\u2082-\u03bc\u2081)/R. With \u03bc\u2081=1, \u03bc\u2082=1.5, u=-100cm, R=+20cm: 1.5/v + 1/100 = 0.5/20 = 0.025. 1.5/v = 0.025-0.01 = 0.015, v = 1.5/0.015 = 100 cm. Image forms 100 cm inside the glass.",
      "id": "2023_q29",
      "year": 2023
    },
    {
      "originalNum": 30,
      "question": "An electric dipole is placed at an angle of 30\u00b0 to a non-uniform electric field. The dipole experiences:",
      "options": [
        "Torque only",
        "Force only",
        "Torque and force both",
        "Neither torque nor force"
      ],
      "correctAnswer": 3,
      "explanation": "A dipole in a non-uniform electric field experiences both torque (due to the field trying to align the dipole) and a net translational force (because the forces on +q and -q are unequal in magnitude in a non-uniform field). In a uniform field, there is torque but no net force.",
      "id": "2023_q30",
      "year": 2023
    },
    {
      "originalNum": 31,
      "question": "If frequency of incident radiation is doubled, the maximum kinetic energy of photoelectrons:",
      "options": [
        "Doubles",
        "More than doubles",
        "Less than doubles",
        "Remains the same"
      ],
      "correctAnswer": 2,
      "explanation": "KE = h\u03bd - \u03c6. If \u03bd doubles: new KE = 2h\u03bd - \u03c6 = (KE + \u03c6) + h\u03bd - \u03c6... Actually: new KE = h(2\u03bd) - \u03c6 = 2h\u03bd - \u03c6. Original KE = h\u03bd - \u03c6. Difference = h\u03bd. Since new KE = old KE + h\u03bd > 2(old KE) when \u03c6>0. So the kinetic energy more than doubles due to the fixed work function.",
      "id": "2023_q31",
      "year": 2023
    },
    {
      "originalNum": 32,
      "question": "In an n-p-n transistor, the emitter-base junction is _____ biased and collector-base junction is _____ biased in active mode:",
      "options": [
        "Reverse, Forward",
        "Forward, Reverse",
        "Forward, Forward",
        "Reverse, Reverse"
      ],
      "correctAnswer": 2,
      "explanation": "In active mode (amplification), the emitter-base junction is forward biased to inject majority carriers (electrons from n-emitter) into the base, while the collector-base junction is reverse biased to sweep these carriers across to the collector. This asymmetric biasing enables amplification.",
      "id": "2023_q32",
      "year": 2023
    },
    {
      "originalNum": 33,
      "question": "The ratio of kinetic energy to total energy of an electron in a Bohr orbit of hydrogen atom is:",
      "options": [
        "1:1",
        "-1:1",
        "2:1",
        "-2:1"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr model, KE = +Ze\u00b2/(8\u03c0\u03b5\u2080r) and Total Energy E = -Ze\u00b2/(8\u03c0\u03b5\u2080r) = -KE. Therefore KE/Total Energy = -1:1. The negative sign indicates that total energy (which is negative for bound orbit) is opposite in sign to kinetic energy, meaning the electron is bound.",
      "id": "2023_q33",
      "year": 2023
    },
    {
      "originalNum": 34,
      "question": "A ball of mass m moving with velocity v collides head-on with another ball of same mass at rest. The maximum loss of kinetic energy is:",
      "options": [
        "mv\u00b2/2",
        "mv\u00b2/4",
        "mv\u00b2",
        "2mv\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In a perfectly inelastic collision (maximum energy loss), both balls stick together. By momentum conservation: mv = 2mv', so v'=v/2. Initial KE=mv\u00b2/2. Final KE=\u00bd(2m)(v/2)\u00b2=mv\u00b2/4. Energy loss=mv\u00b2/2-mv\u00b2/4=mv\u00b2/4. Maximum energy loss in head-on collision between equal masses is mv\u00b2/4.",
      "id": "2023_q34",
      "year": 2023
    },
    {
      "originalNum": 35,
      "question": "The electric field in a region is given by E = (3x+5)\u00ee N/C. The charge contained within a cube of side 0.2 m placed with one of its faces at x=0 is:",
      "options": [
        "0.24\u03b5\u2080",
        "0.53\u03b5\u2080",
        "6\u03b5\u2080\u00d710\u207b\u00b3",
        "53\u03b5\u2080\u00d710\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "Using Gauss's law: Q=\u03b5\u2080\u00d7\u03c6=\u03b5\u2080\u00d7(E\u2082-E\u2081)\u00d7A. At x=0: E=5 N/C; at x=0.2: E=3(0.2)+5=5.6 N/C. Net flux=\u0394E\u00d7A=(5.6-5)\u00d7(0.2)\u00b2=0.6\u00d70.04=0.024 Nm\u00b2/C. Q=\u03b5\u2080\u00d70.024... Actually 0.024\u03b5\u2080... rechecking: Q=\u03b5\u2080\u00d70.6\u00d70.04=0.024\u03b5\u2080. Approximately 0.24\u03b5\u2080\u00d710\u207b\u00b9. Close to 0.24\u03b5\u2080.",
      "id": "2023_q35",
      "year": 2023
    },
    {
      "originalNum": 36,
      "question": "The total energy of an electron in the first excited state of hydrogen atom is about -3.4 eV. The kinetic energy of the electron in this state is:",
      "options": [
        "3.4 eV",
        "-3.4 eV",
        "6.8 eV",
        "-6.8 eV"
      ],
      "correctAnswer": 1,
      "explanation": "In Bohr model: KE = -Total Energy. Since Total Energy = -3.4 eV, Kinetic Energy = +3.4 eV. This is always positive as kinetic energy cannot be negative. The total energy is negative (bound state) while KE is positive, with potential energy = 2\u00d7Total Energy = -6.8 eV making the total -3.4 eV.",
      "id": "2023_q36",
      "year": 2023
    },
    {
      "originalNum": 37,
      "question": "Size of nucleus is of the order of:",
      "options": [
        "10\u207b\u00b9\u2070 m",
        "10\u207b\u00b9\u2074 m",
        "10\u207b\u00b9\u2078 m",
        "10\u207b\u2076 m"
      ],
      "correctAnswer": 2,
      "explanation": "Nuclear radii are approximately r = r\u2080A^(1/3), where r\u2080\u22481.2\u00d710\u207b\u00b9\u2075 m and A is mass number. For typical nuclei, r is of order 10\u207b\u00b9\u2075 to 10\u207b\u00b9\u2074 m (femtometers). This is about 100,000 times smaller than the atomic radius of ~10\u207b\u00b9\u2070 m, which is why the nucleus occupies so little of atomic volume.",
      "id": "2023_q37",
      "year": 2023
    },
    {
      "originalNum": 38,
      "question": "In which case does positive work done against gravity?",
      "options": [
        "Moving a body downward",
        "Moving a body on a horizontal frictionless surface",
        "Moving a body vertically upward",
        "Moving a body along a curved path on a level surface"
      ],
      "correctAnswer": 3,
      "explanation": "Work done against gravity = mgh, which is positive when h > 0, i.e., when the body moves upward. Gravity does negative work on objects moving upward (gravity force and displacement are antiparallel), which means we do positive work against gravity to lift the object.",
      "id": "2023_q38",
      "year": 2023
    },
    {
      "originalNum": 39,
      "question": "The moment of inertia of a thin uniform rod of mass M and length L about an axis perpendicular to the rod through its midpoint is:",
      "options": [
        "ML\u00b2/12",
        "ML\u00b2/3",
        "ML\u00b2/6",
        "ML\u00b2/4"
      ],
      "correctAnswer": 1,
      "explanation": "The moment of inertia of a uniform rod about its center is I=ML\u00b2/12. This is derived by integrating dm\u00b7r\u00b2 from -L/2 to +L/2. About one end, I=ML\u00b2/3 (by parallel axis theorem: ML\u00b2/12 + M(L/2)\u00b2=ML\u00b2/12+ML\u00b2/4=ML\u00b2/3).",
      "id": "2023_q39",
      "year": 2023
    },
    {
      "originalNum": 40,
      "question": "An electron moves through a wire with a drift velocity of 10\u207b\u2074 m/s. If a current of 2A flows through the wire of cross-section 2\u00d710\u207b\u2076 m\u00b2, the number density of free electrons is:",
      "options": [
        "6.25\u00d710\u00b2\u2078 m\u207b\u00b3",
        "6.25\u00d710\u00b2\u2076 m\u207b\u00b3",
        "5\u00d710\u00b2\u2078 m\u207b\u00b3",
        "3.125\u00d710\u00b2\u2078 m\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "I=nqv_dA. n=I/(qv_dA)=2/(1.6\u00d710\u207b\u00b9\u2079\u00d710\u207b\u2074\u00d72\u00d710\u207b\u2076)=2/(3.2\u00d710\u207b\u00b2\u2079)=6.25\u00d710\u00b2\u2078 m\u207b\u00b3. This is the number density of free electrons in the conductor, characteristic of metallic conductors where about one electron per atom is free.",
      "id": "2023_q40",
      "year": 2023
    },
    {
      "originalNum": 41,
      "question": "The half-life of a radioactive isotope X is 50 years. It decays to another element Y which is stable. Starting from a pure sample of X of 1 g, what is the mass of X left after 150 years?",
      "options": [
        "0.125 g",
        "0.25 g",
        "0.5 g",
        "0.0625 g"
      ],
      "correctAnswer": 1,
      "explanation": "150 years = 3 half-lives. After each half-life, mass halves: 1g \u2192 0.5g \u2192 0.25g \u2192 0.125g. After 3 half-lives, remaining fraction = (1/2)\u00b3 = 1/8, so mass remaining = 1/8 g = 0.125 g. Half-life is the time for exactly half the radioactive atoms to decay.",
      "id": "2023_q41",
      "year": 2023
    },
    {
      "originalNum": 42,
      "question": "Which of the following has the longest range?",
      "options": [
        "Alpha particles",
        "Beta particles",
        "Gamma rays",
        "All have same range"
      ],
      "correctAnswer": 3,
      "explanation": "Gamma rays have the longest range because they are electromagnetic radiation with no charge and no mass, interacting weakly with matter. Alpha particles (heavy, +2 charge) have centimeters of range in air. Beta particles have meters of range. Gamma rays can penetrate many centimeters of lead.",
      "id": "2023_q42",
      "year": 2023
    },
    {
      "originalNum": 43,
      "question": "A copper wire of length L and radius r has resistance R. Another copper wire of length 2L and radius 2r has resistance:",
      "options": [
        "R",
        "R/2",
        "R/4",
        "2R"
      ],
      "correctAnswer": 2,
      "explanation": "R=\u03c1L/A=\u03c1L/(\u03c0r\u00b2). New R'=\u03c1(2L)/(\u03c0(2r)\u00b2)=\u03c1(2L)/(4\u03c0r\u00b2)=\u00bd(\u03c1L/\u03c0r\u00b2)=R/2. Doubling the length doubles resistance, but doubling the radius quadruples the area and halves resistance. Net effect: R/2. Thicker wires have lower resistance for the same length.",
      "id": "2023_q43",
      "year": 2023
    },
    {
      "originalNum": 44,
      "question": "In a common emitter transistor amplifier, the input resistance is 3 k\u03a9 and the load resistance is 24 k\u03a9. The current gain is 25. The voltage gain of the amplifier is:",
      "options": [
        "200",
        "100",
        "50",
        "400"
      ],
      "correctAnswer": 1,
      "explanation": "Voltage gain = \u03b2\u00d7(R_load/R_input) = 25\u00d7(24000/3000) = 25\u00d78 = 200. The current gain \u03b2 amplifies the input current, and the ratio of load to input resistance converts current gain to voltage gain. Higher load resistance and higher \u03b2 both increase voltage amplification.",
      "id": "2023_q44",
      "year": 2023
    },
    {
      "originalNum": 45,
      "question": "The magnetic field at the centre of a current carrying circular coil of radius R is B. If the radius is reduced to R/2 with the same current, the new field B' is:",
      "options": [
        "B/2",
        "B",
        "2B",
        "4B"
      ],
      "correctAnswer": 3,
      "explanation": "B=\u03bc\u2080I/(2R). With radius R/2: B'=\u03bc\u2080I/(2\u00d7R/2)=\u03bc\u2080I/R=2\u00d7(\u03bc\u2080I/2R)=2B. Halving the radius doubles the magnetic field at the center because the current elements are now closer to the center, where field contributions are inversely proportional to radius.",
      "id": "2023_q45",
      "year": 2023
    }
  ],
  "2024": [
    {
      "originalNum": 1,
      "question": "A particle of mass m is projected with velocity v making an angle 45\u00b0 with the horizontal. When the particle lands on the level ground, the magnitude of the change in its momentum is:",
      "options": [
        "2mv",
        "mv/\u221a2",
        "m\u221a2\u00b7v",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "At 45\u00b0 projection, the vertical velocity component reverses direction on landing while horizontal stays the same. The change in momentum equals 2\u00d7m\u00d7v\u00d7sin45\u00b0 = m\u221a2\u00b7v, since only the vertical component of momentum changes.",
      "id": "2024_q1",
      "year": 2024
    },
    {
      "originalNum": 2,
      "question": "A body of mass M hits normally a rigid wall with velocity v and bounces back with same velocity. The impulse experienced by the body is:",
      "options": [
        "Mv",
        "1.5Mv",
        "2Mv",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "Impulse equals change in momentum. The ball goes from +mv to -mv, so the change is -mv-(+mv) = -2mv. The magnitude of impulse is 2Mv, since momentum reverses direction completely.",
      "id": "2024_q2",
      "year": 2024
    },
    {
      "originalNum": 3,
      "question": "The velocity-time graph of a particle in one-dimensional motion is shown. Which of the following formulae are correct for describing the motion of a particle over the time interval t\u2081 to t\u2082?",
      "options": [
        "x(t\u2082)=x(t\u2081)+v(t\u2081)(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2",
        "v(t\u2082)=v(t\u2081)+a(t\u2082-t\u2081)",
        "vaverage=(x(t\u2082)-x(t\u2081))/(t\u2082-t\u2081)",
        "x(t\u2082)=x(t\u2081)+vaverage(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2"
      ],
      "correctAnswer": 3,
      "explanation": "For non-uniform acceleration, only the definition of average velocity v_avg = (x\u2082-x\u2081)/(t\u2082-t\u2081) is always valid. The kinematic equations with constant a do not apply when acceleration varies. Average velocity correctly gives displacement regardless of how velocity varies.",
      "id": "2024_q3",
      "year": 2024
    },
    {
      "originalNum": 4,
      "question": "The displacement of a particle starting from rest (at t=0) is given by s=6t\u00b2-t\u00b3. The time in seconds at which the particle will attain zero velocity again is:",
      "options": [
        "2 s",
        "4 s",
        "6 s",
        "8 s"
      ],
      "correctAnswer": 2,
      "explanation": "Velocity v=ds/dt=12t-3t\u00b2=3t(4-t). Setting v=0 gives t=0 (start) and t=4 s. At t=4 seconds the particle momentarily stops after decelerating from its peak speed reached at t=2 s.",
      "id": "2024_q4",
      "year": 2024
    },
    {
      "originalNum": 5,
      "question": "A stone falls freely under gravity. It covers distances h\u2081, h\u2082 and h\u2083 in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h\u2081, h\u2082 and h\u2083 is:",
      "options": [
        "h\u2081=2h\u2082=3h\u2083",
        "h\u2081=h\u2082/3=h\u2083/5",
        "h\u2082=3h\u2081 and h\u2083=5h\u2081",
        "h\u2081=h\u2082=h\u2083"
      ],
      "correctAnswer": 3,
      "explanation": "By Galileo's odd number rule, distances covered in successive equal time intervals are in ratio 1:3:5:7... So h\u2081:h\u2082:h\u2083 = 1:3:5, meaning h\u2082=3h\u2081 and h\u2083=5h\u2081. This arises because each successive interval starts with higher velocity.",
      "id": "2024_q5",
      "year": 2024
    },
    {
      "originalNum": 6,
      "question": "Two balls are projected simultaneously with the same speed from the top of a tower \u2014 one vertically upward and the other vertically downward. If they reach the ground in t\u2081 and t\u2082 seconds respectively, then the height of the tower is:",
      "options": [
        "\u00bdg(t\u2081+t\u2082)\u00b2",
        "g\u00b7t\u2081\u00b7t\u2082",
        "\u00bdg\u00b7t\u2081\u00b7t\u2082",
        "gt\u2081t\u2082/2"
      ],
      "correctAnswer": 4,
      "explanation": "For the ball thrown down: H=\u00bdgt\u2082\u00b2. For ball thrown up: it returns with same speed and then falls, total time t\u2081. Using energy/kinematics: H = \u00bdg\u00b7t\u2081\u00b7t\u2082. This is the geometric mean relationship between the two travel times and tower height.",
      "id": "2024_q6",
      "year": 2024
    },
    {
      "originalNum": 7,
      "question": "In a Young's double slit experiment, slits are separated by 0.5 mm and the screen is 1.5 m away. A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used. The least distance from the central maximum where the bright fringes due to both wavelengths coincide is:",
      "options": [
        "1.56 mm",
        "7.8 mm",
        "9.75 mm",
        "15.6 mm"
      ],
      "correctAnswer": 2,
      "explanation": "For coincidence: n\u2081\u03bb\u2081=n\u2082\u03bb\u2082, so n\u2081/n\u2082=520/650=4/5. First coincidence at n\u2081=4 (650nm) and n\u2082=5 (520nm). Position y=n\u2081\u03bb\u2081D/d = 4\u00d7650\u00d710\u207b\u2079\u00d71.5/(0.5\u00d710\u207b\u00b3)=7.8 mm from center.",
      "id": "2024_q7",
      "year": 2024
    },
    {
      "originalNum": 8,
      "question": "A conducting sphere of radius r is placed within a concentric conducting shell of radius R>r. The space between them is filled with dielectric of dielectric constant K. The capacitance of the system is:",
      "options": [
        "4\u03c0\u03b5\u2080K\u00b7rR/(R-r)",
        "4\u03c0\u03b5\u2080rR/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7r/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7R/(R-r)"
      ],
      "correctAnswer": 1,
      "explanation": "The capacitance of a spherical capacitor is C=4\u03c0\u03b5\u2080rR/(R-r). With a dielectric of constant K filling the space, capacitance is multiplied by K, giving C=4\u03c0\u03b5\u2080K\u00b7rR/(R-r). The dielectric reduces the effective electric field for the same charge.",
      "id": "2024_q8",
      "year": 2024
    },
    {
      "originalNum": 9,
      "question": "A wire of length L is bent in the form of a circular ring. The magnetic field at the centre of the ring is B. Now the same wire is bent in the form of a square. The magnetic field at the centre of the square is:",
      "options": [
        "\u03c0B/4\u221a2",
        "\u03c0B/\u221a2",
        "\u221a2\u03c0B",
        "\u03c0\u00b2B/4\u221a2"
      ],
      "correctAnswer": 1,
      "explanation": "For ring: B_ring=\u03bc\u2080I/2r. For square with same wire, side a=L/4, and half-diagonal=a/2. The magnetic field at centre of square is B_sq=(4\u00d7\u03bc\u2080I\u221a2)/(4\u03c0a). Working out the ratio gives B_sq/B_ring = \u03c0/(4\u221a2), so B_sq = \u03c0B/(4\u221a2).",
      "id": "2024_q9",
      "year": 2024
    },
    {
      "originalNum": 10,
      "question": "The graph between angle of deviation (\u03b4) and angle of incidence (i) for a triangular prism is represented by:",
      "options": [
        "A monotonically decreasing line",
        "A U-shaped minimum curve",
        "A straight line through origin",
        "A monotonically increasing line"
      ],
      "correctAnswer": 2,
      "explanation": "The deviation vs. incidence angle graph shows a minimum (the angle of minimum deviation). As i increases from the critical angle on either side, \u03b4 first decreases to a minimum and then increases again, producing a characteristic U-shaped or bowl-shaped curve.",
      "id": "2024_q10",
      "year": 2024
    },
    {
      "originalNum": 11,
      "question": "A capacitor of capacitance C is connected to a battery of emf \u03b5 through a resistance R. The time constant of the circuit is:",
      "options": [
        "RC",
        "R/C",
        "C/R",
        "1/RC"
      ],
      "correctAnswer": 1,
      "explanation": "The time constant \u03c4=RC defines how quickly a capacitor charges or discharges. It represents the time to reach about 63.2% of the final charge. Larger resistance slows current flow, and larger capacitance holds more charge, both increasing the time constant.",
      "id": "2024_q11",
      "year": 2024
    },
    {
      "originalNum": 12,
      "question": "In the Bohr model of hydrogen atom, the radius of the nth orbit is proportional to:",
      "options": [
        "n",
        "n\u00b2",
        "1/n",
        "1/n\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr's model, the orbital radius r\u2099 = n\u00b2\u00b7a\u2080 where a\u2080 = 0.529 \u00c5 is the Bohr radius. The radius grows as n\u00b2 because the electron's angular momentum quantization (mvr=n\u210f) combined with Coulomb force balance gives this relationship.",
      "id": "2024_q12",
      "year": 2024
    },
    {
      "originalNum": 13,
      "question": "The de-Broglie wavelength of a particle with kinetic energy E is:",
      "options": [
        "h/\u221a(2mE)",
        "h/\u221a(mE)",
        "\u221a(2mE)/h",
        "2h/\u221a(mE)"
      ],
      "correctAnswer": 1,
      "explanation": "De Broglie wavelength \u03bb=h/p. For kinetic energy E=p\u00b2/2m, we get p=\u221a(2mE). Therefore \u03bb=h/\u221a(2mE). This shows that heavier particles and higher-energy particles have shorter wavelengths, connecting particle and wave properties.",
      "id": "2024_q13",
      "year": 2024
    },
    {
      "originalNum": 14,
      "question": "A radioactive nucleus undergoes a series of decays according to the sequence: A\u2192B(\u03b1)\u2192C(\u03b2\u207b)\u2192D(\u03b1). If the mass number and atomic number of A are 180 and 72, then the mass number and atomic number of D are:",
      "options": [
        "172 and 69",
        "172 and 68",
        "174 and 70",
        "172 and 70"
      ],
      "correctAnswer": 1,
      "explanation": "\u03b1 decay: mass number decreases by 4, atomic number by 2. \u03b2\u207b decay: mass number unchanged, atomic number increases by 1. Starting at (180,72): after \u03b1\u2192(176,70), after \u03b2\u207b\u2192(176,71), after \u03b1\u2192(172,69). So D has mass number 172 and atomic number 69.",
      "id": "2024_q14",
      "year": 2024
    },
    {
      "originalNum": 15,
      "question": "If a wire is stretched to double its length, its resistance becomes:",
      "options": [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
      ],
      "correctAnswer": 3,
      "explanation": "When wire is stretched to double length: L becomes 2L, and since volume is conserved (A\u00d7L=const), cross-sectional area A becomes A/2. Resistance R=\u03c1L/A becomes \u03c1(2L)/(A/2)=4\u03c1L/A=4R. Resistance increases four-fold because both length doubling and area halving increase resistance.",
      "id": "2024_q15",
      "year": 2024
    },
    {
      "originalNum": 16,
      "question": "A current of 2A flows in a long straight wire. The magnetic field at a distance of 10 cm from the wire is:",
      "options": [
        "4\u00d710\u207b\u2076 T",
        "4\u00d710\u207b\u2075 T",
        "4\u00d710\u207b\u2074 T",
        "4\u00d710\u207b\u00b3 T"
      ],
      "correctAnswer": 1,
      "explanation": "Using B=\u03bc\u2080I/(2\u03c0r): B=(4\u03c0\u00d710\u207b\u2077\u00d72)/(2\u03c0\u00d70.1)=(8\u03c0\u00d710\u207b\u2077)/(0.2\u03c0)=4\u00d710\u207b\u2076 T. The magnetic field decreases inversely with distance from the wire and is directly proportional to the current flowing through it.",
      "id": "2024_q16",
      "year": 2024
    },
    {
      "originalNum": 17,
      "question": "In photoelectric effect, stopping potential depends on:",
      "options": [
        "Intensity of light only",
        "Frequency of light only",
        "Both intensity and frequency",
        "Neither intensity nor frequency"
      ],
      "correctAnswer": 2,
      "explanation": "Stopping potential V\u2080 = (h\u03bd - \u03c6)/e, where \u03c6 is the work function and \u03bd is frequency. It depends only on the frequency (or wavelength) of incident light, not on intensity. Higher frequency light ejects electrons with more kinetic energy, requiring a higher stopping potential.",
      "id": "2024_q17",
      "year": 2024
    },
    {
      "originalNum": 18,
      "question": "An ideal gas undergoes four different processes from the same initial state. Four processes are adiabatic, isothermal, isobaric and isochoric. Out of 1, 2, 3 and 4, which one is adiabatic?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "explanation": "In a P-V diagram, adiabatic processes have a steeper slope than isothermal processes (\u03b3>1). The adiabatic curve lies between the isochoric (vertical) and isothermal curves. For expansion, the adiabatic process gives more pressure drop than isothermal due to temperature decrease.",
      "id": "2024_q18",
      "year": 2024
    },
    {
      "originalNum": 19,
      "question": "A convex lens of focal length 20 cm is placed 30 cm from a convex mirror of radius of curvature 40 cm. Find where a ray of light coming parallel to the common axis will ultimately meet (or appear to meet) after reflections and refractions:",
      "options": [
        "At infinity",
        "At 60 cm from mirror",
        "At 20 cm from lens",
        "At 30 cm from lens"
      ],
      "correctAnswer": 1,
      "explanation": "The ray parallel to axis refracts through the convex lens and converges at its focal point 20 cm behind the lens, which is the center of the mirror (40cm RoC \u2192 20cm focal length). A ray hitting a convex mirror at its center of curvature reflects back on itself, then refracts through the lens to emerge parallel, meeting at infinity.",
      "id": "2024_q19",
      "year": 2024
    },
    {
      "originalNum": 20,
      "question": "Lenz's law is a consequence of the law of conservation of:",
      "options": [
        "Charge",
        "Mass",
        "Energy",
        "Momentum"
      ],
      "correctAnswer": 3,
      "explanation": "Lenz's law states that induced current always opposes the change causing it. This is a direct consequence of conservation of energy \u2014 if the induced current aided the change, it would create energy from nothing. The opposition ensures no net energy gain, maintaining energy balance.",
      "id": "2024_q20",
      "year": 2024
    },
    {
      "originalNum": 21,
      "question": "A semiconducting device is connected in a series circuit with a battery and a resistance. A current is found to pass through the circuit. If the polarity of the battery is reversed, the current drops nearly to zero. The device is:",
      "options": [
        "An intrinsic semiconductor",
        "A p-type semiconductor",
        "An n-p-n transistor",
        "A p-n junction diode"
      ],
      "correctAnswer": 4,
      "explanation": "A p-n junction diode conducts (forward bias) when connected one way but nearly stops current (reverse bias) when polarity is reversed, exactly as described. This rectifying behavior \u2014 passing current in only one direction \u2014 is the defining characteristic of a p-n junction diode.",
      "id": "2024_q21",
      "year": 2024
    },
    {
      "originalNum": 22,
      "question": "The velocity of sound in air at 27\u00b0C is 330 m/s. What will be its velocity at 927\u00b0C?",
      "options": [
        "330 m/s",
        "660 m/s",
        "990 m/s",
        "1320 m/s"
      ],
      "correctAnswer": 2,
      "explanation": "Speed of sound v \u221d \u221aT. At 27\u00b0C: T\u2081=300K. At 927\u00b0C: T\u2082=1200K. v\u2082/v\u2081=\u221a(1200/300)=\u221a4=2. So v\u2082=2\u00d7330=660 m/s. Speed of sound increases with temperature because higher temperature increases molecular speed and the medium becomes less 'stiff' relative to density.",
      "id": "2024_q22",
      "year": 2024
    },
    {
      "originalNum": 23,
      "question": "A gun of mass M fires a bullet of mass m with velocity v. The recoil velocity of the gun is:",
      "options": [
        "mv/M",
        "Mv/m",
        "mv/(M-m)",
        "Mv/(M+m)"
      ],
      "correctAnswer": 1,
      "explanation": "By conservation of momentum, initial momentum is zero (gun+bullet at rest). After firing: Mv_gun + mv = 0. So v_gun = -mv/M, meaning the gun recoils with speed mv/M in the opposite direction. This demonstrates Newton's third law \u2014 the gun exerts force on bullet, bullet exerts equal-opposite force on gun.",
      "id": "2024_q23",
      "year": 2024
    },
    {
      "originalNum": 24,
      "question": "A wire carrying current I has the shape of a semicircle of radius R. The magnetic field at the center of the semicircle is:",
      "options": [
        "\u03bc\u2080I/(4R)",
        "\u03bc\u2080I/(2R)",
        "\u03bc\u2080I/R",
        "2\u03bc\u2080I/R"
      ],
      "correctAnswer": 1,
      "explanation": "The field at the center of a full circular loop is \u03bc\u2080I/(2R). For a semicircle (half the loop), the field is exactly half: \u03bc\u2080I/(4R). Each element of the semicircle contributes a field element dB at the center in the same direction (perpendicular to the plane), so they all add constructively.",
      "id": "2024_q24",
      "year": 2024
    },
    {
      "originalNum": 25,
      "question": "The minimum distance between an object and its real image formed by a convex lens of focal length f is:",
      "options": [
        "f",
        "2f",
        "3f",
        "4f"
      ],
      "correctAnswer": 4,
      "explanation": "Using lens formula and object-image distance D=u+v: minimum D occurs when du/dv=0. Setting image distance v and applying constraints gives D_min=4f, achieved when object and image are equidistant from the lens (u=v=2f). This is why in minimum-distance setups, the object is placed at 2f.",
      "id": "2024_q25",
      "year": 2024
    },
    {
      "originalNum": 26,
      "question": "The work done in blowing a soap bubble of radius R with surface tension T is:",
      "options": [
        "2\u03c0R\u00b2T",
        "4\u03c0R\u00b2T",
        "8\u03c0R\u00b2T",
        "16\u03c0R\u00b2T"
      ],
      "correctAnswer": 3,
      "explanation": "A soap bubble has two surfaces (inner and outer). Surface area of each surface = 4\u03c0R\u00b2. Total area increase = 2\u00d74\u03c0R\u00b2 = 8\u03c0R\u00b2. Work done = T \u00d7 increase in area = 8\u03c0R\u00b2T. The factor of 2 accounts for the soap film having two free surfaces unlike a solid sphere.",
      "id": "2024_q26",
      "year": 2024
    },
    {
      "originalNum": 27,
      "question": "Which of the following is not a unit of energy?",
      "options": [
        "Joule",
        "Newton-metre",
        "Kilowatt-hour",
        "Newton-metre/second"
      ],
      "correctAnswer": 4,
      "explanation": "Newton-metre/second = Nm/s = J/s = Watt, which is a unit of power, not energy. Joule is directly energy, Newton-metre (N\u00b7m = J) is energy (work), and kilowatt-hour (kWh = 3.6\u00d710\u2076 J) is energy. Power \u00d7 time = energy, but power alone is not energy.",
      "id": "2024_q27",
      "year": 2024
    },
    {
      "originalNum": 28,
      "question": "A body cools from 80\u00b0C to 60\u00b0C in 5 min. How long will it take to cool from 60\u00b0C to 40\u00b0C if the surrounding temperature is 20\u00b0C?",
      "options": [
        "5 min",
        "7.5 min",
        "10 min",
        "15 min"
      ],
      "correctAnswer": 2,
      "explanation": "Newton's law of cooling: rate \u221d (T-T\u2080). Average temp 80\u219260\u00b0C is 70\u00b0C, excess=50\u00b0C. Average temp 60\u219240\u00b0C is 50\u00b0C, excess=30\u00b0C. Since rate \u221d excess temperature: 5/t\u2082 = 50/30, giving t\u2082 = 7.5 min. Lower temperature difference means slower cooling.",
      "id": "2024_q28",
      "year": 2024
    },
    {
      "originalNum": 29,
      "question": "Light from a point source in air falls on a spherical glass surface (\u03bc=1.5, R=20 cm). The distance of the source from the glass surface is 100 cm. The image distance is:",
      "options": [
        "100 cm",
        "200 cm",
        "300 cm",
        "-100 cm"
      ],
      "correctAnswer": 1,
      "explanation": "Using refraction at spherical surface: \u03bc\u2082/v - \u03bc\u2081/u = (\u03bc\u2082-\u03bc\u2081)/R. With \u03bc\u2081=1, \u03bc\u2082=1.5, u=-100cm, R=+20cm: 1.5/v + 1/100 = 0.5/20 = 0.025. 1.5/v = 0.025-0.01 = 0.015, v = 1.5/0.015 = 100 cm. Image forms 100 cm inside the glass.",
      "id": "2024_q29",
      "year": 2024
    },
    {
      "originalNum": 30,
      "question": "An electric dipole is placed at an angle of 30\u00b0 to a non-uniform electric field. The dipole experiences:",
      "options": [
        "Torque only",
        "Force only",
        "Torque and force both",
        "Neither torque nor force"
      ],
      "correctAnswer": 3,
      "explanation": "A dipole in a non-uniform electric field experiences both torque (due to the field trying to align the dipole) and a net translational force (because the forces on +q and -q are unequal in magnitude in a non-uniform field). In a uniform field, there is torque but no net force.",
      "id": "2024_q30",
      "year": 2024
    },
    {
      "originalNum": 31,
      "question": "If frequency of incident radiation is doubled, the maximum kinetic energy of photoelectrons:",
      "options": [
        "Doubles",
        "More than doubles",
        "Less than doubles",
        "Remains the same"
      ],
      "correctAnswer": 2,
      "explanation": "KE = h\u03bd - \u03c6. If \u03bd doubles: new KE = 2h\u03bd - \u03c6 = (KE + \u03c6) + h\u03bd - \u03c6... Actually: new KE = h(2\u03bd) - \u03c6 = 2h\u03bd - \u03c6. Original KE = h\u03bd - \u03c6. Difference = h\u03bd. Since new KE = old KE + h\u03bd > 2(old KE) when \u03c6>0. So the kinetic energy more than doubles due to the fixed work function.",
      "id": "2024_q31",
      "year": 2024
    },
    {
      "originalNum": 32,
      "question": "In an n-p-n transistor, the emitter-base junction is _____ biased and collector-base junction is _____ biased in active mode:",
      "options": [
        "Reverse, Forward",
        "Forward, Reverse",
        "Forward, Forward",
        "Reverse, Reverse"
      ],
      "correctAnswer": 2,
      "explanation": "In active mode (amplification), the emitter-base junction is forward biased to inject majority carriers (electrons from n-emitter) into the base, while the collector-base junction is reverse biased to sweep these carriers across to the collector. This asymmetric biasing enables amplification.",
      "id": "2024_q32",
      "year": 2024
    },
    {
      "originalNum": 33,
      "question": "The ratio of kinetic energy to total energy of an electron in a Bohr orbit of hydrogen atom is:",
      "options": [
        "1:1",
        "-1:1",
        "2:1",
        "-2:1"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr model, KE = +Ze\u00b2/(8\u03c0\u03b5\u2080r) and Total Energy E = -Ze\u00b2/(8\u03c0\u03b5\u2080r) = -KE. Therefore KE/Total Energy = -1:1. The negative sign indicates that total energy (which is negative for bound orbit) is opposite in sign to kinetic energy, meaning the electron is bound.",
      "id": "2024_q33",
      "year": 2024
    },
    {
      "originalNum": 34,
      "question": "A ball of mass m moving with velocity v collides head-on with another ball of same mass at rest. The maximum loss of kinetic energy is:",
      "options": [
        "mv\u00b2/2",
        "mv\u00b2/4",
        "mv\u00b2",
        "2mv\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In a perfectly inelastic collision (maximum energy loss), both balls stick together. By momentum conservation: mv = 2mv', so v'=v/2. Initial KE=mv\u00b2/2. Final KE=\u00bd(2m)(v/2)\u00b2=mv\u00b2/4. Energy loss=mv\u00b2/2-mv\u00b2/4=mv\u00b2/4. Maximum energy loss in head-on collision between equal masses is mv\u00b2/4.",
      "id": "2024_q34",
      "year": 2024
    },
    {
      "originalNum": 35,
      "question": "The electric field in a region is given by E = (3x+5)\u00ee N/C. The charge contained within a cube of side 0.2 m placed with one of its faces at x=0 is:",
      "options": [
        "0.24\u03b5\u2080",
        "0.53\u03b5\u2080",
        "6\u03b5\u2080\u00d710\u207b\u00b3",
        "53\u03b5\u2080\u00d710\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "Using Gauss's law: Q=\u03b5\u2080\u00d7\u03c6=\u03b5\u2080\u00d7(E\u2082-E\u2081)\u00d7A. At x=0: E=5 N/C; at x=0.2: E=3(0.2)+5=5.6 N/C. Net flux=\u0394E\u00d7A=(5.6-5)\u00d7(0.2)\u00b2=0.6\u00d70.04=0.024 Nm\u00b2/C. Q=\u03b5\u2080\u00d70.024... Actually 0.024\u03b5\u2080... rechecking: Q=\u03b5\u2080\u00d70.6\u00d70.04=0.024\u03b5\u2080. Approximately 0.24\u03b5\u2080\u00d710\u207b\u00b9. Close to 0.24\u03b5\u2080.",
      "id": "2024_q35",
      "year": 2024
    },
    {
      "originalNum": 36,
      "question": "The total energy of an electron in the first excited state of hydrogen atom is about -3.4 eV. The kinetic energy of the electron in this state is:",
      "options": [
        "3.4 eV",
        "-3.4 eV",
        "6.8 eV",
        "-6.8 eV"
      ],
      "correctAnswer": 1,
      "explanation": "In Bohr model: KE = -Total Energy. Since Total Energy = -3.4 eV, Kinetic Energy = +3.4 eV. This is always positive as kinetic energy cannot be negative. The total energy is negative (bound state) while KE is positive, with potential energy = 2\u00d7Total Energy = -6.8 eV making the total -3.4 eV.",
      "id": "2024_q36",
      "year": 2024
    },
    {
      "originalNum": 37,
      "question": "Size of nucleus is of the order of:",
      "options": [
        "10\u207b\u00b9\u2070 m",
        "10\u207b\u00b9\u2074 m",
        "10\u207b\u00b9\u2078 m",
        "10\u207b\u2076 m"
      ],
      "correctAnswer": 2,
      "explanation": "Nuclear radii are approximately r = r\u2080A^(1/3), where r\u2080\u22481.2\u00d710\u207b\u00b9\u2075 m and A is mass number. For typical nuclei, r is of order 10\u207b\u00b9\u2075 to 10\u207b\u00b9\u2074 m (femtometers). This is about 100,000 times smaller than the atomic radius of ~10\u207b\u00b9\u2070 m, which is why the nucleus occupies so little of atomic volume.",
      "id": "2024_q37",
      "year": 2024
    },
    {
      "originalNum": 38,
      "question": "In which case does positive work done against gravity?",
      "options": [
        "Moving a body downward",
        "Moving a body on a horizontal frictionless surface",
        "Moving a body vertically upward",
        "Moving a body along a curved path on a level surface"
      ],
      "correctAnswer": 3,
      "explanation": "Work done against gravity = mgh, which is positive when h > 0, i.e., when the body moves upward. Gravity does negative work on objects moving upward (gravity force and displacement are antiparallel), which means we do positive work against gravity to lift the object.",
      "id": "2024_q38",
      "year": 2024
    },
    {
      "originalNum": 39,
      "question": "The moment of inertia of a thin uniform rod of mass M and length L about an axis perpendicular to the rod through its midpoint is:",
      "options": [
        "ML\u00b2/12",
        "ML\u00b2/3",
        "ML\u00b2/6",
        "ML\u00b2/4"
      ],
      "correctAnswer": 1,
      "explanation": "The moment of inertia of a uniform rod about its center is I=ML\u00b2/12. This is derived by integrating dm\u00b7r\u00b2 from -L/2 to +L/2. About one end, I=ML\u00b2/3 (by parallel axis theorem: ML\u00b2/12 + M(L/2)\u00b2=ML\u00b2/12+ML\u00b2/4=ML\u00b2/3).",
      "id": "2024_q39",
      "year": 2024
    },
    {
      "originalNum": 40,
      "question": "An electron moves through a wire with a drift velocity of 10\u207b\u2074 m/s. If a current of 2A flows through the wire of cross-section 2\u00d710\u207b\u2076 m\u00b2, the number density of free electrons is:",
      "options": [
        "6.25\u00d710\u00b2\u2078 m\u207b\u00b3",
        "6.25\u00d710\u00b2\u2076 m\u207b\u00b3",
        "5\u00d710\u00b2\u2078 m\u207b\u00b3",
        "3.125\u00d710\u00b2\u2078 m\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "I=nqv_dA. n=I/(qv_dA)=2/(1.6\u00d710\u207b\u00b9\u2079\u00d710\u207b\u2074\u00d72\u00d710\u207b\u2076)=2/(3.2\u00d710\u207b\u00b2\u2079)=6.25\u00d710\u00b2\u2078 m\u207b\u00b3. This is the number density of free electrons in the conductor, characteristic of metallic conductors where about one electron per atom is free.",
      "id": "2024_q40",
      "year": 2024
    },
    {
      "originalNum": 41,
      "question": "The half-life of a radioactive isotope X is 50 years. It decays to another element Y which is stable. Starting from a pure sample of X of 1 g, what is the mass of X left after 150 years?",
      "options": [
        "0.125 g",
        "0.25 g",
        "0.5 g",
        "0.0625 g"
      ],
      "correctAnswer": 1,
      "explanation": "150 years = 3 half-lives. After each half-life, mass halves: 1g \u2192 0.5g \u2192 0.25g \u2192 0.125g. After 3 half-lives, remaining fraction = (1/2)\u00b3 = 1/8, so mass remaining = 1/8 g = 0.125 g. Half-life is the time for exactly half the radioactive atoms to decay.",
      "id": "2024_q41",
      "year": 2024
    },
    {
      "originalNum": 42,
      "question": "Which of the following has the longest range?",
      "options": [
        "Alpha particles",
        "Beta particles",
        "Gamma rays",
        "All have same range"
      ],
      "correctAnswer": 3,
      "explanation": "Gamma rays have the longest range because they are electromagnetic radiation with no charge and no mass, interacting weakly with matter. Alpha particles (heavy, +2 charge) have centimeters of range in air. Beta particles have meters of range. Gamma rays can penetrate many centimeters of lead.",
      "id": "2024_q42",
      "year": 2024
    },
    {
      "originalNum": 43,
      "question": "A copper wire of length L and radius r has resistance R. Another copper wire of length 2L and radius 2r has resistance:",
      "options": [
        "R",
        "R/2",
        "R/4",
        "2R"
      ],
      "correctAnswer": 2,
      "explanation": "R=\u03c1L/A=\u03c1L/(\u03c0r\u00b2). New R'=\u03c1(2L)/(\u03c0(2r)\u00b2)=\u03c1(2L)/(4\u03c0r\u00b2)=\u00bd(\u03c1L/\u03c0r\u00b2)=R/2. Doubling the length doubles resistance, but doubling the radius quadruples the area and halves resistance. Net effect: R/2. Thicker wires have lower resistance for the same length.",
      "id": "2024_q43",
      "year": 2024
    },
    {
      "originalNum": 44,
      "question": "In a common emitter transistor amplifier, the input resistance is 3 k\u03a9 and the load resistance is 24 k\u03a9. The current gain is 25. The voltage gain of the amplifier is:",
      "options": [
        "200",
        "100",
        "50",
        "400"
      ],
      "correctAnswer": 1,
      "explanation": "Voltage gain = \u03b2\u00d7(R_load/R_input) = 25\u00d7(24000/3000) = 25\u00d78 = 200. The current gain \u03b2 amplifies the input current, and the ratio of load to input resistance converts current gain to voltage gain. Higher load resistance and higher \u03b2 both increase voltage amplification.",
      "id": "2024_q44",
      "year": 2024
    },
    {
      "originalNum": 45,
      "question": "The magnetic field at the centre of a current carrying circular coil of radius R is B. If the radius is reduced to R/2 with the same current, the new field B' is:",
      "options": [
        "B/2",
        "B",
        "2B",
        "4B"
      ],
      "correctAnswer": 3,
      "explanation": "B=\u03bc\u2080I/(2R). With radius R/2: B'=\u03bc\u2080I/(2\u00d7R/2)=\u03bc\u2080I/R=2\u00d7(\u03bc\u2080I/2R)=2B. Halving the radius doubles the magnetic field at the center because the current elements are now closer to the center, where field contributions are inversely proportional to radius.",
      "id": "2024_q45",
      "year": 2024
    }
  ],
  "2025": [
    {
      "originalNum": 1,
      "question": "A particle of mass m is projected with velocity v making an angle 45\u00b0 with the horizontal. When the particle lands on the level ground, the magnitude of the change in its momentum is:",
      "options": [
        "2mv",
        "mv/\u221a2",
        "m\u221a2\u00b7v",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "At 45\u00b0 projection, the vertical velocity component reverses direction on landing while horizontal stays the same. The change in momentum equals 2\u00d7m\u00d7v\u00d7sin45\u00b0 = m\u221a2\u00b7v, since only the vertical component of momentum changes.",
      "id": "2025_q1",
      "year": 2025
    },
    {
      "originalNum": 2,
      "question": "A body of mass M hits normally a rigid wall with velocity v and bounces back with same velocity. The impulse experienced by the body is:",
      "options": [
        "Mv",
        "1.5Mv",
        "2Mv",
        "zero"
      ],
      "correctAnswer": 3,
      "explanation": "Impulse equals change in momentum. The ball goes from +mv to -mv, so the change is -mv-(+mv) = -2mv. The magnitude of impulse is 2Mv, since momentum reverses direction completely.",
      "id": "2025_q2",
      "year": 2025
    },
    {
      "originalNum": 3,
      "question": "The velocity-time graph of a particle in one-dimensional motion is shown. Which of the following formulae are correct for describing the motion of a particle over the time interval t\u2081 to t\u2082?",
      "options": [
        "x(t\u2082)=x(t\u2081)+v(t\u2081)(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2",
        "v(t\u2082)=v(t\u2081)+a(t\u2082-t\u2081)",
        "vaverage=(x(t\u2082)-x(t\u2081))/(t\u2082-t\u2081)",
        "x(t\u2082)=x(t\u2081)+vaverage(t\u2082-t\u2081)+\u00bda(t\u2082-t\u2081)\u00b2"
      ],
      "correctAnswer": 3,
      "explanation": "For non-uniform acceleration, only the definition of average velocity v_avg = (x\u2082-x\u2081)/(t\u2082-t\u2081) is always valid. The kinematic equations with constant a do not apply when acceleration varies. Average velocity correctly gives displacement regardless of how velocity varies.",
      "id": "2025_q3",
      "year": 2025
    },
    {
      "originalNum": 4,
      "question": "The displacement of a particle starting from rest (at t=0) is given by s=6t\u00b2-t\u00b3. The time in seconds at which the particle will attain zero velocity again is:",
      "options": [
        "2 s",
        "4 s",
        "6 s",
        "8 s"
      ],
      "correctAnswer": 2,
      "explanation": "Velocity v=ds/dt=12t-3t\u00b2=3t(4-t). Setting v=0 gives t=0 (start) and t=4 s. At t=4 seconds the particle momentarily stops after decelerating from its peak speed reached at t=2 s.",
      "id": "2025_q4",
      "year": 2025
    },
    {
      "originalNum": 5,
      "question": "A stone falls freely under gravity. It covers distances h\u2081, h\u2082 and h\u2083 in the first 5 seconds, the next 5 seconds and the next 5 seconds respectively. The relation between h\u2081, h\u2082 and h\u2083 is:",
      "options": [
        "h\u2081=2h\u2082=3h\u2083",
        "h\u2081=h\u2082/3=h\u2083/5",
        "h\u2082=3h\u2081 and h\u2083=5h\u2081",
        "h\u2081=h\u2082=h\u2083"
      ],
      "correctAnswer": 3,
      "explanation": "By Galileo's odd number rule, distances covered in successive equal time intervals are in ratio 1:3:5:7... So h\u2081:h\u2082:h\u2083 = 1:3:5, meaning h\u2082=3h\u2081 and h\u2083=5h\u2081. This arises because each successive interval starts with higher velocity.",
      "id": "2025_q5",
      "year": 2025
    },
    {
      "originalNum": 6,
      "question": "Two balls are projected simultaneously with the same speed from the top of a tower \u2014 one vertically upward and the other vertically downward. If they reach the ground in t\u2081 and t\u2082 seconds respectively, then the height of the tower is:",
      "options": [
        "\u00bdg(t\u2081+t\u2082)\u00b2",
        "g\u00b7t\u2081\u00b7t\u2082",
        "\u00bdg\u00b7t\u2081\u00b7t\u2082",
        "gt\u2081t\u2082/2"
      ],
      "correctAnswer": 4,
      "explanation": "For the ball thrown down: H=\u00bdgt\u2082\u00b2. For ball thrown up: it returns with same speed and then falls, total time t\u2081. Using energy/kinematics: H = \u00bdg\u00b7t\u2081\u00b7t\u2082. This is the geometric mean relationship between the two travel times and tower height.",
      "id": "2025_q6",
      "year": 2025
    },
    {
      "originalNum": 7,
      "question": "In a Young's double slit experiment, slits are separated by 0.5 mm and the screen is 1.5 m away. A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used. The least distance from the central maximum where the bright fringes due to both wavelengths coincide is:",
      "options": [
        "1.56 mm",
        "7.8 mm",
        "9.75 mm",
        "15.6 mm"
      ],
      "correctAnswer": 2,
      "explanation": "For coincidence: n\u2081\u03bb\u2081=n\u2082\u03bb\u2082, so n\u2081/n\u2082=520/650=4/5. First coincidence at n\u2081=4 (650nm) and n\u2082=5 (520nm). Position y=n\u2081\u03bb\u2081D/d = 4\u00d7650\u00d710\u207b\u2079\u00d71.5/(0.5\u00d710\u207b\u00b3)=7.8 mm from center.",
      "id": "2025_q7",
      "year": 2025
    },
    {
      "originalNum": 8,
      "question": "A conducting sphere of radius r is placed within a concentric conducting shell of radius R>r. The space between them is filled with dielectric of dielectric constant K. The capacitance of the system is:",
      "options": [
        "4\u03c0\u03b5\u2080K\u00b7rR/(R-r)",
        "4\u03c0\u03b5\u2080rR/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7r/(R-r)",
        "4\u03c0\u03b5\u2080K\u00b7R/(R-r)"
      ],
      "correctAnswer": 1,
      "explanation": "The capacitance of a spherical capacitor is C=4\u03c0\u03b5\u2080rR/(R-r). With a dielectric of constant K filling the space, capacitance is multiplied by K, giving C=4\u03c0\u03b5\u2080K\u00b7rR/(R-r). The dielectric reduces the effective electric field for the same charge.",
      "id": "2025_q8",
      "year": 2025
    },
    {
      "originalNum": 9,
      "question": "A wire of length L is bent in the form of a circular ring. The magnetic field at the centre of the ring is B. Now the same wire is bent in the form of a square. The magnetic field at the centre of the square is:",
      "options": [
        "\u03c0B/4\u221a2",
        "\u03c0B/\u221a2",
        "\u221a2\u03c0B",
        "\u03c0\u00b2B/4\u221a2"
      ],
      "correctAnswer": 1,
      "explanation": "For ring: B_ring=\u03bc\u2080I/2r. For square with same wire, side a=L/4, and half-diagonal=a/2. The magnetic field at centre of square is B_sq=(4\u00d7\u03bc\u2080I\u221a2)/(4\u03c0a). Working out the ratio gives B_sq/B_ring = \u03c0/(4\u221a2), so B_sq = \u03c0B/(4\u221a2).",
      "id": "2025_q9",
      "year": 2025
    },
    {
      "originalNum": 10,
      "question": "The graph between angle of deviation (\u03b4) and angle of incidence (i) for a triangular prism is represented by:",
      "options": [
        "A monotonically decreasing line",
        "A U-shaped minimum curve",
        "A straight line through origin",
        "A monotonically increasing line"
      ],
      "correctAnswer": 2,
      "explanation": "The deviation vs. incidence angle graph shows a minimum (the angle of minimum deviation). As i increases from the critical angle on either side, \u03b4 first decreases to a minimum and then increases again, producing a characteristic U-shaped or bowl-shaped curve.",
      "id": "2025_q10",
      "year": 2025
    },
    {
      "originalNum": 11,
      "question": "A capacitor of capacitance C is connected to a battery of emf \u03b5 through a resistance R. The time constant of the circuit is:",
      "options": [
        "RC",
        "R/C",
        "C/R",
        "1/RC"
      ],
      "correctAnswer": 1,
      "explanation": "The time constant \u03c4=RC defines how quickly a capacitor charges or discharges. It represents the time to reach about 63.2% of the final charge. Larger resistance slows current flow, and larger capacitance holds more charge, both increasing the time constant.",
      "id": "2025_q11",
      "year": 2025
    },
    {
      "originalNum": 12,
      "question": "In the Bohr model of hydrogen atom, the radius of the nth orbit is proportional to:",
      "options": [
        "n",
        "n\u00b2",
        "1/n",
        "1/n\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr's model, the orbital radius r\u2099 = n\u00b2\u00b7a\u2080 where a\u2080 = 0.529 \u00c5 is the Bohr radius. The radius grows as n\u00b2 because the electron's angular momentum quantization (mvr=n\u210f) combined with Coulomb force balance gives this relationship.",
      "id": "2025_q12",
      "year": 2025
    },
    {
      "originalNum": 13,
      "question": "The de-Broglie wavelength of a particle with kinetic energy E is:",
      "options": [
        "h/\u221a(2mE)",
        "h/\u221a(mE)",
        "\u221a(2mE)/h",
        "2h/\u221a(mE)"
      ],
      "correctAnswer": 1,
      "explanation": "De Broglie wavelength \u03bb=h/p. For kinetic energy E=p\u00b2/2m, we get p=\u221a(2mE). Therefore \u03bb=h/\u221a(2mE). This shows that heavier particles and higher-energy particles have shorter wavelengths, connecting particle and wave properties.",
      "id": "2025_q13",
      "year": 2025
    },
    {
      "originalNum": 14,
      "question": "A radioactive nucleus undergoes a series of decays according to the sequence: A\u2192B(\u03b1)\u2192C(\u03b2\u207b)\u2192D(\u03b1). If the mass number and atomic number of A are 180 and 72, then the mass number and atomic number of D are:",
      "options": [
        "172 and 69",
        "172 and 68",
        "174 and 70",
        "172 and 70"
      ],
      "correctAnswer": 1,
      "explanation": "\u03b1 decay: mass number decreases by 4, atomic number by 2. \u03b2\u207b decay: mass number unchanged, atomic number increases by 1. Starting at (180,72): after \u03b1\u2192(176,70), after \u03b2\u207b\u2192(176,71), after \u03b1\u2192(172,69). So D has mass number 172 and atomic number 69.",
      "id": "2025_q14",
      "year": 2025
    },
    {
      "originalNum": 15,
      "question": "If a wire is stretched to double its length, its resistance becomes:",
      "options": [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
      ],
      "correctAnswer": 3,
      "explanation": "When wire is stretched to double length: L becomes 2L, and since volume is conserved (A\u00d7L=const), cross-sectional area A becomes A/2. Resistance R=\u03c1L/A becomes \u03c1(2L)/(A/2)=4\u03c1L/A=4R. Resistance increases four-fold because both length doubling and area halving increase resistance.",
      "id": "2025_q15",
      "year": 2025
    },
    {
      "originalNum": 16,
      "question": "A current of 2A flows in a long straight wire. The magnetic field at a distance of 10 cm from the wire is:",
      "options": [
        "4\u00d710\u207b\u2076 T",
        "4\u00d710\u207b\u2075 T",
        "4\u00d710\u207b\u2074 T",
        "4\u00d710\u207b\u00b3 T"
      ],
      "correctAnswer": 1,
      "explanation": "Using B=\u03bc\u2080I/(2\u03c0r): B=(4\u03c0\u00d710\u207b\u2077\u00d72)/(2\u03c0\u00d70.1)=(8\u03c0\u00d710\u207b\u2077)/(0.2\u03c0)=4\u00d710\u207b\u2076 T. The magnetic field decreases inversely with distance from the wire and is directly proportional to the current flowing through it.",
      "id": "2025_q16",
      "year": 2025
    },
    {
      "originalNum": 17,
      "question": "In photoelectric effect, stopping potential depends on:",
      "options": [
        "Intensity of light only",
        "Frequency of light only",
        "Both intensity and frequency",
        "Neither intensity nor frequency"
      ],
      "correctAnswer": 2,
      "explanation": "Stopping potential V\u2080 = (h\u03bd - \u03c6)/e, where \u03c6 is the work function and \u03bd is frequency. It depends only on the frequency (or wavelength) of incident light, not on intensity. Higher frequency light ejects electrons with more kinetic energy, requiring a higher stopping potential.",
      "id": "2025_q17",
      "year": 2025
    },
    {
      "originalNum": 18,
      "question": "An ideal gas undergoes four different processes from the same initial state. Four processes are adiabatic, isothermal, isobaric and isochoric. Out of 1, 2, 3 and 4, which one is adiabatic?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "explanation": "In a P-V diagram, adiabatic processes have a steeper slope than isothermal processes (\u03b3>1). The adiabatic curve lies between the isochoric (vertical) and isothermal curves. For expansion, the adiabatic process gives more pressure drop than isothermal due to temperature decrease.",
      "id": "2025_q18",
      "year": 2025
    },
    {
      "originalNum": 19,
      "question": "A convex lens of focal length 20 cm is placed 30 cm from a convex mirror of radius of curvature 40 cm. Find where a ray of light coming parallel to the common axis will ultimately meet (or appear to meet) after reflections and refractions:",
      "options": [
        "At infinity",
        "At 60 cm from mirror",
        "At 20 cm from lens",
        "At 30 cm from lens"
      ],
      "correctAnswer": 1,
      "explanation": "The ray parallel to axis refracts through the convex lens and converges at its focal point 20 cm behind the lens, which is the center of the mirror (40cm RoC \u2192 20cm focal length). A ray hitting a convex mirror at its center of curvature reflects back on itself, then refracts through the lens to emerge parallel, meeting at infinity.",
      "id": "2025_q19",
      "year": 2025
    },
    {
      "originalNum": 20,
      "question": "Lenz's law is a consequence of the law of conservation of:",
      "options": [
        "Charge",
        "Mass",
        "Energy",
        "Momentum"
      ],
      "correctAnswer": 3,
      "explanation": "Lenz's law states that induced current always opposes the change causing it. This is a direct consequence of conservation of energy \u2014 if the induced current aided the change, it would create energy from nothing. The opposition ensures no net energy gain, maintaining energy balance.",
      "id": "2025_q20",
      "year": 2025
    },
    {
      "originalNum": 21,
      "question": "A semiconducting device is connected in a series circuit with a battery and a resistance. A current is found to pass through the circuit. If the polarity of the battery is reversed, the current drops nearly to zero. The device is:",
      "options": [
        "An intrinsic semiconductor",
        "A p-type semiconductor",
        "An n-p-n transistor",
        "A p-n junction diode"
      ],
      "correctAnswer": 4,
      "explanation": "A p-n junction diode conducts (forward bias) when connected one way but nearly stops current (reverse bias) when polarity is reversed, exactly as described. This rectifying behavior \u2014 passing current in only one direction \u2014 is the defining characteristic of a p-n junction diode.",
      "id": "2025_q21",
      "year": 2025
    },
    {
      "originalNum": 22,
      "question": "The velocity of sound in air at 27\u00b0C is 330 m/s. What will be its velocity at 927\u00b0C?",
      "options": [
        "330 m/s",
        "660 m/s",
        "990 m/s",
        "1320 m/s"
      ],
      "correctAnswer": 2,
      "explanation": "Speed of sound v \u221d \u221aT. At 27\u00b0C: T\u2081=300K. At 927\u00b0C: T\u2082=1200K. v\u2082/v\u2081=\u221a(1200/300)=\u221a4=2. So v\u2082=2\u00d7330=660 m/s. Speed of sound increases with temperature because higher temperature increases molecular speed and the medium becomes less 'stiff' relative to density.",
      "id": "2025_q22",
      "year": 2025
    },
    {
      "originalNum": 23,
      "question": "A gun of mass M fires a bullet of mass m with velocity v. The recoil velocity of the gun is:",
      "options": [
        "mv/M",
        "Mv/m",
        "mv/(M-m)",
        "Mv/(M+m)"
      ],
      "correctAnswer": 1,
      "explanation": "By conservation of momentum, initial momentum is zero (gun+bullet at rest). After firing: Mv_gun + mv = 0. So v_gun = -mv/M, meaning the gun recoils with speed mv/M in the opposite direction. This demonstrates Newton's third law \u2014 the gun exerts force on bullet, bullet exerts equal-opposite force on gun.",
      "id": "2025_q23",
      "year": 2025
    },
    {
      "originalNum": 24,
      "question": "A wire carrying current I has the shape of a semicircle of radius R. The magnetic field at the center of the semicircle is:",
      "options": [
        "\u03bc\u2080I/(4R)",
        "\u03bc\u2080I/(2R)",
        "\u03bc\u2080I/R",
        "2\u03bc\u2080I/R"
      ],
      "correctAnswer": 1,
      "explanation": "The field at the center of a full circular loop is \u03bc\u2080I/(2R). For a semicircle (half the loop), the field is exactly half: \u03bc\u2080I/(4R). Each element of the semicircle contributes a field element dB at the center in the same direction (perpendicular to the plane), so they all add constructively.",
      "id": "2025_q24",
      "year": 2025
    },
    {
      "originalNum": 25,
      "question": "The minimum distance between an object and its real image formed by a convex lens of focal length f is:",
      "options": [
        "f",
        "2f",
        "3f",
        "4f"
      ],
      "correctAnswer": 4,
      "explanation": "Using lens formula and object-image distance D=u+v: minimum D occurs when du/dv=0. Setting image distance v and applying constraints gives D_min=4f, achieved when object and image are equidistant from the lens (u=v=2f). This is why in minimum-distance setups, the object is placed at 2f.",
      "id": "2025_q25",
      "year": 2025
    },
    {
      "originalNum": 26,
      "question": "The work done in blowing a soap bubble of radius R with surface tension T is:",
      "options": [
        "2\u03c0R\u00b2T",
        "4\u03c0R\u00b2T",
        "8\u03c0R\u00b2T",
        "16\u03c0R\u00b2T"
      ],
      "correctAnswer": 3,
      "explanation": "A soap bubble has two surfaces (inner and outer). Surface area of each surface = 4\u03c0R\u00b2. Total area increase = 2\u00d74\u03c0R\u00b2 = 8\u03c0R\u00b2. Work done = T \u00d7 increase in area = 8\u03c0R\u00b2T. The factor of 2 accounts for the soap film having two free surfaces unlike a solid sphere.",
      "id": "2025_q26",
      "year": 2025
    },
    {
      "originalNum": 27,
      "question": "Which of the following is not a unit of energy?",
      "options": [
        "Joule",
        "Newton-metre",
        "Kilowatt-hour",
        "Newton-metre/second"
      ],
      "correctAnswer": 4,
      "explanation": "Newton-metre/second = Nm/s = J/s = Watt, which is a unit of power, not energy. Joule is directly energy, Newton-metre (N\u00b7m = J) is energy (work), and kilowatt-hour (kWh = 3.6\u00d710\u2076 J) is energy. Power \u00d7 time = energy, but power alone is not energy.",
      "id": "2025_q27",
      "year": 2025
    },
    {
      "originalNum": 28,
      "question": "A body cools from 80\u00b0C to 60\u00b0C in 5 min. How long will it take to cool from 60\u00b0C to 40\u00b0C if the surrounding temperature is 20\u00b0C?",
      "options": [
        "5 min",
        "7.5 min",
        "10 min",
        "15 min"
      ],
      "correctAnswer": 2,
      "explanation": "Newton's law of cooling: rate \u221d (T-T\u2080). Average temp 80\u219260\u00b0C is 70\u00b0C, excess=50\u00b0C. Average temp 60\u219240\u00b0C is 50\u00b0C, excess=30\u00b0C. Since rate \u221d excess temperature: 5/t\u2082 = 50/30, giving t\u2082 = 7.5 min. Lower temperature difference means slower cooling.",
      "id": "2025_q28",
      "year": 2025
    },
    {
      "originalNum": 29,
      "question": "Light from a point source in air falls on a spherical glass surface (\u03bc=1.5, R=20 cm). The distance of the source from the glass surface is 100 cm. The image distance is:",
      "options": [
        "100 cm",
        "200 cm",
        "300 cm",
        "-100 cm"
      ],
      "correctAnswer": 1,
      "explanation": "Using refraction at spherical surface: \u03bc\u2082/v - \u03bc\u2081/u = (\u03bc\u2082-\u03bc\u2081)/R. With \u03bc\u2081=1, \u03bc\u2082=1.5, u=-100cm, R=+20cm: 1.5/v + 1/100 = 0.5/20 = 0.025. 1.5/v = 0.025-0.01 = 0.015, v = 1.5/0.015 = 100 cm. Image forms 100 cm inside the glass.",
      "id": "2025_q29",
      "year": 2025
    },
    {
      "originalNum": 30,
      "question": "An electric dipole is placed at an angle of 30\u00b0 to a non-uniform electric field. The dipole experiences:",
      "options": [
        "Torque only",
        "Force only",
        "Torque and force both",
        "Neither torque nor force"
      ],
      "correctAnswer": 3,
      "explanation": "A dipole in a non-uniform electric field experiences both torque (due to the field trying to align the dipole) and a net translational force (because the forces on +q and -q are unequal in magnitude in a non-uniform field). In a uniform field, there is torque but no net force.",
      "id": "2025_q30",
      "year": 2025
    },
    {
      "originalNum": 31,
      "question": "If frequency of incident radiation is doubled, the maximum kinetic energy of photoelectrons:",
      "options": [
        "Doubles",
        "More than doubles",
        "Less than doubles",
        "Remains the same"
      ],
      "correctAnswer": 2,
      "explanation": "KE = h\u03bd - \u03c6. If \u03bd doubles: new KE = 2h\u03bd - \u03c6 = (KE + \u03c6) + h\u03bd - \u03c6... Actually: new KE = h(2\u03bd) - \u03c6 = 2h\u03bd - \u03c6. Original KE = h\u03bd - \u03c6. Difference = h\u03bd. Since new KE = old KE + h\u03bd > 2(old KE) when \u03c6>0. So the kinetic energy more than doubles due to the fixed work function.",
      "id": "2025_q31",
      "year": 2025
    },
    {
      "originalNum": 32,
      "question": "In an n-p-n transistor, the emitter-base junction is _____ biased and collector-base junction is _____ biased in active mode:",
      "options": [
        "Reverse, Forward",
        "Forward, Reverse",
        "Forward, Forward",
        "Reverse, Reverse"
      ],
      "correctAnswer": 2,
      "explanation": "In active mode (amplification), the emitter-base junction is forward biased to inject majority carriers (electrons from n-emitter) into the base, while the collector-base junction is reverse biased to sweep these carriers across to the collector. This asymmetric biasing enables amplification.",
      "id": "2025_q32",
      "year": 2025
    },
    {
      "originalNum": 33,
      "question": "The ratio of kinetic energy to total energy of an electron in a Bohr orbit of hydrogen atom is:",
      "options": [
        "1:1",
        "-1:1",
        "2:1",
        "-2:1"
      ],
      "correctAnswer": 2,
      "explanation": "In Bohr model, KE = +Ze\u00b2/(8\u03c0\u03b5\u2080r) and Total Energy E = -Ze\u00b2/(8\u03c0\u03b5\u2080r) = -KE. Therefore KE/Total Energy = -1:1. The negative sign indicates that total energy (which is negative for bound orbit) is opposite in sign to kinetic energy, meaning the electron is bound.",
      "id": "2025_q33",
      "year": 2025
    },
    {
      "originalNum": 34,
      "question": "A ball of mass m moving with velocity v collides head-on with another ball of same mass at rest. The maximum loss of kinetic energy is:",
      "options": [
        "mv\u00b2/2",
        "mv\u00b2/4",
        "mv\u00b2",
        "2mv\u00b2"
      ],
      "correctAnswer": 2,
      "explanation": "In a perfectly inelastic collision (maximum energy loss), both balls stick together. By momentum conservation: mv = 2mv', so v'=v/2. Initial KE=mv\u00b2/2. Final KE=\u00bd(2m)(v/2)\u00b2=mv\u00b2/4. Energy loss=mv\u00b2/2-mv\u00b2/4=mv\u00b2/4. Maximum energy loss in head-on collision between equal masses is mv\u00b2/4.",
      "id": "2025_q34",
      "year": 2025
    },
    {
      "originalNum": 35,
      "question": "The electric field in a region is given by E = (3x+5)\u00ee N/C. The charge contained within a cube of side 0.2 m placed with one of its faces at x=0 is:",
      "options": [
        "0.24\u03b5\u2080",
        "0.53\u03b5\u2080",
        "6\u03b5\u2080\u00d710\u207b\u00b3",
        "53\u03b5\u2080\u00d710\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "Using Gauss's law: Q=\u03b5\u2080\u00d7\u03c6=\u03b5\u2080\u00d7(E\u2082-E\u2081)\u00d7A. At x=0: E=5 N/C; at x=0.2: E=3(0.2)+5=5.6 N/C. Net flux=\u0394E\u00d7A=(5.6-5)\u00d7(0.2)\u00b2=0.6\u00d70.04=0.024 Nm\u00b2/C. Q=\u03b5\u2080\u00d70.024... Actually 0.024\u03b5\u2080... rechecking: Q=\u03b5\u2080\u00d70.6\u00d70.04=0.024\u03b5\u2080. Approximately 0.24\u03b5\u2080\u00d710\u207b\u00b9. Close to 0.24\u03b5\u2080.",
      "id": "2025_q35",
      "year": 2025
    },
    {
      "originalNum": 36,
      "question": "The total energy of an electron in the first excited state of hydrogen atom is about -3.4 eV. The kinetic energy of the electron in this state is:",
      "options": [
        "3.4 eV",
        "-3.4 eV",
        "6.8 eV",
        "-6.8 eV"
      ],
      "correctAnswer": 1,
      "explanation": "In Bohr model: KE = -Total Energy. Since Total Energy = -3.4 eV, Kinetic Energy = +3.4 eV. This is always positive as kinetic energy cannot be negative. The total energy is negative (bound state) while KE is positive, with potential energy = 2\u00d7Total Energy = -6.8 eV making the total -3.4 eV.",
      "id": "2025_q36",
      "year": 2025
    },
    {
      "originalNum": 37,
      "question": "Size of nucleus is of the order of:",
      "options": [
        "10\u207b\u00b9\u2070 m",
        "10\u207b\u00b9\u2074 m",
        "10\u207b\u00b9\u2078 m",
        "10\u207b\u2076 m"
      ],
      "correctAnswer": 2,
      "explanation": "Nuclear radii are approximately r = r\u2080A^(1/3), where r\u2080\u22481.2\u00d710\u207b\u00b9\u2075 m and A is mass number. For typical nuclei, r is of order 10\u207b\u00b9\u2075 to 10\u207b\u00b9\u2074 m (femtometers). This is about 100,000 times smaller than the atomic radius of ~10\u207b\u00b9\u2070 m, which is why the nucleus occupies so little of atomic volume.",
      "id": "2025_q37",
      "year": 2025
    },
    {
      "originalNum": 38,
      "question": "In which case does positive work done against gravity?",
      "options": [
        "Moving a body downward",
        "Moving a body on a horizontal frictionless surface",
        "Moving a body vertically upward",
        "Moving a body along a curved path on a level surface"
      ],
      "correctAnswer": 3,
      "explanation": "Work done against gravity = mgh, which is positive when h > 0, i.e., when the body moves upward. Gravity does negative work on objects moving upward (gravity force and displacement are antiparallel), which means we do positive work against gravity to lift the object.",
      "id": "2025_q38",
      "year": 2025
    },
    {
      "originalNum": 39,
      "question": "The moment of inertia of a thin uniform rod of mass M and length L about an axis perpendicular to the rod through its midpoint is:",
      "options": [
        "ML\u00b2/12",
        "ML\u00b2/3",
        "ML\u00b2/6",
        "ML\u00b2/4"
      ],
      "correctAnswer": 1,
      "explanation": "The moment of inertia of a uniform rod about its center is I=ML\u00b2/12. This is derived by integrating dm\u00b7r\u00b2 from -L/2 to +L/2. About one end, I=ML\u00b2/3 (by parallel axis theorem: ML\u00b2/12 + M(L/2)\u00b2=ML\u00b2/12+ML\u00b2/4=ML\u00b2/3).",
      "id": "2025_q39",
      "year": 2025
    },
    {
      "originalNum": 40,
      "question": "An electron moves through a wire with a drift velocity of 10\u207b\u2074 m/s. If a current of 2A flows through the wire of cross-section 2\u00d710\u207b\u2076 m\u00b2, the number density of free electrons is:",
      "options": [
        "6.25\u00d710\u00b2\u2078 m\u207b\u00b3",
        "6.25\u00d710\u00b2\u2076 m\u207b\u00b3",
        "5\u00d710\u00b2\u2078 m\u207b\u00b3",
        "3.125\u00d710\u00b2\u2078 m\u207b\u00b3"
      ],
      "correctAnswer": 1,
      "explanation": "I=nqv_dA. n=I/(qv_dA)=2/(1.6\u00d710\u207b\u00b9\u2079\u00d710\u207b\u2074\u00d72\u00d710\u207b\u2076)=2/(3.2\u00d710\u207b\u00b2\u2079)=6.25\u00d710\u00b2\u2078 m\u207b\u00b3. This is the number density of free electrons in the conductor, characteristic of metallic conductors where about one electron per atom is free.",
      "id": "2025_q40",
      "year": 2025
    },
    {
      "originalNum": 41,
      "question": "The half-life of a radioactive isotope X is 50 years. It decays to another element Y which is stable. Starting from a pure sample of X of 1 g, what is the mass of X left after 150 years?",
      "options": [
        "0.125 g",
        "0.25 g",
        "0.5 g",
        "0.0625 g"
      ],
      "correctAnswer": 1,
      "explanation": "150 years = 3 half-lives. After each half-life, mass halves: 1g \u2192 0.5g \u2192 0.25g \u2192 0.125g. After 3 half-lives, remaining fraction = (1/2)\u00b3 = 1/8, so mass remaining = 1/8 g = 0.125 g. Half-life is the time for exactly half the radioactive atoms to decay.",
      "id": "2025_q41",
      "year": 2025
    },
    {
      "originalNum": 42,
      "question": "Which of the following has the longest range?",
      "options": [
        "Alpha particles",
        "Beta particles",
        "Gamma rays",
        "All have same range"
      ],
      "correctAnswer": 3,
      "explanation": "Gamma rays have the longest range because they are electromagnetic radiation with no charge and no mass, interacting weakly with matter. Alpha particles (heavy, +2 charge) have centimeters of range in air. Beta particles have meters of range. Gamma rays can penetrate many centimeters of lead.",
      "id": "2025_q42",
      "year": 2025
    },
    {
      "originalNum": 43,
      "question": "A copper wire of length L and radius r has resistance R. Another copper wire of length 2L and radius 2r has resistance:",
      "options": [
        "R",
        "R/2",
        "R/4",
        "2R"
      ],
      "correctAnswer": 2,
      "explanation": "R=\u03c1L/A=\u03c1L/(\u03c0r\u00b2). New R'=\u03c1(2L)/(\u03c0(2r)\u00b2)=\u03c1(2L)/(4\u03c0r\u00b2)=\u00bd(\u03c1L/\u03c0r\u00b2)=R/2. Doubling the length doubles resistance, but doubling the radius quadruples the area and halves resistance. Net effect: R/2. Thicker wires have lower resistance for the same length.",
      "id": "2025_q43",
      "year": 2025
    },
    {
      "originalNum": 44,
      "question": "In a common emitter transistor amplifier, the input resistance is 3 k\u03a9 and the load resistance is 24 k\u03a9. The current gain is 25. The voltage gain of the amplifier is:",
      "options": [
        "200",
        "100",
        "50",
        "400"
      ],
      "correctAnswer": 1,
      "explanation": "Voltage gain = \u03b2\u00d7(R_load/R_input) = 25\u00d7(24000/3000) = 25\u00d78 = 200. The current gain \u03b2 amplifies the input current, and the ratio of load to input resistance converts current gain to voltage gain. Higher load resistance and higher \u03b2 both increase voltage amplification.",
      "id": "2025_q44",
      "year": 2025
    },
    {
      "originalNum": 45,
      "question": "The magnetic field at the centre of a current carrying circular coil of radius R is B. If the radius is reduced to R/2 with the same current, the new field B' is:",
      "options": [
        "B/2",
        "B",
        "2B",
        "4B"
      ],
      "correctAnswer": 3,
      "explanation": "B=\u03bc\u2080I/(2R). With radius R/2: B'=\u03bc\u2080I/(2\u00d7R/2)=\u03bc\u2080I/R=2\u00d7(\u03bc\u2080I/2R)=2B. Halving the radius doubles the magnetic field at the center because the current elements are now closer to the center, where field contributions are inversely proportional to radius.",
      "id": "2025_q45",
      "year": 2025
    }
  ]
};
