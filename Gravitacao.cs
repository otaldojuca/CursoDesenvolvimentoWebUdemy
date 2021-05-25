using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gravitacao : MonoBehaviour
{
    [SerializeField] Vector3 accelerationVector;
    [SerializeField] Vector3 velocityVector2;
    [SerializeField] GameObject other;
    Rigidbody otherRB;
    Rigidbody thisRB;
    [SerializeField] Vector3 debug_ForcaGravitacao;
    [SerializeField] Vector3 velInicial;
    Vector3 distance;


    void Start()
    {
        thisRB = GetComponent<Rigidbody>();
        otherRB = other.GetComponent<Rigidbody>();
        velocityVector2 = velInicial;
    }    


    void FixedUpdate()
    {
        // distance = Vector3.Distance(other.transform.position, this.transform.position);
        distance = other.transform.position - this.transform.position;
        debug_ForcaGravitacao = otherRB.mass * thisRB.mass * 7.0f * Mathf.Pow(10, -11) * new Vector3(1 / Mathf.Pow(distance.x, 2), 1 / Mathf.Pow(distance.y, 2), 1 / Mathf.Pow(distance.z, 2)) ;
        accelerationVector = (debug_ForcaGravitacao / thisRB.mass) * Time.deltaTime ;
        UpdateVelocity();
        transform.position += velocityVector2 * Time.deltaTime;        
    }


    void UpdateVelocity()
    {
        velocityVector2 += accelerationVector * Time.deltaTime ;
    }
}
